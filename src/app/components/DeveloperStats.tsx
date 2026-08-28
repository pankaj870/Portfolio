import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useInView } from './useInView';
import { Database, Server, Cloud, Code, GitBranch, Zap } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
type ContributionDay  = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ContributionWeek = { contributionDays: ContributionDay[] };

// ── Constants ─────────────────────────────────────────────────────────────────
const LEVEL_COLORS = [
  '#111111',
  'rgba(0,229,255,0.18)',
  'rgba(0,229,255,0.45)',
  'rgba(0,229,255,0.75)',
  '#00E5FF',
];

const LEVEL_GLOW = [
  'none',
  '0 0 4px rgba(0,229,255,0.15)',
  '0 0 6px rgba(0,229,255,0.35)',
  '0 0 8px rgba(0,229,255,0.6)',
  '0 0 12px rgba(0,229,255,0.9)',
];

// ── Stat Card ─────────────────────────────────────────────────────────────────
const StatCard = ({
  value, label, icon: Icon, color, delay = 0,
}: {
  value: number; label: string; icon: any; color: string; delay?: number;
}) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    if (value === 0) return;
    const step = (2200 / value) || 12;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative p-6 rounded-xl text-center overflow-hidden cursor-default group"
      style={{
        background: 'linear-gradient(145deg, #0d0d0d, #111)',
        border: `1px solid #1e1e1e`,
      }}
    >
      {/* Glowing top bar */}
      <div
        className="absolute top-0 left-0 w-full h-[2px] transition-all duration-500 group-hover:h-[3px]"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      {/* Corner accent */}
      <div
        className="absolute bottom-0 right-0 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 100% 100%, ${color}, transparent 70%)`,
        }}
      />

      {/* Icon with glow ring */}
      <div
        className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center relative"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `0 0 20px ${color}60` }}
        />
      </div>

      {/* Value */}
      <div
        className="text-5xl font-black font-mono mb-1 tracking-tight transition-all duration-300"
        style={{ color, textShadow: `0 0 30px ${color}60` }}
      >
        {count}
        <span className="text-3xl">+</span>
      </div>

      {/* Label */}
      <div className="text-xs text-gray-500 font-mono uppercase tracking-[0.15em] group-hover:text-gray-300 transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  );
};

// ── GitHub Contributions ──────────────────────────────────────────────────────
function GitHubContributions({ username }: { username: string }) {
  const [weeks, setWeeks]   = useState<ContributionWeek[]>([]);
  const [total, setTotal]   = useState(0);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(false);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then(r => r.json())
      .then(data => {
        const contributions: ContributionWeek[] = data.contributions ?? [];
        setWeeks(contributions);
        setTotal(data.total?.lastYear ?? 0);

        // Calculate current streak
        const allDays = contributions.flatMap(w => w.contributionDays).reverse();
        let s = 0;
        for (const d of allDays) {
          if (d.count > 0) s++;
          else break;
        }
        setStreak(s);
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, [username]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-12">
        <div className="flex gap-1">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-sm bg-[#00E5FF]/30"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, delay: i * 0.1, repeat: Infinity }}
            />
          ))}
        </div>
        <span className="text-[#00E5FF]/60 font-mono text-xs tracking-widest">FETCHING_CONTRIBUTIONS...</span>
      </div>
    );
  }

  if (error || weeks.length === 0) {
    return (
      <div className="text-gray-600 font-mono text-sm py-8 text-center">
        <span className="text-[#00E5FF]/40">// </span>connection refused – could not load live data
      </div>
    );
  }

  const maxCount = Math.max(...weeks.flatMap(w => w.contributionDays.map(d => d.count)), 1);

  return (
    <div className="w-full space-y-6">
      {/* Mini stats bar */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Total Commits', value: total.toLocaleString(), color: '#00E5FF' },
          { label: 'Current Streak', value: `${streak}d`, color: '#7B61FF' },
          { label: 'Avg / Week', value: Math.round(total / 52).toString(), color: '#22c55e' },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            className="rounded-lg px-4 py-3 text-center"
            style={{ background: `${color}08`, border: `1px solid ${color}20` }}
          >
            <div className="text-lg font-bold font-mono" style={{ color }}>{value}</div>
            <div className="text-[10px] text-gray-600 font-mono uppercase tracking-widest mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Contribution grid */}
      <div className="overflow-x-auto pb-2 rounded-lg">
        <div className="flex gap-[3px] min-w-max py-1">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.contributionDays.map((day, di) => (
                <motion.div
                  key={di}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: wi * 0.005 + di * 0.002 }}
                  whileHover={{ scale: 1.6, zIndex: 10 }}
                  className="w-[13px] h-[13px] rounded-[3px] cursor-pointer relative flex-shrink-0"
                  style={{
                    backgroundColor: LEVEL_COLORS[day.level],
                    boxShadow: day.level > 0 ? LEVEL_GLOW[day.level] : 'none',
                  }}
                  title={`${day.count} contributions on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 text-[11px] font-mono text-gray-600">
        <span>Less</span>
        {LEVEL_COLORS.map((c, i) => (
          <div
            key={i}
            className="w-[13px] h-[13px] rounded-[3px]"
            style={{ backgroundColor: c, boxShadow: i > 0 ? LEVEL_GLOW[i] : 'none' }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export function DeveloperStats() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (<></>
    // <section id="stats" className="py-24 px-4 md:px-6 relative z-10" ref={ref}>
    //   {/* Background glow decoration */}
    //   <div className="absolute inset-0 pointer-events-none overflow-hidden">
    //     <div
    //       className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-[0.03] blur-[120px]"
    //       style={{ background: '#00E5FF' }}
    //     />
    //     <div
    //       className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-[0.03] blur-[120px]"
    //       style={{ background: '#7B61FF' }}
    //     />
    //   </div>

    //   <div className="max-w-6xl mx-auto relative">

    //     {/* Section Header */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 40 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : {}}
    //       transition={{ duration: 0.8 }}
    //       className="mb-16"
    //     >
    //       <div className="flex items-center gap-3 mb-4">
    //         <div className="w-8 h-[1px] bg-[#00E5FF]/50" />
    //         <span className="text-[#00E5FF] font-mono text-xs tracking-[0.3em] uppercase">Performance</span>
    //       </div>
    //       <h2 className="text-4xl md:text-6xl font-black font-mono text-white tracking-tight uppercase mb-4">
    //         System<span className="text-[#00E5FF]" style={{ textShadow: '0 0 40px rgba(0,229,255,0.5)' }}>_Metrics</span>
    //       </h2>
    //       <p className="text-gray-500 max-w-2xl font-mono text-sm leading-relaxed">
    //         <span className="text-[#00E5FF]/50">// </span>
    //         Real-time developer activity, commit history and performance benchmarks.
    //       </p>
    //     </motion.div>

    //     {/* Stat Cards */}
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
    //       <StatCard value={45}  label="APIs Built"         icon={Server}    color="#00E5FF" delay={0.0} />
    //       <StatCard value={12}  label="Backend Projects"   icon={Code}      color="#7B61FF" delay={0.1} />
    //       <StatCard value={5}   label="Databases Used"     icon={Database}  color="#22c55e" delay={0.2} />
    //       <StatCard value={20}  label="Cloud Deployments"  icon={Cloud}     color="#f59e0b" delay={0.3} />
    //     </div>

    //     {/* GitHub Contribution Panel */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : {}}
    //       transition={{ duration: 0.8, delay: 0.35 }}
    //       className="relative rounded-2xl overflow-hidden"
    //       style={{
    //         background: 'linear-gradient(180deg, #080808 0%, #050505 100%)',
    //         border: '1px solid #1a1a1a',
    //       }}
    //     >
    //       {/* Panel glow border top */}
    //       {/* <div
    //         className="absolute top-0 left-0 w-full h-[1px]"
    //         style={{ background: 'linear-gradient(90deg, transparent 0%, #00E5FF40 50%, transparent 100%)' }}
    //       /> */}

    //       {/* Panel header
    //       <div className="flex items-center justify-between px-6 md:px-8 pt-6 pb-5 border-b border-[#1a1a1a]">
    //         <div className="flex items-center gap-3">
    //           <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
    //           <h3 className="text-base font-bold text-white font-mono tracking-widest">
    //             <span className="text-[#00E5FF]">~/github</span> · contribution_log
    //           </h3>
    //         </div>
    //         <div className="flex items-center gap-2">
    //           <GitBranch className="w-4 h-4 text-gray-600" />
    //           <span className="text-gray-600 font-mono text-xs">pankaj870</span>
    //         </div>
    //       </div> */}

    //       {/* Contribution graph */}
    //       {/* <div className="px-6 md:px-8 py-6">
    //         <GitHubContributions username="pankaj870" />
    //       </div> */}

    //       {/* Panel footer */}
    //       <div className="px-6 md:px-8 py-4 border-t border-[#1a1a1a] flex items-center gap-2">
    //         <Zap className="w-3 h-3 text-[#00E5FF]/40" />
    //         <span className="text-gray-700 font-mono text-[10px] tracking-widest">LIVE · AUTO-REFRESHED FROM GITHUB API</span>
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
  );
}

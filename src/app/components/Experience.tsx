import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const timeline = [
    {
      id: 1,
      type: 'work',
      title: 'Backend Developer',
      organization: 'Ideal IT Techno',
      period: 'Apr 2024 - Present',
      color: '#00E5FF',
      icon: Briefcase,
      details: [
        'Contributed to backend development of automation systems using Node.js',
        'Improved operational workflows through optimized backend logic and data handling',
        'Assisted in implementing monitoring and preventive maintenance logic to reduce downtime',
      ]
    },
    {
      id: 2,
      type: 'education',
      title: 'Data Science Trainee',
      organization: "Grow Tech - Dr. Reddy's Foundation",
      period: 'Sep 2024 - Dec 2024',
      color: '#7B61FF',
      icon: GraduationCap,
      details: [
        'Gained hands-on experience in data cleaning, analysis, and visualization using Python',
        'Applied basic machine learning concepts and statistical techniques on sample datasets',
        'Learned Python, Data Analysis, Data Visualization, and Machine Learning fundamentals',
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-6 relative z-10" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-white tracking-widest uppercase">
            System<span className="text-[#7B61FF]">_Logs</span>
          </h2>
          <p className="text-gray-400 text-lg font-mono mt-2">
            Professional experience and training history.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00E5FF] via-[#7B61FF] to-transparent transform md:-translate-x-1/2 opacity-30" />

          {timeline.map((item, index) => (
            <div key={item.id} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline empty space for alternating layout */}
              <div className="hidden md:block md:w-5/12" />

              {/* Glowing Node */}
              <motion.div 
                className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 z-10 transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(var(--color),0.5)]"
                style={{ borderColor: item.color, '--color': item.color === '#00E5FF' ? '0,229,255' : '123,97,255' } as React.CSSProperties}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: item.color }} />
              </motion.div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.3 }}
                className="ml-12 md:ml-0 md:w-5/12 relative group"
              >
                <div className="absolute -inset-0.5 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" style={{ backgroundImage: `linear-gradient(to right, ${item.color}, transparent)` }} />
                
                <div className="relative bg-[#050505] border border-[#222] p-6 rounded-lg hover:border-[#444] transition-colors">
                  <div className="flex items-center gap-3 mb-4 border-b border-[#333] pb-4">
                    <div className="p-2 bg-[#111] rounded border border-[#333]">
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-mono tracking-wide">{item.title}</h3>
                      <div className="text-sm text-gray-400 font-mono mt-1">{item.organization}</div>
                    </div>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-[#111] border border-[#333] rounded-full text-xs text-gray-300 font-mono mb-6">
                    [ {item.period} ]
                  </div>

                  <ul className="space-y-3">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
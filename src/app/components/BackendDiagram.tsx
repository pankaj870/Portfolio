import React from "react";
import { motion } from "motion/react";
import { Server, Database, Cloud, Network, Zap } from "lucide-react";
import { useInView } from "./useInView";

const Node = ({ icon: Icon, label, color, delay }: { icon: any, label: string, color: string, delay: number }) => {
  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-xl border border-${color}-500/30 bg-[#0a0a0a] shadow-[0_0_15px_rgba(var(--color-${color}),0.2)] z-10`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${color}` }}
    >
      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${color}-400 mb-2`} style={{ color }} />
      <span className="text-xs sm:text-sm font-semibold font-mono text-gray-300 text-center">{label}</span>
    </motion.div>
  );
};

const DataPacket = ({ path, delay }: { path: any, delay: number }) => {
  return (
    <motion.div
      className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] z-20"
      animate={{
        offsetDistance: ["0%", "100%"]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }}
      style={{
        offsetPath: `path('${path}')`,
      }}
    />
  );
};

export function BackendDiagram() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="architecture" className="py-20 px-4 md:px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-[#00E5FF]">Backend</span> Architecture
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            High-performance, scalable distributed systems built for the modern web.
          </p>
        </motion.div>

        {isInView && (
          <div className="relative w-full max-w-4xl mx-auto h-[500px] sm:h-[600px] flex items-center justify-center">
            {/* SVG Lines for connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ minHeight: "100%" }}>
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              
              {/* Paths between nodes (Adjusted for generic center-based layout) */}
              <path id="path-gateway-node" d="M 50% 15% Q 50% 35% 50% 50%" stroke="url(#line-gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" />
              <path id="path-node-redis" d="M 50% 50% Q 25% 65% 25% 80%" stroke="url(#line-gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" />
              <path id="path-node-mongo" d="M 50% 50% Q 75% 65% 75% 80%" stroke="url(#line-gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" />
              <path id="path-node-aws" d="M 50% 50% Q 50% 70% 50% 90%" stroke="url(#line-gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" />
            </svg>

            {/* Nodes */}
            <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Node icon={Network} label="API Gateway" color="#00E5FF" delay={0.2} />
            </div>
            
            <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Node icon={Server} label="Node.js Services" color="#22c55e" delay={0.4} />
            </div>

            <div className="absolute top-[80%] left-[25%] transform -translate-x-1/2 -translate-y-1/2">
              <Node icon={Zap} label="Redis Cache" color="#ef4444" delay={0.6} />
            </div>

            <div className="absolute top-[80%] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
              <Node icon={Database} label="MongoDB" color="#10b981" delay={0.8} />
            </div>

            <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Node icon={Cloud} label="AWS Cloud" color="#f59e0b" delay={1.0} />
            </div>

            {/* Data Packets (Animating along SVG paths) */}
            <DataPacket path="M 10 10" delay={0} /> {/* Hard to perfectly align offsetPath with CSS percentages, so we use simpler fallback animations below */}
            
            {/* Fallback absolute animated packets since offsetPath with % is tricky across screen sizes */}
            <motion.div className="absolute w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" 
               animate={{ top: ["15%", "50%"], left: ["50%", "50%"] }} 
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
               
            <motion.div className="absolute w-2 h-2 rounded-full bg-[#7B61FF] shadow-[0_0_10px_#7B61FF]" 
               animate={{ top: ["50%", "80%"], left: ["50%", "25%"] }} 
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }} />

            <motion.div className="absolute w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_10px_#10b981]" 
               animate={{ top: ["50%", "80%"], left: ["50%", "75%"] }} 
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1 }} />
               
            <motion.div className="absolute w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_10px_#f59e0b]" 
               animate={{ top: ["50%", "90%"], left: ["50%", "50%"] }} 
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.2 }} />
          </div>
        )}
      </div>
    </section>
  );
}

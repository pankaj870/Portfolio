import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ExternalLink, Github, Terminal, ChevronRight, Activity, Container, Smartphone, Database, Server, Workflow } from 'lucide-react';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      id: "srv-01",
      title: 'AI-Based eBook Platform',
      status: 'active',
      description: 'REST APIs for AI-driven eBook delivery, integrating global payment gateways and high-speed caching.',
      technologies: ['Node.js', 'Express', 'Firebase Auth', 'Amazon pay/Stripe', 'Redis', 'AWS'],
      link: 'visualible.com',
      github: '#',
      diagram: [
        { icon: Smartphone, label: 'Client' },
        { icon: Server, label: 'Node API' },
        { icon: Activity, label: 'Redis Cache' },
        { icon: Database, label: 'AWS RDS' }
      ]
    },
    {
      id: "srv-02",
      title: 'Syntra – Dating Application',
      status: 'syntra.co.in',
      description: 'Distributed microservices backend for real-time matchmaking, secure auth, and geospatial queries.',
      technologies: ['Node.js', 'REST APIs', 'Firebase', 'MongoDB', 'Microservices', 'AWS Hosting'],
      link: 'syntra.co.in',
      github: '#',
      diagram: [
        { icon: Smartphone, label: 'Mobile App' },
        { icon: Workflow, label: 'Microservices' },
        { icon: Terminal, label: 'Firebase Auth' },
        { icon: Database, label: 'MongoDB' }
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Container className="w-8 h-8 text-[#00E5FF]" />
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-white tracking-widest uppercase">
              Container<span className="text-[#00E5FF]">_Registry</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl text-lg font-mono">
            Deployed microservices and production environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Cyberpunk Card Border & Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00E5FF] to-[#7B61FF] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative bg-[#050505] border border-[#222] p-1 rounded-lg h-full flex flex-col font-mono">
                {/* Header: Docker/Terminal Style */}
                <div className="flex justify-between items-center bg-[#111] px-4 py-2 border-b border-[#333] rounded-t-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-gray-400">ID: {project.id}</span>
                  </div>
                  <div className="text-xs text-[#00E5FF] border border-[#00E5FF]/30 px-2 py-0.5 rounded uppercase">
                    {project.status}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Title & Desc */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-1">{project.description}</p>
                  
                  {/* Mini Architecture Diagram */}
                  <div className="mb-6 p-4 bg-[#0a0a0a] border border-[#222] rounded-md relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7B61FF] to-transparent opacity-50" />
                    <h4 className="text-xs text-gray-500 mb-3 uppercase tracking-widest">Architecture Flow</h4>
                    <div className="flex items-center justify-between">
                      {project.diagram.map((node, i) => (
                        <React.Fragment key={i}>
                          <div className="flex flex-col items-center gap-2 group/node">
                            <div className="p-2 bg-[#111] border border-[#333] rounded shadow-[0_0_10px_rgba(0,229,255,0.05)] group-hover/node:border-[#00E5FF] group-hover/node:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
                              <node.icon className="w-5 h-5 text-gray-400 group-hover/node:text-[#00E5FF]" />
                            </div>
                            <span className="text-[10px] text-gray-500 group-hover/node:text-gray-300">{node.label}</span>
                          </div>
                          {i < project.diagram.length - 1 && (
                            <div className="flex-1 flex justify-center text-[#7B61FF]/50 relative">
                              <div className="h-[1px] w-full bg-[#333] absolute top-1/2 -translate-y-1/2" />
                              <ChevronRight className="w-4 h-4 bg-[#0a0a0a] z-10 text-[#00E5FF]" />
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#1a1a1a] border border-[#333] rounded text-xs text-gray-300 hover:border-[#7B61FF] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 mt-auto pt-4 border-t border-[#333]">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-[#00E5FF]/10 border border-[#00E5FF]/50 text-[#00E5FF] text-sm hover:bg-[#00E5FF] hover:text-black transition-all rounded"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    {/* <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-transparent text-gray-300 hover:text-white transition-all rounded"
                    > */}
                      {/* <Github className="w-4 h-4" /> Source */}
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
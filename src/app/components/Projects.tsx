import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const projects = [
    {
      title: 'Visualble - AI-Based eBook Platform',
      description:
        'A comprehensive eBook platform with AI-driven features, payment integration, and real-time content delivery.',
      technologies: ['Node.js', 'Express.js', 'Firebase', 'Razorpay', 'Stripe', 'Redis', 'MySQL', 'MongoDB', 'AWS'],
      highlights: [
        'Developed RESTful APIs for content delivery, user interactions, and secure access using Firebase Authentication',
        'Integrated payment gateways (Razorpay/Stripe) to handle eBook purchases and subscriptions with order management',
        'Built scalable microservices for real-time content retrieval and AI-driven supplemental information',
        'Optimized performance using Redis caching and managed data with MySQL/MongoDB',
        'Deployed services on AWS for high scalability and availability',
      ],
      link: 'https://visualble.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Syntra - Dating Application',
      description:
        'A modern dating application with secure authentication, real-time features, and microservices architecture.',
      technologies: ['Node.js', 'Express.js', 'Firebase', 'MongoDB', 'AWS', 'Git/GitHub'],
      highlights: [
        'Developed and maintained RESTful APIs to support core application features and user interactions',
        'Implemented Firebase Authentication and Authorization for secure user login and session management',
        'Utilized MongoDB for efficient storage and management of user data',
        'Built microservices for real-time content retrieval and data aggregation',
        'Deployed and monitored backend services on AWS ensuring scalability and availability',
        'Used Git/GitHub for version control, bug fixes, and collaborative development',
      ],
      link: 'https://syntra.co.in',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-6 bg-[#0f0f0f]/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4">
            <span className="text-blue-400 text-2xl md:text-3xl">04.</span>
            <span>Featured Projects</span>
            <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4" />
          </h2>

          <div className="space-y-8 md:space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300`} />
                <div className="relative bg-[#0a0a0a] p-6 md:p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm md:text-base mb-4">{project.description}</p>
                    </div>
                    <div className="flex gap-3 mb-4 md:mb-0">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                      </motion.a>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start gap-3 text-gray-400 text-xs md:text-sm"
                      >
                        <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mt-1 flex-shrink-0`}>
                          ▹
                        </span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
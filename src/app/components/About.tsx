import { motion } from 'motion/react';
import { useInView } from './useInView';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 flex items-center gap-2 md:gap-4">
            <span className="text-blue-400 text-2xl md:text-3xl">01.</span>
            <span>About Me</span>
            <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                I'm a passionate Backend Developer with 1 year of experience specializing in building 
                scalable RESTful APIs and microservices. My expertise lies in creating secure, 
                high-performance backend systems that power modern web applications.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                I work extensively with <span className="text-blue-400">Node.js</span> and{' '}
                <span className="text-blue-400">Express.js</span>, implementing robust authentication 
                systems with Firebase, and optimizing performance using Redis caching. I'm experienced 
                in managing both SQL and NoSQL databases, ensuring data integrity and efficiency.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                Beyond backend development, I'm diving into the exciting world of{' '}
                <span className="text-pink-400">AI and Machine Learning</span>. I've completed Data Science 
                training where I gained hands-on experience in data analysis, visualization, and applying 
                machine learning algorithms using Python. I'm passionate about integrating AI capabilities 
                into web applications to create intelligent, data-driven solutions.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                My focus is on delivering production-ready solutions that scale. I'm proficient in 
                cloud deployment with AWS, and I follow best practices in version control and 
                collaborative development using Git/GitHub.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                <div className="relative bg-[#0f0f0f] p-6 md:p-8 rounded-lg border border-white/10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Quick Facts
                  </h3>
                  <ul className="space-y-3 text-gray-400 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                      <span>1+ years of professional experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                      <span>Specialized in backend development & microservices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1 flex-shrink-0">▹</span>
                      <span>AI & Machine Learning enthusiast</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1 flex-shrink-0">▹</span>
                      <span>Data Science certified (Python, ML)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                      <span>Cloud deployment expert (AWS)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                      <span>B.Tech in Computer Science (CGPA: 7.5)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
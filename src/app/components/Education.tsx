import { motion } from 'motion/react';
import { useInView } from './useInView';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const education = {
    degree: 'Bachelor of Technology - Computer Science Engineering',
    institution: 'Sushila Devi Bansal College Indore',
    period: 'Jun 2020 - Jun 2024',
    cgpa: '7.5',
  };

  return (
    <section id="education" className="py-12 md:py-20 px-4 md:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4">
            <span className="text-blue-400 text-2xl md:text-3xl">05.</span>
            <span>Education</span>
            <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4" />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
            <div className="relative bg-[#0f0f0f] p-6 md:p-8 rounded-lg border border-white/10">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <motion.div
                  className="p-3 md:p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{education.degree}</h3>
                  <p className="text-base md:text-lg text-blue-400 mb-4">{education.institution}</p>

                  <div className="flex flex-wrap gap-4 md:gap-6 mb-4 text-sm md:text-base">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Award className="w-4 h-4 flex-shrink-0" />
                      <span>CGPA: {education.cgpa}/10</span>
                    </div>
                  </div>

                  <div className="bg-[#0a0a0a] p-4 rounded-lg border border-white/10 mt-6">
                    <h4 className="text-base md:text-lg font-bold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                        <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                        <span>Strong foundation in Computer Science fundamentals</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                        <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                        <span>Specialized in backend development and system design</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                        <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                        <span>Completed multiple real-world projects during academic tenure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
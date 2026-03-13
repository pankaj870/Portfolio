import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const experience = {
    company: 'Ideal IT Techno',
    position: 'Backend Developer',
    period: 'Apr 2024 - Present',
    responsibilities: [
      'Contributed to backend development of automation systems using Node.js',
      'Improved operational workflows through optimized backend logic and data handling',
      'Assisted in implementing monitoring and preventive maintenance logic to reduce downtime',
    ],
  };

  const training = {
    program: 'Data Science Trainee',
    organization: "Grow Tech - Dr. Reddy's Foundation",
    period: 'Sep 2024 - Dec 2024',
    achievements: [
      'Gained hands-on experience in data cleaning, analysis, and visualization using Python',
      'Applied basic machine learning concepts and statistical techniques on sample datasets',
      'Learned Python, Data Analysis, Data Visualization, and Machine Learning fundamentals',
    ],
  };

  return (
    <section id="experience" className="py-12 md:py-20 px-4 md:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4">
            <span className="text-blue-400 text-2xl md:text-3xl">03.</span>
            <span>Experience</span>
            <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4" />
          </h2>

          <div className="space-y-6 md:space-y-8">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
              <div className="relative bg-[#0f0f0f] p-6 md:p-8 rounded-lg border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{experience.position}</h3>
                    <p className="text-base md:text-lg text-blue-400">{experience.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{experience.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {experience.responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-400 text-sm md:text-base"
                    >
                      <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Training Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
              <div className="relative bg-[#0f0f0f] p-6 md:p-8 rounded-lg border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{training.program}</h3>
                    <p className="text-base md:text-lg text-purple-400">{training.organization}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{training.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {training.achievements.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-400 text-sm md:text-base"
                    >
                      <span className="text-purple-400 mt-1 flex-shrink-0">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
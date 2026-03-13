import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Code2, Database, Cloud, GitBranch, Layout, Brain, Wrench, Code } from 'lucide-react';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['JavaScript', 'Java', 'Python', 'HTML5', 'CSS3'],
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Microservices'],
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['React.js', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'Redis', 'Database Design'],
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'AI & Data Science',
      icon: Brain,
      skills: ['Machine Learning', 'Data Analysis', 'Data Visualization', 'Python ML'],
      color: 'from-pink-400 to-pink-600',
    },
    {
      title: 'Cloud & BaaS',
      icon: Cloud,
      skills: ['AWS', 'Firebase', 'Cloud Deployment', 'Scalability'],
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'Collaboration', 'CI/CD'],
      color: 'from-rose-400 to-rose-600',
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: ['Razorpay', 'Stripe', 'Postman', 'VS Code'],
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: ['Full Stack', 'Web Security', 'Performance Optimization', 'API Integration'],
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4 md:px-6 bg-[#0f0f0f]/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4">
            <span className="text-blue-400 text-2xl md:text-3xl">02.</span>
            <span>Technical Skills</span>
            <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300`} />
                <div className="relative bg-[#0a0a0a] p-4 md:p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <category.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-2.5 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
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
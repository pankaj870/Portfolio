import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Code2, Database, Cloud, GitBranch, Layout, Server } from 'lucide-react';
import { RadialIntro } from '@/components/animate-ui/components/community/radial-intro';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const skillOrbitItems = [
  {
    id: 1,
    name: 'JavaScript',
    src: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  },
  {
    id: 2,
    name: 'React',
    src: 'https://cdn.simpleicons.org/react/61DAFB',
  },
  {
    id: 3,
    name: 'Node.js',
    src: 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  },
  {
    id: 4,
    name: 'Express',
    src: 'https://cdn.simpleicons.org/express/FFFFFF',
  },
  {
    id: 5,
    name: 'Python',
    src: 'https://cdn.simpleicons.org/python/3776AB',
  },
  {
    id: 6,
    name: 'Java',
    src: 'https://cdn.simpleicons.org/openjdk/ED8B00',
  },
  {
    id: 7,
    name: 'MySQL',
    src: 'https://cdn.simpleicons.org/mysql/4479A1',
  },
  {
    id: 8,
    name: 'MongoDB',
    src: 'https://cdn.simpleicons.org/mongodb/47A248',
  },
  {
    id: 9,
    name: 'AWS',
    src: 'https://cdn.simpleicons.org/amazonwebservices/FF9900',
  },
  {
    id: 10,
    name: 'Firebase',
    src: 'https://cdn.simpleicons.org/firebase/FFCA28',
  },
  {
    id: 11,
    name: 'Git',
    src: 'https://cdn.simpleicons.org/git/F05032',
  },
  {
    id: 12,
    name: 'GitHub',
    src: 'https://cdn.simpleicons.org/github/FFFFFF',
  },
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: [
        { name: 'JavaScript', description: 'V8 Engine, ES6+, Async programming' },
        { name: 'Java', description: 'Object-Oriented Programming, Spring frameworks' },
        { name: 'Python', description: 'Data Science, Machine Learning, Scripts' }
      ],
      color: 'from-blue-400 to-blue-600',
      shadowColor: '#3b82f6',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', description: 'V8 Runtime, Event-driven architecture' },
        { name: 'Express.js', description: 'Web Framework, RESTful APIs, Middleware' }
      ],
      color: 'from-green-400 to-green-600',
      shadowColor: '#22c55e',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', description: 'Relational databases, Complex queries, ACID' },
        { name: 'MongoDB', description: 'NoSQL, Document-oriented, Scalability' }
      ],
      color: 'from-purple-400 to-purple-600',
      shadowColor: '#a855f7',
    },
    {
      title: 'Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS', description: 'EC2, S3, RDS, Cloud deployment' },
        { name: 'Firebase', description: 'Authentication, Realtime Database, Firestore' }
      ],
      color: 'from-orange-400 to-orange-600',
      shadowColor: '#f97316',
    },
    {
      title: 'Tools',
      icon: GitBranch,
      skills: [
        { name: 'Git', description: 'Version Control, Branching, Merging' },
        { name: 'GitHub', description: 'Collaboration, CI/CD, Code Reviews' }
      ],
      color: 'from-rose-400 to-rose-600',
      shadowColor: '#f43f5e',
    },
    {
      title: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'React.js', description: 'Component-based UI, Hooks, State management' }
      ],
      color: 'from-cyan-400 to-cyan-600',
      shadowColor: '#06b6d4',
    },
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4 md:px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-[#00E5FF]">Technical</span> Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tools and technologies I use to build robust and scalable systems.
          </p>
        </motion.div>

        <TooltipProvider delayDuration={100}>
          <div className="mb-16 flex justify-center">
            <RadialIntro orbitItems={skillOrbitItems} stageSize={420} imageSize={62} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div 
                  className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500`} 
                />
                <div className="relative bg-[#0a0a0a] border border-[#333] hover:border-gray-500 p-6 rounded-lg transition-all h-full z-10 overflow-hidden flex flex-col justify-start">
                  
                  {/* Cyberpunk accent corner */}
                  <div className={`absolute top-0 right-0 w-8 h-8 opacity-20 border-t-2 border-r-2 rounded-tr-lg group-hover:opacity-100 transition-all`} style={{ borderColor: category.shadowColor }} />
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 border border-gray-700 bg-[#111] rounded-md shadow-lg" style={{ boxShadow: `0 0 10px ${category.shadowColor}40` }}>
                      <category.icon className="w-5 h-5 text-gray-200" style={{ color: category.shadowColor }} />
                    </div>
                    <h3 className="text-xl font-bold font-mono tracking-wider text-gray-100 uppercase">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {category.skills.map((skill) => (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <motion.div
                            className="px-3 py-1.5 bg-[#111] border border-[#222] text-sm text-gray-300 font-mono tracking-wide rounded-md cursor-pointer hover:bg-[#222] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {skill.name}
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#050505] border-[#333] text-gray-200 font-mono text-xs shadow-xl shadow-[#00E5FF]/20 z-50">
                          <p>{skill.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}

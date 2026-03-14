import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail, FileCode2 } from 'lucide-react';
import { HeroTerminal } from './HeroTerminal';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-6">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto py-20 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-left md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-blue-400 text-base md:text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Pankaj Mahajan
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-6 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Backend Developer
            </motion.h2>
            <motion.p
              className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Building scalable RESTful APIs and microservices with Node.js and Express.js.
              Passionate about creating secure, efficient backend systems that power modern applications.
            </motion.p>

            {/* Social Links & Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 md:gap-6 justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/pankaj-mahajan-26a369223"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-400/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </motion.a>
              <motion.a
                href="https://github.com/pankajmahajan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-400/50 transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </motion.a>
              <motion.a
                href="mailto:mahajianmag05@gmail.com"
                className="p-2.5 md:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-pink-400/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold text-black bg-[#00E5FF] rounded-lg hover:shadow-lg hover:shadow-[#00E5FF]/50 transition-all hover:scale-105 active:scale-95"
              >
                <FileCode2 className="w-5 h-5" /> View Projects
              </a>
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold bg-transparent border border-[#7B61FF] text-[#7B61FF] rounded-lg hover:bg-[#7B61FF]/10 transition-all hover:scale-105 active:scale-95"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Terminal Simulation */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <HeroTerminal />
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-gray-500" />
          </motion.div>
      </div>
    </section>
  );
}
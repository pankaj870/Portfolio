import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Mail, Phone, Linkedin, Github, Send, Terminal } from "lucide-react";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-20 px-4 md:px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <Terminal className="w-8 h-8 text-[#7B61FF]" />
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-white tracking-widest uppercase">
              initiate<span className="text-[#7B61FF]">_contact</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-mono">
            Secure channel open. Send data packets below.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Glassmorphism Form container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative h-full bg-[#050505]/60 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col">
              <h3 className="text-2xl font-bold font-mono text-white mb-6 tracking-wide">
                <span className="text-[#00E5FF]">~/</span> send-message.sh
              </h3>
              
              <form className="flex flex-col gap-6 flex-1">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Payload.sender (Name)</label>
                  <input type="text" className="w-full bg-[#0a0a0a]/80 border border-[#333] focus:border-[#00E5FF] rounded px-4 py-3 text-white font-mono outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Payload.replyTo (Email)</label>
                  <input type="email" className="w-full bg-[#0a0a0a]/80 border border-[#333] focus:border-[#00E5FF] rounded px-4 py-3 text-white font-mono outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Payload.body (Message)</label>
                  <textarea className="w-full h-[150px] resize-none bg-[#0a0a0a]/80 border border-[#333] focus:border-[#00E5FF] rounded px-4 py-3 text-white font-mono outline-none transition-colors" placeholder="Let's build something..."></textarea>
                </div>
                
                <button type="button" className="group mt-4 flex items-center justify-center gap-2 w-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/50 hover:bg-[#00E5FF] hover:text-black py-4 rounded font-mono font-bold tracking-widest uppercase transition-all">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Execute Request
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
            <a href="mailto:mahajanpankaj615@gmail.com" className="group p-6 bg-[#0a0a0a] border border-[#222] hover:border-[#00E5FF] rounded-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded bg-[#00E5FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00E5FF] transition-colors">
                <Mail className="text-[#00E5FF] group-hover:text-black" />
              </div>
              <div className="text-gray-500 font-mono text-sm uppercase mb-1">Email_Address</div>
              <div className="text-white font-mono text-sm truncate">mahajanpankaj615@gmail.com</div>
            </a>

            <a href="https://www.linkedin.com/in/pankaj-mahajan-26a369223" target="_blank" rel="noopener" className="group p-6 bg-[#0a0a0a] border border-[#222] hover:border-[#3b82f6] rounded-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded bg-[#3b82f6]/10 flex items-center justify-center mb-4 group-hover:bg-[#3b82f6] transition-colors">
                <Linkedin className="text-[#3b82f6] group-hover:text-white" />
              </div>
              <div className="text-gray-500 font-mono text-sm uppercase mb-1">LinkedIn_Profile</div>
              <div className="text-white font-mono text-sm truncate">pankaj-mahajan</div>
            </a>

            <a href="https://github.com/pankajmahajan" target="_blank" rel="noopener" className="group p-6 bg-[#0a0a0a] border border-[#222] hover:border-[#7B61FF] rounded-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded bg-[#7B61FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#7B61FF] transition-colors">
                <Github className="text-[#7B61FF] group-hover:text-white" />
              </div>
              <div className="text-gray-500 font-mono text-sm uppercase mb-1">GitHub_Repository</div>
              <div className="text-white font-mono text-sm truncate">pankajmahajan</div>
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : {}}
           transition={{ delay: 0.8 }}
           className="mt-20 pt-8 border-t border-[#333] text-center font-mono"
        >
          <p className="text-gray-500 text-sm">
            SYSTEM_DESIGN & DEVELOPMENT BY <span className="text-[#00E5FF]">PANKAJ MAHAJAN</span>
          </p>
          <p className="text-[#333] text-xs mt-2">
            V 1.0.0 // 2026 DEPLOYMENT
          </p>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { useInView } from "./useInView";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
} from "lucide-react";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahajanpankaj615@gmail.com",
      link: "mailto:mahajanpankaj615@gmail.com",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6263545855",
      link: "tel:+916263545855",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "pankaj-mahajan",
      link: "https://www.linkedin.com/in/pankaj-mahajan-26a369223",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "pankajmahajan",
      link: "https://github.com/pankajmahajan",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-20 px-4 md:px-6 bg-[#0f0f0f]/50"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4">
            <span className="text-blue-400 text-2xl md:text-3xl">
              06.
            </span>
            <span>Get In Touch</span>
            <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-2 md:ml-4" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                I'm currently looking for new opportunities and
                exciting projects. Whether you have a question,
                a project idea, or just want to say hi, feel
                free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    target={
                      item.link.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : {}
                    }
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a0a] border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/5 transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className={`p-2 md:p-3 bg-gradient-to-r ${item.color} rounded-lg group-hover:scale-110 transition-transform flex-shrink-0`}
                    >
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-sm md:text-base text-white truncate">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                <div className="relative bg-[#0a0a0a] p-6 md:p-8 rounded-lg border border-white/10 h-full flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Ready to collaborate?
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                    I'm passionate about building scalable
                    backend solutions and always excited to work
                    on challenging projects. Let's build
                    something amazing together!
                  </p>

                  <motion.a
                    href="mailto:mahajianmag05@gmail.com"
                    className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Send me a message</span>
                  </motion.a>

                  <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
                    <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-3">
                      Based in
                    </p>
                    <p className="text-white text-base md:text-lg">
                      Indore, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10 text-center"
          >
            <p className="text-gray-500 text-sm md:text-base">
              Designed & Built by{" "}
              <span className="text-blue-400">
                Pankaj Mahajan
              </span>
            </p>
            <p className="text-gray-600 text-xs md:text-sm mt-2">
              © 2026 All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
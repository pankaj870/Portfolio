import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const TERMINAL_LINES = [
  { type: "command", text: "curl -X GET https://api.pankaj.dev/v1/status" },
  { type: "response", text: "{", delay: 100 },
  { type: "response", text: '  "status": "online",', delay: 100 },
  { type: "response", text: '  "uptime": "99.99%",', delay: 100 },
  { type: "response", text: '  "active_services": 42', delay: 100 },
  { type: "response", text: "}", delay: 100 },
  { type: "command", text: "curl -X GET https://api.pankaj.dev/v1/skills" },
  { type: "response", text: "[", delay: 100 },
  { type: "response", text: '  "Node.js",', delay: 100 },
  { type: "response", text: '  "Express",', delay: 100 },
  { type: "response", text: '  "MongoDB",', delay: 100 },
  { type: "response", text: '  "AWS"', delay: 100 },
  { type: "response", text: "]", delay: 100 },
];

export function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) {
      // Loop the animation after a delay
      const timeout = setTimeout(() => {
        setVisibleLines(0);
        setCurrentText("");
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const nextLine = TERMINAL_LINES[visibleLines];

    if (nextLine.type === "command") {
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= nextLine.text.length) {
          setCurrentText(nextLine.text.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setVisibleLines((v) => v + 1);
            setCurrentText("");
          }, 300);
        }
      }, 30);
      return () => clearInterval(typeInterval);
    } else {
      const delay = setTimeout(() => {
        setVisibleLines((v) => v + 1);
      }, nextLine.delay);
      return () => clearTimeout(delay);
    }
  }, [visibleLines]);

  return (
    <motion.div
      className="w-full max-w-lg mx-auto md:mx-0 mt-8 md:mt-0 bg-[#0a0a0a] border border-[#333] rounded-lg overflow-hidden shadow-2xl shadow-[#00E5FF]/10 font-mono text-sm"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="flex items-center px-4 py-2 bg-[#111] border-b border-[#333]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto text-xs text-gray-500">bash -- root@backend-server</div>
      </div>
      <div className="p-4 h-64 overflow-y-auto text-left flex flex-col justify-end">
        <div>
          {TERMINAL_LINES.slice(0, visibleLines).map((line, idx) => (
            <div
              key={idx}
              className={`mb-1 ${
                line.type === "command" ? "text-[#00E5FF]" : "text-[#7B61FF]"
              }`}
            >
              {line.type === "command" && <span className="text-green-400 mr-2">$</span>}
              {line.text}
            </div>
          ))}
          {visibleLines < TERMINAL_LINES.length &&
            TERMINAL_LINES[visibleLines].type === "command" && (
              <div className="text-[#00E5FF] mb-1">
                <span className="text-green-400 mr-2">$</span>
                {currentText}
                <span className="typing-cursor inline-block w-2 h-4 bg-gray-400 ml-1 align-middle"></span>
              </div>
            )}
        </div>
      </div>
    </motion.div>
  );
}

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'lucide-react';

export function EasterEggs() {
  const [deployActive, setDeployActive] = useState(false);
  const [deployLogs, setDeployLogs] = useState<string[]>([]);
  
  useEffect(() => {
    let keySequence = '';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing in inputs/textareas
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      keySequence += e.key.toLowerCase();
      
      // Keep only recent keystrokes
      if (keySequence.length > 20) {
        keySequence = keySequence.slice(-20);
      }

      if (keySequence.includes('sudodeploy') && !deployActive) {
        keySequence = ''; // reset
        triggerDeploySequence();
      }

      if (keySequence.includes('gravity')) {
        keySequence = ''; // reset
        // Dispatch custom event for GravityController
        window.dispatchEvent(new CustomEvent('toggle-gravity'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deployActive]);

  const triggerDeploySequence = () => {
    setDeployActive(true);
    setDeployLogs(['> Initializing deployment sequence...']);
    
    const logs = [
      '[OK] Authenticating with AWS...',
      '[OK] Pulling latest main branch',
      '[OK] Building docker images',
      '... npm install in progress',
      '[OK] Dependencies installed (142 packages)',
      '[OK] Running unit tests: 247 passed, 0 failed',
      '> Pushing to production cluster',
      '[OK] Containers running',
      '> Deployment SUCCESSFUL!'
    ];

    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < logs.length) {
        setDeployLogs(prev => [...prev, logs[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDeployActive(false), 3000);
      }
    }, 400);
  };

  return (
    <AnimatePresence>
      {deployActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="w-full max-w-2xl bg-[#0a0a0a] border border-[#00E5FF]/50 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.2)]"
          >
            <div className="bg-[#111] px-4 py-2 border-b border-[#333] flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00E5FF]" />
              <span className="text-gray-400 font-mono text-sm">Deployment_Terminal</span>
            </div>
            <div className="p-6 h-[400px] overflow-y-auto font-mono text-sm leading-relaxed flex flex-col justify-end">
              <div className="space-y-2">
                {deployLogs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={
                      log.includes('[OK]') ? 'text-green-400' :
                      log.includes('SUCCESSFUL') ? 'text-[#00E5FF] font-bold text-lg mt-4' :
                      'text-gray-300'
                    }
                  >
                    {log}
                  </motion.div>
                ))}
                {deployLogs.length < 10 && (
                  <div className="text-[#00E5FF]">
                    <span className="animate-pulse inline-block w-2 h-4 bg-[#00E5FF] align-middle mt-1" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

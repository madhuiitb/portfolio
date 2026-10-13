'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flashlight } from 'lucide-react';

export default function TorchControl({ brightness, setBrightness, size, setSize, isTorchOn, setIsTorchOn }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 top-28 z-50 flex flex-col items-end gap-2">
      {/* Side Trigger Button with Flashlight Icon */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full bg-slate-900/90 backdrop-blur-xl border shadow-2xl flex items-center gap-2 transition-colors ${
          isTorchOn 
            ? 'border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]' 
            : 'border-white/10 text-slate-400'
        }`}
        title="Torch Settings"
      >
        <Flashlight className="w-5 h-5" />
      </motion.button>

      {/* Slide-out Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="p-4 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col gap-4 text-xs text-slate-200 min-w-[220px]"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-semibold text-slate-100">Torch Controls</span>
              <button
                onClick={() => setIsTorchOn(!isTorchOn)}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  isTorchOn ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {isTorchOn ? 'ON' : 'OFF'}
              </button>
            </div>

            {isTorchOn && (
              <>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Intensity</span>
                    <span className="text-cyan-400">{Math.round(brightness * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="2.5"
                    step="0.1"
                    value={brightness}
                    onChange={(e) => setBrightness(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Beam Size</span>
                    <span className="text-indigo-400">{size}px</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="600"
                    step="20"
                    value={size}
                    onChange={(e) => setSize(parseInt(e.target.value))}
                    className="w-full accent-indigo-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
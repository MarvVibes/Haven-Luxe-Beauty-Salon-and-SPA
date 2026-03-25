import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

export default function ExitIntentPopup({ onBookNow }: { onBookNow: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVisible(false)}
          className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden luxury-shadow p-10 text-center"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-brand-beige text-brand-dark hover:bg-brand-nude transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="w-16 h-16 bg-brand-nude/30 text-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles size={32} />
          </div>
          
          <h3 className="text-3xl font-serif mb-4 text-brand-dark">Wait! Don't Miss Out</h3>
          <p className="text-brand-brown mb-8">
            Get <span className="text-brand-dark font-bold">10% OFF</span> your first visit when you book today. Limited slots available!
          </p>
          
          <button 
            onClick={() => {
              setIsVisible(false);
              onBookNow();
            }}
            className="w-full bg-brand-dark text-white py-4 rounded-full font-medium uppercase tracking-widest hover:bg-brand-brown transition-all luxury-shadow"
          >
            Claim My Discount
          </button>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="mt-4 text-xs text-brand-brown uppercase tracking-widest hover:text-brand-dark transition-colors"
          >
            No thanks, I'll pay full price
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

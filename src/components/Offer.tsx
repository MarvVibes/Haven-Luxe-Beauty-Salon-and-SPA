import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar } from 'lucide-react';

export default function Offer({ onBookNow }: { onBookNow: () => void }) {
  return (
    <section className="py-16 md:py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-brand-nude/30 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center luxury-shadow border border-brand-nude/50"
      >
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[500px]">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHujd06KBsJJwbkOSpmau2hj7Q5reKuNPHA&s" 
            alt="Facial Treatment" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16">
          <div className="flex items-center gap-2 text-brand-brown mb-4 md:mb-6">
            <Sparkles size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Exclusive Monthly Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4 md:mb-6">Ultimate Glow Package</h2>
          <p className="text-brand-brown mb-8 leading-relaxed">
            Experience our signature 90-minute treatment combining the Hydra-Glow facial with a relaxing scalp massage and collagen eye treatment.
          </p>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-3xl font-serif text-brand-dark">$199</span>
            <span className="text-lg text-brand-brown line-through">$275</span>
            <span className="bg-brand-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Save 28%</span>
          </div>
          <button 
            onClick={onBookNow}
            className="w-full bg-brand-dark text-white py-4 rounded-full font-medium uppercase tracking-widest hover:bg-brand-brown transition-all flex items-center justify-center gap-2 luxury-shadow"
          >
            <Calendar size={20} />
            Reserve This Treatment
          </button>
        </div>
      </motion.div>
    </section>
  );
}

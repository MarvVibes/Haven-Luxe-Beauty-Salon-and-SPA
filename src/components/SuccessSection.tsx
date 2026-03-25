import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function SuccessSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
              Your Beauty And Success <br /> <span className="italic">Start Here!</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-brand-beige flex items-center justify-center text-brand-dark luxury-shadow group cursor-pointer hover:bg-brand-brown hover:text-white transition-all">
              <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-brown">About us</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Large Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 space-y-6"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden luxury-shadow">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop" 
                alt="Beauty Treatment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-brand-brown text-sm leading-relaxed max-w-xs">
              Revitalize Your Skin and Spirit at Our Beauty Center.
            </p>
            <button className="flex items-center gap-2 text-brand-dark font-bold text-xs uppercase tracking-widest border border-brand-dark px-6 py-3 rounded-full hover:bg-brand-dark hover:text-white transition-all">
              Read More <ArrowUpRight size={14} />
            </button>
          </motion.div>

          {/* Middle Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4"
          >
            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden luxury-shadow">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfad450516?q=80&w=800&auto=format&fit=crop" 
                alt="Product Swatches" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Content + Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 flex flex-col justify-between"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-brand-dark mb-4">Discover Your Beauty Potential</h3>
            </div>
            <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden luxury-shadow">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop" 
                alt="Salon Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-beige/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-brown mb-4 block">Kind Words</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark">Client Experiences</h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-brand-brown">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium">Trusted by 100+ satisfied clients</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] luxury-shadow relative"
            >
              <Quote className="absolute top-8 right-8 text-brand-nude" size={40} />
              <div className="flex mb-4">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={16} fill="#8D7B68" className="text-brand-brown" />
                ))}
              </div>
              <p className="text-brand-dark font-serif text-lg italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-nude flex items-center justify-center text-brand-brown font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">{t.name}</h4>
                  <p className="text-xs text-brand-brown uppercase tracking-widest">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Calendar } from 'lucide-react';

export default function Services({ onBookService }: { onBookService: (service: string) => void }) {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6">Our Signature Services</h2>
          <p className="text-brand-brown text-lg">
            Indulge in our curated selection of premium beauty treatments, designed to rejuvenate your body and soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 luxury-shadow">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button 
                    onClick={() => onBookService(service.name)}
                    className="w-full bg-white text-brand-dark py-3 rounded-full font-medium uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                  >
                    <Calendar size={14} />
                    Book Now
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-brown">
                  {service.price}
                </div>
              </div>
              <h3 className="text-xl font-serif mb-2">{service.name}</h3>
              <p className="text-brand-brown text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <button 
                onClick={() => onBookService(service.name)}
                className="text-brand-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-brown transition-colors"
              >
                Reserve Treatment
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={() => onBookService('')}
            className="bg-brand-nude text-brand-brown px-12 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-brand-brown hover:text-white transition-all luxury-shadow"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';

const IMAGES = [
  "https://images.squarespace-cdn.com/content/v1/5d815d4db50c44555a72c530/1572199250280-N36WG8MW9X7IS8NGLT05/This-Is-Mel-Drake-Blog-Need-To-Know-About-Facials.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHujd06KBsJJwbkOSpmau2hj7Q5reKuNPHA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75CgyIOonVX0AiN3Jt-2Fi3Tk3fcHBX4TdQ&s",
  "https://i.pinimg.com/236x/1b/d4/dd/1bd4ddd2e1199eca9e3827826e86e006.jpg",
  "https://themedermatology.com/wp-content/uploads/2024/08/dfb.png",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-brown mb-4 block">Our Sanctuary</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark">The Haven Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square rounded-3xl overflow-hidden luxury-shadow"
            >
              <img 
                src={img} 
                alt="Salon Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export default function Hero({ onBookNow }: { onBookNow: () => void }) {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center px-4 md:px-8 pt-20 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Main Hero Card */}
        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-brand-brown min-h-[500px] md:min-h-[600px] flex items-center">
          {/* Background Image - Subtle overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://themedermatology.com/wp-content/uploads/2024/08/dfb.png" 
              alt="Luxury Beauty" 
              className="w-full h-full object-cover object-right md:object-center opacity-40 md:opacity-30 scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/95 via-brand-brown/80 to-transparent" />
          </div>

          {/* Hero Content Overlay */}
          <div className="relative z-10 w-full p-6 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Image (New) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative aspect-[4/5] rounded-[2rem] overflow-hidden luxury-shadow border-4 border-white/10"
            >
              <img 
                src="https://themedermatology.com/wp-content/uploads/2024/08/dfb.png" 
                alt="Haven Luxe" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/40 to-transparent" />
            </motion.div>

            {/* Right Column: Text */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.2] mb-6">
                  Transform Your Look with Expert Services at <span className="italic">Haven Luxe</span>
                </h1>
                <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-10 max-w-md">
                  Revitalize your skin and spirit at Haven Luxe. Step into a world of beauty and wellness. Unlock your inner glow at our sanctuary.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button 
                    onClick={onBookNow}
                    className="bg-white text-brand-dark px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-nude transition-all luxury-shadow w-full sm:w-auto"
                  >
                    Book Appointment
                  </button>
                </div>

                {/* Bottom Badges */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-brand-brown/40 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center gap-4 w-full sm:w-56"
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <img src="https://images.squarespace-cdn.com/content/v1/5d815d4db50c44555a72c530/1572199250280-N36WG8MW9X7IS8NGLT05/This-Is-Mel-Drake-Blog-Need-To-Know-About-Facials.jpg" alt="Facial" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-white text-[10px] font-bold uppercase tracking-widest">Facial Care</p>
                      <p className="text-white/60 text-[8px] leading-tight">Restore Your Radiant Beauty at Haven</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-brand-brown/40 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center gap-4 w-full sm:w-56"
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHujd06KBsJJwbkOSpmau2hj7Q5reKuNPHA&s" alt="Hand" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-white text-[10px] font-bold uppercase tracking-widest">Hand Cream</p>
                      <p className="text-white/60 text-[8px] leading-tight">Restore Your Radiant Beauty at Haven</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

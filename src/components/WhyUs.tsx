import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Sparkles } from 'lucide-react';

const FEATURES = [
  {
    icon: <Award className="text-brand-brown" />,
    title: "Certified Experts",
    desc: "Our team consists of internationally trained beauty professionals."
  },
  {
    icon: <ShieldCheck className="text-brand-brown" />,
    title: "Luxury Environment",
    desc: "A sanctuary designed for ultimate comfort and relaxation."
  },
  {
    icon: <Heart className="text-brand-brown" />,
    title: "Personalized Care",
    desc: "Every treatment is tailored to your unique skin and style."
  },
  {
    icon: <Sparkles className="text-brand-brown" />,
    title: "Premium Products",
    desc: "We use only the world's finest luxury beauty brands."
  }
];

export default function WhyUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-nude mb-4 block">The Haven Experience</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight">Why Discerning Clients Choose Haven Luxe</h2>
            <p className="text-brand-nude/70 text-lg mb-12 leading-relaxed">
              At Haven Luxe, we believe beauty is an art form. Our mission is to provide an unparalleled experience that transcends traditional salon services, focusing on holistic well-being and exquisite results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">{f.title}</h4>
                    <p className="text-sm text-brand-nude/60 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden luxury-shadow">
              <img 
                src="https://i.pinimg.com/236x/1b/d4/dd/1bd4ddd2e1199eca9e3827826e86e006.jpg" 
                alt="Luxury Spa" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-brown p-8 rounded-3xl luxury-shadow hidden md:block">
              <p className="text-4xl font-serif mb-1">15+</p>
              <p className="text-xs uppercase tracking-widest font-bold text-brand-nude">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

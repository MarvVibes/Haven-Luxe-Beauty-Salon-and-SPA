import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const SERVICES_LIST = [
  "Facial Care",
  "Pedicure",
  "Face Cleaner",
  "Manicure",
  "Hair Styling",
  "Body Massage"
];

export default function ServiceList() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: List */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-serif text-brand-dark mb-8">Service We Provide</h2>
            <div className="space-y-4">
              {SERVICES_LIST.map((service, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-brand-beige/30 border border-brand-nude/20 group hover:bg-brand-brown hover:text-white transition-all cursor-pointer">
                  <span className="font-medium uppercase tracking-widest text-xs">{service}</span>
                  <div className="w-6 h-6 rounded-full border border-brand-brown group-hover:border-white flex items-center justify-center">
                    <Check size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:col-span-8">
            <div className="relative rounded-[3rem] overflow-hidden aspect-[16/7] luxury-shadow">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" 
                alt="Service Feature" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/40 to-transparent flex items-center p-12">
                <div className="max-w-xs">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4">
                    <Check size={24} />
                  </div>
                  <p className="text-white text-sm font-medium leading-relaxed">
                    Experience the ultimate luxury treatments tailored just for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

export default function ProductLaunch() {
  return (
    <section className="py-24 px-4 md:px-8 bg-brand-beige/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-brown">Latest Product Launch</span>
              <div className="flex gap-2">
                {['Serum', 'Masks', 'Cleansers', 'Eye Cream'].map((tag, i) => (
                  <span key={i} className={`text-[10px] px-3 py-1 rounded-full border ${i === 0 ? 'bg-brand-dark text-white border-brand-dark' : 'border-brand-nude text-brand-brown'} uppercase tracking-widest`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-tight">
              Available Now! <br /> <span className="italic">Experience Ultimate Beauty</span>
            </h2>
            <p className="text-brand-brown text-lg mb-12 max-w-md">
              Experience the ultimate beauty makeover with our latest collection of premium skincare products.
            </p>
            
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white luxury-shadow">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfad450516?q=80&w=200&auto=format&fit=crop" alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white luxury-shadow">
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=200&auto=format&fit=crop" alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center luxury-shadow">
                <ArrowRight size={20} />
              </div>
            </div>
          </motion.div>

          {/* Right Circular Product Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Circular Text Border Effect */}
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-brand-nude/50 flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-brand-nude/30" />
              <div className="absolute inset-12 rounded-full bg-white luxury-shadow flex flex-col items-center justify-center text-center p-12">
                <div className="w-48 h-48 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop" 
                    alt="Serum Bottle" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-serif text-brand-dark mb-2">PRISM AHA + BHA</h3>
                <p className="text-xs text-brand-brown uppercase tracking-widest mb-4">Exfoliating Glow Serum</p>
                <p className="text-2xl font-serif text-brand-dark mb-6">$59.00</p>
                <button className="flex items-center gap-2 bg-brand-beige text-brand-dark px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-brown hover:text-white transition-all">
                  Add to Cart <ShoppingCart size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

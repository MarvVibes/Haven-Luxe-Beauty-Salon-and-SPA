import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Header({ onBookNow }: { onBookNow: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass-effect py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xl sm:text-2xl font-serif font-bold tracking-tighter text-brand-dark whitespace-nowrap">
            HAVEN LUXE
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#services" className="hover:text-brand-brown transition-colors">Services</a>
          <a href="#about" className="hover:text-brand-brown transition-colors">Experience</a>
          <a href="#gallery" className="hover:text-brand-brown transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-brand-brown transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a 
            href="tel:+1234567890" 
            className="hidden sm:flex items-center gap-2 text-brand-brown hover:text-brand-dark transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm font-medium">Call Us</span>
          </a>
          <button 
            onClick={onBookNow}
            className="bg-brand-dark text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-brown transition-all luxury-shadow leading-tight"
          >
            Book Now
          </button>
          
          <button 
            className="md:hidden text-brand-dark p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-effect p-6 md:hidden flex flex-col gap-6 text-center"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Services</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Experience</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Gallery</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Contact</a>
            <div className="pt-4 border-t border-brand-nude">
               <a href="tel:+1234567890" className="flex items-center justify-center gap-2 text-brand-brown">
                <Phone size={20} />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

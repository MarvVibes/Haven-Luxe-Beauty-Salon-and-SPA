import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-beige py-16 md:pt-24 md:pb-12 border-t border-brand-nude">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold tracking-tighter text-brand-dark">HAVEN LUXE</h3>
            <p className="text-brand-brown text-sm leading-relaxed">
              Redefining beauty through expert care and luxury treatments. Your sanctuary for rejuvenation and style.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-brown hover:bg-brand-brown hover:text-white transition-all luxury-shadow">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-brown hover:bg-brand-brown hover:text-white transition-all luxury-shadow">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-brown hover:bg-brand-brown hover:text-white transition-all luxury-shadow">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark">Quick Links</h4>
            <ul className="space-y-4 text-sm text-brand-brown">
              <li><a href="#services" className="hover:text-brand-dark transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-brand-dark transition-colors">The Experience</a></li>
              <li><a href="#gallery" className="hover:text-brand-dark transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark">Contact Us</h4>
            <ul className="space-y-4 text-sm text-brand-brown">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-brand-brown" />
                <span>123 Luxury Lane, Suite 100<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brand-brown" />
                <a href="tel:+1234567890" className="hover:text-brand-dark transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brand-brown" />
                <a href="mailto:hello@havenluxe.com" className="hover:text-brand-dark transition-colors">hello@havenluxe.com</a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark">Business Hours</h4>
            <ul className="space-y-4 text-sm text-brand-brown">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="font-bold">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-bold">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-bold">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-nude text-center">
          <p className="text-[10px] text-brand-brown uppercase tracking-[0.2em]">
            © 2026 Haven Luxe Beauty Salon and SPA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

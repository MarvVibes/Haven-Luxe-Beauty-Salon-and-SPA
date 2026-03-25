import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Offer from './components/Offer';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ExitIntentPopup from './components/ExitIntentPopup';
import { motion, useScroll, useSpring } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = (service: string = '') => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative bg-brand-beige/20 selection:bg-brand-brown selection:text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-brown z-[60] origin-left" 
        style={{ scaleX }} 
      />

      <Header onBookNow={() => handleBookNow()} />
      
      <main>
        <Hero onBookNow={() => handleBookNow()} />
        
        <div className="space-y-0">
          <Services onBookService={handleBookNow} />
          <WhyUs />
          <Offer onBookNow={() => handleBookNow()} />
          <Gallery />
          <Testimonials />
        </div>
        
        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-brand-dark text-white text-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75CgyIOonVX0AiN3Jt-2Fi3Tk3fcHBX4TdQ&s" 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8">Ready for Your Transformation?</h2>
            <p className="text-brand-nude/70 text-base md:text-lg mb-8 md:mb-12">
              Join our exclusive community of clients who prioritize self-care and luxury. Your sanctuary awaits.
            </p>
            <button 
              onClick={() => handleBookNow()}
              className="bg-white text-brand-dark px-8 md:px-12 py-4 md:py-5 rounded-full font-medium uppercase tracking-widest hover:bg-brand-nude transition-all luxury-shadow text-base md:text-lg"
            >
              Book Your Appointment Now
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialService={selectedService}
      />

      {/* Exit Intent */}
      <ExitIntentPopup onBookNow={() => handleBookNow()} />

      {/* Sticky Mobile/Desktop Booking Button */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: showStickyBtn ? 1 : 0, y: showStickyBtn ? 0 : 100 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <button 
          onClick={() => handleBookNow()}
          className="bg-brand-dark text-white p-4 rounded-full luxury-shadow hover:bg-brand-brown transition-all group flex items-center gap-2"
        >
          <Calendar size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-medium uppercase tracking-widest text-xs whitespace-nowrap">
            Book Now
          </span>
        </button>
      </motion.div>
    </div>
  );
}

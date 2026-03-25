import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { SERVICES } from '../constants';
import { handleFirestoreError, OperationType } from '../lib/utils';
import { CheckCircle2, Loader2, Calendar, Clock, User, Phone, Mail, Sparkles } from 'lucide-react';

const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm({ initialService = '', onComplete }: { initialService?: string, onComplete?: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: initialService,
      date: new Date().toISOString().split('T')[0],
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    const path = 'bookings';
    try {
      await addDoc(collection(db, path), {
        ...data,
        createdAt: new Date().toISOString(),
        status: 'pending'
      });
      setIsSuccess(true);
      reset();
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-serif mb-4 text-brand-dark">Appointment Requested!</h3>
        <p className="text-brand-brown mb-8 max-w-md mx-auto">
          Thank you for choosing Haven Luxe. We've received your request and will contact you shortly to confirm your luxury experience.
        </p>
        <div className="p-4 bg-brand-beige rounded-2xl text-sm text-brand-brown inline-block">
          A confirmation email has been sent to your inbox.
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 luxury-shadow border border-brand-nude/30">
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="text-brand-brown" />
        <h3 className="text-2xl font-serif text-brand-dark">Reserve Your Experience</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-brown flex items-center gap-2">
              <Sparkles size={14} /> Service
            </label>
            <select 
              {...register('service')}
              className="w-full bg-brand-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-brown transition-all"
            >
              <option value="">Select a service</option>
              {SERVICES.map(s => (
                <option key={s.id} value={s.name}>{s.name} - {s.price}</option>
              ))}
              <option value="other">Other / Consultation</option>
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
          </div>

          {/* Date Picker */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-brown flex items-center gap-2">
              <Calendar size={14} /> Preferred Date
            </label>
            <input 
              type="date" 
              {...register('date')}
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-brand-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-brown transition-all"
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-brown flex items-center gap-2">
              <Clock size={14} /> Preferred Time
            </label>
            <select 
              {...register('time')}
              className="w-full bg-brand-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-brown transition-all"
            >
              <option value="">Select a time</option>
              {['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'].map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-brown flex items-center gap-2">
              <User size={14} /> Full Name
            </label>
            <input 
              type="text" 
              placeholder="Your Name"
              {...register('name')}
              className="w-full bg-brand-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-brown transition-all"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-brown flex items-center gap-2">
              <Phone size={14} /> Phone Number
            </label>
            <input 
              type="tel" 
              placeholder="+1 (234) 567-890"
              {...register('phone')}
              className="w-full bg-brand-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-brown transition-all"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-brown flex items-center gap-2">
              <Mail size={14} /> Email Address
            </label>
            <input 
              type="email" 
              placeholder="hello@example.com"
              {...register('email')}
              className="w-full bg-brand-beige/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-brown transition-all"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-brand-dark text-white py-4 rounded-xl font-medium uppercase tracking-widest hover:bg-brand-brown transition-all flex items-center justify-center gap-2 luxury-shadow disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Processing...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Confirm Appointment
              </>
            )}
          </button>
          <p className="text-center text-[10px] text-brand-brown mt-4 uppercase tracking-widest">
            By confirming, you agree to our luxury service terms and cancellation policy.
          </p>
        </div>
      </form>
    </div>
  );
}

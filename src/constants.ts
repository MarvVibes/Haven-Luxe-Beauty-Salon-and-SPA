import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'hair-1',
    name: 'Luxury Hair Styling',
    description: 'Expert styling for your most important moments.',
    price: '$85+',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    category: 'hair'
  },
  {
    id: 'spa-1',
    name: 'Deep Tissue Massage',
    description: 'Relieve tension and restore your body balance.',
    price: '$120',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75CgyIOonVX0AiN3Jt-2Fi3Tk3fcHBX4TdQ&s',
    category: 'spa'
  },
  {
    id: 'facial-1',
    name: 'Hydra-Glow Facial',
    description: 'Revitalize your skin with our signature treatment.',
    price: '$150',
    image: 'https://images.squarespace-cdn.com/content/v1/5d815d4db50c44555a72c530/1572199250280-N36WG8MW9X7IS8NGLT05/This-Is-Mel-Drake-Blog-Need-To-Know-About-Facials.jpg',
    category: 'facials'
  },
  {
    id: 'nails-1',
    name: 'Signature Manicure',
    description: 'Elegant nail care with premium products.',
    price: '$45',
    image: 'https://images.squarespace-cdn.com/content/v1/5d815d4db50c44555a72c530/1572199250280-N36WG8MW9X7IS8NGLT05/This-Is-Mel-Drake-Blog-Need-To-Know-About-Facials.jpg',
    category: 'nails'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Elena Rodriguez',
    rating: 5,
    quote: 'The most relaxing experience I have ever had. The attention to detail is unmatched.'
  },
  {
    name: 'Sarah Jenkins',
    rating: 5,
    quote: 'Haven Luxe is my go-to for hair styling. They truly understand luxury service.'
  },
  {
    name: 'Michelle Chen',
    rating: 5,
    quote: 'The Hydra-Glow facial literally changed my skin. Highly recommend!'
  }
];

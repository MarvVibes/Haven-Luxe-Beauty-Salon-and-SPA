export interface Booking {
  id?: string;
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'hair' | 'nails' | 'spa' | 'facials';
}


export interface Product {
  id: string;
  name: string;
  price: number;
  color: string;
  image: string;
  description: string;
}

export interface BookingData {
  toyName: string;
  date: string;
  time: string;
  name: string;
  address: string;
}

export type Screen = 'home' | 'booking' | 'success';

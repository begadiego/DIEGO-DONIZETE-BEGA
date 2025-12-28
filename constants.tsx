
import { Product } from './types';

// PARA MUDAR AS FOTOS: 
// 1. Suba sua foto em um site como postimages.org
// 2. Copie o "Link Direto" (que termina em .jpg ou .png)
// 3. Cole no lugar do link que está em 'image' abaixo

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cama Elástica',
    price: 130,
    color: 'bg-yellow-400',
    // Foto atualizada com a imagem real enviada
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400', 
    description: 'Pule e divirta-se com segurança!'
  },
  {
    id: '2',
    name: 'Castelinho Inflável',
    price: 80,
    color: 'bg-pink-400',
    image: 'https://images.unsplash.com/photo-1537655780520-1e392ede8139?auto=format&fit=crop&q=80&w=400',
    description: 'O castelo real da alegria!'
  },
  {
    id: '3',
    name: 'Túnel da Alegria',
    price: 50,
    color: 'bg-blue-400',
    image: 'https://images.unsplash.com/photo-1566454825481-4e48f80aa4d7?auto=format&fit=crop&q=80&w=400',
    description: 'Túnel com aventura e bolinhas!'
  },
  {
    id: 'combo',
    name: 'Combo Super Alegria',
    price: 200,
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1533749047139-189de3cf06d3?auto=format&fit=crop&q=80&w=400',
    description: 'TODOS OS BRINQUEDOS JUNTOS!'
  }
];

export const WHATSAPP_NUMBER = '5543988111185';

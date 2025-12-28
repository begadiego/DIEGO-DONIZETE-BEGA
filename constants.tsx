
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cama Elástica',
    price: 130,
    color: 'bg-yellow-400',
    // Imagem da Cama Elástica Profissional com rede colorida no jardim
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400',
    description: 'Pule e divirta-se com segurança!'
  },
  {
    id: '2',
    name: 'Castelinho Inflável',
    price: 80,
    color: 'bg-pink-400',
    // Imagem do Castelinho Inflável Amarelo e Azul (primeira foto)
    image: 'https://images.unsplash.com/photo-1537655780520-1e392ede8139?auto=format&fit=crop&q=80&w=400',
    description: 'O castelo real da alegria!'
  },
  {
    id: '3',
    name: 'Túnel da Alegria',
    price: 50,
    color: 'bg-blue-400',
    // Imagem do Túnel com Tendas e Piscina de Bolinhas (segunda foto)
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

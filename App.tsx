
import React, { useState } from 'react';
import { Screen, Product } from './types';
import { PRODUCTS } from './constants';
import { ProductCard } from './components/ProductCard';
import { BookingForm } from './components/BookingForm';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirm = () => {
    setCurrentScreen('success');
  };

  const handleBack = () => {
    setCurrentScreen('home');
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen max-w-md mx-auto bg-blue-50 shadow-2xl overflow-hidden relative pb-10">
      {/* Header Splash */}
      <div className="bg-yellow-400 h-48 rounded-b-[4rem] absolute top-0 left-0 right-0 z-0 border-b-8 border-yellow-500/20"></div>

      <div className="relative z-10 px-6 pt-12">
        {currentScreen === 'home' && (
          <div className="animate-in fade-in slide-in-from-top duration-500">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-white font-title text-4xl drop-shadow-lg leading-tight">
                Escolha seu<br />
                <span className="text-yellow-100">brinquedo</span>
              </h1>
              <div className="bg-white/20 p-2 rounded-2xl backdrop-blur-md">
                🎉
              </div>
            </div>

            <div className="mt-4">
              {PRODUCTS.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onSelect={handleProductSelect} 
                />
              ))}
            </div>
          </div>
        )}

        {currentScreen === 'booking' && selectedProduct && (
          <BookingForm 
            selectedProduct={selectedProduct} 
            onConfirm={handleConfirm}
            onBack={handleBack}
          />
        )}

        {currentScreen === 'success' && (
          <div className="flex flex-col items-center justify-center pt-20 animate-in zoom-in duration-300">
            <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center text-white text-6xl shadow-xl border-4 border-white mb-8">
              ✅
            </div>
            <h2 className="text-gray-800 font-title text-3xl text-center mb-4">
              TUDO CERTO!
            </h2>
            <div className="bg-white p-6 rounded-3xl border-4 border-blue-100 text-center shadow-lg">
              <p className="text-gray-600 font-bold text-xl leading-relaxed">
                Obrigado! Seu agendamento será confirmado via <span className="text-green-600">WhatsApp</span>.
              </p>
            </div>
            <button
              onClick={() => setCurrentScreen('home')}
              className="mt-12 bg-blue-500 text-white font-title text-xl px-8 py-4 rounded-3xl depth-shadow active-press border-4 border-white"
            >
              VOLTAR AO INÍCIO
            </button>
          </div>
        )}
      </div>

      {/* Decorative Bubbles */}
      <div className="fixed bottom-[-20px] left-[-20px] w-24 h-24 bg-pink-200/50 rounded-full blur-xl z-0 pointer-events-none"></div>
      <div className="fixed top-20 right-[-10px] w-16 h-16 bg-yellow-200/50 rounded-full blur-xl z-0 pointer-events-none"></div>
    </div>
  );
};

export default App;

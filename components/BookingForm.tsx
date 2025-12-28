
import React, { useState } from 'react';
import { Product, BookingData } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface BookingFormProps {
  selectedProduct: Product;
  onConfirm: () => void;
  onBack: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ selectedProduct, onConfirm, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    address: ''
  });

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.date || !formData.time || !formData.address) {
      alert("Por favor, preencha todos os campos! 😊");
      return;
    }

    // Formatação organizada para facilitar o entendimento do dono do negócio
    const message = `*SOLICITAÇÃO DE ALUGUEL*%0A` +
      `----------------------------%0A` +
      `🎁 *PRODUTO:* ${selectedProduct.name.toUpperCase()}%0A` +
      `👤 *CLIENTE:* ${formData.name}%0A` +
      `📅 *DATA:* ${formData.date}%0A` +
      `⏰ *HORA:* ${formData.time}%0A` +
      `📍 *ENDEREÇO:* ${formData.address}%0A` +
      `💰 *VALOR:* R$ ${selectedProduct.price},00%0A` +
      `----------------------------%0A` +
      `_Aguardo sua confirmação!_`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    onConfirm();
  };

  return (
    <div className="animate-in slide-in-from-right duration-300">
      <button 
        onClick={onBack}
        className="mb-4 flex items-center text-blue-500 font-bold"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
        Escolher outro
      </button>

      <div className="bg-white p-6 rounded-[2.5rem] border-4 border-blue-100 shadow-xl mb-8">
        <div className="flex items-center mb-6">
          <div className={`${selectedProduct.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mr-4 shadow-lg border-2 border-white/50 overflow-hidden`}>
            <img src={selectedProduct.image} className="w-full h-full object-cover" alt="" />
          </div>
          <div>
            <h2 className="text-gray-800 font-title text-xl">{selectedProduct.name}</h2>
            <p className="text-green-600 font-bold text-lg">R$ {selectedProduct.price},00</p>
          </div>
        </div>

        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-1 ml-2 text-sm uppercase">Nome do Responsável</label>
            <input
              type="text"
              required
              className="w-full bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 font-semibold text-gray-800 focus:outline-none focus:border-blue-400"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-1 ml-2 text-sm uppercase">Dia da Festa</label>
              <input
                type="date"
                required
                className="w-full bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 font-semibold text-gray-800 focus:outline-none focus:border-blue-400"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-1 ml-2 text-sm uppercase">Horário</label>
              <input
                type="time"
                required
                className="w-full bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 font-semibold text-gray-800 focus:outline-none focus:border-blue-400"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-1 ml-2 text-sm uppercase">Onde será a diversão?</label>
            <textarea
              required
              rows={3}
              className="w-full bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 font-semibold text-gray-800 focus:outline-none focus:border-blue-400"
              placeholder="Endereço completo (Rua, Nº, Bairro)"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-title text-xl py-5 rounded-3xl depth-shadow active-press transition-all hover:bg-green-600 mt-4 border-4 border-white flex items-center justify-center space-x-2 shadow-green-200"
          >
            <span>CONFIRMAR PEDIDO</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

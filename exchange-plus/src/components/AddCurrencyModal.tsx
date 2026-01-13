import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface AddCurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (code: string) => void;
  availableCodes: string[];
  allCurrencyData: Record<string, { flag: string, symbol: string, symbolEn: string }>;
}

const AddCurrencyModal: React.FC<AddCurrencyModalProps> = ({ isOpen, onClose, onAdd, availableCodes, allCurrencyData }) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const popularCodes = ['USD', 'EUR', 'JPY', 'GBP', 'CNY', 'KRW', 'HKD', 'SGD', 'AUD', 'CAD', 'CHF', 'THB', 'VND', 'TWD'];
  
  const filteredCodes = search.trim() === '' 
    ? popularCodes.filter(code => availableCodes.includes(code))
    : availableCodes
        .filter(code => {
          const data = allCurrencyData[code];
          const searchLower = search.toLowerCase();
          return code.toLowerCase().includes(searchLower) || 
                 data?.symbol.toLowerCase().includes(searchLower) ||
                 data?.symbolEn.toLowerCase().includes(searchLower);
        })
        .slice(0, 20);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm bg-white border-0 rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh] ring-1 ring-black/5">
        <div className="px-6 py-6 border-b border-gray-100 flex items-center justify-between bg-white">
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">통화 추가</h3>
          <button onClick={() => {
            setSearch('');
            onClose();
          }} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all group">
            <X className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors" />
          </button>
        </div>
        
        <div className="p-5 flex-1 flex flex-col overflow-hidden bg-gray-50/50">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="국가 또는 통화 검색..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-4 bg-white border-0 rounded-full text-base text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all"
              autoFocus
            />
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide -mr-2">
            <div className="space-y-2 pb-4">
              {filteredCodes.map(code => (
                <button
                  key={code}
                  onClick={() => {
                    onAdd(code);
                    setSearch('');
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-blue-50 active:bg-blue-100 rounded-3xl transition-all group border border-transparent shadow-sm hover:shadow-md relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-center gap-4">
                    <span className="text-3xl drop-shadow-sm scale-110">{allCurrencyData[code]?.flag || '🏳️'}</span>
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-gray-900 text-lg">{code}</span>
                      <span className="text-xs text-gray-500 font-medium">{allCurrencyData[code]?.symbol}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Plus className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                </button>
              ))}
            </div>
            {search.trim() !== '' && filteredCodes.length === 0 && (
              <p className="text-center py-12 text-gray-400">검색 결과가 없습니다.</p>
            )}
            {search.trim() === '' && (
              <p className="text-center text-gray-400 text-sm pb-2">인기 통화</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCurrencyModal;

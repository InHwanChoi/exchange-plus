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

  const filteredCodes = search.trim() === '' 
    ? [] 
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="w-full max-w-sm bg-[#0f172a] border border-white/10 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh]">
        <div className="px-6 py-6 border-b border-white/5 flex items-center justify-between bg-white/5">
          <h3 className="text-xl font-bold text-white tracking-tight">통화 추가</h3>
          <button onClick={() => {
            setSearch('');
            onClose();
          }} className="p-2 hover:bg-white/10 rounded-full transition-colors group">
            <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
        
        <div className="p-5 flex-1 flex flex-col overflow-hidden">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="국가 또는 통화 검색..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-full text-base text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 outline-none transition-all shadow-inner"
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
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/10 active:bg-white/20 rounded-2xl transition-all group border border-transparent hover:border-cyan-500/30"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl drop-shadow-md scale-110">{allCurrencyData[code]?.flag || '🏳️'}</span>
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-white text-lg">{code}</span>
                      <span className="text-xs text-gray-400 font-medium">{allCurrencyData[code]?.symbol}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Plus className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </button>
              ))}
            </div>
            {search.trim() !== '' && filteredCodes.length === 0 && (
              <p className="text-center py-12 text-gray-500">검색 결과가 없습니다.</p>
            )}
            {search.trim() === '' && (
              <div className="text-center py-12">
                <p className="text-gray-600 italic">검색어를 입력해 주세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCurrencyModal;

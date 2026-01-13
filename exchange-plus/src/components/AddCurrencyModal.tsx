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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-sm bg-[#111827] border border-white/10 rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">통화 추가</h3>
          <button onClick={() => {
            setSearch('');
            onClose();
          }} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="통화 코드 또는 나라명 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"
              autoFocus
            />
          </div>
          
          <div className="max-h-[300px] overflow-y-auto space-y-1 pr-1 scrollbar-hide">
            {filteredCodes.map(code => (
              <button
                key={code}
                onClick={() => {
                  onAdd(code);
                  setSearch('');
                  onClose();
                }}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl shadow-sm">{allCurrencyData[code]?.flag || '🏳️'}</span>
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-gray-200">{code}</span>
                    <span className="text-[11px] text-gray-500">{allCurrencyData[code]?.symbol}</span>
                  </div>
                </div>
                <Plus className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
              </button>
            ))}
            {search.trim() !== '' && filteredCodes.length === 0 && (
              <p className="text-center py-8 text-gray-500 text-sm">검색 결과가 없습니다.</p>
            )}
            {search.trim() === '' && (
              <p className="text-center py-8 text-gray-600 text-sm italic">검색어를 입력해 주세요.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCurrencyModal;

import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
      <div className="w-full max-w-sm bg-[#F2F2F7] sm:rounded-[20px] rounded-t-[10px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-300 flex flex-col h-[90vh] sm:h-[80vh]">
        
        <div className="bg-[#F2F2F7] sticky top-0 z-10">
          <div className="w-full flex justify-center pt-2 pb-1">
            <div className="w-[36px] h-[5px] bg-[#C5C5C7] rounded-full" />
          </div>
          <div className="px-4 pb-3 flex items-center justify-between">
            <div className="w-[60px]" />
            <h3 className="text-[17px] font-semibold text-black">통화 추가</h3>
            <button 
              onClick={() => {
                setSearch('');
                onClose();
              }} 
              className="w-[60px] text-right text-[17px] text-[#007AFF] active:opacity-50"
            >
              취소
            </button>
          </div>
          
          <div className="px-4 pb-3">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8E8E93]">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="검색"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#767680]/15 rounded-[10px] text-[17px] text-black placeholder-[#8E8E93] outline-none focus:bg-[#767680]/20 transition-colors"
                autoFocus
              />
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 pb-6">
          <div className="bg-white rounded-[10px] overflow-hidden">
            {filteredCodes.map((code, index) => (
              <button
                key={code}
                onClick={() => {
                  onAdd(code);
                  setSearch('');
                  onClose();
                }}
                className={`w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-[#E5E5EA] transition-colors ${
                  index !== filteredCodes.length - 1 ? 'border-b border-[#C6C6C8]/50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[32px] leading-none">{allCurrencyData[code]?.flag || '🏳️'}</span>
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-black text-[17px]">{code}</span>
                    <span className="text-[13px] text-[#8E8E93]">{allCurrencyData[code]?.symbol}</span>
                  </div>
                </div>
                <Plus className="w-5 h-5 text-[#34C759]" strokeWidth={2.5} />
              </button>
            ))}
          </div>

          {search.trim() !== '' && filteredCodes.length === 0 && (
            <p className="text-center py-12 text-[#8E8E93]">결과 없음</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCurrencyModal;


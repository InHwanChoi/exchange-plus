import React from 'react';
import { MinusCircle } from 'lucide-react';

interface CurrencyRowProps {
  flag: string;
  code: string;
  symbol: string;
  value: string;
  isSelected?: boolean;
  isEditMode?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({ 
  flag, code, symbol, value, isSelected, isEditMode, onClick, onDelete 
}) => {
  return (
    <div 
      className={`relative flex items-center justify-between px-6 py-[18px] transition-all duration-300 tap-highlight-none ${
        isSelected ? 'bg-white/10 backdrop-blur-md shadow-lg shadow-black/5' : 'bg-transparent hover:bg-white/5'
      }`}
      onClick={isEditMode ? undefined : onClick}
    >
      <div className="flex items-center gap-4">
        {isEditMode && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.();
            }}
            className="mr-2 text-rose-500 animate-in fade-in slide-in-from-left-2 duration-200"
          >
            <MinusCircle className="w-5 h-5 fill-rose-500 text-white" />
          </button>
        )}
        <div className="text-3xl drop-shadow-lg select-none scale-110">{flag}</div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`text-[17px] font-bold tracking-tight ${isSelected ? 'text-white' : 'text-gray-100'}`}>{code}</span>
          </div>
          <span className="text-[11px] font-medium text-gray-400 -mt-0.5 tracking-tighter">{symbol}</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className={`text-right transition-all duration-300 ${isSelected ? 'scale-105' : ''}`}>
          <div className={`text-[26px] font-semibold tracking-tight tabular-nums ${
            isSelected ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400' : 'text-white'
          }`}>
            {value}
          </div>
        </div>
        <div className="flex items-center justify-center w-8">
        </div>
      </div>
      
      {!isSelected && <div className="absolute bottom-0 left-6 right-0 h-[1px] bg-white/5" />}
      
      {isSelected && (
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r-full shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
      )}
    </div>
  );
};

export default CurrencyRow;

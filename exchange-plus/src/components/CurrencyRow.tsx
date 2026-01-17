import React from 'react';
import { Minus } from 'lucide-react';

interface CurrencyRowProps {
  flag: string;
  code: string;
  symbol: string;
  value: string;
  isSelected?: boolean;
  isReplacing?: boolean;
  isEditMode?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({ 
  flag, code, symbol, value, isSelected, isReplacing, isEditMode, onClick, onDelete 
}) => {
  return (
    <div 
      className={`relative w-full flex items-center transition-colors duration-200 ${
        isSelected ? 'bg-blue-50' : 'bg-white'
      }`}
      onClick={isEditMode ? undefined : onClick}
    >
      {isSelected && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#007AFF] z-20" />
      )}

      <div className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center ${
        isEditMode ? 'w-[48px] pl-4 opacity-100' : 'w-0 opacity-0'
      }`}>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onDelete?.();
          }}
          className="w-6 h-6 rounded-full bg-[#FF3B30] flex items-center justify-center shrink-0 active:opacity-80 transition-opacity"
        >
          <Minus className="w-4 h-4 text-white" strokeWidth={3} />
        </button>
      </div>

      <div className="flex-1 flex items-center py-1 pr-4 ml-4 border-b border-[rgba(60,60,67,0.12)]" style={{ minHeight: 'var(--row-height)' }}>
        <div className="w-[40px] leading-none flex items-center justify-center mr-2 shrink-0" style={{ fontSize: 'var(--font-flag)' }}>
          {flag}
        </div>
        
        <div className="flex flex-col mr-auto">
          <span className="text-[15px] font-semibold tracking-tight text-black">
            {code}
          </span>
          <span className="text-[11px] text-[#8E8E93] font-normal leading-tight">
            {symbol}
          </span>
        </div>

        <div className="text-right shrink-0">
          <div 
            className={`font-light tracking-tight tabular-nums ${
              isSelected && isReplacing
                ? 'text-white bg-[#007AFF] px-2 py-0.5 rounded-md'
                : isSelected 
                  ? 'text-[#007AFF]' 
                  : 'text-black'
            }`}
            style={{ fontSize: 'var(--font-value)' }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyRow;

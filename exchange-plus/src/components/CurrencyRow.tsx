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
      className={`relative mx-4 mb-3 rounded-2xl transition-all duration-300 transform-style-3d ${
        isSelected 
          ? 'bg-blue-50/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(59,130,246,0.15)] scale-[1.02] ring-1 ring-blue-500/20 z-10' 
          : 'bg-white shadow-sm hover:shadow-md hover:translate-y-[-2px]'
      }`}
      onClick={isEditMode ? undefined : onClick}
    >
      <div className="p-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          {isEditMode && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.();
              }}
              className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg hover:shadow-red-500/30 active:scale-95 transition-all duration-200 animate-in fade-in slide-in-from-left-2"
            >
              삭제
            </button>
          )}
          
          <div className={`w-14 h-14 rounded-full flex items-center justify-center text-4xl shadow-sm ${
            isSelected ? 'bg-white' : 'bg-gray-50'
          }`}>
            {flag}
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className={`text-2xl font-bold tracking-tight ${isSelected ? 'text-gray-900' : 'text-gray-900'}`}>
                {code}
              </span>
              <span className="text-sm font-medium text-gray-500">{symbol}</span>
            </div>
          </div>
        </div>

        <div className={`text-right transition-all duration-300 ${isSelected ? 'scale-105' : ''}`}>
          <div className={`text-4xl font-bold tracking-tight tabular-nums ${
            isSelected 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 drop-shadow-sm' 
              : 'text-gray-900'
          }`}>
            {value}
          </div>
        </div>
      </div>
      
      {isSelected && (
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 rounded-l-2xl" />
      )}
    </div>
  );
};

export default CurrencyRow;

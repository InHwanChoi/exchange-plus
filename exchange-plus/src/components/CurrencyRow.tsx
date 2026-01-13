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
          ? 'bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] scale-[1.02] ring-1 ring-white/20 z-10' 
          : 'bg-white/5 backdrop-blur-md shadow-lg hover:bg-white/10 hover:translate-y-[-2px]'
      }`}
      onClick={isEditMode ? undefined : onClick}
    >
      <div className="p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          {isEditMode && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.();
              }}
              className="text-rose-500 animate-in fade-in slide-in-from-left-2 duration-200 hover:scale-110 transition-transform"
            >
              <MinusCircle className="w-6 h-6 fill-rose-500/20 text-rose-500" />
            </button>
          )}
          
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-3xl shadow-inner ${
            isSelected ? 'bg-gradient-to-br from-white/20 to-transparent' : 'bg-white/5'
          }`}>
            {flag}
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className={`text-xl font-bold tracking-tight ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                {code}
              </span>
              <span className="text-xs font-medium text-gray-500">{symbol}</span>
            </div>
          </div>
        </div>

        <div className={`text-right transition-all duration-300 ${isSelected ? 'scale-105' : ''}`}>
          <div className={`text-3xl font-bold tracking-tight tabular-nums ${
            isSelected 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 drop-shadow-[0_2px_10px_rgba(6,182,212,0.3)]' 
              : 'text-white'
          }`}>
            {value}
          </div>
        </div>
      </div>
      
      {isSelected && (
        <div className="absolute inset-0 rounded-2xl ring-1 ring-cyan-500/30 pointer-events-none" />
      )}
    </div>
  );
};

export default CurrencyRow;

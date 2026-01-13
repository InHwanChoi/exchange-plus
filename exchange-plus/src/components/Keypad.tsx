import React from 'react';
import { RefreshCw, Delete, Plus, Minus, X, Divide } from 'lucide-react';

interface KeypadProps {
  onKeyPress: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
  const buttons = [
    { label: 'C', color: 'text-rose-400', bg: 'bg-white/5 hover:bg-white/10' }, 
    { label: '7', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' }, 
    { label: '8', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' }, 
    { label: '9', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '4', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' }, 
    { label: '5', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' }, 
    { label: '6', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '1', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' }, 
    { label: '2', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' }, 
    { label: '3', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '0', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' }, 
    { label: '.', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10' }, 
    { label: 'Back', color: 'text-white', bg: 'bg-white/5 hover:bg-white/10', icon: <Delete className="w-5 h-5" strokeWidth={2} /> },
  ];

  return (
    <div className="p-3 bg-black/20 backdrop-blur-xl rounded-t-3xl border-t border-white/10">
      <div className="grid grid-cols-4 gap-2.5">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => !btn.disabled && onKeyPress(btn.label)}
            disabled={btn.disabled}
            className={`
              h-[58px] flex items-center justify-center text-[22px] font-medium rounded-2xl
              transition-all duration-100 active:scale-95 touch-manipulation select-none
              ${btn.bg} ${btn.color}
              ${btn.disabled ? 'opacity-0 cursor-default' : 'shadow-lg shadow-black/10 active:bg-white/20 border border-white/5'}
            `}
          >
            {btn.icon ? btn.icon : btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keypad;

import React from 'react';
import { RefreshCw, Delete, Plus, Minus, X, Divide } from 'lucide-react';

interface KeypadProps {
  onKeyPress: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
  const buttons = [
    { label: 'C', color: 'text-rose-100', bg: 'bg-gradient-to-br from-rose-500 to-rose-600 shadow-[0_4px_12px_rgba(244,63,94,0.4)]' }, 
    { label: '7', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' }, 
    { label: '8', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' }, 
    { label: '9', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '4', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' }, 
    { label: '5', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' }, 
    { label: '6', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '1', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' }, 
    { label: '2', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' }, 
    { label: '3', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '0', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' }, 
    { label: '.', color: 'text-white', bg: 'bg-white/10 hover:bg-white/20' }, 
    { label: 'Back', color: 'text-amber-400', bg: 'bg-white/10 hover:bg-white/20', icon: <Delete className="w-6 h-6" strokeWidth={2.5} /> },
  ];

  return (
    <div className="p-5 pb-8 bg-black/40 backdrop-blur-3xl rounded-t-[40px] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => !btn.disabled && onKeyPress(btn.label)}
            disabled={btn.disabled}
            className={`
              h-[64px] flex items-center justify-center text-2xl font-bold rounded-[20px]
              transition-all duration-200 active:scale-90 touch-manipulation select-none
              ${btn.bg} ${btn.color}
              ${btn.disabled ? 'opacity-0 cursor-default' : 'shadow-lg border border-white/5'}
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

import React from 'react';
import { RefreshCw, Delete, Plus, Minus, X, Divide } from 'lucide-react';

interface KeypadProps {
  onKeyPress: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
  const buttons = [
    { label: 'C', color: 'text-white', bg: 'bg-gradient-to-br from-rose-500 to-rose-600 shadow-[0_4px_12px_rgba(244,63,94,0.3)] active:shadow-inner' }, 
    { label: '7', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' }, 
    { label: '8', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' }, 
    { label: '9', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '4', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' }, 
    { label: '5', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' }, 
    { label: '6', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '1', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' }, 
    { label: '2', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' }, 
    { label: '3', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '0', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' }, 
    { label: '.', color: 'text-gray-900', bg: 'bg-white shadow-sm border-b-2 border-gray-100 hover:bg-gray-50 active:translate-y-[2px] active:border-b-0' }, 
    { label: 'Back', color: 'text-gray-500', bg: 'bg-gray-100 shadow-inner hover:bg-gray-200 active:scale-95', icon: <Delete className="w-6 h-6" strokeWidth={2.5} /> },
  ];

  return (
    <div className="p-5 pb-8 bg-gray-50/90 backdrop-blur-3xl rounded-t-[40px] border-t border-white/50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => !btn.disabled && onKeyPress(btn.label)}
            disabled={btn.disabled}
            className={`
              h-[64px] flex items-center justify-center text-3xl font-bold rounded-[24px]
              transition-all duration-200 touch-manipulation select-none
              ${btn.bg} ${btn.color}
              ${btn.disabled ? 'opacity-0 cursor-default' : ''}
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

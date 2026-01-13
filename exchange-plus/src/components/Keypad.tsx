import React from 'react';
import { Delete } from 'lucide-react';

interface KeypadProps {
  onKeyPress: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
  const buttons = [
    { label: 'C', color: 'text-black', bg: 'bg-[#D1D1D6] active:bg-[#BCBCC0]' }, 
    { label: '7', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' }, 
    { label: '8', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' }, 
    { label: '9', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '4', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' }, 
    { label: '5', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' }, 
    { label: '6', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '1', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' }, 
    { label: '2', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' }, 
    { label: '3', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' },
    { label: '', color: 'text-transparent', bg: 'bg-transparent', disabled: true }, 
    { label: '0', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' }, 
    { label: '.', color: 'text-black', bg: 'bg-white active:bg-[#E5E5E5]' }, 
    { label: 'Back', color: 'text-black', bg: 'bg-[#D1D1D6] active:bg-[#BCBCC0]', icon: <Delete className="w-5 h-5" strokeWidth={2} /> },
  ];

  return (
    <div className="pb-6 pt-3 bg-[#F2F2F7]">
      <div className="grid grid-cols-4 gap-2 px-3 max-w-sm mx-auto">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => !btn.disabled && onKeyPress(btn.label)}
            disabled={btn.disabled}
            className={`
              h-14 w-14 mx-auto flex items-center justify-center rounded-full
              text-[22px] font-normal transition-colors duration-100 touch-manipulation select-none
              shadow-[0_1px_2px_rgba(0,0,0,0.08)]
              ${btn.bg} ${btn.color}
              ${btn.disabled ? 'opacity-0 cursor-default shadow-none' : ''}
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

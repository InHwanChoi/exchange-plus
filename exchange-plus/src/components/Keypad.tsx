import React from 'react';
import { Delete } from 'lucide-react';

interface KeypadProps {
  onKeyPress: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
  const rows = [
    [
      { label: 'C', type: 'function' },
      { label: '7', type: 'number' },
      { label: '8', type: 'number' },
      { label: '9', type: 'number' },
    ],
    [
      { label: 'Back', type: 'function', icon: <Delete className="w-7 h-7" strokeWidth={1.5} /> },
      { label: '4', type: 'number' },
      { label: '5', type: 'number' },
      { label: '6', type: 'number' },
    ],
    [
      { label: '', type: 'empty' },
      { label: '1', type: 'number' },
      { label: '2', type: 'number' },
      { label: '3', type: 'number' },
    ],
    [
      { label: '', type: 'empty' },
      { label: '0', type: 'zero' },
      { label: '.', type: 'number' },
    ],
  ];

  const getButtonStyle = (type: string) => {
    switch (type) {
      case 'function':
        return 'bg-[#D4D4D2] active:bg-[#EBEBEB] text-black';
      case 'number':
      case 'zero':
        return 'bg-white active:bg-[#E5E5E5] text-black shadow-sm';
      case 'empty':
        return 'bg-transparent pointer-events-none';
      default:
        return 'bg-white active:bg-[#E5E5E5] text-black';
    }
  };

  return (
    <div className="pb-10 pt-3 px-3 bg-[#F2F2F7]">
      <div className="flex flex-col gap-[12px] max-w-[360px] mx-auto">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-[12px] justify-end">
            {row.map((btn, btnIndex) => (
              <button
                key={btnIndex}
                onClick={() => btn.type !== 'empty' && onKeyPress(btn.label)}
                className={`
                  ${btn.type === 'zero' ? 'w-[164px] rounded-full justify-start pl-8' : 'w-[75px] rounded-full justify-center'}
                  h-[75px] flex items-center
                  text-[32px] font-light transition-colors duration-75 touch-manipulation select-none
                  ${getButtonStyle(btn.type)}
                `}
              >
                {btn.icon ? btn.icon : btn.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keypad;

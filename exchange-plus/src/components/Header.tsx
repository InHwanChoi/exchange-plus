import React from 'react';
import { Pencil } from 'lucide-react';

interface HeaderProps {
  onEditToggle: () => void;
  isEditMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onEditToggle, isEditMode }) => {
  return (
    <header className="relative flex items-center justify-between px-5 py-4 sticky top-0 z-20 border-b border-white/5 bg-transparent backdrop-blur-sm">
      <div className="w-9" />
      
      <h1 className="absolute left-1/2 -translate-x-1/2 text-[17px] font-semibold tracking-tight text-white text-center">
        환율 플러스
      </h1>
      
      <div className="flex items-center gap-1">
        <div 
          onClick={onEditToggle}
          className={`p-2 rounded-full transition-all cursor-pointer mr-1 ${
            isEditMode ? 'bg-cyan-500/20 text-cyan-400' : 'hover:bg-white/10 text-white/70'
          }`}
        >
          <Pencil className="w-[18px] h-[18px]" strokeWidth={1.5} />
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)] uppercase tracking-tighter">
          PRO
        </div>
      </div>
    </header>
  );
};

export default Header;

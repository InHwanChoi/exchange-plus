import React from 'react';
import { Pencil } from 'lucide-react';

interface HeaderProps {
  onEditToggle: () => void;
  isEditMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onEditToggle, isEditMode }) => {
  return (
    <header className="relative flex items-center justify-between px-6 py-6 sticky top-0 z-20 bg-transparent">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold tracking-tight text-white/90">
          환율 플러스
        </h1>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] animate-pulse-glow uppercase tracking-wide">
          PRO
        </div>
      </div>
      
      <button 
        onClick={onEditToggle}
        className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${
          isEditMode 
            ? 'bg-rose-500/20 text-rose-400 ring-1 ring-rose-500/50' 
            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
        }`}
      >
        {isEditMode ? '완료' : '편집'}
      </button>
    </header>
  );
};

export default Header;

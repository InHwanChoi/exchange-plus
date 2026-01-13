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
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          환율 플러스
        </h1>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-[0_4px_12px_rgba(6,182,212,0.3)] uppercase tracking-wide">
          PRO
        </div>
      </div>
      
      <button 
        onClick={onEditToggle}
        className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${
          isEditMode 
            ? 'bg-rose-100 text-rose-600 ring-1 ring-rose-200' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
        }`}
      >
        {isEditMode ? '완료' : '편집'}
      </button>
    </header>
  );
};

export default Header;

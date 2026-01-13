import React from 'react';

interface HeaderProps {
  onEditToggle: () => void;
  isEditMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onEditToggle, isEditMode }) => {
  return (
    <header className="px-5 pt-12 pb-2 bg-[rgba(255,255,255,0.85)] backdrop-blur-md sticky top-0 z-30 border-b border-[rgba(0,0,0,0.1)] transition-colors duration-300">
      <div className="flex items-center justify-between h-[44px]">
        <h1 className="text-[34px] font-bold tracking-tight text-black leading-none">
          환율 플러스
        </h1>
        
        <button 
          onClick={onEditToggle}
          className="text-[17px] text-[#007AFF] font-normal active:opacity-50 transition-opacity"
        >
          {isEditMode ? '완료' : '편집'}
        </button>
      </div>
    </header>
  );
};

export default Header;


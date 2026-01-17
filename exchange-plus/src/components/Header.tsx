import React from 'react';
import { TrendingUp } from 'lucide-react';

interface HeaderProps {
  onEditToggle: () => void;
  isEditMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onEditToggle, isEditMode }) => {
  return (
    <header className="px-5 pt-12 pb-2 bg-[rgba(255,255,255,0.85)] backdrop-blur-md sticky top-0 z-30 border-b border-[rgba(0,0,0,0.1)] transition-colors duration-300">
      <div className="flex items-center justify-between h-[44px]">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-[#007AFF] to-[#5856D6] rounded-xl flex items-center justify-center shadow-md">
            <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[24px] font-semibold text-black" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", sans-serif' }}>
            환율플러스
          </span>
        </div>
        
        <button 
          onClick={onEditToggle}
          className="text-[17px] font-semibold text-[#007AFF] active:opacity-50 transition-opacity cursor-pointer min-w-[44px] text-right"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Text", sans-serif' }}
        >
          {isEditMode ? '완료' : '편집'}
        </button>
      </div>
    </header>
  );
};

export default Header;

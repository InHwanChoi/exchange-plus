import React from 'react';
import { RefreshCw, LineChart } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="flex items-center bg-white px-2 py-1.5 pb-6 border-t border-gray-100 shadow-[0_-1px_3px_rgba(0,0,0,0.02)]">
      <button className="flex-1 flex flex-col items-center gap-1.5 py-2 transition-all active:scale-95 text-[#007AFF]">
        <div className="p-1.5 bg-blue-50 rounded-xl">
          <RefreshCw className="w-[22px] h-[22px]" strokeWidth={2.5} />
        </div>
        <span className="text-[11px] font-bold tracking-tight">변환기</span>
      </button>
      <button className="flex-1 flex flex-col items-center gap-1.5 py-2 transition-all active:scale-95 text-gray-400">
        <div className="p-1.5 rounded-xl hover:bg-gray-50">
          <LineChart className="w-[22px] h-[22px]" strokeWidth={2} />
        </div>
        <span className="text-[11px] font-medium tracking-tight">차트</span>
      </button>
    </nav>
  );
};

export default BottomNav;

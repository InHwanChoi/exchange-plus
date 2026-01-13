import React from 'react';
import { Sparkles } from 'lucide-react';

const AdBanner = () => {
  return (
    <div className="mx-4 my-8 p-0.5 bg-gradient-to-r from-purple-200 via-cyan-200 to-blue-200 rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
      <div className="bg-white rounded-[14px] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-inner animate-pulse">
            <Sparkles className="w-5 h-5 text-amber-500" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 leading-tight">
              Premium Upgrade
            </p>
            <p className="text-[11px] text-gray-500 mt-0.5">
              광고 없는 쾌적한 환경
            </p>
          </div>
        </div>
        <button className="relative overflow-hidden bg-gray-900 text-white text-[12px] font-bold px-5 py-2.5 rounded-full shadow-lg active:scale-95 transition-all hover:bg-gray-800 group">
          <span className="relative z-10">지금 제거</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </button>
      </div>
    </div>
  );
};

export default AdBanner;

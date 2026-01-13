import React from 'react';
import { Sparkles } from 'lucide-react';

const AdBanner = () => {
  return (
    <div className="mx-4 my-8 p-0.5 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-blue-500/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform duration-300">
      <div className="bg-[#111827]/90 backdrop-blur-xl rounded-[14px] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 flex items-center justify-center shadow-inner animate-pulse">
            <Sparkles className="w-5 h-5 text-amber-400" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">
              Premium Upgrade
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              광고 없는 쾌적한 환경
            </p>
          </div>
        </div>
        <button className="relative overflow-hidden bg-white text-black text-[12px] font-bold px-5 py-2.5 rounded-full shadow-lg active:scale-95 transition-all hover:bg-gray-100 group">
          <span className="relative z-10">지금 제거</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </button>
      </div>
    </div>
  );
};

export default AdBanner;

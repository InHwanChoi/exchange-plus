import React from 'react';
import { Sparkles } from 'lucide-react';

const AdBanner = () => {
  return (
    <div className="mx-5 my-6 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-[20px] flex items-center justify-between border border-white/5 shadow-lg shadow-black/5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shadow-sm backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-amber-300" strokeWidth={2.5} />
        </div>
        <p className="text-[13px] font-medium text-gray-300 leading-tight">
          광고를 제거하고<br />
          <span className="text-gray-500 font-normal">앱을 지원해주세요!</span>
        </p>
      </div>
      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[13px] font-bold px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] active:scale-95 transition-all">
        제거
      </button>
    </div>
  );
};

export default AdBanner;

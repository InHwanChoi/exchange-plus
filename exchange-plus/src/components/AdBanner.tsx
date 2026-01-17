import React from 'react';

const AdBanner = () => {
  return (
    <div className="mx-4 mt-[6px] mb-8 p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[15px] font-semibold text-black">
            Exchange Plus Pro
          </p>
          <p className="text-[13px] text-[#8E8E93] mt-0.5">
            광고 없이 더 쾌적하게 사용하세요
          </p>
        </div>
        <button className="bg-[#007AFF] text-white text-[13px] font-semibold px-4 py-1.5 rounded-full active:opacity-70 transition-opacity">
          업그레이드
        </button>
      </div>
    </div>
  );
};

export default AdBanner;

'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CurrencyRow from '@/components/CurrencyRow';
import Keypad from '@/components/Keypad';
import BottomNav from '@/components/BottomNav';
import AdBanner from '@/components/AdBanner';
import AddCurrencyModal from '@/components/AddCurrencyModal';
import { Plus } from 'lucide-react';

export default function Home() {
  const [selectedCode, setSelectedCode] = useState('USD');
  const [inputValue, setInputValue] = useState('1');
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rates, setRates] = useState<Record<string, number>>({
    USD: 1, CNY: 7.24, KRW: 1446.55, JPY: 158.46, EUR: 0.96, HKD: 7.78, MOP: 8.02,
  });
  const [lastUpdate, setLastUpdate] = useState('...');

  const [activeCurrencies, setActiveCurrencies] = useState([
    { flag: '🇺🇸', code: 'USD', symbol: 'US 달러' },
    { flag: '🇭🇰', code: 'HKD', symbol: '홍콩 달러' },
    { flag: '🇲🇴', code: 'MOP', symbol: '마카오 파타카' },
    { flag: '🇨🇳', code: 'CNY', symbol: '중국 위안' },
    { flag: '🇰🇷', code: 'KRW', symbol: '대한민국 원' },
    { flag: '🇯🇵', code: 'JPY', symbol: '일본 엔' },
  ]);

  const allCurrencyData: Record<string, { flag: string, symbol: string, symbolEn: string }> = {
    USD: { flag: '🇺🇸', symbol: '미국 달러', symbolEn: 'US Dollar' },
    KRW: { flag: '🇰🇷', symbol: '대한민국 원', symbolEn: 'South Korean Won' },
    JPY: { flag: '🇯🇵', symbol: '일본 엔', symbolEn: 'Japanese Yen' },
    EUR: { flag: '🇪🇺', symbol: '유로', symbolEn: 'Euro' },
    CNY: { flag: '🇨🇳', symbol: '중국 위안', symbolEn: 'Chinese Yuan' },
    HKD: { flag: '🇭🇰', symbol: '홍콩 달러', symbolEn: 'Hong Kong Dollar' },
    MOP: { flag: '🇲🇴', symbol: '마카오 파타카', symbolEn: 'Macau Pataca' },
    GBP: { flag: '🇬🇧', symbol: '영국 파운드', symbolEn: 'British Pound' },
    AUD: { flag: '🇦🇺', symbol: '호주 달러', symbolEn: 'Australian Dollar' },
    CAD: { flag: '🇨🇦', symbol: '캐나다 달러', symbolEn: 'Canadian Dollar' },
    DKK: { flag: '🇩🇰', symbol: '덴마크 크로네', symbolEn: 'Danish Krone' },
    SGD: { flag: '🇸🇬', symbol: '싱가포르 달러', symbolEn: 'Singapore Dollar' },
    CHF: { flag: '🇨🇭', symbol: '스위스 프랑', symbolEn: 'Swiss Franc' },
    TWD: { flag: '🇹🇼', symbol: '대만 달러', symbolEn: 'Taiwan Dollar' },
    THB: { flag: '🇹🇭', symbol: '태국 바트', symbolEn: 'Thai Baht' },
    VND: { flag: '🇻🇳', symbol: '베트남 동', symbolEn: 'Vietnamese Dong' },
    PHP: { flag: '🇵🇭', symbol: '필리핀 페소', symbolEn: 'Philippine Peso' },
    MYR: { flag: '🇲🇾', symbol: '말레이시아 링깃', symbolEn: 'Malaysian Ringgit' },
    IDR: { flag: '🇮🇩', symbol: '인도네시아 루피아', symbolEn: 'Indonesian Rupiah' },
    INR: { flag: '🇮🇳', symbol: '인도 루피', symbolEn: 'Indian Rupee' },
    RUB: { flag: '🇷🇺', symbol: '러시아 루블', symbolEn: 'Russian Ruble' },
    BRL: { flag: '🇧🇷', symbol: '브라질 레알', symbolEn: 'Brazilian Real' },
    ZAR: { flag: '🇿🇦', symbol: '남아공 랜드', symbolEn: 'South African Rand' },
    MXN: { flag: '🇲🇽', symbol: '멕시코 페소', symbolEn: 'Mexican Peso' },
    ILS: { flag: '🇮🇱', symbol: '이스라엘 셰켈', symbolEn: 'Israeli Shekel' },
    TRY: { flag: '🇹🇷', symbol: '터키 리라', symbolEn: 'Turkish Lira' },
    NZD: { flag: '🇳🇿', symbol: '뉴질랜드 달러', symbolEn: 'New Zealand Dollar' },
    NOK: { flag: '🇳🇴', symbol: '노르웨이 크로네', symbolEn: 'Norwegian Krone' },
    SEK: { flag: '🇸🇪', symbol: '스웨덴 크로나', symbolEn: 'Swedish Krona' },
    AED: { flag: '🇦🇪', symbol: '아랍에미리트 디르함', symbolEn: 'UAE Dirham' },
    SAR: { flag: '🇸🇦', symbol: '사우디 리얄', symbolEn: 'Saudi Riyal' },
    PLN: { flag: '🇵🇱', symbol: '폴란드 즈워티', symbolEn: 'Polish Zloty' },
    HUF: { flag: '🇭🇺', symbol: '헝가리 포린트', symbolEn: 'Hungarian Forint' },
    CZK: { flag: '🇨🇿', symbol: '체코 코루나', symbolEn: 'Czech Koruna' },
  };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        if (data?.rates) {
          setRates(data.rates);
          const date = new Date(data.time_last_update_utc);
          setLastUpdate(date.toLocaleString('ko-KR', {
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false
          }));
        }
      } catch (e) {
        setLastUpdate('Offline');
      }
    };
    fetchRates();
  }, []);

  const handleKeyPress = (key: string) => {
    if (key === 'C') return setInputValue('0');
    if (key === 'Back') return setInputValue(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
    if (key === '.') return setInputValue(prev => prev.includes('.') ? prev : prev + '.');
    if (/[0-9]/.test(key)) return setInputValue(prev => prev === '0' ? key : prev + key);
    if (key === 'Swap') {
    }
  };

  const deleteCurrency = (code: string) => {
    if (activeCurrencies.length <= 1) return;
    setActiveCurrencies(prev => prev.filter(c => c.code !== code));
    if (selectedCode === code) {
      const next = activeCurrencies.find(c => c.code !== code);
      if (next) setSelectedCode(next.code);
    }
  };

  const addCurrency = (code: string) => {
    if (activeCurrencies.find(c => c.code === code)) return;
    const data = allCurrencyData[code] || { flag: '🏳️', symbol: code };
    setActiveCurrencies(prev => [...prev, { code, ...data }]);
  };

  const formatValue = (code: string) => {
    if (code === selectedCode) {
      const parts = inputValue.split('.');
      const integerPart = parts[0] === '' ? '0' : parts[0];
      const formattedInteger = new Intl.NumberFormat('ko-KR').format(Number(integerPart));
      return parts.length > 1 ? `${formattedInteger}.${parts[1]}` : formattedInteger;
    }
    const numericValue = parseFloat(inputValue) || 0;
    const valueInUSD = numericValue / (rates[selectedCode] || 1);
    const targetValue = valueInUSD * (rates[code] || 1);
    return new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 2 }).format(targetValue);
  };

  return (
    <main className="min-h-screen bg-[#f0f2f5] flex justify-center items-center p-0 sm:p-8 font-sans overflow-hidden">
      <div className="w-full max-w-[480px] bg-white sm:rounded-[48px] shadow-2xl h-screen sm:h-[95vh] overflow-hidden border-0 sm:border-[8px] border-white relative flex flex-col ring-1 ring-black/5">
        
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-multiply animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none opacity-50 mix-blend-multiply animate-float" style={{ animationDelay: '1.5s' }} />

        <Header 
          isEditMode={isEditMode} 
          onEditToggle={() => setIsEditMode(!isEditMode)} 
        />
        
        <div className="px-6 pb-4 relative z-10 flex justify-end">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
             Updated: {lastUpdate}
           </p>
        </div>
        
        <div className="flex-1 overflow-y-auto scrollbar-hide relative z-10 pt-2 pb-6">
          <div className="flex flex-col">
            {activeCurrencies.map(curr => (
              <CurrencyRow
                key={curr.code}
                {...curr}
                value={formatValue(curr.code)}
                isSelected={curr.code === selectedCode}
                isEditMode={isEditMode}
                onClick={() => setSelectedCode(curr.code)}
                onDelete={() => deleteCurrency(curr.code)}
              />
            ))}
          </div>
          
          <div className="px-4 mt-2 mb-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-5 border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center gap-2 text-gray-400 hover:text-cyan-600 hover:border-cyan-200 hover:bg-cyan-50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-cyan-100">
                <Plus className="w-5 h-5 group-hover:text-cyan-600 transition-colors" />
              </div>
              <span className="font-bold text-sm">새 통화 추가하기</span>
            </button>
          </div>
          
          <AdBanner />
        </div>

        <div className="relative z-20">
          <Keypad onKeyPress={handleKeyPress} />
        </div>

        <AddCurrencyModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={addCurrency}
          availableCodes={Object.keys(rates)}
          allCurrencyData={allCurrencyData}
        />
      </div>
    </main>
  );

}

import { createContext, useContext, useState, useEffect } from 'react';
import { getExchangeRate } from '../utils/exchangeRate';

const ExchangeRateContext = createContext(null);

export function ExchangeRateProvider({ children }) {
  const [exchangeRate, setExchangeRate] = useState(17.59); // Default fallback
  const [isApiRate, setIsApiRate] = useState(false);
  const [rateDate, setRateDate] = useState('Đang cập nhật...');

  useEffect(() => {
    getExchangeRate().then(data => {
      setExchangeRate(data.rate);
      setIsApiRate(data.isApiRate);
      setRateDate(data.rateDate);
    });
  }, []);

  const changeRate = (newRate) => {
    setExchangeRate(newRate);
    setIsApiRate(false);
    setRateDate('Tùy chỉnh');
  };

  return (
    <ExchangeRateContext.Provider value={{ exchangeRate, isApiRate, rateDate, changeRate }}>
      {children}
    </ExchangeRateContext.Provider>
  );
}

export function useExchangeRate() {
  const context = useContext(ExchangeRateContext);
  if (!context) {
    throw new Error('useExchangeRate must be used within an ExchangeRateProvider');
  }
  return context;
}

export const DEFAULT_EXCHANGE_RATE = 18.5; // 1 KRW = 18.5 VND

/**
 * Convert KRW to VND based on the exchange rate
 * @param {number} krwAmount 
 * @param {number} rate 
 * @returns {number}
 */
export const krwToVnd = (krwAmount, rate = DEFAULT_EXCHANGE_RATE) => {
  if (!krwAmount) return 0;
  return krwAmount * rate;
};

/**
 * Format currency with proper separators
 * @param {number} amount 
 * @param {string} currency 'KRW' | 'VND'
 * @returns {string}
 */
export const formatCurrency = (amount, currency = 'KRW') => {
  if (amount === null || amount === undefined || isNaN(amount)) return 'N/A';
  
  if (currency === 'KRW') {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      maximumFractionDigits: 0
    }).format(amount);
  } else {
    // Vietnamese Dong format (using vi-VN locale which uses dots as separators)
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(amount);
  }
};

/**
 * Format currency to a shorter compact style (e.g., 2.5 Tr hoặc 2.5M ₩)
 * @param {number} amount 
 * @param {string} currency 'KRW' | 'VND'
 * @param {number} rate Only used if converting KRW to VND inside the function
 * @returns {string}
 */
export const formatCompact = (amount, currency = 'KRW') => {
  if (amount === null || amount === undefined || isNaN(amount)) return 'N/A';

  if (currency === 'KRW') {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(2).replace(/\.00$/, '')}M ₩`;
    }
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      maximumFractionDigits: 0
    }).format(amount);
  } else {
    // VND - e.g., 46.25 triệu ₫
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(2).replace(/\.00$/, '')} Tỷ ₫`;
    }
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1).replace(/\.0$/, '')} Triệu ₫`;
    }
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(amount);
  }
};

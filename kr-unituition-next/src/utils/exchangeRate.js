const CACHE_KEY = 'krw_vnd_rate';
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 giờ
const FALLBACK_RATE = 17.59;

export async function getKRWtoVND() {
  // 1. Đọc cache
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (cached && Date.now() - cached.fetchedAt < CACHE_TTL) {
      return cached;
    }
  } catch {}

  // 2. Fetch from local Next.js API first
  try {
    const res = await fetch('/api/exchange-rate');
    if (res.ok) {
      const data = await res.json();
      if (data && data.rate) {
        const result = { 
          rate: data.rate, 
          fetchedAt: Date.now(), 
          isFallback: !data.isApiRate,
          rateDate: data.rateDate 
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(result));
        return result;
      }
    }
  } catch {}

  // 3. Fetch primary API (external fallback)
  const apis = [
    'https://open.er-api.com/v6/latest/KRW',
    'https://api.exchangerate-api.com/v4/latest/KRW',
  ];

  for (const url of apis) {
    try {
      const res = await Promise.race([
        fetch(url),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 5000))
      ]);
      const data = await res.json();
      const rate = data?.rates?.VND || data?.conversion_rates?.VND;
      if (rate) {
        const result = { rate, fetchedAt: Date.now(), isFallback: false };
        localStorage.setItem(CACHE_KEY, JSON.stringify(result));
        return result;
      }
    } catch {}
  }

  // 4. Fallback
  return { rate: FALLBACK_RATE, fetchedAt: Date.now(), isFallback: true };
}

export function convertKRWtoVND(krw, rate) {
  if (!krw) return '0 ₫';
  const vnd = Math.round((krw * rate) / 1000) * 1000;
  return vnd.toLocaleString('vi-VN') + ' ₫';
}

// For compatibility with any legacy imports
export async function getExchangeRate() {
  const data = await getKRWtoVND();
  
  const dateObj = new Date(data.fetchedAt);
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const rateDate = `cập nhật ${hours}:${minutes}`;

  return {
    rate: data.rate,
    isApiRate: !data.isFallback,
    rateDate: rateDate,
    lastUpdated: data.fetchedAt
  };
}

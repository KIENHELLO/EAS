/**
 * Logic fetch + cache tỷ giá KRW/VND với TTL 6 giờ
 */
export async function getExchangeRate() {
  const CACHE_KEY = 'krw_vnd_rate_cache';
  const CACHE_TIME_KEY = 'krw_vnd_rate_cache_time';
  const TTL = 6 * 60 * 60 * 1000; // 6 giờ tính bằng miliseconds

  const cachedRate = localStorage.getItem(CACHE_KEY);
  const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
  const now = Date.now();

  // 1. Kiểm tra Cache hợp lệ (trong vòng 6 giờ)
  if (cachedRate && cachedTime && (now - parseInt(cachedTime, 10) < TTL)) {
    const rateVal = parseFloat(cachedRate);
    const dateObj = new Date(parseInt(cachedTime, 10));
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    return {
      rate: rateVal,
      isApiRate: true,
      rateDate: `Tự động: ${hours}:${minutes} ${day}/${month}/${year}`,
      lastUpdated: parseInt(cachedTime, 10)
    };
  }

  // 2. Cache hết hạn hoặc không tồn tại, gọi API
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/KRW');
    if (!response.ok) throw new Error('API response not ok');
    const data = await response.json();
    
    if (data && data.rates && data.rates.VND) {
      const rateVal = parseFloat(data.rates.VND.toFixed(2));
      localStorage.setItem(CACHE_KEY, rateVal.toString());
      localStorage.setItem(CACHE_TIME_KEY, now.toString());

      const dateObj = new Date(now);
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const year = dateObj.getFullYear();
      const hours = String(dateObj.getHours()).padStart(2, '0');
      const minutes = String(dateObj.getMinutes()).padStart(2, '0');

      return {
        rate: rateVal,
        isApiRate: true,
        rateDate: `Tự động: ${hours}:${minutes} ${day}/${month}/${year}`,
        lastUpdated: now
      };
    }
  } catch (err) {
    console.error("Error fetching exchange rate from API:", err);
  }

  // 3. Xử lý Fallback khi API lỗi
  // Nếu có cache cũ thì dùng tiếp (nhưng đánh dấu là ngoại tuyến)
  if (cachedRate) {
    const rateVal = parseFloat(cachedRate);
    const dateObj = new Date(parseInt(cachedTime, 10));
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    return {
      rate: rateVal,
      isApiRate: true,
      rateDate: `Ngoại tuyến: ${hours}:${minutes} ${day}/${month}/${year}`,
      lastUpdated: parseInt(cachedTime, 10)
    };
  }

  // Mặc định hoàn toàn nếu chưa từng có cache
  const fallbackDate = new Date();
  const day = String(fallbackDate.getDate()).padStart(2, '0');
  const month = String(fallbackDate.getMonth() + 1).padStart(2, '0');
  const year = fallbackDate.getFullYear();

  return {
    rate: 18.5,
    isApiRate: false,
    rateDate: `Mặc định: Tham khảo ${day}/${month}/${year}`,
    lastUpdated: now
  };
}

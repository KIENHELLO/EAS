import { NextResponse } from 'next/server';

const FALLBACK_RATE = 17.59;

export async function GET() {
  const apis = [
    'https://open.er-api.com/v6/latest/KRW',
    'https://api.exchangerate-api.com/v4/latest/KRW',
  ];

  for (const url of apis) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 4000);

      const res = await fetch(url, { 
        signal: controller.signal,
        next: { revalidate: 21600 } // Cache server-side for 6 hours
      });
      
      clearTimeout(id);
      
      if (res.ok) {
        const data = await res.json();
        const rate = data?.rates?.VND || data?.conversion_rates?.VND;
        
        if (rate) {
          const dateObj = new Date();
          const hours = String(dateObj.getHours()).padStart(2, '0');
          const minutes = String(dateObj.getMinutes()).padStart(2, '0');
          
          return NextResponse.json({
            rate: Number(rate.toFixed(2)),
            isApiRate: true,
            rateDate: `cập nhật ${hours}:${minutes}`,
          });
        }
      }
    } catch (err) {
      console.error(`Error fetching rate from ${url}:`, err);
    }
  }

  // Return fallback rate if APIs fail
  const dateObj = new Date();
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  
  return NextResponse.json({
    rate: FALLBACK_RATE,
    isApiRate: false,
    rateDate: `cập nhật ${hours}:${minutes} (tạm thời)`,
  });
}

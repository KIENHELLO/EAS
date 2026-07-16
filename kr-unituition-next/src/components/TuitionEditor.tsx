'use client';

import { useState, useEffect } from 'react';
import { Coins, HelpCircle, Check, AlertCircle, Copy, ArrowUpDown, ChevronDown, X } from 'lucide-react';

interface TuitionRates {
  humanities_social: number | null;
  natural_sciences: number | null;
  engineering: number | null;
  arts_sports: number | null;
  medicine_pharmacy: number | null;
}

interface University {
  id: string;
  name_vi: string;
  name_en: string;
  name_ko: string;
  logo?: string;
  tuition: TuitionRates;
  tuition_history?: Record<string, TuitionRates>;
  region: string;
  campus_address?: string;
}

export default function TuitionEditor({ initialUniversities }: { initialUniversities: University[] }) {
  const [universities, setUniversities] = useState<University[]>(initialUniversities);
  const [selectedSchoolId, setSelectedSchoolId] = useState(initialUniversities[0]?.id || '');
  const [selectedYear, setSelectedYear] = useState('2026');
  const [exchangeRate, setExchangeRate] = useState(17.59);
  
  // Inline edit state
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState<string>('');
  
  // Clone Modal state
  const [isCloneModalOpen, setIsCloneModalOpen] = useState(false);
  const [cloneSettings, setCloneSettings] = useState({
    newYear: '',
    sourceYear: '2026',
    percentAdjust: 0,
    setActive: true
  });
  
  // Feedback toast state
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Fetch exchange rate on mount
  useEffect(() => {
    async function fetchRate() {
      try {
        const res = await fetch('/api/exchange-rate');
        if (res.ok) {
          const data = await res.json();
          setExchangeRate(data.rate);
        }
      } catch (err) {
        console.error('Failed to fetch exchange rate', err);
      }
    }
    fetchRate();
  }, []);

  // Collect all available years across all universities
  const yearsSet = new Set<string>(['2025', '2026']);
  universities.forEach((u) => {
    if (u.tuition_history) {
      Object.keys(u.tuition_history).forEach((yr) => yearsSet.add(yr));
    }
  });
  const yearsList = Array.from(yearsSet).sort();

  const selectedSchool = universities.find((u) => u.id === selectedSchoolId);

  // Get tuition rates for selected school and year
  const getTuitionRatesForYear = (school: University, year: string): TuitionRates => {
    // If historical records exist and contains the year, use it
    if (school.tuition_history && school.tuition_history[year]) {
      return school.tuition_history[year];
    }
    // Fallback: if selected year is 2026, use active tuition
    if (year === '2026') {
      return school.tuition;
    }
    // Return empty fallback
    return {
      humanities_social: null,
      natural_sciences: null,
      engineering: null,
      arts_sports: null,
      medicine_pharmacy: null,
    };
  };

  const currentRates = selectedSchool ? getTuitionRatesForYear(selectedSchool, selectedYear) : null;

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // 1. Inline edit action
  const startEditing = (field: string, val: number | null) => {
    setEditingField(field);
    setEditingValue(val === null ? '' : String(val));
  };

  const saveTuition = async (field: keyof TuitionRates) => {
    if (!selectedSchool || !currentRates) return;

    const numValue = editingValue === '' ? null : Number(editingValue);
    if (numValue !== null && (isNaN(numValue) || numValue < 0)) {
      showToast('Học phí phải là số dương hoặc để trống!', 'error');
      setEditingField(null);
      return;
    }

    // Prepare updated rates
    const updatedRates = {
      ...currentRates,
      [field]: numValue,
    };

    // Build updated history
    const updatedHistory = {
      ...(selectedSchool.tuition_history || {}),
      [selectedYear]: updatedRates,
    };

    // If edited year is 2026 (active), update primary tuition as well
    const primaryTuitionUpdate = selectedYear === '2026' ? updatedRates : selectedSchool.tuition;

    try {
      const res = await fetch('/api/universities', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedSchool.id,
          tuition: primaryTuitionUpdate,
          tuition_history: updatedHistory,
        }),
      });

      if (res.ok) {
        const updatedSchool = await res.json();
        setUniversities(universities.map(u => u.id === selectedSchool.id ? updatedSchool : u));
        showToast('Cập nhật học phí thành công!', 'success');
      } else {
        showToast('Lỗi cập nhật học phí từ máy chủ!', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Đã xảy ra lỗi kết nối mạng!', 'error');
    }

    setEditingField(null);
  };

  // 2. Clone tuition to a new year across ALL schools
  const handleCloneYear = async (e: React.FormEvent) => {
    e.preventDefault();
    const { newYear, sourceYear, percentAdjust, setActive } = cloneSettings;

    if (!newYear || !newYear.match(/^\d{4}$/)) {
      showToast('Vui lòng nhập năm học mới gồm 4 chữ số (VD: 2027)!', 'error');
      return;
    }

    if (newYear === sourceYear) {
      showToast('Năm học mới phải khác năm nguồn!', 'error');
      return;
    }

    const multiplier = 1 + percentAdjust / 100;
    
    // Process all schools locally first
    const updatedUniversities = universities.map((u) => {
      const sourceRates = getTuitionRatesForYear(u, sourceYear);
      
      // Calculate cloned rates
      const clonedRates: TuitionRates = {
        humanities_social: sourceRates.humanities_social ? Math.round(sourceRates.humanities_social * multiplier) : null,
        natural_sciences: sourceRates.natural_sciences ? Math.round(sourceRates.natural_sciences * multiplier) : null,
        engineering: sourceRates.engineering ? Math.round(sourceRates.engineering * multiplier) : null,
        arts_sports: sourceRates.arts_sports ? Math.round(sourceRates.arts_sports * multiplier) : null,
        medicine_pharmacy: sourceRates.medicine_pharmacy ? Math.round(sourceRates.medicine_pharmacy * multiplier) : null,
      };

      const uHistory = {
        ...(u.tuition_history || {}),
        [newYear]: clonedRates,
      };

      return {
        ...u,
        tuition: setActive ? clonedRates : u.tuition,
        tuition_history: uHistory,
      };
    });

    try {
      // In a real application we would write a bulk endpoint, or submit them
      // We will perform updates by modifying each school in EASS API sequence,
      // or we can save them in one single payload via an extended PATCH API in route.ts.
      // Let's call the API to write the entire universities array back.
      // We can extend PATCH API to support bulk list save if id is omit, or call sequentially.
      // Since EASS has a single database file, calling PATCH for each university could take too long.
      // Let's make a bulk update endpoint, or since EASS API route supports bulk updates,
      // we can check route.ts. In our route.ts we wrote: `const { id, ...updates } = body;` which expects a single id.
      // Let's modify all of them client-side and submit one-by-one, or update them in sequence.
      // Since it's local Node.js API, saving sequentially (20 schools) is very fast (~100ms).
      // Wait, is there a faster way? Let's check how many schools we have.
      // Let's perform sequential PATCH requests, or we can update just the current school,
      // or we can run sequential updates for all of them.
      // Let's do a loop of PATCH requests. To speed it up, we can use Promise.all.
      
      showToast('Đang thực hiện nhân bản năm học...', 'success');
      
      const promises = updatedUniversities.map(async (u) => {
        return fetch('/api/universities', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: u.id,
            tuition: u.tuition,
            tuition_history: u.tuition_history,
          }),
        });
      });

      await Promise.all(promises);

      // Reload local state
      setUniversities(updatedUniversities);
      setSelectedYear(newYear);
      setIsCloneModalOpen(false);
      setCloneSettings({ newYear: '', sourceYear: '2026', percentAdjust: 0, setActive: true });
      showToast(`Nhân bản học phí sang năm ${newYear} thành công!`, 'success');
    } catch (err) {
      console.error(err);
      showToast('Không thể nhân bản học phí. Lỗi kết nối!', 'error');
    }
  };

  const formatVnd = (wonAmount: number | null) => {
    if (wonAmount === null) return '—';
    const vndAmount = wonAmount * exchangeRate;
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(vndAmount);
  };

  const formatWon = (wonAmount: number | null) => {
    if (wonAmount === null) return '—';
    return new Intl.NumberFormat('ko-KR').format(wonAmount) + ' ₩';
  };

  const majorLabels = {
    humanities_social: 'Nhân văn / Xã hội / Kinh tế',
    natural_sciences: 'Khoa học Tự nhiên',
    engineering: 'Kỹ thuật / Công nghệ / Điện tử',
    arts_sports: 'Nghệ thuật / Thể dục thể thao',
    medicine_pharmacy: 'Y học / Dược khoa',
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 p-4 rounded-[16px] shadow-lg flex items-center gap-3 border transition-all ${
          toast.type === 'success' 
            ? 'bg-[#c7f0da] border-[#103c25]/10 text-[#103c25]' 
            : 'bg-[#cc001f]/5 border-[#cc001f]/10 text-[#cc001f]'
        }`}>
          {toast.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
          <span className="text-sm font-bold">{toast.message}</span>
        </div>
      )}

      {/* Control Filters Panel */}
      <div className="bg-white rounded-[24px] p-6 border border-[#e5e5e0] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* School Select */}
          <div>
            <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Trường học</label>
            <div className="relative">
              <select
                value={selectedSchoolId}
                onChange={(e) => setSelectedSchoolId(e.target.value)}
                className="w-full h-11 pl-4 pr-10 rounded-[16px] border border-[#dadad3] bg-white text-sm font-semibold focus:border-black outline-none appearance-none"
              >
                {universities.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name_vi} ({u.name_en})
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#62625b]">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Year Select */}
          <div>
            <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Năm học</label>
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full h-11 pl-4 pr-10 rounded-[16px] border border-[#dadad3] bg-white text-sm font-semibold focus:border-black outline-none appearance-none"
              >
                {yearsList.map((yr) => (
                  <option key={yr} value={yr}>
                    Năm học {yr} {yr === '2026' ? '(Hoạt động)' : ''}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#62625b]">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Clone Button */}
        <div className="pt-2 md:pt-4">
          <button
            onClick={() => setIsCloneModalOpen(true)}
            className="h-11 px-5 rounded-[16px] bg-black text-white hover:bg-neutral-800 active:scale-95 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer w-full md:w-auto justify-center"
          >
            <Copy size={14} />
            Nhân bản năm học
          </button>
        </div>
      </div>

      {/* School Header & Exchange rate Info */}
      {selectedSchool && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#fbfbf9] p-5 rounded-[20px] border border-[#dadad3]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white border border-[#dadad3] flex items-center justify-center font-bold text-[#e60023] overflow-hidden text-lg">
              {selectedSchool.logo ? (
                <img src={selectedSchool.logo} alt="Logo" className="w-full h-full object-contain p-1" />
              ) : (
                selectedSchool.name_vi.charAt(0)
              )}
            </div>
            <div>
              <h2 className="text-lg font-bold text-black">{selectedSchool.name_vi}</h2>
              <p className="text-xs text-[#62625b] mt-0.5">{selectedSchool.campus_address || selectedSchool.region}</p>
            </div>
          </div>

          <div className="text-right sm:text-right">
            <p className="text-xs text-[#62625b]">Tỷ giá quy đổi (Won sang VND)</p>
            <p className="text-sm font-bold text-black mt-1">1 ₩ = {exchangeRate} VND</p>
            <p className="text-[10px] text-[#91918c]">Theo thời gian thực của hệ thống</p>
          </div>
        </div>
      )}

      {/* Tuition Pricing Grid */}
      <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#e5e5e0] overflow-hidden">
        <div className="p-5 border-b border-[#e5e5e0] flex items-center gap-2 bg-[#fbfbf9]">
          <Coins size={16} className="text-[#e60023]" />
          <h3 className="text-sm font-bold text-black uppercase tracking-wider">Học phí theo nhóm ngành (Năm {selectedYear})</h3>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#dadad3] text-xs font-bold text-[#62625b] bg-[#fbfbf9]/50">
              <th className="px-6 py-4">Nhóm ngành đào tạo</th>
              <th className="px-6 py-4">Học phí một kỳ (KRW - Won)</th>
              <th className="px-6 py-4">Học phí quy đổi (VND)</th>
              <th className="px-6 py-4 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e5e0]">
            {currentRates &&
              (Object.keys(majorLabels) as Array<keyof TuitionRates>).map((key) => {
                const isEditing = editingField === key;
                const value = currentRates[key];

                return (
                  <tr key={key} className="hover:bg-[#fbfbf9]/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-black">{majorLabels[key]}</td>
                    <td className="px-6 py-4 text-sm">
                      {isEditing ? (
                        <div className="flex items-center gap-2 max-w-[180px]">
                          <input
                            type="number"
                            value={editingValue}
                            onChange={(e) => setEditingValue(e.target.value)}
                            onBlur={() => saveTuition(key)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') saveTuition(key);
                              if (e.key === 'Escape') setEditingField(null);
                            }}
                            autoFocus
                            placeholder="Để trống"
                            className="w-full h-9 px-2.5 rounded-[8px] border border-black bg-white text-sm font-semibold outline-none"
                          />
                          <span className="text-xs font-bold text-[#62625b]">₩</span>
                        </div>
                      ) : (
                        <div
                          onClick={() => startEditing(key, value)}
                          className="inline-block px-3 py-1.5 rounded-[12px] bg-[#f6f6f3] border border-transparent hover:border-[#dadad3] font-semibold text-black cursor-pointer transition-all"
                          title="Nhấp để sửa học phí"
                        >
                          {formatWon(value)}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#62625b]">{formatVnd(value)}</td>
                    <td className="px-6 py-4 text-sm text-right">
                      {isEditing ? (
                        <button
                          onClick={() => saveTuition(key)}
                          className="px-2 py-1 bg-black text-white rounded text-xs font-bold cursor-pointer"
                        >
                          Lưu
                        </button>
                      ) : (
                        <button
                          onClick={() => startEditing(key, value)}
                          className="text-xs font-bold text-[#e60023] hover:underline cursor-pointer"
                        >
                          Sửa trực tiếp
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* Explanatory Note */}
      <div className="p-4 rounded-[16px] bg-[#f6f6f3] border border-[#e5e5e0] text-xs text-[#62625b] flex gap-2.5">
        <HelpCircle size={16} className="text-[#91918c] shrink-0" />
        <p className="leading-relaxed">
          <strong>Hướng dẫn:</strong> Nhấp trực tiếp vào ô số tiền KRW (Won) để chỉnh sửa nhanh. Khi chỉnh sửa xong, bấm <strong>Enter</strong> hoặc nhấp ra ngoài để lưu tự động. Để trống giá trị nếu trường không đào tạo nhóm ngành này. Năm học 2026 được chỉ định làm năm học mặc định hiển thị ở trang tra cứu công khai.
        </p>
      </div>

      {/* Clone Year Modal */}
      {isCloneModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 cursor-pointer" onClick={() => setIsCloneModalOpen(false)} />
          
          <div className="w-full max-w-md bg-white rounded-[32px] p-6 md:p-8 shadow-2xl relative z-10 border border-[#e5e5e0]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e5e5e0]">
              <h3 className="text-lg font-bold text-black flex items-center gap-2">
                <Copy size={18} className="text-[#e60023]" />
                Nhân bản học phí sang năm mới
              </h3>
              <button
                onClick={() => setIsCloneModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f6f6f3] text-black hover:bg-[#e5e5e0] flex items-center justify-center transition-all cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleCloneYear} className="space-y-4 font-sans text-left">
              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Năm học mới</label>
                <input
                  type="text"
                  required
                  placeholder="VD: 2027"
                  value={cloneSettings.newYear}
                  onChange={(e) => setCloneSettings({ ...cloneSettings, newYear: e.target.value })}
                  className="w-full h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-sm font-semibold outline-none focus:border-black placeholder-[#91918c]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">Sao chép dữ liệu từ năm</label>
                <div className="relative">
                  <select
                    value={cloneSettings.sourceYear}
                    onChange={(e) => setCloneSettings({ ...cloneSettings, sourceYear: e.target.value })}
                    className="w-full h-11 pl-4 pr-10 rounded-[16px] border border-[#dadad3] bg-white text-sm font-semibold outline-none appearance-none"
                  >
                    {yearsList.map((yr) => (
                      <option key={yr} value={yr}>
                        Năm học {yr}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-[#62625b]">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
                  Tỷ lệ điều chỉnh học phí (%)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={cloneSettings.percentAdjust}
                    onChange={(e) => setCloneSettings({ ...cloneSettings, percentAdjust: Number(e.target.value) })}
                    className="w-32 h-11 px-4 rounded-[16px] border border-[#dadad3] bg-white text-sm font-semibold outline-none focus:border-black"
                  />
                  <span className="text-xs text-[#62625b] font-medium">
                    % (VD: 5 tăng 5%, -3 giảm 3%, 0 giữ nguyên)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="setActiveCheckbox"
                  checked={cloneSettings.setActive}
                  onChange={(e) => setCloneSettings({ ...cloneSettings, setActive: e.target.checked })}
                  className="mt-1 accent-[#e60023]"
                />
                <label htmlFor="setActiveCheckbox" className="text-xs font-semibold text-black cursor-pointer leading-relaxed">
                  Thiết lập làm Năm học hoạt động (Active tuition) thay thế cho năm học cũ trên trang công cộng của học sinh.
                </label>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsCloneModalOpen(false)}
                  className="flex-1 h-11 rounded-[16px] bg-[#e5e5e0] hover:bg-[#c8c8c1] text-black text-xs font-bold transition-all cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="flex-1 h-11 rounded-[16px] bg-[#e60023] hover:bg-[#cc001f] text-white text-xs font-bold transition-all shadow-md shadow-[#e60023]/10 cursor-pointer"
                >
                  Nhân bản ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

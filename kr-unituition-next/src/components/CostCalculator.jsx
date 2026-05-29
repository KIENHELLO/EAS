"use client";

import { useState, useEffect } from 'react';
import { Calculator, Calendar, Home, MapPin, Plane, DollarSign, RefreshCw } from 'lucide-react';
import { universities } from '../data/universities';
import { krwToVnd, formatCurrency } from '../utils/currency';

export default function CostCalculator({ exchangeRate }) {
  const [selectedSchoolId, setSelectedSchoolId] = useState(universities[0]?.id || '');
  const [durationYears, setDurationYears] = useState(4);
  const [housingType, setHousingType] = useState('dorm'); // 'dorm' | 'rent' | 'homestay'
  
  // Find current selected school details
  const selectedSchool = universities.find(u => u.id === selectedSchoolId) || universities[0];

  // Helper: Get average tuition for a school
  const getSchoolAvgTuitionSemester = (u) => {
    if (!u || !u.tuition) return 3500000;
    const values = Object.values(u.tuition).filter(val => val !== null && val !== undefined);
    if (values.length === 0) return 3500000;
    return values.reduce((sum, val) => sum + val, 0) / values.length;
  };

  // Determine city type from school region
  const getCityType = (u) => {
    if (!u) return 'other';
    const region = u.region.toLowerCase();
    if (region.includes('seoul')) return 'seoul';
    if (region.includes('busan')) return 'busan';
    return 'other';
  };

  const cityType = getCityType(selectedSchool);

  // 1. TUITION CALCULATION
  const tuitionPerSemester = getSchoolAvgTuitionSemester(selectedSchool);
  const totalTuitionKrw = tuitionPerSemester * 2 * durationYears;
  const totalTuitionVnd = krwToVnd(totalTuitionKrw, exchangeRate);

  // 2. HOUSING CALCULATION
  let monthlyHousingKrw = 300000;
  if (housingType === 'dorm') {
    // If school has a dorm fee, use it (dorm fee is usually per semester / 4 months)
    const semesterDorm = selectedSchool?.dorm_fee || 1200000;
    monthlyHousingKrw = semesterDorm / 4;
  } else if (housingType === 'rent') {
    monthlyHousingKrw = cityType === 'seoul' ? 450000 : cityType === 'busan' ? 380000 : 300000;
  } else if (housingType === 'homestay') {
    monthlyHousingKrw = 600000;
  }
  // Housing is calculated for 12 months/year (or 2 semesters of dorm = 8 months, plus rent/other). Let's assume 12 months of housing needed per year.
  const totalHousingKrw = monthlyHousingKrw * 12 * durationYears;
  const totalHousingVnd = krwToVnd(totalHousingKrw, exchangeRate);

  // 3. LIVING COST CALCULATION (Food, transport, etc.)
  const monthlyLivingKrw = cityType === 'seoul' ? 500000 : cityType === 'busan' ? 420000 : 350000;
  const totalLivingKrw = monthlyLivingKrw * 12 * durationYears;
  const totalLivingVnd = krwToVnd(totalLivingKrw, exchangeRate);

  // 4. FLIGHT COST (VND)
  // Flight ticket estimate: 7,000,000 VND / round-trip per year
  const flightPerYearVnd = 7000000;
  const totalFlightVnd = flightPerYearVnd * durationYears;

  // 5. TOTAL
  const grandTotalVnd = totalTuitionVnd + totalHousingVnd + totalLivingVnd + totalFlightVnd;

  return (
    <div 
      className="glass-effect animate-scale-in"
      style={{
        borderRadius: 'var(--border-radius-lg)',
        padding: '2rem',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-surface)',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .calc-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .calc-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />

      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Calculator size={24} color="var(--primary)" />
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
            Máy tính tổng chi phí du học Hàn Quốc
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', margin: '0.15rem 0 0 0', fontWeight: 500 }}>
            Ước tính học phí, sinh hoạt phí và chi phí phát sinh theo thời gian
          </p>
        </div>
      </div>

      <div className="calc-grid">
        {/* Left column: Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Select School */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={14} color="var(--primary)" />
              CHỌN TRƯỜNG ĐẠI HỌC
            </label>
            <select
              value={selectedSchoolId}
              onChange={(e) => setSelectedSchoolId(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem',
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-app)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {universities.map(u => (
                <option key={u.id} value={u.id}>
                  {u.name_vi} ({u.region})
                </option>
              ))}
            </select>
          </div>

          {/* Duration Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={14} color="var(--primary)" />
                SỐ NĂM DU HỌC DỰ KIẾN
              </label>
              <strong style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>{durationYears} năm</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.2rem' }}>
              {[2, 3, 4].map(y => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setDurationYears(y)}
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    borderRadius: 'var(--border-radius-sm)',
                    border: durationYears === y ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                    backgroundColor: durationYears === y ? 'var(--primary-light)' : 'var(--bg-app)',
                    color: durationYears === y ? 'var(--primary)' : 'var(--text-secondary)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {y === 2 ? '2 năm (Thạc sĩ/Cao đẳng)' : y === 3 ? '3 năm' : '4 năm (Đại học)'}
                </button>
              ))}
            </div>
          </div>

          {/* Housing type */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Home size={14} color="var(--primary)" />
              HÌNH THỨC TRÚ NGỤ
            </label>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setHousingType('dorm')}
                style={{
                  flex: '1 0 120px',
                  padding: '0.65rem 0.5rem',
                  borderRadius: 'var(--border-radius-sm)',
                  border: housingType === 'dorm' ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: housingType === 'dorm' ? 'var(--primary-light)' : 'var(--bg-app)',
                  color: housingType === 'dorm' ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                Ký túc xá ({selectedSchool?.dorm_fee ? `${formatCompact(selectedSchool.dorm_fee, 'KRW')}/kỳ` : 'Theo trường'})
              </button>
              <button
                type="button"
                onClick={() => setHousingType('rent')}
                style={{
                  flex: '1 0 120px',
                  padding: '0.65rem 0.5rem',
                  borderRadius: 'var(--border-radius-sm)',
                  border: housingType === 'rent' ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: housingType === 'rent' ? 'var(--primary-light)' : 'var(--bg-app)',
                  color: housingType === 'rent' ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                Thuê nhà riêng (~280k-450k ₩/tháng)
              </button>
              <button
                type="button"
                onClick={() => setHousingType('homestay')}
                style={{
                  flex: '1 0 120px',
                  padding: '0.65rem 0.5rem',
                  borderRadius: 'var(--border-radius-sm)',
                  border: housingType === 'homestay' ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: housingType === 'homestay' ? 'var(--primary-light)' : 'var(--bg-app)',
                  color: housingType === 'homestay' ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                Homestay (~600k ₩/tháng)
              </button>
            </div>
          </div>

        </div>

        {/* Right column: Projected Costs Output */}
        <div style={{
          backgroundColor: 'var(--bg-app)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--border-radius-md)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              Dự chi dự kiến cho {durationYears} năm
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Tuition row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />
                  Học phí {durationYears} năm:
                </span>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{formatCurrency(totalTuitionVnd, 'VND')}</strong>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>~{formatCurrency(totalTuitionKrw, 'KRW')}</div>
                </div>
              </div>

              {/* Housing row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--secondary)' }} />
                  Chi phí nhà ở:
                </span>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{formatCurrency(totalHousingVnd, 'VND')}</strong>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>~{formatCurrency(totalHousingKrw, 'KRW')}</div>
                </div>
              </div>

              {/* Living cost row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--warning)' }} />
                  Sinh hoạt phí:
                </span>
                <div style={{ textAlign: 'right' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{formatCurrency(totalLivingVnd, 'VND')}</strong>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>~{formatCurrency(totalLivingKrw, 'KRW')}</div>
                </div>
              </div>

              {/* Flights row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
                  Vé máy bay ước tính:
                </span>
                <strong style={{ color: 'var(--text-primary)' }}>{formatCurrency(totalFlightVnd, 'VND')}</strong>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '1rem', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>TỔNG CHI PHÍ:</span>
              <div style={{ textAlign: 'right' }}>
                <strong style={{ fontSize: '1.4rem', color: 'var(--success)', letterSpacing: '-0.02em' }}>
                  {formatCurrency(grandTotalVnd, 'VND')}
                </strong>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                  (Tỷ giá Won hiện tại: {exchangeRate})
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

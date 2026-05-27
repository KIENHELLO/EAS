import React, { useState } from 'react';
import { BarChart2, Trash2, X, Star, Check, AlertCircle } from 'lucide-react';
import { formatCurrency, krwToVnd } from '../utils/currency';

export default function ComparePanel({ 
  selectedSchools, 
  onRemoveSchool, 
  onClearAll, 
  exchangeRate 
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (selectedSchools.length === 0) return null;

  // Average tuition helper
  const getSchoolAvgTuition = (u) => {
    const values = Object.values(u.tuition).filter(val => val !== null && val !== undefined);
    if (values.length === 0) return 0;
    return values.reduce((sum, val) => sum + val, 0) / values.length;
  };

  // Estimate total expense per semester (approx 4 months)
  const getEstSemesterExpense = (u) => {
    const avg = getSchoolAvgTuition(u);
    return avg + (u.dorm_fee || 0) + ((u.living_cost_est || 0) * 4);
  };

  // Find the cheapest school and best rank for highlighting
  const getCheapestSchoolId = () => {
    if (selectedSchools.length < 2) return null;
    let minCost = Infinity;
    let cheapestId = null;
    selectedSchools.forEach(s => {
      const cost = getEstSemesterExpense(s);
      if (cost < minCost) {
        minCost = cost;
        cheapestId = s.id;
      }
    });
    return cheapestId;
  };

  const getBestRankSchoolId = () => {
    if (selectedSchools.length < 2) return null;
    let bestRank = Infinity;
    let bestId = null;
    selectedSchools.forEach(s => {
      if (s.ranking < bestRank) {
        bestRank = s.ranking;
        bestId = s.id;
      }
    });
    return bestId;
  };

  const cheapestSchoolId = getCheapestSchoolId();
  const bestRankSchoolId = getBestRankSchoolId();

  return (
    <>
      {/* 1. FLOATING BOTTOM BAR */}
      <div 
        className="glass-effect animate-slide-in-up"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '800px',
          padding: '1rem 1.5rem',
          borderRadius: 'var(--border-radius-md)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          zIndex: 900,
          border: '1px solid var(--primary)',
          animation: 'slideInUp var(--transition-normal) forwards'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
            <BarChart2 size={20} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>So sánh ({selectedSchools.length}/3)</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {selectedSchools.map(school => (
              <div 
                key={school.id}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: 'var(--bg-surface-hover)',
                  border: '1px solid var(--border-color)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: 'var(--border-radius-sm)',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                <span>{school.name_vi.replace('Đại học ', 'ĐH ')}</span>
                <button 
                  onClick={() => onRemoveSchool(school.id)}
                  style={{
                    border: 'none',
                    background: 'none',
                    color: 'var(--text-tertiary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button 
            onClick={onClearAll}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'none',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--border-radius-sm)',
              fontWeight: 600,
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
          >
            <Trash2 size={13} />
            <span>Xóa hết</span>
          </button>
          
          <button 
            onClick={() => setIsOpen(true)}
            style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--border-radius-sm)',
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(79, 70, 229, 0.25)',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            So Sánh Ngay
          </button>
        </div>
      </div>

      {/* 2. COMPARE MODAL / OVERLAY */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="glass-effect animate-scale-in"
            style={{
              width: '100%',
              maxWidth: '1000px',
              maxHeight: '90vh',
              borderRadius: 'var(--border-radius-lg)',
              boxShadow: 'var(--shadow-xl)',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'linear-gradient(135deg, var(--bg-surface) 70%, var(--primary-light) 100%)'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                  <BarChart2 size={24} color="var(--primary)" />
                  Bảng So Sánh Các Trường Đại Học
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                  Đang so sánh dựa trên tỷ giá hiện tại: 1 KRW = {exchangeRate} VND
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  borderRadius: '50%',
                  width: '2rem',
                  height: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Matrix Table */}
            <div style={{ overflowX: 'auto', padding: '1.5rem' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.85rem'
              }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                    <th style={{ padding: '1rem', width: '220px', color: 'var(--text-tertiary)', fontWeight: 600 }}>Thuộc tính</th>
                    {selectedSchools.map(school => (
                      <th key={school.id} style={{ padding: '1rem', minWidth: '220px', verticalAlign: 'top' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                            {school.name_vi}
                          </h4>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                            {school.name_en}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Row: Ranking */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Thứ hạng Quốc gia</td>
                    {selectedSchools.map(school => {
                      const isBest = school.id === bestRankSchoolId;
                      return (
                        <td key={school.id} style={{ padding: '1rem' }}>
                          <span style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.25rem',
                            fontWeight: isBest ? 800 : 500,
                            color: isBest ? 'var(--warning)' : 'var(--text-primary)'
                          }}>
                            {isBest && <Star size={14} fill="currentColor" />}
                            Hạng {school.ranking} {isBest && "(Tốt nhất)"}
                          </span>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Type */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-app)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Loại hình trường</td>
                    {selectedSchools.map(school => (
                      <td key={school.id} style={{ padding: '1rem', fontWeight: 600 }}>
                        {school.type === 'public' ? 'Quốc lập / Công lập' : 'Tư thục'}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Region */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Khu vực (Tỉnh/Thành)</td>
                    {selectedSchools.map(school => (
                      <td key={school.id} style={{ padding: '1rem', fontWeight: 500 }}>
                        {school.region}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Humanities Tuition */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-app)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Học phí Nhân văn & Xã hội</td>
                    {selectedSchools.map(school => {
                      const cost = school.tuition.humanities_social;
                      return (
                        <td key={school.id} style={{ padding: '1rem' }}>
                          {cost ? (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <strong style={{ color: 'var(--primary)' }}>{formatCurrency(krwToVnd(cost, exchangeRate), 'VND')}</strong>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>({formatCurrency(cost, 'KRW')})</span>
                            </div>
                          ) : 'Không đào tạo'}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Natural Sciences Tuition */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Học phí Tự nhiên & Thể chất</td>
                    {selectedSchools.map(school => {
                      const cost = school.tuition.natural_sciences;
                      return (
                        <td key={school.id} style={{ padding: '1rem' }}>
                          {cost ? (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <strong style={{ color: 'var(--primary)' }}>{formatCurrency(krwToVnd(cost, exchangeRate), 'VND')}</strong>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>({formatCurrency(cost, 'KRW')})</span>
                            </div>
                          ) : 'Không đào tạo'}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Engineering Tuition */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-app)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Học phí Kỹ thuật & Công nghệ</td>
                    {selectedSchools.map(school => {
                      const cost = school.tuition.engineering;
                      return (
                        <td key={school.id} style={{ padding: '1rem' }}>
                          {cost ? (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <strong style={{ color: 'var(--primary)' }}>{formatCurrency(krwToVnd(cost, exchangeRate), 'VND')}</strong>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>({formatCurrency(cost, 'KRW')})</span>
                            </div>
                          ) : 'Không đào tạo'}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Arts Tuition */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Học phí Nghệ thuật / Năng khiếu</td>
                    {selectedSchools.map(school => {
                      const cost = school.tuition.arts_sports;
                      return (
                        <td key={school.id} style={{ padding: '1rem' }}>
                          {cost ? (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <strong style={{ color: 'var(--primary)' }}>{formatCurrency(krwToVnd(cost, exchangeRate), 'VND')}</strong>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>({formatCurrency(cost, 'KRW')})</span>
                            </div>
                          ) : 'Không đào tạo'}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Medicine Tuition */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-app)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Học phí Y khoa / Dược học</td>
                    {selectedSchools.map(school => {
                      const cost = school.tuition.medicine_pharmacy;
                      return (
                        <td key={school.id} style={{ padding: '1rem' }}>
                          {cost ? (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <strong style={{ color: 'var(--primary)' }}>{formatCurrency(krwToVnd(cost, exchangeRate), 'VND')}</strong>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>({formatCurrency(cost, 'KRW')})</span>
                            </div>
                          ) : 'Không đào tạo'}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Dormitory Fee */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Ký túc xá / học kỳ (4 tháng)</td>
                    {selectedSchools.map(school => {
                      const cost = school.dorm_fee;
                      return (
                        <td key={school.id} style={{ padding: '1rem', fontWeight: 500 }}>
                          {cost ? (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                              <span>{formatCurrency(krwToVnd(cost, exchangeRate), 'VND')}</span>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>({formatCurrency(cost, 'KRW')})</span>
                            </div>
                          ) : 'N/A'}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Living Cost */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-app)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Sinh hoạt phí / tháng (ăn uống...)</td>
                    {selectedSchools.map(school => {
                      const cost = school.living_cost_est;
                      return (
                        <td key={school.id} style={{ padding: '1rem', fontWeight: 500 }}>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>{formatCurrency(krwToVnd(cost, exchangeRate), 'VND')}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>({formatCurrency(cost, 'KRW')})</span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Trường TOP 1% */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-app)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Trường TOP 1%</td>
                    {selectedSchools.map(school => {
                      const val = school.top_1_percent;
                      return (
                        <td key={school.id} style={{ 
                          padding: '1rem', 
                          fontWeight: 600, 
                          color: val ? '#059669' : 'var(--text-tertiary)',
                          backgroundColor: val ? 'rgba(16, 185, 129, 0.05)' : 'transparent'
                        }}>
                          {val ? "Có (Ưu tiên Visa)" : "Không"}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Hệ GDTX */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Hệ GDTX (Top 2% / 3%)</td>
                    {selectedSchools.map(school => {
                      const val = school.accept_gdtx;
                      let text = "Không hỗ trợ";
                      let color = "var(--text-secondary)";
                      let bg = "transparent";
                      if (val === 'top2') {
                        text = "Nhận GDTX Top 2%";
                        color = "#d97706";
                        bg = "rgba(245, 158, 11, 0.08)";
                      } else if (val === 'top3') {
                        text = "Nhận GDTX Top 3%";
                        color = "#0284c7";
                        bg = "rgba(14, 165, 233, 0.08)";
                      }
                      return (
                        <td key={school.id} style={{ padding: '1rem', fontWeight: 600, color, backgroundColor: bg }}>
                          {text}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Visa Đại đô thị */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-app)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Visa Đại đô thị</td>
                    {selectedSchools.map(school => {
                      const val = school.visa_metropolitan;
                      return (
                        <td key={school.id} style={{ 
                          padding: '1rem', 
                          fontWeight: 600, 
                          color: val ? '#7c3aed' : 'var(--text-tertiary)',
                          backgroundColor: val ? 'rgba(147, 51, 234, 0.05)' : 'transparent'
                        }}>
                          {val ? "Có hỗ trợ" : "Không"}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Thạc sĩ nợ TOPIK */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Thạc sĩ nợ TOPIK</td>
                    {selectedSchools.map(school => {
                      const val = school.master_no_topik;
                      return (
                        <td key={school.id} style={{ 
                          padding: '1rem', 
                          fontWeight: 600, 
                          color: val ? 'var(--primary)' : 'var(--text-tertiary)',
                          backgroundColor: val ? 'rgba(79, 70, 229, 0.05)' : 'transparent'
                        }}>
                          {val ? "Có hỗ trợ" : "Không"}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Ghi chú tuyển sinh */}
                  <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-app)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Ghi chú tuyển sinh</td>
                    {selectedSchools.map(school => {
                      const val = school.custom_notes;
                      return (
                        <td key={school.id} style={{ 
                          padding: '1rem', 
                          fontSize: '0.8rem', 
                          fontWeight: 600, 
                          color: val ? '#d97706' : 'var(--text-tertiary)',
                          lineHeight: '1.4'
                        }}>
                          {val || "Không có ghi chú"}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Row: Semester Total Estimation */}
                  <tr style={{ borderBottom: '2px solid var(--border-color)', borderTop: '2px solid var(--border-color)' }}>
                    <td style={{ padding: '1.25rem 1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      Dự chi trọn gói 1 học kỳ
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontWeight: 500, marginTop: '0.2rem' }}>
                        (Học phí TB + KTX + 4 tháng sinh hoạt)
                      </div>
                    </td>
                    {selectedSchools.map(school => {
                      const isCheapest = school.id === cheapestSchoolId;
                      const cost = getEstSemesterExpense(school);
                      return (
                        <td key={school.id} style={{ 
                          padding: '1.25rem 1rem', 
                          backgroundColor: isCheapest ? 'var(--success-light)' : 'transparent',
                          transition: 'background-color var(--transition-normal)'
                        }}>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <strong style={{ 
                              fontSize: '1.15rem', 
                              color: isCheapest ? 'var(--success)' : 'var(--primary)' 
                            }}>
                              {formatCurrency(krwToVnd(cost, exchangeRate), 'VND')}
                            </strong>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                              ({formatCurrency(cost, 'KRW')})
                            </span>
                            {isCheapest && (
                              <span style={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: '0.2rem', 
                                fontSize: '0.7rem', 
                                color: 'var(--success)',
                                fontWeight: 700,
                                marginTop: '0.25rem' 
                              }}>
                                <Check size={12} /> Tiết kiệm nhất
                              </span>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Note */}
            <div style={{
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--bg-app)',
              borderTop: '1px solid var(--border-color)',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 500
            }}>
              <AlertCircle size={14} color="var(--primary)" />
              <span>
                Các chỉ số so sánh mang tính chất tham khảo. Học phí thực tế có thể thay đổi tùy thuộc vào số lượng tín chỉ đăng ký và các khoản phụ phí khác của từng khoa.
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

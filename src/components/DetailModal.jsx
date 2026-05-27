import React from 'react';
import { X, ExternalLink, GraduationCap, MapPin, Award, Home, DollarSign, BookOpen, AlertCircle } from 'lucide-react';
import { formatCurrency, krwToVnd } from '../utils/currency';

export default function DetailModal({ university, exchangeRate, onClose }) {
  if (!university) return null;

  const { 
    name_en, 
    name_ko, 
    name_vi, 
    type, 
    region, 
    ranking, 
    campus_address, 
    website, 
    tuition, 
    dorm_fee, 
    living_cost_est, 
    scholarships, 
    description,
    accept_gdtx,
    visa_metropolitan,
    master_no_topik,
    top_1_percent,
    custom_notes
  } = university;

  // Major Vietnamese names
  const majorNames = {
    humanities_social: "Nhân văn & Xã hội",
    natural_sciences: "Khoa học Tự nhiên & Thể chất",
    engineering: "Kỹ thuật & Công nghệ",
    arts_sports: "Nghệ thuật & Năng khiếu",
    medicine_pharmacy: "Y khoa & Dược học"
  };

  // Find max value in database for relative bar indicators (approx 8.5M KRW is max)
  const maxTuitionReference = 8500000;

  // Calculate average tuition
  const tuitionValues = Object.values(tuition).filter(val => val !== null && val !== undefined);
  const avgTuitionKRW = tuitionValues.reduce((sum, val) => sum + val, 0) / tuitionValues.length;

  // Estimate total expense per semester (approx 4 months)
  // Total = Avg Tuition + Dorm Fee + (Monthly Living Cost * 4)
  const estSemesterExpenseKRW = avgTuitionKRW + (dorm_fee || 0) + ((living_cost_est || 0) * 4);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      {/* Modal Dialog */}
      <div 
        className="glass-effect animate-scale-in"
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
        }}
        onClick={(e) => e.stopPropagation()} // stop close on clicking modal content
      >
        {/* Header Section */}
        <div style={{
          padding: '1.75rem',
          borderBottom: '1px solid var(--border-color)',
          position: 'relative',
          background: 'linear-gradient(135deg, var(--bg-surface) 60%, var(--primary-light) 100%)'
        }}>
          {/* Close button */}
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
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
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
          >
            <X size={18} />
          </button>

          {/* School details */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              padding: '0.25rem 0.6rem',
              borderRadius: '9999px',
              backgroundColor: type === 'public' ? 'var(--success-light)' : 'var(--primary-light)',
              color: type === 'public' ? 'var(--success)' : 'var(--primary)',
            }}>
              {type === 'public' ? 'Trường Quốc lập / Công lập' : 'Trường Tư thục'}
            </span>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '0.25rem 0.6rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--bg-surface-hover)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-color)'
            }}>
              Rank Quốc gia: #{ranking}
            </span>
            {top_1_percent && (
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.25rem 0.6rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#059669',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}>
                Trường TOP 1%
              </span>
            )}
            {accept_gdtx && (
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.25rem 0.6rem',
                borderRadius: '9999px',
                backgroundColor: accept_gdtx === 'top2' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(14, 165, 233, 0.15)',
                color: accept_gdtx === 'top2' ? '#d97706' : '#0284c7',
                border: accept_gdtx === 'top2' ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(14, 165, 233, 0.3)'
              }}>
                Nhận GDTX {accept_gdtx === 'top2' ? 'Top 2%' : 'Top 3%'}
              </span>
            )}
            {visa_metropolitan && (
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.25rem 0.6rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(147, 51, 234, 0.15)',
                color: '#7c3aed',
                border: '1px solid rgba(147, 51, 234, 0.3)'
              }}>
                Hỗ trợ Visa Đại đô thị
              </span>
            )}
            {master_no_topik && (
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.25rem 0.6rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(79, 70, 229, 0.15)',
                color: 'var(--primary)',
                border: '1px solid rgba(79, 70, 229, 0.3)'
              }}>
                Thạc sĩ nợ TOPIK
              </span>
            )}
          </div>

          <h3 style={{ fontSize: '1.65rem', fontWeight: 800, margin: '0.25rem 0', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            {name_vi}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 500 }}>
            {name_en} &bull; <span style={{ color: 'var(--text-tertiary)' }}>{name_ko}</span>
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.85rem', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <MapPin size={14} />
              {campus_address}
            </span>
            <a href={website} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>
              <ExternalLink size={14} />
              Trang web chính thức
            </a>
          </div>
        </div>

        {/* Description Banner */}
        {description && (
          <div style={{
            padding: '1rem 1.75rem',
            backgroundColor: 'var(--bg-app)',
            borderBottom: '1px solid var(--border-color)',
            fontSize: '0.85rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            fontWeight: 500
          }}>
            {description}
          </div>
        )}

        {/* Special Admissions Notes Banner */}
        {custom_notes && (
          <div style={{
            padding: '0.85rem 1.75rem',
            backgroundColor: 'rgba(245, 158, 11, 0.08)',
            borderBottom: '1px solid var(--border-color)',
            fontSize: '0.85rem',
            lineHeight: 1.6,
            color: '#d97706',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <AlertCircle size={16} color="#d97706" />
            <span><strong>Ghi chú tuyển sinh:</strong> {custom_notes}</span>
          </div>
        )}

        {/* Content Body Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem',
          padding: '1.75rem'
        }}>
          {/* LEFT: Detailed Tuition Breakdown */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-primary)'
            }}>
              <GraduationCap size={20} color="var(--primary)" />
              Học phí chi tiết theo Nhóm Ngành
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {Object.entries(tuition).map(([major, cost]) => {
                const isAvailable = cost !== null && cost !== undefined;
                const vndCost = isAvailable ? krwToVnd(cost, exchangeRate) : 0;
                const percentage = isAvailable ? (cost / maxTuitionReference) * 100 : 0;

                return (
                  <div key={major} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {majorNames[major]}
                      </span>
                      <div style={{ textAlign: 'right' }}>
                        {isAvailable ? (
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <strong style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>
                              {formatCurrency(vndCost, 'VND')}
                            </strong>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                              ({formatCurrency(cost, 'KRW')} / học kỳ)
                            </span>
                          </div>
                        ) : (
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                            Không tuyển sinh / đào tạo
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Visual Bar Indicator */}
                    <div style={{
                      height: '6px',
                      backgroundColor: 'var(--border-color)',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                      width: '100%',
                      marginTop: '0.1rem'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${percentage}%`,
                        background: 'linear-gradient(90deg, var(--secondary) 0%, var(--primary) 100%)',
                        borderRadius: '9999px',
                        transition: 'width var(--transition-slow)'
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <p style={{
              fontSize: '0.72rem',
              color: 'var(--text-tertiary)',
              marginTop: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontWeight: 500
            }}>
              <AlertCircle size={12} />
              Lưu ý: Học phí trên là học phí chuyên ngành cho 1 học kỳ (1 năm học có 2 học kỳ chính).
            </p>
          </div>

          {/* RIGHT: Living cost & Scholarships */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Living cost calculator */}
            <div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 800,
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-primary)'
              }}>
                <DollarSign size={20} color="var(--success)" />
                Ước tính Chi Phí một học kỳ (4 tháng)
              </h4>
              
              <div style={{
                padding: '1.25rem',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--bg-app)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Học phí trung bình:</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    {formatCurrency(krwToVnd(avgTuitionKRW, exchangeRate), 'VND')}
                  </span>
                </div>
                
                {dorm_fee ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Ký túc xá (4 tháng):</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      {formatCurrency(krwToVnd(dorm_fee, exchangeRate), 'VND')}
                    </span>
                  </div>
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Thuê phòng ngoài (ước tính):</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      {formatCurrency(krwToVnd(1600000, exchangeRate), 'VND')}
                    </span>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Sinh hoạt phí (ăn uống, đi lại):</span>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    {formatCurrency(krwToVnd(living_cost_est * 4, exchangeRate), 'VND')}
                  </span>
                </div>

                <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: '0.25rem 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>Tổng dự chi 1 kỳ:</span>
                  <div style={{ textAlign: 'right' }}>
                    <strong style={{ fontSize: '1.15rem', color: 'var(--success)' }}>
                      {formatCurrency(krwToVnd(estSemesterExpenseKRW, exchangeRate), 'VND')}
                    </strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                      ~ {formatCurrency(estSemesterExpenseKRW, 'KRW')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scholarships info */}
            <div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 800,
                marginBottom: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-primary)'
              }}>
                <GraduationCap size={20} color="var(--accent)" />
                Học bổng Tiêu Biểu
              </h4>
              <ul style={{
                paddingLeft: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
                margin: 0
              }}>
                {scholarships.map((s, index) => (
                  <li key={index} style={{
                    fontSize: '0.8rem',
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)',
                    fontWeight: 500
                  }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Area */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: 'var(--bg-app)'
        }}>
          <button 
            onClick={onClose}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-surface)',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
            }}
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
}

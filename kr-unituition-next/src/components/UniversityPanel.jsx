"use client";

import { Landmark, Eye, Star, Award, Check, X } from 'lucide-react';
import { krwToVnd } from '../utils/currency';

export default function UniversityPanel({
  selectedProvince,
  provinceMeta,
  schools,
  exchangeRate,
  onViewDetails,
  selectedCompareSchools,
  onToggleCompare,
  onCloseMobilePanel
}) {
  const getMajorTags = (tuition) => {
    const tags = [];
    if (tuition.engineering) tags.push("Kỹ thuật");
    if (tuition.medicine_pharmacy) tags.push("Y dược");
    if (tuition.arts_sports) tags.push("Nghệ thuật");
    if (tuition.natural_sciences) tags.push("Tự nhiên");
    if (tuition.humanities_social) tags.push("Nhân văn");
    return tags;
  };

  const checkHasGks = (scholarships) => {
    if (!scholarships) return false;
    return scholarships.some(s => s.toLowerCase().includes('gks') || s.toLowerCase().includes('chính phủ'));
  };

  // Render placeholder if no province selected
  if (!selectedProvince) {
    return (
      <div 
        className="glass-effect university-panel-container animate-fade-in"
        style={{
          flex: '0 0 38%',
          minWidth: '320px',
          padding: '2.5rem 1.5rem',
          borderRadius: 'var(--border-radius-md)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-tertiary)',
          textAlign: 'center',
          border: '1px solid var(--border-color)',
          minHeight: '400px'
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .university-panel-container {
              width: 100% !important;
              flex: none !important;
              margin-top: 1rem !important;
              min-height: 250px !important;
            }
          }
        `}} />
        <Landmark size={44} style={{ marginBottom: '1rem', opacity: 0.5, color: 'var(--primary)' }} />
        <p style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0' }}>BẢN ĐỒ TƯƠNG TÁC HÀN QUỐC</p>
        <p style={{ fontSize: '0.8rem', maxWidth: '260px', margin: 0, lineHeight: 1.5 }}>
          Nhấp chuột chọn một <strong>tỉnh/thành phố</strong> bất kỳ trên bản đồ để hiển thị danh sách các trường đại học tại khu vực đó.
        </p>
      </div>
    );
  }

  const { name_vi, name_ko } = provinceMeta || { name_vi: selectedProvince, name_ko: '' };

  return (
    <div 
      className="glass-effect university-panel-container animate-scale-in"
      style={{
        flex: '0 0 38%',
        minWidth: '320px',
        padding: '1.25rem',
        borderRadius: 'var(--border-radius-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        border: '1px solid var(--border-color)',
        maxHeight: '620px',
        overflowY: 'auto'
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .university-panel-container {
            width: 100% !important;
            flex: none !important;
            max-height: 500px !important;
            margin-top: 1rem !important;
          }
        }
      `}} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
            Khu vực: {name_vi}
          </h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
            {name_ko} • Có <strong>{schools.length}</strong> trường thỏa mãn
          </span>
        </div>
        {onCloseMobilePanel && (
          <button 
            onClick={onCloseMobilePanel}
            style={{
              border: '1px solid var(--border-color)',
              background: 'var(--bg-surface)',
              borderRadius: '50%',
              width: '1.75rem',
              height: '1.75rem',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* School list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', flex: 1, paddingRight: '0.25rem' }}>
        {schools.length === 0 ? (
          <div style={{ padding: '3rem 1rem', textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.85rem', fontWeight: 500 }}>
            Không tìm thấy trường nào phù hợp với bộ lọc hiện tại ở tỉnh này. Hãy thử nới lỏng bộ lọc!
          </div>
        ) : (
          schools.map(school => {
            const hasGks = checkHasGks(school.scholarships);
            const isComparing = selectedCompareSchools.some(s => s.id === school.id);
            
            // Calculate tuition range
            const tuitionValues = Object.values(school.tuition).filter(val => val !== null && val !== undefined);
            const minTuition = tuitionValues.length > 0 ? Math.min(...tuitionValues) : 0;
            const maxTuition = tuitionValues.length > 0 ? Math.max(...tuitionValues) : 0;

            return (
              <div 
                key={school.id}
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--border-radius-sm)',
                  backgroundColor: 'var(--bg-app)',
                  border: isComparing ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'all var(--transition-normal)'
                }}
              >
                {/* School title */}
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', lineHeight: '1.3' }}>
                    {school.name_vi}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                    {school.name_en} • {school.name_ko}
                  </span>
                </div>

                {/* Major Tags & Badges */}
                <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                  {school.top_1_percent && (
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: '4px', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#059669' }}>
                      TOP 1%
                    </span>
                  )}
                  {hasGks && (
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: '4px', backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#d97706', display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
                      <Award size={10} /> GKS
                    </span>
                  )}
                  {getMajorTags(school.tuition).map(tag => (
                    <span key={tag} style={{ fontSize: '0.65rem', fontWeight: 500, padding: '0.15rem 0.4rem', borderRadius: '4px', backgroundColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tuition Cost Summary */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '0.5rem', 
                  padding: '0.6rem', 
                  backgroundColor: 'var(--bg-surface)', 
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  border: '1px dashed var(--border-color)'
                }}>
                  <div>
                    <span style={{ color: 'var(--text-tertiary)', display: 'block', fontSize: '0.65rem', marginBottom: '0.1rem' }}>HỌC PHÍ KRW / KỲ:</span>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.825rem' }}>
                      {minTuition === maxTuition 
                        ? `${(minTuition/1000000).toFixed(2).replace(/\.00$/, '')}M` 
                        : `${(minTuition/1000000).toFixed(1)}M - ${(maxTuition/1000000).toFixed(1)}M`} ₩
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-tertiary)', display: 'block', fontSize: '0.65rem', marginBottom: '0.1rem' }}>TIỀN VIỆT ƯỚC TÍNH:</span>
                    <strong style={{ color: 'var(--primary)', fontSize: '0.825rem' }}>
                      {minTuition === maxTuition 
                        ? `${(krwToVnd(minTuition, exchangeRate)/1000000).toFixed(1)}M` 
                        : `${(krwToVnd(minTuition, exchangeRate)/1000000).toFixed(1)}M - ${(krwToVnd(maxTuition, exchangeRate)/1000000).toFixed(1)}M`} Tr ₫
                    </strong>
                  </div>
                </div>

                {/* Buttons Row */}
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                  {/* Compare toggle */}
                  <button
                    onClick={() => onToggleCompare(school)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--border-radius-sm)',
                      border: '1px solid var(--border-color)',
                      backgroundColor: isComparing ? 'var(--primary-light)' : 'var(--bg-surface)',
                      color: isComparing ? 'var(--primary)' : 'var(--text-secondary)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.25rem',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = isComparing ? 'var(--primary)' : 'var(--border-color)'; }}
                  >
                    {isComparing ? <Check size={12} /> : <Star size={12} />}
                    <span>{isComparing ? 'Đã ghim' : 'So sánh'}</span>
                  </button>

                  {/* View Details */}
                  <button
                    onClick={() => onViewDetails(school)}
                    style={{
                      flex: 1,
                      padding: '0.45rem',
                      borderRadius: 'var(--border-radius-sm)',
                      border: '1px solid var(--primary)',
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.25rem',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-hover)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary)'; }}
                  >
                    <Eye size={12} />
                    <span>Chi tiết</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

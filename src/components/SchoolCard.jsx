import { MapPin, ArrowRight, Eye, Award, Home } from 'lucide-react';
import { formatCompact, krwToVnd } from '../utils/currency';

export default function SchoolCard({ 
  university, 
  exchangeRate, 
  onViewDetails, 
  isComparing, 
  onToggleCompare 
}) {
  const { 
    name_en, 
    name_ko, 
    name_vi, 
    type, 
    region, 
    ranking, 
    tuition, 
    dorm_fee,
    accept_gdtx,
    visa_metropolitan,
    master_no_topik,
    top_1_percent,
    custom_notes
  } = university;

  // Calculate tuition range for the school (lowest to highest)
  const tuitionValues = Object.values(tuition).filter(val => val !== null && val !== undefined);
  const minTuition = Math.min(...tuitionValues);
  const maxTuition = Math.max(...tuitionValues);

  // Generate color palette based on school ID/name for unique brand feel
  const getGradient = (id) => {
    const gradients = {
      snu: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)', // SNU Blue
      kaist: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', // KAIST Blue
      yonsei: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)', // Yonsei Dark Blue
      korea: 'linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)', // Korea Crimson
      skku: 'linear-gradient(135deg, #065f46 0%, #0f766e 100%)', // SKKU Green/Teal
      hanyang: 'linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%)', // Hanyang Blue
    };
    return gradients[id] || 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)';
  };

  const getInitials = (name) => {
    return name.split(' ').map(w => w[0]).slice(0, 3).join('').toUpperCase();
  };

  return (
    <div 
      className="glass-effect animate-fade-in"
      style={{
        borderRadius: 'var(--border-radius-md)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-md)',
        transition: 'transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-fast)',
        position: 'relative',
        height: '100%',
        cursor: 'default',
        border: isComparing ? '2px solid var(--primary)' : '1px solid var(--border-color)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
        if (!isComparing) e.currentTarget.style.borderColor = 'var(--border-focus)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        if (!isComparing) e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      {/* Top badges bar */}
      <div style={{
        padding: '1.25rem 1.25rem 0.5rem 1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Badges Flex Container */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', maxWidth: '75%' }}>
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            padding: '0.25rem 0.6rem',
            borderRadius: '9999px',
            backgroundColor: type === 'public' ? 'var(--success-light)' : 'var(--primary-light)',
            color: type === 'public' ? 'var(--success)' : 'var(--primary)',
          }}>
            {type === 'public' ? 'Công lập' : 'Tư thục'}
          </span>
          {top_1_percent && (
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '0.25rem 0.6rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: '#059669',
            }}>
              TOP 1%
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
            }}>
              GDTX {accept_gdtx === 'top2' ? 'Top 2%' : 'Top 3%'}
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
            }}>
              Visa Đại đô thị
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
            }}>
              Nợ TOPIK
            </span>
          )}
        </div>

        {/* Compare Checkbox */}
        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--text-secondary)',
          cursor: 'pointer'
        }}>
          <input 
            type="checkbox"
            checked={isComparing}
            onChange={onToggleCompare}
            style={{
              cursor: 'pointer',
              accentColor: 'var(--primary)',
              width: '14px',
              height: '14px'
            }}
          />
          <span>So sánh</span>
        </label>
      </div>

      {/* Main Info */}
      <div style={{
        padding: '0 1.25rem 1.25rem 1.25rem',
        display: 'flex',
        gap: '1rem',
        flex: '1'
      }}>
        {/* Decorative Brand Avatar */}
        <div style={{
          width: '3.25rem',
          height: '3.25rem',
          borderRadius: 'var(--border-radius-sm)',
          background: getGradient(university.id),
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '0.95rem',
          flexShrink: 0,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          {getInitials(name_en)}
        </div>

        {/* Titles */}
        <div style={{ overflow: 'hidden' }}>
          <h4 style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            margin: 0,
            color: 'var(--text-primary)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            letterSpacing: '-0.01em'
          }} title={name_vi}>
            {name_vi}
          </h4>
          <p style={{
            fontSize: '0.8rem',
            color: 'var(--text-tertiary)',
            margin: '0.1rem 0 0 0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {name_en} &bull; {name_ko}
          </p>
          
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 500 }}>
              <MapPin size={12} />
              {region}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 500 }}>
              <Award size={12} />
              Hạng {ranking} toàn quốc
            </span>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: '0 1.25rem' }} />

      {/* Tuition Range details */}
      <div style={{
        padding: '1.25rem',
        backgroundColor: 'var(--bg-app)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        {/* KRW Tuition */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>Học phí / kỳ:</span>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {formatCompact(minTuition, 'KRW')} ~ {formatCompact(maxTuition, 'KRW')}
            </span>
          </div>
        </div>

        {/* VND Tuition (converted) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>Bằng Tiền Việt:</span>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)' }}>
              {formatCompact(krwToVnd(minTuition, exchangeRate), 'VND')} ~ {formatCompact(krwToVnd(maxTuition, exchangeRate), 'VND')}
            </span>
          </div>
        </div>

        {/* Dormitory cost info */}
        {dorm_fee && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem', paddingTop: '0.25rem', borderTop: '1px dashed var(--border-color)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <Home size={11} /> Ký túc xá / kỳ:
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              {formatCompact(krwToVnd(dorm_fee, exchangeRate), 'VND')} ({formatCompact(dorm_fee, 'KRW')})
            </span>
          </div>
        )}
      </div>

      {/* Ghi chú đặc biệt cho trường */}
      {custom_notes && (
        <div style={{
          padding: '0.75rem 1.25rem',
          backgroundColor: 'var(--bg-surface-hover)',
          borderBottom: '1px solid var(--border-color)',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          lineHeight: '1.4'
        }}>
          <span style={{ color: 'var(--accent)', fontWeight: 800 }}>&bull;</span>
          <span>{custom_notes}</span>
        </div>
      )}

      {/* View Detail trigger Button */}
      <button 
        onClick={onViewDetails}
        className="card-detail-btn"
        style={{
          width: '100%',
          border: 'none',
          background: 'none',
          padding: '1rem',
          fontWeight: 700,
          color: 'var(--primary)',
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
          transition: 'all var(--transition-fast)',
          backgroundColor: 'var(--bg-surface)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--primary)';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
          e.currentTarget.style.color = 'var(--primary)';
        }}
      >
        <Eye size={14} />
        <span>Xem chi tiết học phí</span>
        <ArrowRight size={12} />
      </button>
    </div>
  );
}

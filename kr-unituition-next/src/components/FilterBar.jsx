"use client";

import { Filter, GraduationCap, DollarSign, Award, RotateCcw } from 'lucide-react';
import { formatCurrency } from '../utils/currency';

export default function FilterBar({
  selectedMajor,
  setSelectedMajor,
  maxTuition,
  setMaxTuition,
  gksOnly,
  setGksOnly,
  onReset
}) {
  const isFiltered = selectedMajor !== 'All' || maxTuition < 10000000 || gksOnly;

  return (
    <div 
      className="glass-effect"
      style={{
        padding: '1.25rem',
        borderRadius: 'var(--border-radius-md)',
        marginBottom: '1.5rem',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'all var(--transition-normal)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={16} color="var(--primary)" />
          <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--text-primary)' }}>
            Bộ Lọc Bản Đồ Tương Tác
          </h3>
        </div>
        {isFiltered && (
          <button
            onClick={onReset}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--accent-light)',
              backgroundColor: 'var(--accent-light)',
              color: 'var(--accent)',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.95)'}
            onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
          >
            <RotateCcw size={12} />
            <span>Đặt lại bộ lọc</span>
          </button>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        alignItems: 'center'
      }}>
        {/* Dropdown Ngành Học */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label 
            htmlFor="selected-major-select"
            style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <GraduationCap size={12} color="var(--primary)" />
            NHÓM NGÀNH ĐÀO TẠO
          </label>
          <select
            id="selected-major-select"
            value={selectedMajor}
            onChange={(e) => setSelectedMajor(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: 'var(--border-radius-md)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">Tất cả Nhóm Ngành</option>
            <option value="engineering">Kỹ thuật & Công nghệ</option>
            <option value="medicine_pharmacy">Y khoa & Dược học</option>
            <option value="humanities_social_econ">Kinh tế & Quản lý (TM, TMQT...)</option>
            <option value="arts_sports">Nghệ thuật & Năng khiếu</option>
            <option value="humanities_social_lang">Ngôn ngữ & Nhân văn</option>
            <option value="natural_sciences">Khoa học Tự nhiên & Nông nghiệp</option>
          </select>
        </div>

        {/* Slider Học phí */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label 
              htmlFor="max-tuition-range"
              style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            >
              <DollarSign size={12} color="var(--primary)" />
              HỌC PHÍ TỐI ĐA / KỲ
            </label>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>
              {maxTuition >= 10000000 ? 'Không giới hạn' : formatCurrency(maxTuition, 'KRW')}
            </span>
          </div>
          <input
            id="max-tuition-range"
            type="range"
            min="2000000"
            max="10000000"
            step="500000"
            value={maxTuition}
            onChange={(e) => setMaxTuition(parseInt(e.target.value))}
            style={{
              width: '100%',
              cursor: 'pointer',
              accentColor: 'var(--primary)',
              height: '6px',
              borderRadius: '9999px',
              backgroundColor: 'var(--border-color)',
              outline: 'none'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
            <span>2.000.000 KRW</span>
            <span>10.000.000 KRW</span>
          </div>
        </div>

        {/* Toggle Học bổng GKS */}
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <label 
            htmlFor="gks-checkbox"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            <input
              id="gks-checkbox"
              type="checkbox"
              checked={gksOnly}
              onChange={(e) => setGksOnly(e.target.checked)}
              style={{
                cursor: 'pointer',
                accentColor: 'var(--primary)',
                width: '16px',
                height: '16px'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-primary)' }}>
                <Award size={14} color="var(--warning)" />
                Học bổng Chính phủ GKS
              </span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                Chỉ hiển thị các trường hỗ trợ diện GKS
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

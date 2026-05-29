"use client";

import { useState } from 'react';
import { BarChart2, Trash2, X, Star, Check, AlertCircle, ArrowRight, HelpCircle, MapPin, Landmark, Award, Home, ShieldAlert } from 'lucide-react';
import { formatCurrency, krwToVnd, formatCompact } from '../utils/currency';

export default function ComparePanel({ 
  selectedSchools, 
  onRemoveSchool, 
  onClearAll, 
  exchangeRate 
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Floating compare bar only shows when at least 2 schools are selected
  if (selectedSchools.length < 2) return null;

  const getGradient = (id) => {
    const gradients = {
      snu: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
      kaist: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
      yonsei: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
      korea: 'linear-gradient(135deg, #991b1b 0%, #7f1d1d 100%)',
      skku: 'linear-gradient(135deg, #065f46 0%, #0f766e 100%)',
      hanyang: 'linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%)',
    };
    return gradients[id] || 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)';
  };

  const getInitials = (name) => {
    return name.replace('Đại học ', '').split(' ').map(w => w[0]).slice(0, 3).join('').toUpperCase();
  };

  const getTuitionInfo = (school) => {
    const tuitionValues = Object.values(school.tuition).filter(val => val !== null && val !== undefined);
    if (tuitionValues.length === 0) return { textKrw: 'N/A', textVnd: 'N/A' };
    const min = Math.min(...tuitionValues);
    const max = Math.max(...tuitionValues);
    const minVnd = krwToVnd(min, exchangeRate);
    const maxVnd = krwToVnd(max, exchangeRate);
    
    return {
      textKrw: min === max ? `${formatCompact(min, 'KRW')}` : `${formatCompact(min, 'KRW')} ~ ${formatCompact(max, 'KRW')}`,
      textVnd: min === max ? `${formatCompact(minVnd, 'VND')}` : `${formatCompact(minVnd, 'VND')} ~ ${formatCompact(maxVnd, 'VND')}`,
      rawMin: min,
      rawMax: max
    };
  };

  const checkHasGks = (school) => {
    if (school.has_gks === true) return true;
    if (!school.scholarships) return false;
    return school.scholarships.some(s => s.toLowerCase().includes('gks') || s.toLowerCase().includes('chính phủ'));
  };

  return (
    <>
      {/* 1. FLOATING BOTTOM BAR */}
      <div 
        className="glass-effect"
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 2rem)',
          maxWidth: '850px',
          padding: '0.85rem 1.25rem',
          borderRadius: 'var(--border-radius-md)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 999,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          animation: 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          color: '#ffffff'
        }}
      >
        {/* Style injection for animations and responsiveness */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 680px) {
            .compare-bottom-bar-wrapper {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 0.75rem !important;
            }
            .compare-actions-group {
              justify-content: flex-end !important;
            }
          }
        `}} />

        <div className="compare-bottom-bar-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
          
          {/* Left section: Logos and titles */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflowX: 'auto', paddingRight: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '-0.5rem', alignItems: 'center' }}>
              {selectedSchools.map((school, index) => (
                <div 
                  key={school.id}
                  title={school.name_vi}
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: getGradient(school.id),
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.7rem',
                    border: '2px solid #0f172a',
                    marginLeft: index > 0 ? '-0.75rem' : '0',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    position: 'relative',
                    zIndex: 5 - index,
                    flexShrink: 0,
                    transition: 'transform var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
                >
                  {getInitials(school.name_en)}
                  {/* Small X button to delete */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveSchool(school.id);
                    }}
                    style={{
                      position: 'absolute',
                      top: '-4px',
                      right: '-4px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent)',
                      border: '1px solid white',
                      color: 'white',
                      fontSize: '8px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      zIndex: 10
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.02em', color: '#ffffff' }}>
                So sánh tối đa 3 trường
              </span>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 500 }}>
                Đã chọn <strong>{selectedSchools.length} / 3</strong> trường đại học
              </span>
            </div>
          </div>

          {/* Right section: Action buttons */}
          <div className="compare-actions-group" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            {/* Clear All */}
            <button 
              onClick={onClearAll}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                background: 'none',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#cbd5e1',
                padding: '0.5rem 0.85rem',
                borderRadius: 'var(--border-radius-sm)',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.color = '#f43f5e'; 
                e.currentTarget.style.borderColor = '#f43f5e'; 
                e.currentTarget.style.backgroundColor = 'rgba(244, 63, 94, 0.1)';
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.color = '#cbd5e1'; 
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; 
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Trash2 size={13} />
              <span>✕ Xóa tất cả</span>
            </button>
            
            {/* Compare Trigger */}
            <button 
              onClick={() => setIsOpen(true)}
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)',
                color: 'white',
                border: 'none',
                padding: '0.55rem 1.35rem',
                borderRadius: 'var(--border-radius-sm)',
                fontWeight: 800,
                fontSize: '0.8rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
                transition: 'all var(--transition-fast)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(99, 102, 241, 0.4)';
              }}
            >
              <span>So sánh ngay</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>

      {/* 2. FULL-SCREEN COMPARE MODAL */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.2s ease-out forwards'
          }}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="animate-scale-in"
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--bg-app)',
              overflow: 'hidden',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Header */}
            <div style={{
              padding: '1.5rem 2rem',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--bg-surface)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                  <BarChart2 size={26} color="var(--primary)" />
                  Bảng So Sánh Chi Tiết Học Phí
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', margin: '0.2rem 0 0 0', fontWeight: 500 }}>
                  Đang so sánh {selectedSchools.length} trường theo tỷ giá hiện tại: <strong>1 KRW = {exchangeRate} VND</strong>
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button
                  onClick={onClearAll}
                  style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'transparent',
                    color: 'var(--accent)',
                    borderRadius: 'var(--border-radius-sm)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Xóa tất cả ghim
                </button>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  style={{
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-secondary)',
                    borderRadius: '50%',
                    width: '2.5rem',
                    height: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Matrix Table Container - Scrollable */}
            <div style={{ flex: 1, overflow: 'auto', padding: '2.5rem' }}>
              <div className="glass-effect" style={{
                borderRadius: 'var(--border-radius-lg)',
                backgroundColor: 'var(--bg-surface)',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-xl)',
                width: '100%',
                minWidth: '950px'
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  textAlign: 'left',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>
                  <thead>
                    <tr style={{ 
                      borderBottom: '2px solid var(--border-color)', 
                      backgroundColor: 'var(--bg-surface-hover)'
                    }}>
                      <th style={{ padding: '1.25rem 1.5rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', width: '22%' }}>Tên trường</th>
                      <th style={{ padding: '1.25rem 1rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', width: '9%' }}>Xếp hạng</th>
                      <th style={{ padding: '1.25rem 1rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', width: '10%' }}>Loại hình</th>
                      <th style={{ padding: '1.25rem 1rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', width: '20%' }}>Học phí/kỳ (KRW + VND)</th>
                      <th style={{ padding: '1.25rem 1rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', width: '14%' }}>Ký túc xá/kỳ</th>
                      <th style={{ padding: '1.25rem 1rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', width: '10%' }}>Khu vực</th>
                      <th style={{ padding: '1.25rem 1rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', width: '15%' }}>TOPIK yêu cầu</th>
                      <th style={{ padding: '1.25rem 1rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', width: '11%' }}>Diện Visa đô thị</th>
                      <th style={{ padding: '1.25rem 1rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', width: '11%' }}>Có GKS không</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedSchools.map((school, idx) => {
                      const tuition = getTuitionInfo(school);
                      const hasGks = checkHasGks(school);
                      const dormFeeVnd = school.dorm_fee ? krwToVnd(school.dorm_fee, exchangeRate) : null;
                      
                      return (
                        <tr 
                          key={school.id} 
                          style={{ 
                            borderBottom: idx < selectedSchools.length - 1 ? '1px solid var(--border-color)' : 'none',
                            transition: 'background-color var(--transition-fast)',
                            backgroundColor: idx % 2 === 0 ? 'transparent' : 'var(--bg-surface-hover)'
                          }}
                        >
                          {/* Column 1: Tên trường */}
                          <td style={{ padding: '1.5rem 1.5rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                              <div style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                borderRadius: 'var(--border-radius-sm)',
                                background: getGradient(school.id),
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 800,
                                fontSize: '0.8rem',
                                flexShrink: 0
                              }}>
                                {getInitials(school.name_en)}
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{school.name_vi}</strong>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{school.name_en}</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>{school.name_ko}</span>
                              </div>
                            </div>
                          </td>

                          {/* Column 2: Xếp hạng */}
                          <td style={{ padding: '1.5rem 1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                              <Star size={14} fill="#f59e0b" color="#f59e0b" />
                              <span>Hạng {school.ranking}</span>
                            </div>
                          </td>

                          {/* Column 3: Loại hình */}
                          <td style={{ padding: '1.5rem 1rem' }}>
                            <span style={{
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              padding: '0.25rem 0.5rem',
                              borderRadius: '4px',
                              backgroundColor: school.type === 'public' ? 'var(--success-light)' : 'var(--primary-light)',
                              color: school.type === 'public' ? 'var(--success)' : 'var(--primary)'
                            }}>
                              {school.type === 'public' ? 'Công lập' : 'Tư thục'}
                            </span>
                          </td>

                          {/* Column 4: Học phí/kỳ (KRW + VND) */}
                          <td style={{ padding: '1.5rem 1rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                              <strong style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>
                                {tuition.textVnd}
                              </strong>
                              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                {tuition.textKrw}
                              </span>
                            </div>
                          </td>

                          {/* Column 5: Ký túc xá/kỳ */}
                          <td style={{ padding: '1.5rem 1rem' }}>
                            {school.dorm_fee ? (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>
                                  {formatCompact(dormFeeVnd, 'VND')}
                                </strong>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                                  {formatCurrency(school.dorm_fee, 'KRW')}
                                </span>
                              </div>
                            ) : (
                              <span style={{ color: 'var(--text-tertiary)' }}>N/A</span>
                            )}
                          </td>

                          {/* Column 6: Khu vực */}
                          <td style={{ padding: '1.5rem 1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                              <MapPin size={13} color="var(--text-tertiary)" />
                              <span>{school.region}</span>
                            </div>
                          </td>

                          {/* Column 7: TOPIK yêu cầu */}
                          <td style={{ padding: '1.5rem 1rem' }}>
                            {school.master_no_topik ? (
                              <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                padding: '0.2rem 0.5rem',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                color: 'var(--primary)',
                                display: 'inline-block'
                              }}>
                                Cho nợ TOPIK (Thạc sĩ)
                              </span>
                            ) : (
                              <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                color: 'var(--text-secondary)'
                              }}>
                                Yêu cầu TOPIK đầu vào
                              </span>
                            )}
                          </td>

                          {/* Column 8: Diện Visa đô thị */}
                          <td style={{ padding: '1.5rem 1rem' }}>
                            <span style={{
                              fontWeight: 600,
                              color: school.visa_metropolitan ? 'var(--primary)' : 'var(--text-tertiary)',
                              fontSize: '0.85rem'
                            }}>
                              {school.visa_metropolitan ? '✓ Có hỗ trợ' : '✕ Không'}
                            </span>
                          </td>

                          {/* Column 9: Có GKS không */}
                          <td style={{ padding: '1.5rem 1rem' }}>
                            {hasGks ? (
                              <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                padding: '0.2rem 0.5rem',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--success)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.2rem'
                              }}>
                                <Award size={12} /> Có (GKS ✓)
                              </span>
                            ) : (
                              <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>Không</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer Note */}
            <div style={{
              padding: '1.25rem 2.5rem',
              backgroundColor: 'var(--bg-surface)',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 500 }}>
                <AlertCircle size={14} color="var(--primary)" />
                <span>Nguồn dữ liệu học phí chính xác cập nhật mới nhất từ data.go.kr (AcademyInfo)</span>
              </span>
              
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'var(--text-primary)',
                  color: 'var(--bg-surface)',
                  border: 'none',
                  padding: '0.6rem 1.5rem',
                  borderRadius: 'var(--border-radius-sm)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'opacity var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Đóng bảng so sánh
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

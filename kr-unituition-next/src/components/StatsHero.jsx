"use client";

import { School, Landmark, TrendingUp, HelpCircle, Award } from 'lucide-react';
import { formatCurrency, krwToVnd } from '../utils/currency';

export default function StatsHero({ universities, exchangeRate }) {
  // Calculate statistics dynamically
  const totalUniversities = universities.length;
  
  const publicUniversities = universities.filter(u => u.type === 'public');
  const privateUniversities = universities.filter(u => u.type === 'private');

  // Helper to get average tuition for a single school across its available programs
  const getSchoolAvgTuition = (u) => {
    const values = Object.values(u.tuition).filter(val => val !== null && val !== undefined);
    if (values.length === 0) return 0;
    return values.reduce((sum, val) => sum + val, 0) / values.length;
  };

  const getAvgTuitionByType = (list) => {
    if (list.length === 0) return 0;
    const totalAvg = list.reduce((sum, u) => sum + getSchoolAvgTuition(u), 0);
    return totalAvg / list.length;
  };

  const avgPublicTuition = getAvgTuitionByType(publicUniversities);
  const avgPrivateTuition = getAvgTuitionByType(privateUniversities);

  // Find Min and Max tuition values
  let minTuition = Infinity;
  let maxTuition = -Infinity;
  let minSchool = '';
  let maxSchool = '';

  universities.forEach(u => {
    Object.values(u.tuition).forEach(value => {
      if (value !== null && value !== undefined && value > 0) {
        if (value < minTuition) {
          minTuition = value;
          minSchool = u.name_vi;
        }
        if (value > maxTuition) {
          maxTuition = value;
          maxSchool = u.name_vi;
        }
      }
    });
  });

  return (
    <div style={{ position: 'relative', marginBottom: '3rem', marginTop: '1rem' }} className="animate-fade-in">
      {/* Decorative Glow Elements */}
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />

      {/* Main Title and Intro */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.75rem auto' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--primary-light)',
          color: 'var(--primary)',
          padding: '0.4rem 1rem',
          borderRadius: '9999px',
          fontSize: '0.8rem',
          fontWeight: 700,
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          <Award size={14} />
          <span>Hệ Thống Dữ Liệu Du Học Hàn Quốc 2025/2026</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, var(--text-primary) 30%, var(--primary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textWrap: 'balance',
          maxWidth: '30ch',
          margin: '0 auto 1rem'
        }}>
          {"Tra Cứu & So Sánh Học\u00a0Phí Hàn\u00a0Quốc Dễ\u00a0Dàng"}
        </h1>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          fontWeight: 500,
          lineHeight: 1.6,
          margin: '0 auto 1rem auto'
        }}>
          Cổng thông tin hỗ trợ tìm kiếm học phí chi tiết của các trường đại học tại Hàn Quốc. Tự động quy đổi từ đồng Won sang Việt Nam Đồng theo tỷ giá tùy chỉnh.
        </p>
        <div className="glass-effect" style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          marginTop: '2rem',
          padding: '0.75rem 1.25rem',
          borderRadius: 'var(--border-radius-md)',
          border: '1px dashed var(--border-color)',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.5',
          maxWidth: '680px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <span style={{ fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--success)' }} />
            Nguồn Dữ Liệu Xác Thực (Năm Học 2025 - 2026)
          </span>
          <span>
            Học phí được đối chiếu chính xác từ <strong>Cổng công bố thông tin giáo dục đại học Hàn Quốc (academyinfo.go.kr)</strong>, 
            <strong>Cổng dữ liệu mở chính phủ Hàn Quốc (data.go.kr)</strong> và <strong>Thông báo tuyển sinh chính thức</strong> của 81 trường.
          </span>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="stats-grid" style={{
        display: 'grid',
        width: '100%',
        margin: '0 auto'
      }}>
        {/* Total Schools */}
        <div className="glass-effect" style={{
          padding: '1.5rem',
          borderRadius: 'var(--border-radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            color: 'white',
            width: '3.25rem',
            height: '3.25rem',
            borderRadius: 'var(--border-radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)'
          }}>
            <School size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>Tổng số trường đại học</span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.1rem 0' }}>{totalUniversities}</h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {publicUniversities.length} trường công lập · {privateUniversities.length} trường tư thục
            </span>
          </div>
        </div>

        {/* Average Public School Tuition */}
        <div className="glass-effect" style={{
          padding: '1.5rem',
          borderRadius: 'var(--border-radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
            color: 'white',
            width: '3.25rem',
            height: '3.25rem',
            borderRadius: 'var(--border-radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(16, 185, 129, 0.3)'
          }}>
            <Landmark size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>Học phí trung bình trường Công lập</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0.1rem 0', color: 'var(--success)' }}>
              {formatCurrency(avgPublicTuition, 'KRW')}
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              ~ {formatCurrency(krwToVnd(avgPublicTuition, exchangeRate), 'VND')} / kỳ
            </span>
          </div>
        </div>

        {/* Average Private School Tuition */}
        <div className="glass-effect" style={{
          padding: '1.5rem',
          borderRadius: 'var(--border-radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)',
            color: 'white',
            width: '3.25rem',
            height: '3.25rem',
            borderRadius: 'var(--border-radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(79, 70, 229, 0.3)'
          }}>
            <TrendingUp size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>Học phí trung bình trường Tư thục</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0.1rem 0', color: 'var(--primary)' }}>
              {formatCurrency(avgPrivateTuition, 'KRW')}
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              ~ {formatCurrency(krwToVnd(avgPrivateTuition, exchangeRate), 'VND')} / kỳ
            </span>
          </div>
        </div>

        {/* Tuition Range */}
        <div className="glass-effect" style={{
          padding: '1.5rem',
          borderRadius: 'var(--border-radius-md)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
            color: 'white',
            width: '3.25rem',
            height: '3.25rem',
            borderRadius: 'var(--border-radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)'
          }}>
            <HelpCircle size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>Phạm vi học phí (Theo kỳ)</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', marginTop: '0.2rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Thấp nhất: <strong style={{ color: 'var(--text-primary)' }}>{formatCurrency(minTuition, 'KRW')}</strong> ({minSchool})
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Cao nhất: <strong style={{ color: 'var(--text-primary)' }}>{formatCurrency(maxTuition, 'KRW')}</strong> ({maxSchool})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

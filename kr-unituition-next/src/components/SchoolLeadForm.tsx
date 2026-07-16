'use client';

import { useState, useEffect } from 'react';
import { GraduationCap, CheckCircle, AlertCircle } from 'lucide-react';

interface SchoolLeadFormProps {
  schoolId: string;
  schoolName: string;
}

export default function SchoolLeadForm({ schoolId, schoolName }: SchoolLeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // 1. Auto-fill and School Tracking on Mount
  useEffect(() => {
    // A. Auto-fill personal profile from localStorage
    try {
      const savedProfile = localStorage.getItem('kr_edu_lead_profile');
      if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        setFormData({
          name: profile.name || '',
          phone: profile.phone || '',
          email: profile.email || '',
          city: profile.city || '',
        });
      }
    } catch (err) {
      console.error('Failed to read lead profile from localStorage:', err);
    }

    // B. Track visited school
    try {
      const rawVisited = localStorage.getItem('kr_edu_visited_schools') || '[]';
      let visitedList = JSON.parse(rawVisited);
      if (!Array.isArray(visitedList)) visitedList = [];

      // Filter out existing occurrence of current school to push it to the top
      visitedList = visitedList.filter((item: any) => item.id !== schoolId);

      // Prepend current school
      visitedList.unshift({
        id: schoolId,
        name: schoolName,
        timestamp: new Date().toISOString(),
      });

      // Keep only top 10 visited schools
      const limitedList = visitedList.slice(0, 10);
      localStorage.setItem('kr_edu_visited_schools', JSON.stringify(limitedList));
    } catch (err) {
      console.error('Failed to update visited schools in localStorage:', err);
    }

    // Send silent click log to the analytics API
    try {
      fetch('/api/analytics/click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          school_id: schoolId,
          school_name: schoolName,
        })
      }).catch(err => console.error('Failed to send click analytics:', err));
    } catch (err) {
      console.error('Failed to dispatch fetch for click analytics:', err);
    }
  }, [schoolId, schoolName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Retrieve visited schools list to send to SEO team
    let visitedSchools: any[] = [];
    try {
      const rawVisited = localStorage.getItem('kr_edu_visited_schools') || '[]';
      visitedSchools = JSON.parse(rawVisited);
      if (!Array.isArray(visitedSchools)) visitedSchools = [];
    } catch (err) {
      console.error('Failed to read visited schools for submission:', err);
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          city: formData.city.trim() || 'Chưa rõ',
          school_id: schoolId,
          school_name: schoolName,
          visited_schools: visitedSchools, // Submit the school tracking list
        }),
      });

      if (res.ok) {
        setSubmitStatus('success');

        // Save submitted personal profile to localStorage for future Auto-fill
        try {
          const profile = {
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            city: formData.city.trim(),
          };
          localStorage.setItem('kr_edu_lead_profile', JSON.stringify(profile));
        } catch (err) {
          console.error('Failed to save profile to localStorage:', err);
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Lead submission failed:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="glass-effect animate-fade-in school-lead-card"
      style={{
        borderRadius: 'var(--border-radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-lg)',
        marginTop: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .school-lead-card {
          padding: 2rem;
        }
        @media (max-width: 640px) {
          .school-lead-card {
            padding: 1.25rem;
            margin-top: 1.5rem !important;
          }
          .school-lead-title {
            font-size: 1.05rem !important;
          }
        }
      `}} />
      {/* Red accent strip at the top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: 'var(--primary)',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <div
          style={{
            backgroundColor: 'var(--primary-light)',
            color: 'var(--primary)',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <GraduationCap size={20} />
        </div>
        <div>
          <h3 className="school-lead-title" style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
            Đăng ký Tư vấn Học phí {schoolName}
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', margin: 0, fontWeight: 500 }}>
            Nhận lộ trình du học & bảng tính chi phí chi tiết miễn phí
          </p>
        </div>
      </div>

      {submitStatus === 'success' ? (
        <div
          style={{
            backgroundColor: 'var(--success-light)',
            border: '1px solid var(--success)',
            color: 'var(--success)',
            padding: '1.25rem',
            borderRadius: 'var(--border-radius-md)',
            textAlign: 'center',
            fontSize: '0.88rem',
            fontWeight: 700,
            lineHeight: 1.5,
            marginTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <CheckCircle size={24} />
          <span>
            ✓ Đăng ký thành công! Ban tuyển sinh KoreaEdu sẽ liên hệ tư vấn lộ trình và gửi bảng chi phí cụ thể của trường {schoolName} cho bạn qua số điện thoại {formData.phone} trong vòng 24h tới.
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {/* Name input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                Họ và tên <span style={{ color: 'var(--primary)' }}>*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Nguyễn Văn A"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 0.85rem',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-surface-hover)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  outline: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.backgroundColor = 'var(--bg-surface)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.backgroundColor = 'var(--bg-surface-hover)';
                }}
              />
            </div>

            {/* Phone input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                Số điện thoại <span style={{ color: 'var(--primary)' }}>*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="0987654321"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 0.85rem',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-surface-hover)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  outline: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.backgroundColor = 'var(--bg-surface)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.backgroundColor = 'var(--bg-surface-hover)';
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {/* Email input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                Email (Nhận bảng dự chi phí)
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 0.85rem',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-surface-hover)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  outline: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.backgroundColor = 'var(--bg-surface)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.backgroundColor = 'var(--bg-surface-hover)';
                }}
              />
            </div>

            {/* City input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                Tỉnh / Thành phố sinh sống
              </label>
              <input
                type="text"
                placeholder="Hà Nội, TP.HCM, Hải Phòng..."
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 0.85rem',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-surface-hover)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  outline: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.backgroundColor = 'var(--bg-surface)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-color)';
                  e.target.style.backgroundColor = 'var(--bg-surface-hover)';
                }}
              />
            </div>
          </div>

          {submitStatus === 'error' && (
            <div style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <AlertCircle size={14} />
              <span>Đã xảy ra lỗi khi đăng ký. Vui lòng kiểm tra lại kết nối mạng!</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              height: '44px',
              borderRadius: 'var(--border-radius-md)',
              backgroundColor: 'var(--primary)',
              color: 'white',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 14px rgba(230, 0, 35, 0.2)',
              opacity: isSubmitting ? 0.7 : 1,
              transition: 'all var(--transition-fast)',
              marginTop: '0.5rem',
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.transform = 'none';
              }
            }}
          >
            {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi đăng ký tư vấn ngay'}
          </button>
        </form>
      )}
    </div>
  );
}

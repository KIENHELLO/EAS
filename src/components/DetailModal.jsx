import { useEffect, useState } from 'react';
import { X, ExternalLink, GraduationCap, MapPin, DollarSign, AlertCircle, BookOpen, BarChart2, Search, Flame } from 'lucide-react';
import { formatCurrency, krwToVnd } from '../utils/currency';

export default function DetailModal({ university, exchangeRate, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'majors'
  const [majorQuery, setMajorQuery] = useState('');

  // 1. Auto-fill and School Tracking on Mount
  useEffect(() => {
    // Auto-fill personal profile from localStorage
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

    // Track visited school
    if (university) {
      try {
        const rawVisited = localStorage.getItem('kr_edu_visited_schools') || '[]';
        let visitedList = JSON.parse(rawVisited);
        if (!Array.isArray(visitedList)) visitedList = [];

        visitedList = visitedList.filter((item) => item.id !== university.id);
        visitedList.unshift({
          id: university.id,
          name: university.name_vi,
          timestamp: new Date().toISOString(),
        });

        localStorage.setItem('kr_edu_visited_schools', JSON.stringify(visitedList.slice(0, 10)));
      } catch (err) {
        console.error('Failed to save visited school to localStorage:', err);
      }

      // Send silent click log to the analytics API
      try {
        fetch('/api/analytics/click', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            school_id: university.id,
            school_name: university.name_vi
          })
        }).catch(err => console.error('Failed to send click analytics:', err));
      } catch (err) {
        console.error('Failed to dispatch fetch for click analytics:', err);
      }
    }
  }, [university]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Retrieve visited schools list
    let visitedSchools = [];
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          city: formData.city.trim() || 'Chưa rõ',
          school_id: university.id,
          school_name: university.name_vi,
          visited_schools: visitedSchools,
        }),
      });

      if (res.ok) {
        setSubmitStatus('success');

        // Save profile details for future Auto-fill
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
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add key listener for Escape key to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [onClose]);

  if (!university) return null;

  const { 
    name_en, 
    name_ko, 
    name_vi, 
    type, 
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
    custom_notes,
    language_tuition_desc,
    registration_fee_desc,
    insurance_fee_desc,
    invoice_details,
    dorm_fee_desc,
    admission_conditions,
    featured_majors,
    regional_restrictions,
    is_restricted_school
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
      className="modal-outer-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .modal-outer-container {
          padding: 1.5rem;
        }
        .modal-inner-dialog {
          max-height: 90vh;
          border-radius: var(--border-radius-lg);
        }
        .modal-header-section {
          padding: 2rem;
        }
        .modal-body-content {
          padding: 1.75rem;
        }
        @media (max-width: 640px) {
          .modal-outer-container {
            padding: 0.5rem;
          }
          .modal-inner-dialog {
            max-height: 95vh;
            border-radius: 16px !important;
          }
          .modal-header-section {
            padding: 1.25rem;
          }
          .modal-body-content {
            padding: 1rem;
            gap: 1.25rem !important;
          }
        }
      `}} />
      {/* Modal Dialog */}
      <div 
        className="glass-effect animate-scale-in modal-inner-dialog"
        style={{
          width: '100%',
          maxWidth: '900px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
        }}
        onClick={(e) => e.stopPropagation()} // stop close on clicking modal content
      >
        {/* Header Section */}
        <div 
          className="modal-header-section"
          style={{
            borderBottom: '1px solid var(--border-color)',
            position: 'relative',
            backgroundColor: 'var(--bg-surface)'
          }}
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              border: 'none',
              background: 'var(--bg-surface-hover)',
              color: 'var(--text-primary)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'brightness(0.95)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'none';
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
            {is_restricted_school && (
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.25rem 0.6rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#dc2626',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                HẠN CHẾ VISA
              </span>
            )}
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
            {name_en} • <span style={{ color: 'var(--text-tertiary)' }}>{name_ko}</span>
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

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-surface)',
          padding: '0 1.75rem',
          gap: '1.25rem'
        }}>
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            style={{
              padding: '0.85rem 0.25rem',
              border: 'none',
              background: 'none',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: activeTab === 'overview' ? 'var(--primary)' : 'var(--text-tertiary)',
              borderBottom: activeTab === 'overview' ? '2.5px solid var(--primary)' : '2.5px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all var(--transition-fast)'
            }}
          >
            <BarChart2 size={16} />
            <span>Tổng quan & Học phí</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('majors')}
            style={{
              padding: '0.85rem 0.25rem',
              border: 'none',
              background: 'none',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: activeTab === 'majors' ? 'var(--primary)' : 'var(--text-tertiary)',
              borderBottom: activeTab === 'majors' ? '2.5px solid var(--primary)' : '2.5px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all var(--transition-fast)'
            }}
          >
            <BookOpen size={16} />
            <span>Chuyên ngành & Khoa</span>
            {university.majors_detail && university.majors_detail.length > 0 && (
              <span style={{
                fontSize: '0.65rem',
                backgroundColor: 'var(--accent-light)',
                color: 'var(--primary)',
                padding: '0.15rem 0.45rem',
                borderRadius: '9999px',
                fontWeight: 800
              }}>
                {university.majors_detail.reduce((sum, f) => sum + (f.majors ? f.majors.length : 0), 0)} ngành
              </span>
            )}
          </button>
        </div>

        {/* Description Banner */}
        {description && activeTab === 'overview' && (
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
        {custom_notes && activeTab === 'overview' && (
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

        {/* Content Body Grid / Tab Views */}
        {activeTab === 'majors' ? (
          /* MAJORS TAB VIEW */
          <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', overflowY: 'auto' }}>
            {/* In-modal quick search bar */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.85rem', color: 'var(--text-tertiary)' }} />
              <input
                type="text"
                placeholder="Tìm nhanh ngành trong trường này (VD: Truyền thông, CNTT, Kinh doanh, Thiết kế...)"
                value={majorQuery}
                onChange={(e) => setMajorQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem 0.65rem 2.4rem',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-app)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  outline: 'none'
                }}
              />
            </div>

            {/* Featured Majors Tag Highlight */}
            {featured_majors && (
              <div style={{
                padding: '0.85rem 1.25rem',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--primary-light)',
                border: '1px solid rgba(79, 70, 229, 0.2)',
                fontSize: '0.82rem',
                color: 'var(--primary)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Flame size={16} color="var(--primary)" />
                <span><strong>Thế mạnh đào tạo nổi bật:</strong> {featured_majors}</span>
              </div>
            )}

            {/* List of Faculties and Majors */}
            {(!university.majors_detail || university.majors_detail.length === 0) ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>
                Đang cập nhật danh sách khoa chi tiết cho trường này.
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.25rem' }}>
                {university.majors_detail
                  .map(faculty => {
                    const filteredMajors = (faculty.majors || []).filter(m => {
                      if (!majorQuery.trim()) return true;
                      const q = majorQuery.toLowerCase();
                      return m.name_vi.toLowerCase().includes(q) || 
                             m.name_ko.toLowerCase().includes(q) || 
                             faculty.faculty_name_vi.toLowerCase().includes(q);
                    });

                    if (majorQuery.trim() && filteredMajors.length === 0) return null;

                    return (
                      <div 
                        key={faculty.category}
                        style={{
                          borderRadius: 'var(--border-radius-md)',
                          border: '1px solid var(--border-color)',
                          backgroundColor: 'var(--bg-surface)',
                          padding: '1.25rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.85rem'
                        }}
                      >
                        {/* Faculty Title & Tuition */}
                        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.65rem' }}>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: '0 0 0.25rem 0', color: 'var(--text-primary)' }}>
                            {faculty.faculty_name_vi}
                          </h4>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                            {faculty.faculty_name_ko}
                          </span>
                          <div style={{ marginTop: '0.4rem', fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)' }}>
                            Học phí: {formatCurrency(faculty.tuition_krw, 'KRW')} / kỳ
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginLeft: '0.4rem', fontWeight: 500 }}>
                              (~{formatCurrency(krwToVnd(faculty.tuition_krw, exchangeRate), 'VND')})
                            </span>
                          </div>
                        </div>

                        {/* Faculty Majors */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {filteredMajors.map((m, idx) => (
                            <div 
                              key={idx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0.4rem 0.6rem',
                                borderRadius: 'var(--border-radius-sm)',
                                backgroundColor: m.is_hot ? 'var(--accent-light)' : 'var(--bg-app)',
                                fontSize: '0.8rem'
                              }}
                            >
                              <div>
                                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{m.name_vi}</span>
                                <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)', marginLeft: '0.4rem' }}>({m.name_ko})</span>
                              </div>
                              {m.is_hot && (
                                <span style={{
                                  fontSize: '0.65rem',
                                  fontWeight: 800,
                                  color: '#dc2626',
                                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                                  padding: '0.15rem 0.4rem',
                                  borderRadius: '9999px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.15rem'
                                }}>
                                  <Flame size={10} color="#dc2626" /> HOT
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                  .filter(Boolean)}
              </div>
            )}
          </div>
        ) : (
          /* OVERVIEW TAB VIEW */
          <>
            <div 
              className="modal-body-content"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
            }}
          >
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
            <div style={{
              fontSize: '0.72rem',
              color: 'var(--text-tertiary)',
              marginTop: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              fontWeight: 500
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <AlertCircle size={12} />
                <span>Lưu ý: Học phí trên là học phí chuyên ngành cho 1 học kỳ (1 năm học có 2 học kỳ chính).</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', paddingLeft: '0.9rem', color: 'var(--text-tertiary)' }}>
                <span style={{ display: 'inline-block', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'var(--text-tertiary)' }} />
                <span>Nguồn dữ liệu học phí năm học 2025 - 2026: academyinfo.go.kr & Cổng tuyển sinh của trường.</span>
              </div>
            </div>
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

        {/* Admission & Language Course Info */}
        {(language_tuition_desc || registration_fee_desc || insurance_fee_desc || dorm_fee_desc || admission_conditions || featured_majors || regional_restrictions || is_restricted_school) && (
          <div style={{
            padding: '1.75rem',
            borderTop: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-card)'
          }}>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-primary)'
            }}>
              <GraduationCap size={20} color="var(--primary)" />
              Thông tin Tuyển sinh & Chi phí Hệ tiếng (Cập nhật từ XLSX)
            </h4>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem',
              marginBottom: '1rem'
            }}>
              {/* Cột 1: Chi phí hệ tiếng */}
              <div style={{
                padding: '1.15rem',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--bg-app)',
                border: '1px solid var(--border-color)'
              }}>
                <h5 style={{ margin: '0 0 0.75rem 0', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <DollarSign size={16} color="var(--success)" />
                  Học phí & Chi phí Hệ tiếng
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
                  {language_tuition_desc && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Học phí hệ tiếng:</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{language_tuition_desc}</strong>
                    </div>
                  )}
                  {registration_fee_desc && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Phí đăng ký/nhập học:</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{registration_fee_desc}</strong>
                    </div>
                  )}
                  {insurance_fee_desc && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Phí bảo hiểm y tế:</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{insurance_fee_desc}</strong>
                    </div>
                  )}
                  {dorm_fee_desc && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', borderTop: '1px dashed var(--border-color)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                      <span style={{ color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>Ký túc xá (chi tiết):</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{dorm_fee_desc}</strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Cột 2: Điều kiện & Tuyển sinh */}
              <div style={{
                padding: '1.15rem',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--bg-app)',
                border: '1px solid var(--border-color)'
              }}>
                <h5 style={{ margin: '0 0 0.75rem 0', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <AlertCircle size={16} color="var(--primary)" />
                  Điều kiện Tuyển sinh
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
                  {admission_conditions && (
                    <div>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.2rem' }}>GPA & Điểm vắng:</span>
                      <strong style={{ color: 'var(--text-primary)', display: 'block', whiteSpace: 'pre-line' }}>{admission_conditions}</strong>
                    </div>
                  )}
                  {regional_restrictions && (
                    <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.2rem' }}>Hạn chế vùng miền:</span>
                      <span style={{ 
                        color: '#dc2626', 
                        fontWeight: 700,
                        backgroundColor: 'rgba(239, 68, 68, 0.08)',
                        padding: '0.15rem 0.4rem',
                        borderRadius: '4px',
                        display: 'inline-block'
                      }}>{regional_restrictions}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Cột 3: Thế mạnh & Hóa đơn */}
              <div style={{
                padding: '1.15rem',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--bg-app)',
                border: '1px solid var(--border-color)'
              }}>
                <h5 style={{ margin: '0 0 0.75rem 0', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <GraduationCap size={16} color="var(--accent)" />
                  Thế mạnh Đào tạo & Chi tiết
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
                  {featured_majors && (
                    <div>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.2rem' }}>Chuyên ngành nổi bật:</span>
                      <strong style={{ color: 'var(--text-primary)', display: 'block' }}>{featured_majors}</strong>
                    </div>
                  )}
                  {invoice_details && (
                    <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '0.2rem' }}>Hóa đơn dự kiến (Invoice):</span>
                      <span style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.75rem', fontStyle: 'italic', lineHeight: 1.4 }}>{invoice_details}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {is_restricted_school && (
              <div style={{
                marginTop: '1rem',
                padding: '0.85rem 1.15rem',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'rgba(239, 68, 68, 0.06)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <AlertCircle size={18} color="#dc2626" />
                <div style={{ fontSize: '0.8rem', color: '#dc2626', fontWeight: 600 }}>
                  Chú ý quan trọng: Trường học này hiện đang thuộc danh sách hạn chế cấp Visa du học của Đại sứ quán Hàn Quốc. Học sinh ứng tuyển cần chuẩn bị hồ sơ kỹ lưỡng hơn bình thường và liên hệ nhận tư vấn chuyên biệt.
                </div>
              </div>
            )}
          </div>
        )}

        {/* Lead Registration Form */}
        <div style={{
          padding: '1.75rem',
          backgroundColor: 'rgba(230, 0, 35, 0.02)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
        }}>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              marginBottom: '0.5rem',
              color: 'var(--text-primary)',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <GraduationCap size={20} color="var(--primary)" />
              Đăng ký Tư vấn Học phí & Nhận Học bổng {name_vi}
            </h4>
            <p style={{
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '1.25rem',
              lineHeight: 1.4
            }}>
              Nhập thông tin đăng ký tư vấn du học. Ban tuyển sinh KoreaEdu sẽ liên hệ tư vấn lộ trình và gửi bảng chi phí chi tiết cho bạn trong vòng 24h.
            </p>

            {submitStatus === 'success' ? (
              <div style={{
                backgroundColor: 'var(--success-light)',
                border: '1px solid var(--success)',
                color: 'var(--success)',
                padding: '1rem',
                borderRadius: 'var(--border-radius-md)',
                textAlign: 'center',
                fontSize: '0.85rem',
                fontWeight: 700,
              }}>
                ✓ Đăng ký tư vấn thành công! Ban tư vấn KoreaEdu sẽ liên hệ với bạn trong thời gian sớm nhất qua số điện thoại {formData.phone}.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
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
                        height: '38px',
                        padding: '0 0.75rem',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
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
                        height: '38px',
                        padding: '0 0.75rem',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                      Email (Nhận bảng phí)
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        height: '38px',
                        padding: '0 0.75rem',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                      Tỉnh / Thành phố
                    </label>
                    <input
                      type="text"
                      placeholder="Hà Nội, TP.HCM, Đà Nẵng..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: '100%',
                        height: '38px',
                        padding: '0 0.75rem',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {submitStatus === 'error' && (
                  <p style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 600, margin: 0 }}>
                    ❌ Đã xảy ra lỗi khi gửi thông tin. Vui lòng kiểm tra lại kết nối mạng!
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    height: '40px',
                    borderRadius: 'var(--border-radius-md)',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    marginTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 12px rgba(230, 0, 35, 0.2)',
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi đăng ký tư vấn ngay'}
                </button>
              </form>
            )}
          </div>
        </div>
      </>
    )}

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
              borderRadius: 'var(--border-radius-md)',
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

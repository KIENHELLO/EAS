import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Landmark, MapPin, Globe, Award, DollarSign, Home, AlertCircle, Sparkles } from 'lucide-react';
import { universities } from '../../../data/universities';
import schoolCoordinates from '../../../data/school_coordinates.json';
import UniDetailActions from '../../../components/UniDetailActions';
import MiniMapWrapper from '../../../components/MiniMapWrapper';
import SchoolLeadForm from '../../../components/SchoolLeadForm';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Generate Static Params for all 205 schools
export async function generateStaticParams() {
  return universities.map((u) => ({
    slug: u.id,
  }));
}

// 2. Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const uni = universities.find((u) => u.id === slug);
  if (!uni) {
    return {
      title: 'Không tìm thấy trường | KR-UniTuition',
      description: 'Trường đại học không tồn tại trong hệ thống.',
    };
  }

  // Calculate tuition min and max
  const tuitionValues = Object.values(uni.tuition).filter(val => val !== null && val !== undefined) as number[];
  const minT = tuitionValues.length > 0 ? Math.min(...tuitionValues) : 0;
  const maxT = tuitionValues.length > 0 ? Math.max(...tuitionValues) : 0;

  const currentYear = new Date().getFullYear();

  return {
    title: `Học phí ${uni.name_vi} (${uni.name_ko}) ${currentYear} | KR-UniTuition`,
    description: `Học phí ${uni.name_vi} từ ${minT.toLocaleString()} - ${maxT.toLocaleString()} KRW/kỳ. Thông tin chi tiết ngành học, ký túc xá, học bổng GKS, và vị trí địa lý của trường.`,
    keywords: `${uni.name_vi}, ${uni.name_en}, học phí, du học Hàn Quốc, ${uni.region}`,
  };
}

export default async function UniversityPage({ params }: PageProps) {
  const { slug } = await params;
  const uni = universities.find((u) => u.id === slug);
  if (!uni) {
    return notFound();
  }

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
    custom_notes,
    has_gks
  } = uni as any;

  const hasGksBadge = has_gks === true || (scholarships && (scholarships as any[]).some((s: any) => s.toLowerCase().includes('gks') || s.toLowerCase().includes('chính phủ')));

  // Major category display map
  const majorNames: { [key: string]: string } = {
    humanities_social: "Nhân văn & Xã hội",
    natural_sciences: "Khoa học Tự nhiên",
    engineering: "Kỹ thuật & Công nghệ",
    arts_sports: "Nghệ thuật & Thể thao",
    medicine_pharmacy: "Y Dược",
  };

  // Find coordinates
  const coords = schoolCoordinates[uni.id as keyof typeof schoolCoordinates] as { lat: number; lon: number } | undefined;

  // Calculate average tuition
  const tuitionValues = Object.values(tuition).filter(val => val !== null && val !== undefined) as number[];
  const avgTuitionKRW = tuitionValues.length > 0 ? tuitionValues.reduce((sum, val) => sum + val, 0) / tuitionValues.length : 3500000;

  // Static Exchange rate reference for initial server-render (client will display VND automatically with live rate context if hydrated)
  // Let's use 17.59 as standard reference
  const serverExchangeRate = 17.59;
  const formatVnd = (krw: number) => {
    const vnd = Math.round((krw * serverExchangeRate) / 1000) * 1000;
    return vnd.toLocaleString('vi-VN') + ' ₫';
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', padding: '2rem 1.5rem' }}>
      <div className="ambient-glow" />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
          <Link href="/" style={{ color: 'var(--text-tertiary)', fontWeight: 600 }}>Trang chủ</Link>
          <span style={{ margin: '0 0.5rem' }}>&gt;</span>
          <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{name_vi}</span>
        </div>

        {/* Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }} className="uni-detail-grid">
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 960px) {
              .uni-detail-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}} />

          {/* LEFT: Detailed Info Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div 
              className="glass-effect"
              style={{
                borderRadius: 'var(--border-radius-lg)',
                padding: '2rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              {/* Header Title Section */}
              <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '9999px',
                    backgroundColor: type === 'public' ? 'var(--success-light)' : 'var(--primary-light)',
                    color: type === 'public' ? 'var(--success)' : 'var(--primary)',
                  }}>
                    {type === 'public' ? 'Trường Công lập' : 'Trường Tư thục'}
                  </span>
                  
                  {top_1_percent && (
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      color: '#059669',
                    }}>
                      TOP 1%
                    </span>
                  )}

                  {hasGksBadge && (
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(245, 158, 11, 0.15)',
                      color: '#d97706',
                    }}>
                      GKS ✓
                    </span>
                  )}

                  {accept_gdtx && (
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(14, 165, 233, 0.15)',
                      color: '#0284c7',
                    }}>
                      Nhận GDTX {accept_gdtx === 'top2' ? 'Top 2%' : 'Top 3%'}
                    </span>
                  )}

                  {visa_metropolitan && (
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(147, 51, 234, 0.15)',
                      color: '#7c3aed',
                    }}>
                      Visa Đô thị
                    </span>
                  )}

                  {master_no_topik && (
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(79, 70, 229, 0.15)',
                      color: 'var(--primary)',
                    }}>
                      Nợ TOPIK (Thạc sĩ)
                    </span>
                  )}
                </div>

                <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0.5rem 0', color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                  {name_vi}
                </h1>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', fontWeight: 500, margin: 0 }}>
                  {name_en} • <span style={{ color: 'var(--text-tertiary)' }}>{name_ko}</span>
                </p>
              </div>

              {/* Description */}
              {description && (
                <div style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                  <p>{description}</p>
                </div>
              )}

              {/* Special Admissions Notes */}
              {custom_notes && (
                <div style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'rgba(245, 158, 11, 0.08)',
                  borderRadius: 'var(--border-radius-sm)',
                  fontSize: '0.85rem',
                  lineHeight: '1.6',
                  color: '#d97706',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '2rem',
                  border: '1px solid rgba(245, 158, 11, 0.15)'
                }}>
                  <AlertCircle size={18} />
                  <span><strong>Lưu ý tuyển sinh:</strong> {custom_notes}</span>
                </div>
              )}

              {/* Detailed Tuition Tables */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <DollarSign size={20} color="var(--primary)" />
                  Bảng học phí chi tiết theo ngành (Ước tính 1 học kỳ)
                </h3>

                <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ backgroundColor: 'var(--bg-app)', borderBottom: '1px solid var(--border-color)' }}>
                        <th style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', fontWeight: 700 }}>Khối ngành</th>
                        <th style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', fontWeight: 700, textAlign: 'right' }}>Học phí (KRW/kỳ)</th>
                        <th style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', fontWeight: 700, textAlign: 'right' }}>Quy đổi (VND tham khảo)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(Object.entries(tuition) as [string, any][]).map(([major, cost], idx) => {
                        const isAvailable = cost !== null && cost !== undefined;
                        return (
                          <tr key={major} style={{ borderBottom: idx < Object.keys(tuition).length - 1 ? '1px solid var(--border-color)' : 'none', backgroundColor: idx % 2 === 0 ? 'transparent' : 'var(--bg-surface-hover)' }}>
                            <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                              {majorNames[major] || major}
                            </td>
                            <td style={{ padding: '0.85rem 1rem', textAlign: 'right', color: isAvailable ? 'var(--text-primary)' : 'var(--text-tertiary)', fontStyle: isAvailable ? 'normal' : 'italic' }}>
                              {isAvailable ? `${cost.toLocaleString()} KRW` : 'Không đào tạo'}
                            </td>
                            <td style={{ padding: '0.85rem 1rem', textAlign: 'right', fontWeight: 700, color: isAvailable ? 'var(--primary)' : 'var(--text-tertiary)' }}>
                              {isAvailable ? formatVnd(cost) : '-'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Department details & general majors */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Landmark size={20} color="var(--primary)" />
                  Chương trình đào tạo tiêu biểu
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.85rem' }}>
                  Các nhóm ngành chính được mở tuyển sinh cho sinh viên quốc tế tại {name_vi} bao gồm:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', backgroundColor: 'var(--bg-app)' }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Nhân văn & Kinh tế</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', lineHeight: '1.4' }}>Ngôn ngữ Hàn/Anh, Quản trị Kinh doanh, Quản lý du lịch, Kinh tế học, Truyền thông đại chúng...</span>
                  </div>
                  <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', backgroundColor: 'var(--bg-app)' }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Kỹ thuật & Công nghệ</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', lineHeight: '1.4' }}>Khoa học Máy tính, Công nghệ thông tin, Cơ khí chế tạo, Điện tử viễn thông, Công nghệ Bán dẫn...</span>
                  </div>
                  <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', backgroundColor: 'var(--bg-app)' }}>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Khoa học Tự nhiên & Nghệ thuật</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', lineHeight: '1.4' }}>Hóa sinh học, Thời trang, Thiết kế mỹ thuật, Truyền thông đa phương tiện, Kiến trúc, Thể dục thể thao...</span>
                  </div>
                </div>
              </div>

              {/* Housing & Living Costs */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Home size={20} color="var(--success)" />
                  Ký túc xá & Dự toán Sinh hoạt phí
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {/* Dormitory cost details */}
                  <div style={{ padding: '1.25rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface-hover)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>Phí Ký túc xá</span>
                    {dorm_fee ? (
                      <div>
                        <strong style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{formatVnd(dorm_fee)}</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginTop: '0.1rem' }}>
                          (~ {dorm_fee.toLocaleString()} KRW / học kỳ 4 tháng)
                        </span>
                      </div>
                    ) : (
                      <strong style={{ fontSize: '1rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>Không có dữ liệu / Cập nhật sau</strong>
                    )}
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-tertiary)', marginTop: '0.5rem', lineHeight: '1.3' }}>
                      * Ký túc xá thường trang bị đầy đủ bàn học, tủ quần áo, internet, nhà tắm chung/riêng tùy phòng.
                    </span>
                  </div>

                  {/* Living cost details */}
                  <div style={{ padding: '1.25rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-surface-hover)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>Sinh hoạt phí trung bình</span>
                    {living_cost_est ? (
                      <div>
                        <strong style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{formatVnd(living_cost_est * 4)}</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginTop: '0.1rem' }}>
                          (~ {living_cost_est.toLocaleString()} KRW / tháng)
                        </span>
                      </div>
                    ) : (
                      <div>
                        <strong style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{formatVnd(600000 * 4)}</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginTop: '0.1rem' }}>
                          (~ 600,000 KRW / tháng)
                        </span>
                      </div>
                    )}
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-tertiary)', marginTop: '0.5rem', lineHeight: '1.3' }}>
                      * Bao gồm tiền ăn tại nhà ăn sinh viên, đi lại bằng xe buýt/tàu điện ngầm, giáo trình và bảo hiểm y tế.
                    </span>
                  </div>
                </div>
              </div>

              {/* Lead Registration Form */}
              <SchoolLeadForm schoolId={uni.id} schoolName={name_vi} />

            </div>
          </div>

          {/* RIGHT: Sidebar facts & Minimap */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Quick Facts Card */}
            <div 
              className="glass-effect"
              style={{
                borderRadius: 'var(--border-radius-lg)',
                padding: '1.5rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                <Sparkles size={18} color="var(--primary)" />
                Thông tin cơ bản
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
                
                {/* Ranking */}
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-color)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Hạng quốc gia:</span>
                  <strong style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <Award size={14} color="#f59e0b" fill="#f59e0b" />
                    #{ranking}
                  </strong>
                </div>

                {/* Region */}
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-color)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Vùng / Tỉnh:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{region}</span>
                </div>

                {/* Type */}
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-color)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Loại hình:</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                    {type === 'public' ? 'Công lập / Quốc lập' : 'Tư thục'}
                  </span>
                </div>

                {/* Address */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', borderBottom: '1px dashed var(--border-color)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Địa chỉ campus:</span>
                  <span style={{ color: 'var(--text-primary)', lineHeight: 1.4 }}>{campus_address}</span>
                </div>

                {/* Website */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Trang web trường:</span>
                  <a 
                    href={website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      color: 'var(--primary)', 
                      fontWeight: 700, 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.25rem',
                      textDecoration: 'underline',
                      wordBreak: 'break-all'
                    }}
                  >
                    <Globe size={14} />
                    <span>{website.replace('https://', '').replace('http://', '')}</span>
                  </a>
                </div>

              </div>

              {/* Actions component */}
              <UniDetailActions university={uni} />
            </div>

            {/* Scholarships Summary Card */}
            <div 
              className="glass-effect"
              style={{
                borderRadius: 'var(--border-radius-lg)',
                padding: '1.5rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                <Award size={18} color="var(--accent)" />
                Học bổng tiêu biểu
              </h3>
              
              <ul style={{ paddingLeft: '1.1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {(scholarships as any[]).map((s: any, idx: number) => (
                  <li key={idx} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4', fontWeight: 500 }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Minimap card */}
            {coords && coords.lat && coords.lon && coords.lat >= 33.0 && coords.lat <= 38.9 && coords.lon >= 124.5 && coords.lon <= 129.6 && (

              <div 
                className="glass-effect"
                style={{
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                  <MapPin size={18} color="var(--accent)" />
                  Bản đồ khuôn viên
                </h3>
                <MiniMapWrapper lat={coords.lat} lng={coords.lon} schoolName={name_vi} />
                <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-tertiary)', marginTop: '0.5rem', textAlign: 'center', fontWeight: 500 }}>
                  Tọa độ: {coords.lat.toFixed(5)}, {coords.lon.toFixed(5)}
                </span>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

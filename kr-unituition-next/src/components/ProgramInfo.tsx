import React, { useState } from 'react';
import { BookOpen, GraduationCap, HeartPulse, Clock, FileText, Briefcase, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProgramInfo() {
  const [activeTab, setActiveTab] = useState('d41');
  const [isExpanded, setIsExpanded] = useState(false);

  const programs = {
    d41: {
      id: 'd41',
      title: 'Hệ Tiếng Hàn (D-4-1)',
      icon: <BookOpen size={24} className="text-blue-500" />,
      color: '#3b82f6',
      badge: 'Phổ biến nhất',
      description: 'Chương trình General Training (일반연수) dành cho học sinh đến Hàn Quốc học tiếng tại các Viện ngôn ngữ (어학당) trực thuộc Đại học.',
      features: [
        { icon: <Clock size={16} />, label: 'Thời gian tối đa', value: '2 năm (Gia hạn mỗi 6 tháng)' },
        { icon: <FileText size={16} />, label: 'Yêu cầu tiếng Hàn', value: 'Không yêu cầu TOPIK đầu vào' },
        { icon: <Briefcase size={16} />, label: 'Quy định làm thêm', value: 'Sau 6 tháng (10h-20h/tuần tùy TOPIK)' },
        { icon: <Info size={16} />, label: 'Mục tiêu', value: 'Đạt TOPIK 3-4 để chuyển tiếp lên Đại học (D-2)' }
      ]
    },
    d21: {
      id: 'd21',
      title: 'Cao đẳng (D-2-1)',
      icon: <GraduationCap size={24} className="text-green-500" />,
      color: '#10b981',
      description: 'Chương trình Associate Degree (전문학사) tại các trường cao đẳng chuyên nghiệp (전문대학) tại Hàn Quốc.',
      features: [
        { icon: <Clock size={16} />, label: 'Thời gian học', value: '2 - 3 năm (Gia hạn tối đa 3-4 năm)' },
        { icon: <FileText size={16} />, label: 'Yêu cầu tiếng Hàn', value: 'Thường yêu cầu TOPIK 2 hoặc 3 trở lên' },
        { icon: <Briefcase size={16} />, label: 'Quy định làm thêm', value: 'Có thể xin ngay (20-25h/tuần)' },
        { icon: <Info size={16} />, label: 'Lợi thế', value: 'Học phí thấp, nhanh ra trường đi làm hoặc liên thông lên Đại học' }
      ]
    },
    d22: {
      id: 'd22',
      title: 'Đại học (D-2-2)',
      icon: <GraduationCap size={24} className="text-indigo-500" />,
      color: '#6366f1',
      description: 'Chương trình Cử nhân (Bachelor\'s Degree - 학사과정) đào tạo chính quy 4 năm tại Hàn Quốc.',
      features: [
        { icon: <Clock size={16} />, label: 'Thời gian học', value: '4 năm (Gia hạn tối đa 6-7 năm)' },
        { icon: <FileText size={16} />, label: 'Yêu cầu tiếng Hàn', value: 'Yêu cầu TOPIK 3 hoặc 4 trở lên' },
        { icon: <Briefcase size={16} />, label: 'Quy định làm thêm', value: 'Có thể xin ngay (20-25h/tuần)' },
        { icon: <Info size={16} />, label: 'Lợi thế', value: 'Dễ dàng chuyển đổi visa D-10, E-7 sau khi tốt nghiệp' }
      ]
    },
    caregiver: {
      id: 'caregiver',
      title: 'Thí điểm: D-2 Điều dưỡng (Caregiver)',
      icon: <HeartPulse size={24} className="text-rose-500" />,
      color: '#f43f5e',
      badge: 'Mới 2026',
      description: 'Chương trình Thí điểm của Bộ Tư pháp & Y tế (2026-2027) đào tạo nhân viên chăm sóc người cao tuổi (요양보호사) tại 24 trường chỉ định.',
      features: [
        { icon: <Clock size={16} />, label: 'Thời gian học', value: 'Thường 2 năm (Visa D-2-1 hoặc D-2-2)' },
        { icon: <FileText size={16} />, label: 'Ưu đãi chứng minh tài chính', value: 'Nới lỏng khoảng 50% so với hệ D-2 thông thường' },
        { icon: <Briefcase size={16} />, label: 'Việc làm sau tốt nghiệp', value: 'Cơ hội lấy chứng chỉ quốc gia & chuyển visa E-7-2 (Caregiver)' },
        { icon: <Info size={16} />, label: 'Lưu ý', value: 'Bao gồm lý thuyết + thực hành tại viện dưỡng lão' }
      ]
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--bg-surface)',
      borderRadius: 'var(--border-radius-md)',
      padding: '1.5rem',
      marginBottom: '2rem',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--border-color)',
      transition: 'all 0.3s ease'
    }}>
      <div 
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            🎓 Các Hệ Đào Tạo & Chương Trình Du Học Hàn Quốc
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            Phân biệt nhanh các loại Visa và hệ học phổ biến (D-4-1, D-2-1, D-2-2) để lên lộ trình phù hợp.
          </p>
        </div>
        <button style={{
          background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '0.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%',
          backgroundColor: 'var(--bg-background)'
        }}>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isExpanded && (
        <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', animation: 'fadeIn 0.3s ease-out' }}>
          
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1rem', scrollbarWidth: 'none' }}>
            {Object.values(programs).map((prog) => (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '2rem',
                  border: `1px solid ${activeTab === prog.id ? prog.color : 'var(--border-color)'}`,
                  backgroundColor: activeTab === prog.id ? `${prog.color}15` : 'transparent',
                  color: activeTab === prog.id ? prog.color : 'var(--text-secondary)',
                  fontWeight: activeTab === prog.id ? 700 : 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ color: activeTab === prog.id ? prog.color : 'var(--text-tertiary)' }}>
                  {prog.icon}
                </div>
                {prog.title}
                {prog.badge && (
                  <span style={{
                    backgroundColor: prog.color,
                    color: 'white',
                    fontSize: '0.7rem',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '1rem',
                    marginLeft: '0.25rem'
                  }}>
                    {prog.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ 
            backgroundColor: 'var(--bg-background)', 
            padding: '1.5rem', 
            borderRadius: 'var(--border-radius-sm)',
            borderLeft: `4px solid ${programs[activeTab].color}`
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
              {programs[activeTab].title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              {programs[activeTab].description}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {programs[activeTab].features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ color: programs[activeTab].color, marginTop: '2px' }}>
                    {feat.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {feat.label}
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {feat.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft, BarChart2 } from 'lucide-react';

export default function UniDetailActions({ university }) {
  const router = useRouter();

  const handleAddToCompare = () => {
    try {
      // Retrieve existing compared schools
      const raw = localStorage.getItem('compare_schools') || '[]';
      let compared = JSON.parse(raw);
      
      const isAlreadyAdded = compared.some(s => s.id === university.id);
      
      if (!isAlreadyAdded) {
        if (compared.length >= 3) {
          alert("Bạn chỉ có thể chọn tối đa 3 trường để so sánh cùng một lúc! Vui lòng xóa bớt trường khác ở trang chủ.");
          router.push('/');
          return;
        }
        compared.push(university);
        localStorage.setItem('compare_schools', JSON.stringify(compared));
      }
      
      // Redirect back to homepage to let them pick the next school
      router.push('/');
    } catch (err) {
      console.error(err);
      router.push('/');
    }
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', width: '100%' }}>
      <button
        onClick={() => router.push('/')}
        style={{
          flex: 1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          padding: '0.75rem 1.25rem',
          borderRadius: 'var(--border-radius-sm)',
          border: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-surface)',
          color: 'var(--text-secondary)',
          fontWeight: 700,
          fontSize: '0.85rem',
          cursor: 'pointer',
          transition: 'all var(--transition-fast)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-surface)'}
      >
        <ArrowLeft size={16} />
        <span>Về trang chủ</span>
      </button>

      <button
        onClick={handleAddToCompare}
        style={{
          flex: 1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          padding: '0.75rem 1.25rem',
          borderRadius: 'var(--border-radius-sm)',
          border: 'none',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)',
          color: 'white',
          fontWeight: 800,
          fontSize: '0.85rem',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all var(--transition-fast)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
      >
        <BarChart2 size={16} />
        <span>So sánh trường này</span>
      </button>
    </div>
  );
}

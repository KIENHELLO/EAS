"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Check } from 'lucide-react';

const AVAILABLE_MAJORS = [
  "Truyền thông",
  "Marketing",
  "Quản trị kinh doanh",
  "Kinh tế",
  "Thương mại quốc tế",
  "Công nghệ thông tin",
  "Khoa học máy tính",
  "Ngôn ngữ Hàn",
  "Ngôn ngữ Anh",
  "Cơ khí",
  "Điện tử",
  "Bán dẫn",
  "Logistics",
  "Du lịch",
  "Quản trị khách sạn",
  "Thiết kế",
  "Mỹ thuật",
  "Nghệ thuật",
  "Làm đẹp",
  "Thẩm mỹ",
  "Trang điểm",
  "Điện ảnh",
  "Sân khấu",
  "Âm nhạc",
  "Y khoa",
  "Dược học",
  "Y dược",
  "Điều dưỡng",
  "Khoa học tự nhiên",
  "Sinh học",
  "Nông nghiệp"
];

export default function MajorSearchFilter({ value, onChange }) {
  const [inputValue, setInputValue] = useState(value === 'All' ? '' : value);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);

  useEffect(() => {
    setInputValue(value === 'All' ? '' : value);
  }, [value]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    if (inputValue.trim() === '') {
      setFilteredSuggestions(AVAILABLE_MAJORS);
    } else {
      const filtered = AVAILABLE_MAJORS.filter(major =>
        major.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
    setActiveIndex(-1);
  }, [inputValue]);

  const handleSelect = (major) => {
    setInputValue(major);
    onChange(major);
    setIsOpen(false);
  };

  const handleClear = () => {
    setInputValue('');
    onChange('All');
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % Math.max(1, filteredSuggestions.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + filteredSuggestions.length) % Math.max(1, filteredSuggestions.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < filteredSuggestions.length) {
        handleSelect(filteredSuggestions[activeIndex]);
      } else if (inputValue.trim()) {
        // Allow custom typed major
        handleSelect(inputValue.trim());
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div 
      ref={containerRef} 
      style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', position: 'relative', width: '100%' }}
    >
      <label 
        htmlFor="major-autocomplete-input"
        style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}
      >
        Chuyên ngành đào tạo
      </label>
      
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <Search 
          size={16} 
          style={{ position: 'absolute', left: '0.75rem', color: isOpen ? 'var(--primary)' : 'var(--text-tertiary)', pointerEvents: 'none', transition: 'color var(--transition-fast)' }} 
        />
        <input
          id="major-autocomplete-input"
          type="text"
          placeholder="Gõ tìm ngành (ví dụ: Truyền thông, IT...)"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (!isOpen) setIsOpen(true);
            if (e.target.value === '') {
              onChange('All');
            }
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          style={{
            width: '100%',
            padding: '0.6rem 2.25rem 0.6rem 2.25rem',
            borderRadius: 'var(--border-radius-md)',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            fontWeight: 600,
            outline: 'none',
            transition: 'all var(--transition-fast)',
            boxShadow: isOpen ? '0 0 0 2px var(--accent-light)' : 'none',
            borderColor: isOpen ? 'var(--primary)' : 'var(--border-color)'
          }}
        />
        
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: '0.75rem',
              background: 'none',
              border: 'none',
              padding: '2px',
              cursor: 'pointer',
              color: 'var(--text-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'background var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {isOpen && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '0.25rem',
            maxHeight: '220px',
            overflowY: 'auto',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--border-radius-md)',
            boxShadow: 'var(--shadow-md)',
            zIndex: 1000,
            listStyle: 'none',
            padding: '0.4rem 0',
            margin: 0,
            animation: 'fadeInUp 0.15s ease-out'
          }}
        >
          {filteredSuggestions.length === 0 ? (
            <li 
              style={{
                padding: '0.6rem 1rem',
                fontSize: '0.82rem',
                color: 'var(--text-tertiary)',
                fontStyle: 'italic',
                textAlign: 'center'
              }}
            >
              Không có gợi ý. Nhấn Enter để lọc bằng từ khóa "{inputValue}"
            </li>
          ) : (
            filteredSuggestions.map((major, idx) => {
              const isSelected = value === major;
              const isActive = idx === activeIndex;
              return (
                <li
                  key={major}
                  onClick={() => handleSelect(major)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? 700 : 500,
                    color: isSelected ? 'var(--primary)' : 'var(--text-primary)',
                    backgroundColor: isSelected 
                      ? 'var(--accent-light)' 
                      : isActive 
                        ? 'var(--bg-surface-hover)' 
                        : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'background var(--transition-fast)'
                  }}
                >
                  <span>{major}</span>
                  {isSelected && <Check size={12} color="var(--primary)" />}
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}

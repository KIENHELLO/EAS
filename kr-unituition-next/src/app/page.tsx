"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Search, Filter, RotateCcw, HelpCircle, Map, List, Calculator } from 'lucide-react';
import { universities } from '../data/universities';
import { provinceMeta } from '../utils/constants';
import Navbar from '../components/Navbar';
import StatsHero from '../components/StatsHero';
import SchoolCard from '../components/SchoolCard';
import DetailModal from '../components/DetailModal';
import ComparePanel from '../components/ComparePanel';
import FilterBar from '../components/FilterBar';
import UniversityPanel from '../components/UniversityPanel';
import CostCalculator from '../components/CostCalculator';
import { useExchangeRate } from '../context/ExchangeRateContext';

// Dynamically import Leaflet Map to avoid SSR errors
const KoreaMap = dynamic(
  () => import('../components/KoreaMap'),
  { ssr: false }
);

export default function Home() {
  // 1. Theme Configuration
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  // 2. Exchange Rate from Context
  const { exchangeRate, isApiRate, rateDate, changeRate } = useExchangeRate();
  
  const [viewMode, setViewMode] = useState('map'); // Default to map view for interactive experience
  
  // List view filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedGdtx, setSelectedGdtx] = useState('All');
  const [visaMetropolitanOnly, setVisaMetropolitanOnly] = useState(false);
  const [masterNoTopikOnly, setMasterNoTopikOnly] = useState(false);
  const [top1PercentOnly, setTop1PercentOnly] = useState(false);
  const [sortBy, setSortBy] = useState('rank');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Map view filters state
  const [mapSelectedMajor, setMapSelectedMajor] = useState('All');
  const [mapMaxTuition, setMapMaxTuition] = useState(10000000);
  const [mapGksOnly, setMapGksOnly] = useState(false);
  const [mapSelectedProvince, setMapSelectedProvince] = useState('');

  // Cost calculator visibility state
  const [showCalculator, setShowCalculator] = useState(false);

  // Compare & Detail State
  const [selectedSchoolsForCompare, setSelectedSchoolsForCompare] = useState<any[]>([]);
  const [activeSchoolDetails, setActiveSchoolDetails] = useState<any>(null);

  // Sync comparison state from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('compare_schools');
      if (saved) {
        setSelectedSchoolsForCompare(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Error reading compare list:", err);
    }
  }, []);

  // 3. Extract unique regions for filters
  const uniqueRegions = ['All', ...new Set(universities.map(u => u.region))].sort();

  // 4. Reset Filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedType('All');
    setSelectedGdtx('All');
    setVisaMetropolitanOnly(false);
    setMasterNoTopikOnly(false);
    setTop1PercentOnly(false);
    setSortBy('rank');
  };

  // Helper to compute average tuition for sorting
  const getSchoolAvgTuition = (u: any) => {
    const values = (Object.values(u.tuition) as number[]).filter(val => val !== null && val !== undefined);
    if (values.length === 0) return 0;
    return values.reduce((sum: number, val: number) => sum + val, 0) / values.length;
  };

  // 5. Filter & Sort Logic for list view
  const filteredUniversities = universities
    .filter((u: any) => {
      const matchQuery = 
        u.name_vi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.name_ko.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchRegion = selectedRegion === 'All' || u.region === selectedRegion;
      const matchType = selectedType === 'All' || u.type === selectedType;
      const matchGdtx = selectedGdtx === 'All' || u.accept_gdtx === selectedGdtx;
      const matchVisa = !visaMetropolitanOnly || u.visa_metropolitan === true;
      const matchNoTopik = !masterNoTopikOnly || u.master_no_topik === true;
      const matchTop1 = !top1PercentOnly || u.top_1_percent === true;

      return matchQuery && matchRegion && matchType && matchGdtx && matchVisa && matchNoTopik && matchTop1;
    })
    .sort((a: any, b: any) => {
      if (sortBy === 'rank') {
        return a.ranking - b.ranking; // Rank 1 is top
      }
      if (sortBy === 'tuition_asc') {
        return getSchoolAvgTuition(a) - getSchoolAvgTuition(b);
      }
      if (sortBy === 'tuition_desc') {
        return getSchoolAvgTuition(b) - getSchoolAvgTuition(a);
      }
      if (sortBy === 'name') {
        return a.name_vi.localeCompare(b.name_vi);
      }
      return 0;
    });

  // Map View Filters & Sorting Logic
  const checkHasGks = (school: any) => {
    if (school.has_gks === true) return true;
    if (!school.scholarships) return false;
    return school.scholarships.some((s: any) => s.toLowerCase().includes('gks') || s.toLowerCase().includes('chính phủ'));
  };

  const checkHasMajor = (tuition: any, major: string) => {
    if (major === 'All') return true;
    if (major === 'engineering') return tuition.engineering !== null && tuition.engineering !== undefined;
    if (major === 'medicine_pharmacy') return tuition.medicine_pharmacy !== null && tuition.medicine_pharmacy !== undefined;
    if (major === 'arts_sports') return tuition.arts_sports !== null && tuition.arts_sports !== undefined;
    if (major === 'natural_sciences') return tuition.natural_sciences !== null && tuition.natural_sciences !== undefined;
    if (major === 'humanities_social_econ') return tuition.humanities_social !== null && tuition.humanities_social !== undefined;
    if (major === 'humanities_social_lang') return tuition.humanities_social !== null && tuition.humanities_social !== undefined;
    return true;
  };

  const checkTuitionLimit = (tuition: any, maxCost: number) => {
    if (maxCost >= 10000000) return true;
    const values = Object.values(tuition).filter(v => v !== null && v !== undefined);
    if (values.length === 0) return false;
    return Math.min(...values as number[]) <= maxCost;
  };

  const mapFilteredSchools = universities.filter((school: any) => {
    const matchGks = !mapGksOnly || checkHasGks(school);
    const matchMajor = checkHasMajor(school.tuition, mapSelectedMajor);
    const matchTuition = checkTuitionLimit(school.tuition, mapMaxTuition);
    return matchGks && matchMajor && matchTuition;
  });

  // Group by region for coloring and panel display
  const mapSchoolsByRegion: any = {};
  mapFilteredSchools.forEach((school: any) => {
    const r = school.region;
    if (!mapSchoolsByRegion[r]) {
      mapSchoolsByRegion[r] = [];
    }
    mapSchoolsByRegion[r].push(school);
  });

  const handleResetMapFilters = () => {
    setMapSelectedMajor('All');
    setMapMaxTuition(10000000);
    setMapGksOnly(false);
  };

  // 6. Compare Handling (Max 3 schools)
  const handleToggleCompare = (school: any) => {
    setSelectedSchoolsForCompare(prev => {
      const isAlreadyAdded = prev.some((s: any) => s.id === school.id);
      let next;
      if (isAlreadyAdded) {
        next = prev.filter((s: any) => s.id !== school.id);
      } else {
        if (prev.length >= 3) {
          alert("Bạn chỉ có thể chọn tối đa 3 trường để so sánh cùng một lúc!");
          return prev;
        }
        next = [...prev, school];
      }
      localStorage.setItem('compare_schools', JSON.stringify(next));
      return next;
    });
  };

  const handleRemoveCompareSchool = (schoolId: string) => {
    setSelectedSchoolsForCompare(prev => {
      const next = prev.filter((s: any) => s.id !== schoolId);
      localStorage.setItem('compare_schools', JSON.stringify(next));
      return next;
    });
  };

  const handleClearAllCompare = () => {
    setSelectedSchoolsForCompare([]);
    localStorage.setItem('compare_schools', '[]');
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="ambient-glow" />
      {/* Top Navbar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        exchangeRate={exchangeRate}
        setExchangeRate={changeRate}
        isApiRate={isApiRate}
        rateDate={rateDate}
        compareCount={selectedSchoolsForCompare.length}
        onOpenCompare={() => {
          // ComparePanel opens its modal internally, but can be triggered if needed.
        }}
      />

      {/* Main Container */}
      <div className="app-container">
        
        {/* Statistics Hero Banner */}
        <StatsHero universities={universities} exchangeRate={exchangeRate} />

        {/* View Mode & Calculator Toggle buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1.25rem'
        }}>
          <button
            onClick={() => {
              setViewMode('map');
              setShowCalculator(false);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--border-radius-sm)',
              border: (viewMode === 'map' && !showCalculator) ? '2px solid var(--primary)' : '1px solid var(--border-color)',
              backgroundColor: (viewMode === 'map' && !showCalculator) ? 'var(--primary-light)' : 'var(--bg-surface)',
              color: (viewMode === 'map' && !showCalculator) ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: (viewMode === 'map' && !showCalculator) ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
          >
            <Map size={15} />
            <span>Bản đồ tương tác 🗺️</span>
          </button>
          
          <button
            onClick={() => {
              setViewMode('list');
              setShowCalculator(false);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--border-radius-sm)',
              border: (viewMode === 'list' && !showCalculator) ? '2px solid var(--primary)' : '1px solid var(--border-color)',
              backgroundColor: (viewMode === 'list' && !showCalculator) ? 'var(--primary-light)' : 'var(--bg-surface)',
              color: (viewMode === 'list' && !showCalculator) ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: (viewMode === 'list' && !showCalculator) ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
          >
            <List size={15} />
            <span>Danh sách bộ lọc 🔍</span>
          </button>

          <button
            onClick={() => setShowCalculator(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--border-radius-sm)',
              border: showCalculator ? '2px solid var(--success)' : '1px solid var(--border-color)',
              backgroundColor: showCalculator ? 'var(--success-light)' : 'var(--bg-surface)',
              color: showCalculator ? 'var(--success)' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: showCalculator ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
          >
            <Calculator size={15} />
            <span>Tính tổng chi phí 🧮</span>
          </button>
        </div>

        {showCalculator ? (
          <div className="animate-fade-in" style={{ marginBottom: '5rem' }}>
            <CostCalculator exchangeRate={exchangeRate} />
          </div>
        ) : viewMode === 'map' ? (
          <div className="animate-fade-in">
            {/* Filter Bar above the map */}
            <FilterBar
              selectedMajor={mapSelectedMajor}
              setSelectedMajor={setMapSelectedMajor}
              maxTuition={mapMaxTuition}
              setMaxTuition={setMapMaxTuition}
              gksOnly={mapGksOnly}
              setGksOnly={setMapGksOnly}
              onReset={handleResetMapFilters}
            />

            {/* Map and Info Panel Container */}
            <div 
              style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                marginBottom: '5rem'
              }}
              className="map-layout-flex"
            >
              <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 768px) {
                  .map-layout-flex {
                    flex-direction: column !important;
                  }
                }
              `}} />
              
              <KoreaMap
                schoolsByRegion={mapSchoolsByRegion}
                selectedProvince={mapSelectedProvince}
                onSelectProvince={setMapSelectedProvince}
                exchangeRate={exchangeRate}
              />

              <UniversityPanel
                selectedProvince={mapSelectedProvince}
                provinceMeta={(provinceMeta as any)[mapSelectedProvince]}
                schools={mapSchoolsByRegion[mapSelectedProvince] || []}
                exchangeRate={exchangeRate}
                onViewDetails={(school: any) => setActiveSchoolDetails(school)}
                selectedCompareSchools={selectedSchoolsForCompare}
                onToggleCompare={handleToggleCompare}
                onCloseMobilePanel={() => setMapSelectedProvince('')}
              />
            </div>
          </div>
        ) : (
          <>
            {/* Search & Filters Section */}
            <div 
              className="glass-effect" 
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--border-radius-md)',
                marginBottom: '2rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'all var(--transition-normal)'
              }}
            >
              {/* Controls Heading */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                <Filter size={16} color="var(--primary)" />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                  Bộ lọc & Tìm kiếm nhanh
                </h3>
              </div>

              {/* Form Controls Grid */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  width: '100%',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  {/* Search Input */}
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flex: 1, minWidth: '250px' }}>
                    <Search size={16} style={{ position: 'absolute', left: '0.75rem', color: 'var(--text-tertiary)' }} />
                    <input 
                      type="text"
                      placeholder="Tìm tên trường (Anh, Hàn, Việt)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.6rem 0.6rem 2.25rem',
                        borderRadius: 'var(--border-radius-sm)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-app)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        outline: 'none',
                        transition: 'border-color var(--transition-fast)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    />
                  </div>

                  {/* Reset Button */}
                  {(searchQuery || selectedRegion !== 'All' || selectedType !== 'All' || sortBy !== 'rank' || selectedGdtx !== 'All' || visaMetropolitanOnly || masterNoTopikOnly || top1PercentOnly) && (
                    <button
                      onClick={handleResetFilters}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        padding: '0.6rem 1rem',
                        borderRadius: 'var(--border-radius-sm)',
                        border: '1px solid var(--accent-light)',
                        backgroundColor: 'var(--accent-light)',
                        color: 'var(--accent)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.95)'}
                      onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
                    >
                      <RotateCcw size={14} />
                      <span>Đặt lại lọc</span>
                    </button>
                  )}
                </div>

                {/* Mobile Filter Toggle Button */}
                <button 
                  className="filter-toggle-btn"
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                  <span>Bộ lọc {showMobileFilters ? '▲' : '▼'}</span>
                </button>
              </div>

              {/* Collapsible Content */}
              <div className={`filter-collapsible-content ${showMobileFilters ? 'expanded' : ''}`}>
                {/* Dropdowns Grid (Region, Type, Sort, GDTX) */}
                <div className="filter-dropdowns-grid">
                  
                  {/* Region Select */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem',
                        borderRadius: 'var(--border-radius-sm)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-app)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="All">Tất cả Khu vực ({uniqueRegions.length - 1})</option>
                      {uniqueRegions.filter(r => r !== 'All').map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  {/* Type Select */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem',
                        borderRadius: 'var(--border-radius-sm)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-app)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="All">Tất cả Loại hình</option>
                      <option value="public">Quốc lập / Công lập</option>
                      <option value="private">Tư thục</option>
                    </select>
                  </div>

                  {/* Sort Select */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem',
                        borderRadius: 'var(--border-radius-sm)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-app)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="rank">Sắp xếp: Thứ hạng tốt nhất</option>
                      <option value="tuition_asc">Học phí: Thấp đến cao</option>
                      <option value="tuition_desc">Học phí: Cao đến thấp</option>
                      <option value="name">Tên trường: A - Z</option>
                    </select>
                  </div>

                  {/* GDTX Dropdown */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <select
                      value={selectedGdtx}
                      onChange={(e) => setSelectedGdtx(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem',
                        borderRadius: 'var(--border-radius-sm)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-app)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="All">Hệ GDTX: Tất cả</option>
                      <option value="top2">Hệ GDTX: Nhận Top 2%</option>
                      <option value="top3">Hệ GDTX: Nhận Top 3%</option>
                    </select>
                  </div>

                </div>

                {/* Advanced/Special Checkboxes Row */}
                <div className="filter-checkboxes-container">
                  
                  {/* Checkbox Visa */}
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}>
                    <input 
                      type="checkbox"
                      checked={visaMetropolitanOnly}
                      onChange={(e) => setVisaMetropolitanOnly(e.target.checked)}
                      style={{
                        cursor: 'pointer',
                        accentColor: 'var(--primary)',
                        width: '15px',
                        height: '15px'
                      }}
                    />
                    <span>Diện Visa Đại đô thị</span>
                  </label>

                  {/* Checkbox TOP 1% */}
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}>
                    <input 
                      type="checkbox"
                      checked={top1PercentOnly}
                      onChange={(e) => setTop1PercentOnly(e.target.checked)}
                      style={{
                        cursor: 'pointer',
                        accentColor: 'var(--primary)',
                        width: '15px',
                        height: '15px'
                      }}
                    />
                    <span>Trường TOP 1%</span>
                  </label>

                  {/* Checkbox TOPIK delay */}
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}>
                    <input 
                      type="checkbox"
                      checked={masterNoTopikOnly}
                      onChange={(e) => setMasterNoTopikOnly(e.target.checked)}
                      style={{
                        cursor: 'pointer',
                        accentColor: 'var(--primary)',
                        width: '15px',
                        height: '15px'
                      }}
                    />
                    <span>Thạc sĩ nợ TOPIK</span>
                  </label>

                </div>
              </div>
            </div>

            {/* Results Counter */}
            <div style={{ 
              marginBottom: '1.25rem', 
              fontSize: '0.9rem', 
              color: 'var(--text-secondary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 500
            }}>
              <span>
                Tìm thấy <strong>{filteredUniversities.length}</strong> trường đại học phù hợp
              </span>
              {filteredUniversities.length === 0 && (
                <span style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem' }}>
                  <HelpCircle size={14} />
                  Hãy thử thay đổi từ khóa hoặc bộ lọc của bạn!
                </span>
              )}
            </div>

            {/* Schools Card Grid */}
            <div className="university-grid">
              {filteredUniversities.map(school => (
                <div key={school.id}>
                  <SchoolCard 
                    university={school}
                    exchangeRate={exchangeRate}
                    onViewDetails={() => setActiveSchoolDetails(school)}
                    isComparing={selectedSchoolsForCompare.some(s => s.id === school.id)}
                    onToggleCompare={() => handleToggleCompare(school)}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Floating Compare Panel and Modal */}
      <ComparePanel 
        selectedSchools={selectedSchoolsForCompare}
        onRemoveSchool={handleRemoveCompareSchool}
        onClearAll={handleClearAllCompare}
        exchangeRate={exchangeRate}
      />

      {/* University Detail Modal */}
      {activeSchoolDetails && (
        <DetailModal 
          university={activeSchoolDetails}
          exchangeRate={exchangeRate}
          onClose={() => setActiveSchoolDetails(null)}
        />
      )}
    </div>
  );
}

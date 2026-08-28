"use client";

import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Search, Filter, RotateCcw, HelpCircle, Map, List, Calculator } from 'lucide-react';
import { universities } from '../data/universities';
import { provinceMeta } from '../utils/constants';
import Navbar from '../components/Navbar';
import StatsHero from '../components/StatsHero';
import ProgramInfo from '../components/ProgramInfo';
import SchoolCard from '../components/SchoolCard';
import DetailModal from '../components/DetailModal';

import FilterBar from '../components/FilterBar';
import UniversityPanel from '../components/UniversityPanel';
import CostCalculator from '../components/CostCalculator';
import MajorSearchFilter from '../components/MajorSearchFilter';
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
  const [top2PercentOnly, setTop2PercentOnly] = useState(false);
  const [top3PercentOnly, setTop3PercentOnly] = useState(false);
  const [selectedMajor, setSelectedMajor] = useState('All');
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
  const [isCompareOpen, setIsCompareOpen] = useState(false);

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
    setTop2PercentOnly(false);
    setTop3PercentOnly(false);
    setSelectedMajor('All');
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
  const removeVietnameseTones = (str: string) => {
    if (!str) return '';
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  };

  const matchSchoolByMajor = (school: any, majorName: string) => {
    if (!majorName || majorName === 'All' || !majorName.trim()) return true;

    const rawQuery = majorName.trim().toLowerCase();
    const normQuery = removeVietnameseTones(rawQuery);
    const cleanQueryStr = rawQuery.replace(/\(.*?\)/g, '');
    const normCleanStr = removeVietnameseTones(cleanQueryStr);

    // Split by symbols AND words
    const symbolTokens = normCleanStr
      .split(/[\&\/\,\-\+]|\bva\b|\bhoac\b|\bor\b|\band\b/)
      .map(t => t.trim())
      .filter(t => t.length >= 2);

    // Core keyword mappings for broad choices
    let coreKeywords = [...symbolTokens];
    if (normCleanStr.includes('kinh doanh')) coreKeywords.push('kinh doanh', 'quan tri', 'thuong mai', 'kinh te');
    if (normCleanStr.includes('truyen thong')) coreKeywords.push('truyen thong', 'bao chi', 'quang cao', 'media');
    if (normCleanStr.includes('han quoc') || normCleanStr.includes('ngon ngu han')) coreKeywords.push('ngon ngu han', 'han quoc', 'han hoc');
    if (normCleanStr.includes('may tinh') || normCleanStr.includes('ai') || normCleanStr.includes('it')) coreKeywords.push('may tinh', 'it', 'thong tin', 'phan mem', 'cong nghe thong tin');
    if (normCleanStr.includes('o to')) coreKeywords.push('o to', 'co khi', 'xe');
    if (normCleanStr.includes('thiet ke')) coreKeywords.push('thiet ke', 'do hoa', 'my thuat');
    if (normCleanStr.includes('lam dep') || normCleanStr.includes('tham my')) coreKeywords.push('lam dep', 'tham my', 'trang diem', 'beauty');
    if (normCleanStr.includes('du lich') || normCleanStr.includes('khach san')) coreKeywords.push('du lich', 'khach san');
    if (normCleanStr.includes('dien anh') || normCleanStr.includes('san khau')) coreKeywords.push('dien anh', 'san khau', 'truyen hinh', 'dien xuat');
    if (normCleanStr.includes('am nhac') || normCleanStr.includes('k-pop')) coreKeywords.push('am nhac', 'k-pop', 'vocal', 'nghe thuat');
    if (normCleanStr.includes('dieu duong')) coreKeywords.push('dieu duong', 'nursing', 'y te');
    if (normCleanStr.includes('ban dan')) coreKeywords.push('ban dan', 'vi mach');
    if (normCleanStr.includes('duoc')) coreKeywords.push('duoc', 'thuoc');

    const allKeywords = Array.from(new Set([normCleanStr, normQuery, ...coreKeywords]));

    const textMatchesAnyKeyword = (text: string) => {
      if (!text) return false;
      const textLower = text.toLowerCase();
      const textNorm = removeVietnameseTones(textLower);
      return allKeywords.some(kw => textLower.includes(kw) || textNorm.includes(kw));
    };

    // 1. Check featured_majors from XLSX first (if school has explicit featured_majors)
    if (school.featured_majors && school.featured_majors.trim()) {
      return textMatchesAnyKeyword(school.featured_majors) || textMatchesAnyKeyword(school.custom_notes) || textMatchesAnyKeyword(school.description);
    }

    // 2. Fallback for mock/other schools: match custom_notes or description
    if (textMatchesAnyKeyword(school.custom_notes) || textMatchesAnyKeyword(school.description)) {
      return true;
    }

    return false;
  };

  // Pagination / Load More state for smooth 60fps rendering
  const [displayLimit, setDisplayLimit] = useState(24);

  // Reset displayLimit whenever any filter changes
  useEffect(() => {
    setDisplayLimit(24);
  }, [searchQuery, selectedRegion, selectedType, top2PercentOnly, top3PercentOnly, selectedMajor, visaMetropolitanOnly, masterNoTopikOnly, top1PercentOnly, sortBy]);

  const filteredUniversities = useMemo(() => {
    return universities
      .filter((u: any) => {
        const matchQuery = 
          u.name_vi.toLowerCase().includes(searchQuery.toLowerCase()) ||
          u.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
          u.name_ko.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchRegion = selectedRegion === 'All' || u.region === selectedRegion;
        
        const isCollege = u.name_vi.toLowerCase().includes('cao đẳng') || u.name_en.toLowerCase().includes('college') || u.id.startsWith('caoang');
        let matchType = false;
        if (selectedType === 'All') {
          matchType = true;
        } else if (selectedType === 'college') {
          matchType = isCollege;
        } else if (selectedType === 'public') {
          matchType = u.type === 'public' && !isCollege;
        } else if (selectedType === 'private') {
          matchType = (u.type.toLowerCase() === 'private') && !isCollege;
        }

        const matchGdtx = (!top2PercentOnly || u.accept_gdtx === 'top2') && (!top3PercentOnly || u.accept_gdtx === 'top3');
        const matchMajor = matchSchoolByMajor(u, selectedMajor);
        const matchVisa = !visaMetropolitanOnly || u.visa_metropolitan === true;
        const matchNoTopik = !masterNoTopikOnly || u.master_no_topik === true;
        const matchTop1 = !top1PercentOnly || u.top_1_percent === true;

        return matchQuery && matchRegion && matchType && matchGdtx && matchMajor && matchVisa && matchNoTopik && matchTop1;
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
  }, [searchQuery, selectedRegion, selectedType, top2PercentOnly, top3PercentOnly, selectedMajor, visaMetropolitanOnly, masterNoTopikOnly, top1PercentOnly, sortBy]);

  const displayedUniversities = useMemo(() => {
    return filteredUniversities.slice(0, displayLimit);
  }, [filteredUniversities, displayLimit]);

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
          setIsCompareOpen(true);
        }}
      />

      {/* Main Container */}
      <div className="app-container">
        
        {/* Statistics Hero Banner */}
        <StatsHero universities={universities} exchangeRate={exchangeRate} />

        {/* Program and Visa Information */}
        <ProgramInfo />

        {/* View Mode & Calculator Toggle buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
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
                marginBottom: '1.5rem',
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
                      aria-label="Tìm kiếm trường đại học"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.6rem 0.6rem 2.25rem',
                        borderRadius: '9999px',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-surface-hover)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        outline: 'none',
                        transition: 'all var(--transition-fast)'
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

                  {/* Reset Button */}
                  {(searchQuery || selectedRegion !== 'All' || selectedType !== 'All' || sortBy !== 'rank' || top2PercentOnly || top3PercentOnly || selectedMajor !== 'All' || visaMetropolitanOnly || masterNoTopikOnly || top1PercentOnly) && (
                    <button
                      onClick={handleResetFilters}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        padding: '0.6rem 1rem',
                        borderRadius: 'var(--border-radius-md)',
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label htmlFor="region-select-next" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Khu vực đào tạo</label>
                    <select
                      id="region-select-next"
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
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
                        cursor: 'pointer',
                        transition: 'border-color var(--transition-fast)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    >
                      <option value="All">Tất cả Khu vực ({uniqueRegions.length - 1})</option>
                      {uniqueRegions.filter(r => r !== 'All').map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  {/* Type Select */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label htmlFor="type-select-next" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Loại hình trường</label>
                    <select
                      id="type-select-next"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
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
                        cursor: 'pointer',
                        transition: 'border-color var(--transition-fast)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    >
                      <option value="All">Tất cả Loại hình</option>
                      <option value="public">Quốc lập / Công lập</option>
                      <option value="private">Tư thục</option>
                      <option value="college">Cao đẳng</option>
                    </select>
                  </div>

                  {/* Sort Select */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label htmlFor="sort-select-next" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Sắp xếp học phí</label>
                    <select
                      id="sort-select-next"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
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
                        cursor: 'pointer',
                        transition: 'border-color var(--transition-fast)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    >
                      <option value="rank">Thứ hạng tốt nhất</option>
                      <option value="tuition_asc">Học phí: Thấp đến cao</option>
                      <option value="tuition_desc">Học phí: Cao đến thấp</option>
                      <option value="name">Tên trường: A - Z</option>
                    </select>
                  </div>



                  {/* Major Autocomplete Search (List View) */}
                  <MajorSearchFilter value={selectedMajor} onChange={setSelectedMajor} />

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

                  {/* Checkbox TOP 2% */}
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
                      checked={top2PercentOnly}
                      onChange={(e) => setTop2PercentOnly(e.target.checked)}
                      style={{
                        cursor: 'pointer',
                        accentColor: 'var(--primary)',
                        width: '15px',
                        height: '15px'
                      }}
                    />
                    <span>Trường TOP 2%</span>
                  </label>

                  {/* Checkbox TOP 3% */}
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
                      checked={top3PercentOnly}
                      onChange={(e) => setTop3PercentOnly(e.target.checked)}
                      style={{
                        cursor: 'pointer',
                        accentColor: 'var(--primary)',
                        width: '15px',
                        height: '15px'
                      }}
                    />
                    <span>Trường TOP 3%</span>
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
              marginBottom: '1.5rem', 
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
              {displayedUniversities.map(school => (
                <SchoolCard 
                  key={school.id}
                  university={school}
                  exchangeRate={exchangeRate}
                  onViewDetails={() => setActiveSchoolDetails(school)}
                  isComparing={selectedSchoolsForCompare.some(s => s.id === school.id)}
                  onToggleCompare={() => handleToggleCompare(school)}
                />
              ))}
            </div>

            {/* Load More Button for Smooth Scrolling Performance */}
            {filteredUniversities.length > displayLimit && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
                <button
                  onClick={() => setDisplayLimit((prev: number) => prev + 24)}
                  className="glass-effect"
                  style={{
                    padding: '0.8rem 2rem',
                    borderRadius: '9999px',
                    border: '1px solid var(--primary)',
                    color: 'var(--primary)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                >
                  Xem thêm trường học (Còn {filteredUniversities.length - displayLimit} trường) 👇
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* University Detail Modal */}
      {activeSchoolDetails && (
        <DetailModal 
          university={activeSchoolDetails}
          exchangeRate={exchangeRate}
          initialMajor={selectedMajor}
          onClose={() => setActiveSchoolDetails(null)}
        />
      )}
    </div>
  );
}

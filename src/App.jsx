import { useState, useEffect, lazy, Suspense } from 'react';
import { Search, Filter, RotateCcw, HelpCircle, Map, List, Landmark } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import { universities } from './data/universities';
import Navbar from './components/Navbar';
import StatsHero from './components/StatsHero';
import SchoolCard from './components/SchoolCard';
import DetailModal from './components/DetailModal';
import ComparePanel from './components/ComparePanel';
const KoreaMap = lazy(() => import('./components/KoreaMap'));
import { provinceMeta } from './utils/constants';
import FilterBar from './components/FilterBar';
import UniversityPanel from './components/UniversityPanel';
import MajorSearchFilter from './components/MajorSearchFilter';
import { getExchangeRate } from './utils/exchangeRate';

export default function App({ initialViewMode = 'map', initialActiveSchoolId = null }) {
  // 1. Theme Configuration
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // 2. State Variables
  const [exchangeRate, setExchangeRate] = useState(18.5); // Default: 1 KRW = 18.5 VND
  const [isApiRate, setIsApiRate] = useState(false);
  const [rateDate, setRateDate] = useState('Đang lấy tỷ giá...');
  const [viewMode, setViewMode] = useState(initialViewMode);
  
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

  const [selectedSchoolsForCompare, setSelectedSchoolsForCompare] = useState([]);
  const [activeSchoolDetails, setActiveSchoolDetails] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Sync state with URL pathname for client-side routing & hydration
  useEffect(() => {
    const path = location.pathname;
    if (path === '/universities') {
      setViewMode('list');
      setActiveSchoolDetails(null);
    } else if (path === '/compare') {
      setViewMode('compare');
      setActiveSchoolDetails(null);
    } else if (path.startsWith('/university/')) {
      const schoolId = path.split('/').pop();
      const school = universities.find(u => u.id === schoolId);
      if (school) {
        setActiveSchoolDetails(school);
      }
      setViewMode('map');
    } else if (path === '/') {
      setViewMode('map');
      setActiveSchoolDetails(null);
    }
  }, [location.pathname]);

  // Set initial active school details if provided via props (for SSG and deep linking)
  useEffect(() => {
    if (initialActiveSchoolId) {
      const school = universities.find(u => u.id === initialActiveSchoolId);
      if (school) {
        setActiveSchoolDetails(school);
      }
    }
  }, [initialActiveSchoolId]);

  // Fetch exchange rate on mount
  useEffect(() => {
    getExchangeRate().then(data => {
      setExchangeRate(data.rate);
      setIsApiRate(data.isApiRate);
      setRateDate(data.rateDate);
    });
  }, []);

  const handleManualExchangeRateChange = (newRate) => {
    setExchangeRate(newRate);
    setIsApiRate(false);
    setRateDate('Tùy chỉnh bởi người dùng');
  };

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
  const getSchoolAvgTuition = (u) => {
    const values = Object.values(u.tuition).filter(val => val !== null && val !== undefined);
    if (values.length === 0) return 0;
    return values.reduce((sum, val) => sum + val, 0) / values.length;
  };

  // 5. Filter & Sort Logic
  const removeVietnameseTones = (str) => {
    if (!str) return '';
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  };

  const matchSchoolByMajor = (school, majorName) => {
    if (!majorName || majorName === 'All') return true;
    const query = majorName.toLowerCase();
    const normQuery = removeVietnameseTones(query);
    
    // Check specific fields (accents-insensitive and accented)
    if (school.custom_notes) {
      const notesLower = school.custom_notes.toLowerCase();
      if (notesLower.includes(query) || removeVietnameseTones(notesLower).includes(normQuery)) return true;
    }
    if (school.description) {
      const descLower = school.description.toLowerCase();
      if (descLower.includes(query) || removeVietnameseTones(descLower).includes(normQuery)) return true;
    }
    
    // Map keywords to tuition categories (accents-insensitive)
    if ((normQuery.includes("cong nghe") || normQuery.includes("ky thuat") || normQuery.includes("co khi") || normQuery.includes("dien") || normQuery.includes("ban dan") || normQuery.includes("may tinh") || normQuery.includes("it")) && school.tuition.engineering !== null && school.tuition.engineering !== undefined) return true;
    if ((normQuery.includes("y") || normQuery.includes("duoc") || normQuery.includes("dieu duong") || normQuery.includes("suc khoe")) && school.tuition.medicine_pharmacy !== null && school.tuition.medicine_pharmacy !== undefined) return true;
    if ((normQuery.includes("nghe thuat") || normQuery.includes("thiet ke") || normQuery.includes("lam dep") || normQuery.includes("tham my") || normQuery.includes("makeup") || normQuery.includes("trang diem") || normQuery.includes("san khau") || normQuery.includes("dien anh") || normQuery.includes("am nhac") || normQuery.includes("the thao")) && school.tuition.arts_sports !== null && school.tuition.arts_sports !== undefined) return true;
    if ((normQuery.includes("khoa hoc") || normQuery.includes("tu nhien") || normQuery.includes("sinh hoc") || normQuery.includes("nong nghiep")) && school.tuition.natural_sciences !== null && school.tuition.natural_sciences !== undefined) return true;
    if ((normQuery.includes("kinh doanh") || normQuery.includes("kinh te") || normQuery.includes("thuong mai") || normQuery.includes("quan tri") || normQuery.includes("truyen thong") || normQuery.includes("marketing") || normQuery.includes("ngon ngu") || normQuery.includes("nhan van") || normQuery.includes("van hoc") || normQuery.includes("luat") || normQuery.includes("du lich") || normQuery.includes("khach san") || normQuery.includes("logistics")) && school.tuition.humanities_social !== null && school.tuition.humanities_social !== undefined) return true;
    
    return false;
  };

  const filteredUniversities = universities
    .filter(u => {
      const matchQuery = 
        u.name_vi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.name_ko.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchRegion = selectedRegion === 'All' || u.region === selectedRegion;
      const matchType = selectedType === 'All' || u.type === selectedType;
      const matchGdtx = (!top2PercentOnly || u.accept_gdtx === 'top2') && (!top3PercentOnly || u.accept_gdtx === 'top3');
      const matchMajor = matchSchoolByMajor(u, selectedMajor);
      const matchVisa = !visaMetropolitanOnly || u.visa_metropolitan === true;
      const matchNoTopik = !masterNoTopikOnly || u.master_no_topik === true;
      const matchTop1 = !top1PercentOnly || u.top_1_percent === true;

      return matchQuery && matchRegion && matchType && matchGdtx && matchMajor && matchVisa && matchNoTopik && matchTop1;
    })
    .sort((a, b) => {
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
  const checkHasGks = (scholarships) => {
    if (!scholarships) return false;
    return scholarships.some(s => s.toLowerCase().includes('gks') || s.toLowerCase().includes('chính phủ'));
  };

  const checkHasMajor = (tuition, major) => {
    if (major === 'All') return true;
    if (major === 'engineering') return tuition.engineering !== null && tuition.engineering !== undefined;
    if (major === 'medicine_pharmacy') return tuition.medicine_pharmacy !== null && tuition.medicine_pharmacy !== undefined;
    if (major === 'arts_sports') return tuition.arts_sports !== null && tuition.arts_sports !== undefined;
    if (major === 'natural_sciences') return tuition.natural_sciences !== null && tuition.natural_sciences !== undefined;
    if (major === 'humanities_social_econ') return tuition.humanities_social !== null && tuition.humanities_social !== undefined;
    if (major === 'humanities_social_lang') return tuition.humanities_social !== null && tuition.humanities_social !== undefined;
    return true;
  };

  const checkTuitionLimit = (tuition, maxCost) => {
    if (maxCost >= 10000000) return true;
    const values = Object.values(tuition).filter(v => v !== null && v !== undefined);
    if (values.length === 0) return false;
    return Math.min(...values) <= maxCost;
  };

  const mapFilteredSchools = universities.filter(school => {
    const matchGks = !mapGksOnly || checkHasGks(school.scholarships);
    const matchMajor = checkHasMajor(school.tuition, mapSelectedMajor);
    const matchTuition = checkTuitionLimit(school.tuition, mapMaxTuition);
    return matchGks && matchMajor && matchTuition;
  });

  // Group by region for coloring and panel display
  const mapSchoolsByRegion = {};
  mapFilteredSchools.forEach(school => {
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
  const handleToggleCompare = (school) => {
    setSelectedSchoolsForCompare(prev => {
      const isAlreadyAdded = prev.some(s => s.id === school.id);
      if (isAlreadyAdded) {
        return prev.filter(s => s.id !== school.id);
      } else {
        if (prev.length >= 3) {
          alert("Bạn chỉ có thể chọn tối đa 3 trường để so sánh cùng một lúc!");
          return prev;
        }
        return [...prev, school];
      }
    });
  };

  const handleRemoveCompareSchool = (schoolId) => {
    setSelectedSchoolsForCompare(prev => prev.filter(s => s.id !== schoolId));
  };

  const handleClearAllCompare = () => {
    setSelectedSchoolsForCompare([]);
  };

  return (
    <HelmetProvider>
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        {/* Dynamic SEO Tags per page */}
        {viewMode === 'map' && !activeSchoolDetails && (
          <SEO 
            title="Tra Cứu Học Phí Đại Học Hàn Quốc 2025"
            description="So sánh học phí hơn 200 trường đại học Hàn Quốc. Hiển thị đồng thời KRW và VND. Cập nhật tỷ giá mới nhất."
            url="/"
            structuredData={{
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "KR-UniTuition",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "VND" }
            }}
          />
        )}
        {viewMode === 'list' && (
          <SEO
            title="Danh Sách Các Trường Đại Học Hàn Quốc - Học Phí 2025"
            description="Danh sách đầy đủ các trường đại học Hàn Quốc kèm học phí KRW và VND. Lọc theo khu vực, loại trường, xếp hạng."
            url="/universities"
          />
        )}
        {viewMode === 'compare' && (
          <SEO
            title="So Sánh Học Phí Đại Học Hàn Quốc"
            description="So sánh học phí, ký túc xá và sinh hoạt phí giữa nhiều trường đại học Hàn Quốc cùng lúc."
            url="/compare"
          />
        )}
        {activeSchoolDetails && (
          <SEO
            title={`${activeSchoolDetails.name_vi} - Học Phí ${getSchoolAvgTuition(activeSchoolDetails).toLocaleString()} KRW`}
            description={`Học phí ${activeSchoolDetails.name_vi}: ${getSchoolAvgTuition(activeSchoolDetails).toLocaleString()} KRW (${Math.round(getSchoolAvgTuition(activeSchoolDetails) * exchangeRate).toLocaleString()} VND). Khu vực: ${activeSchoolDetails.region}.`}
            url={`/university/${activeSchoolDetails.id}`}
            structuredData={{
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": activeSchoolDetails.name_vi,
              "url": activeSchoolDetails.website,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KR",
                "addressRegion": activeSchoolDetails.region
              }
            }}
          />
        )}
        <div className="ambient-glow" />
      {/* Top Navbar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        exchangeRate={exchangeRate}
        setExchangeRate={handleManualExchangeRateChange}
        isApiRate={isApiRate}
        rateDate={rateDate}
        compareCount={selectedSchoolsForCompare.length}
        onOpenCompare={() => navigate('/compare')}
      />

      {/* Main Container */}
      <div className="app-container">
        
        {/* Statistics Hero Banner */}
        <StatsHero universities={universities} exchangeRate={exchangeRate} />

        {/* View Mode Switcher */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '1rem',
          marginBottom: '1.5rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1.25rem'
        }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--border-radius-sm)',
              border: viewMode === 'map' ? '2px solid var(--primary)' : '1px solid var(--border-color)',
              backgroundColor: viewMode === 'map' ? 'var(--primary-light)' : 'var(--bg-surface)',
              color: viewMode === 'map' ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: viewMode === 'map' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
          >
            <Map size={15} />
            <span>Bản đồ tương tác 🗺️</span>
          </button>
          <button
            onClick={() => navigate('/universities')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--border-radius-sm)',
              border: viewMode === 'list' ? '2px solid var(--primary)' : '1px solid var(--border-color)',
              backgroundColor: viewMode === 'list' ? 'var(--primary-light)' : 'var(--bg-surface)',
              color: viewMode === 'list' ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: viewMode === 'list' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
          >
            <List size={15} />
            <span>Danh sách bộ lọc 🔍</span>
          </button>
        </div>

        {viewMode === 'map' ? (
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
              
              <Suspense fallback={
                <div style={{
                  height: '500px', 
                  flex: 1, 
                  minWidth: '320px', 
                  background: 'var(--bg-surface)', 
                  borderRadius: 'var(--border-radius-md)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)'
                }}>
                  Đang tải bản đồ... 🗺️
                </div>
              }>
                <KoreaMap
                  schoolsByRegion={mapSchoolsByRegion}
                  selectedProvince={mapSelectedProvince}
                  onSelectProvince={setMapSelectedProvince}
                />
              </Suspense>

              <UniversityPanel
                selectedProvince={mapSelectedProvince}
                provinceMeta={provinceMeta[mapSelectedProvince]}
                schools={mapSchoolsByRegion[mapSelectedProvince] || []}
                exchangeRate={exchangeRate}
                onViewDetails={(school) => navigate(`/university/${school.id}`)}
                selectedCompareSchools={selectedSchoolsForCompare}
                onToggleCompare={handleToggleCompare}
                onCloseMobilePanel={() => setMapSelectedProvince('')}
              />
            </div>
          </div>
        ) : viewMode === 'list' ? (
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
                    <label htmlFor="region-select-vite" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Khu vực đào tạo</label>
                    <select
                      id="region-select-vite"
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
                    <label htmlFor="type-select-vite" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Loại hình trường</label>
                    <select
                      id="type-select-vite"
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
                    </select>
                  </div>

                  {/* Sort Select */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label htmlFor="sort-select-vite" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Sắp xếp học phí</label>
                    <select
                      id="sort-select-vite"
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
              {filteredUniversities.map(school => (
                <SchoolCard 
                  key={school.id}
                  university={school}
                  exchangeRate={exchangeRate}
                  onViewDetails={() => navigate(`/university/${school.id}`)}
                  isComparing={selectedSchoolsForCompare.some(s => s.id === school.id)}
                  onToggleCompare={() => handleToggleCompare(school)}
                />
              ))}
            </div>
          </>
        ) : (
          /* Compare view placeholder when fewer than 2 schools selected */
          selectedSchoolsForCompare.length < 2 && (
            <div className="glass-effect animate-fade-in" style={{
              padding: '3rem 2rem',
              borderRadius: 'var(--border-radius-md)',
              textAlign: 'center',
              maxWidth: '600px',
              margin: '4rem auto',
              boxShadow: 'var(--shadow-md)',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <Landmark size={48} style={{ color: 'var(--primary)', marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>So sánh học phí đại học</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Bạn cần chọn ít nhất 2 trường đại học để tiến hành so sánh. Hãy quay lại trang bản đồ hoặc danh sách trường để thêm các trường mong muốn.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button 
                  onClick={() => navigate('/')}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--border-radius-sm)',
                    fontWeight: 800,
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: 'var(--primary)',
                    color: 'white'
                  }}
                >
                  Trang Bản đồ 🗺️
                </button>
                <button 
                  onClick={() => navigate('/universities')}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--border-radius-sm)',
                    fontWeight: 800,
                    cursor: 'pointer',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Danh sách trường 🔍
                </button>
              </div>
            </div>
          )
        )}

        {/* Static SEO description section at the bottom */}
        <section aria-label="Về KR-UniTuition" style={{
          maxWidth: '100%',
          margin: '4rem auto 2rem auto',
          padding: '2rem 1.5rem',
          borderTop: '1px solid var(--border-color)',
          color: 'var(--text-secondary)',
          fontSize: '0.875rem',
          lineHeight: '1.7'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Về Công Cụ Tra Cứu Học Phí Đại Học Hàn Quốc
          </h2>
          <p style={{ marginBottom: '0.75rem' }}>
            KR-UniTuition cung cấp thông tin học phí cập nhật của hơn {universities.length} trường 
            đại học tại Hàn Quốc, bao gồm cả trường công lập và tư thục tại Seoul, 
            Busan, Incheon và các tỉnh thành khác.
          </p>
          <p>
            Học phí được hiển thị đồng thời bằng Won Hàn Quốc (KRW) và 
            Việt Nam Đồng (VND) dựa trên tỷ giá cập nhật tự động hoặc tùy chỉnh, giúp phụ huynh và học sinh dễ dàng lên kế hoạch 
            tài chính cho hành trình du học Hàn Quốc của mình.
          </p>
        </section>
      </div>

      {/* Floating Compare Panel and Modal */}
      <ComparePanel 
        selectedSchools={selectedSchoolsForCompare}
        onRemoveSchool={handleRemoveCompareSchool}
        onClearAll={handleClearAllCompare}
        exchangeRate={exchangeRate}
        isOpenOverride={viewMode === 'compare' && selectedSchoolsForCompare.length >= 2}
        onOpenOverride={() => navigate('/compare')}
        onCloseOverride={() => navigate('/')}
      />

      {/* University Detail Modal */}
      {activeSchoolDetails && (
        <DetailModal 
          university={activeSchoolDetails}
          exchangeRate={exchangeRate}
          onClose={() => {
            setActiveSchoolDetails(null);
            navigate('/');
          }}
        />
      )}
    </div>
    </HelmetProvider>
  );
}

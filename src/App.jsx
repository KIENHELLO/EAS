import { useState, useEffect } from 'react';
import { Search, Filter, RotateCcw, HelpCircle, Map, List } from 'lucide-react';
import { universities } from './data/universities';
import Navbar from './components/Navbar';
import StatsHero from './components/StatsHero';
import SchoolCard from './components/SchoolCard';
import DetailModal from './components/DetailModal';
import ComparePanel from './components/ComparePanel';
import KoreaMap from './components/KoreaMap';
import { provinceMeta } from './utils/constants';
import FilterBar from './components/FilterBar';
import UniversityPanel from './components/UniversityPanel';
import { getExchangeRate } from './utils/exchangeRate';

export default function App() {
  // 1. Theme Configuration
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // 2. State Variables
  const [exchangeRate, setExchangeRate] = useState(18.5); // Default: 1 KRW = 18.5 VND
  const [isApiRate, setIsApiRate] = useState(false);
  const [rateDate, setRateDate] = useState('Đang lấy tỷ giá...');
  const [viewMode, setViewMode] = useState('map'); // Default to map view for interactive experience
  
  // List view filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedGdtx, setSelectedGdtx] = useState('All'); // 'All', 'top2', 'top3'
  const [visaMetropolitanOnly, setVisaMetropolitanOnly] = useState(false);
  const [masterNoTopikOnly, setMasterNoTopikOnly] = useState(false);
  const [top1PercentOnly, setTop1PercentOnly] = useState(false);
  const [sortBy, setSortBy] = useState('rank');

  // Map view filters state
  const [mapSelectedMajor, setMapSelectedMajor] = useState('All');
  const [mapMaxTuition, setMapMaxTuition] = useState(10000000);
  const [mapGksOnly, setMapGksOnly] = useState(false);
  const [mapSelectedProvince, setMapSelectedProvince] = useState('');

  const [selectedSchoolsForCompare, setSelectedSchoolsForCompare] = useState([]);
  const [activeSchoolDetails, setActiveSchoolDetails] = useState(null);

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
    setSelectedGdtx('All');
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
  const filteredUniversities = universities
    .filter(u => {
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
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Top Navbar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        exchangeRate={exchangeRate}
        setExchangeRate={handleManualExchangeRateChange}
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

        {/* View Mode Switcher */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1.25rem'
        }}>
          <button
            onClick={() => setViewMode('map')}
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
            onClick={() => setViewMode('list')}
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
              
              <KoreaMap
                schoolsByRegion={mapSchoolsByRegion}
                selectedProvince={mapSelectedProvince}
                onSelectProvince={setMapSelectedProvince}
              />

              <UniversityPanel
                selectedProvince={mapSelectedProvince}
                provinceMeta={provinceMeta[mapSelectedProvince]}
                schools={mapSchoolsByRegion[mapSelectedProvince] || []}
                exchangeRate={exchangeRate}
                onViewDetails={(school) => setActiveSchoolDetails(school)}
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
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                alignItems: 'center'
              }}>
                {/* Search Input */}
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
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
                    <option value="tuition_asc">Học phí: Từ thấp đến cao</option>
                    <option value="tuition_desc">Học phí: Từ cao đến thấp</option>
                    <option value="name">Tên trường: A - Z</option>
                  </select>
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

              {/* Advanced/Special Admission Filters Row */}
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                paddingTop: '0.85rem',
                borderTop: '1px dashed var(--border-color)',
                alignItems: 'center'
              }}>
                {/* GDTX Dropdown */}
                <div style={{ minWidth: '220px' }}>
                  <select
                    value={selectedGdtx}
                    onChange={(e) => setSelectedGdtx(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.6rem',
                      borderRadius: 'var(--border-radius-sm)',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-app)',
                      color: 'var(--text-primary)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="All">Hệ GDTX: Tất cả</option>
                    <option value="top2">Hệ GDTX: Nhận trường Top 2%</option>
                    <option value="top3">Hệ GDTX: Nhận trường Top 3%</option>
                  </select>
                </div>

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
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
              marginBottom: '5rem' // extra space for the floating compare panel
            }}>
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

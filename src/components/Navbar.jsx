import { useState } from 'react';
import { Sun, Moon, RefreshCw, BarChart2, Lock } from 'lucide-react';

export default function Navbar({ 
  theme, 
  toggleTheme, 
  exchangeRate, 
  setExchangeRate, 
  isApiRate,
  rateDate,
  compareCount, 
  onOpenCompare 
}) {
  const [showRateMenu, setShowRateMenu] = useState(false);
  const [customRate, setCustomRate] = useState(exchangeRate.toString());

  const handleRateSubmit = (e) => {
    e.preventDefault();
    const parsed = parseFloat(customRate);
    if (!isNaN(parsed) && parsed > 0) {
      setExchangeRate(parsed);
      setShowRateMenu(false);
    }
  };

  return (
    <nav className="glass-effect" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '1rem 1.5rem',
      borderRadius: '0 0 var(--border-radius-md) var(--border-radius-md)',
      marginBottom: '2rem',
      boxShadow: 'var(--shadow-sm)',
      transition: 'all var(--transition-normal)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img 
          src="/logo.png" 
          alt="EAS Logo" 
          style={{
            height: '2.5rem',
            width: '2.5rem',
            objectFit: 'contain',
            borderRadius: 'var(--border-radius-sm)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)'
          }}
        />
        <div>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, letterSpacing: '-0.025em', lineHeight: 1.2, color: 'var(--text-primary)' }}>
            KR-UniTuition
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
            Cổng Tra Cứu Học Phí Đại Học Hàn Quốc
          </span>
        </div>
      </div>

      {/* Navigation actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        
        {/* Exchange Rate Converter Controller */}
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setShowRateMenu(!showRateMenu)}
            className="navbar-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--secondary-light)',
              color: 'var(--text-primary)',
              border: 'none',
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--border-radius-md)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#dadad3'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--secondary-light)'}
          >
            <RefreshCw size={14} style={{ transform: showRateMenu ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-normal)' }} />
            <span>
              1 KRW = {exchangeRate} VND
              {!isApiRate ? ' (tạm thời)' : ''}
              {rateDate ? ` · ${rateDate}` : ''}
            </span>
          </button>

          {showRateMenu && (
            <>
              {/* Overlay background for closing */}
              <div 
                onClick={() => setShowRateMenu(false)}
                style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }}
              />
              <div 
                className="glass-effect animate-scale-in"
                style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  width: '250px',
                  padding: '1.25rem',
                  borderRadius: 'var(--border-radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <h4 style={{ fontSize: '0.9rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>Cấu hình tỷ giá KRW/VND</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', margin: 0, lineHeight: 1.4 }}>
                  Nhập tỷ giá tùy chỉnh để chuyển đổi Won sang Việt Nam Đồng.
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.72rem',
                  color: isApiRate ? 'var(--success)' : '#d97706',
                  backgroundColor: isApiRate ? 'var(--success-light)' : 'rgba(245, 158, 11, 0.1)',
                  padding: '0.35rem 0.5rem',
                  borderRadius: '4px',
                  fontWeight: 600,
                  marginTop: '0.1rem'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: isApiRate ? 'var(--success)' : '#d97706',
                    display: 'inline-block'
                  }} />
                  <span>{rateDate}</span>
                </div>
                
                <form 
                  onSubmit={handleRateSubmit} 
                  style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input 
                      type="number" 
                      step="0.1" 
                      min="1"
                      placeholder="Tỷ giá..."
                      aria-label="Tỷ giá Won sang VND"
                      value={customRate}
                      onChange={(e) => setCustomRate(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '0.5rem 0.75rem',
                        borderRadius: 'var(--border-radius-md)',
                        border: customRate !== '' && (isNaN(parseFloat(customRate)) || parseFloat(customRate) <= 0)
                          ? '1px solid var(--primary)'
                          : '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        outline: 'none',
                        height: '38px',
                        transition: 'all var(--transition-fast)'
                      }}
                    />
                    <button 
                      type="submit"
                      disabled={customRate === '' || isNaN(parseFloat(customRate)) || parseFloat(customRate) <= 0}
                      style={{
                        background: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        padding: '0 1rem',
                        borderRadius: 'var(--border-radius-md)',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        height: '38px',
                        opacity: (customRate === '' || isNaN(parseFloat(customRate)) || parseFloat(customRate) <= 0) ? 0.5 : 1,
                        transition: 'all var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => {
                        if (parseFloat(customRate) > 0) e.currentTarget.style.background = 'var(--primary-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--primary)';
                      }}
                    >
                      Áp dụng
                    </button>
                  </div>
                  {customRate !== '' && (isNaN(parseFloat(customRate)) || parseFloat(customRate) <= 0) && (
                    <span style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 600 }}>
                      Tỷ giá phải lớn hơn 0!
                    </span>
                  )}
                </form>
                
                {/* Preset exchange rates */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.35rem', 
                  marginTop: '0.25rem',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '0.65rem'
                }}>
                  {[18.0, 18.5, 19.0, 19.5].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setExchangeRate(preset);
                        setCustomRate(preset.toString());
                        setShowRateMenu(false);
                      }}
                      style={{
                        padding: '0.3rem 0.65rem',
                        borderRadius: '9999px',
                        border: 'none',
                        backgroundColor: exchangeRate === preset ? 'var(--text-primary)' : 'var(--bg-surface-hover)',
                        color: exchangeRate === preset ? 'var(--bg-surface)' : 'var(--text-primary)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => {
                        if (exchangeRate !== preset) e.currentTarget.style.filter = 'brightness(0.9)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'none';
                      }}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Compare Button status */}
        {compareCount > 0 && (
          <button
            onClick={onOpenCompare}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--success-light)',
              color: 'var(--success)',
              border: 'none',
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--border-radius-md)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.95)'}
            onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}
          >
            <BarChart2 size={14} />
            <span>So sánh ({compareCount})</span>
          </button>
        )}

        {/* Admin Link */}
        <a
          href="http://localhost:3000/admin"
          style={{
            background: 'var(--secondary-light)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            height: '2.5rem',
            padding: '0 0.85rem',
            borderRadius: 'var(--border-radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            outline: 'none',
            fontSize: '0.85rem',
            fontWeight: 700,
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--primary-hover)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--secondary-light)';
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--border-color)';
          }}
          title="Hệ thống quản trị Admin"
        >
          <Lock size={14} />
          <span>Admin</span>
        </a>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'transparent',
            border: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: 'var(--border-radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            outline: 'none'
          }}
          title={theme === 'dark' ? 'Chuyển sang Chế độ Sáng' : 'Chuyển sang Chế độ Tối'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

      </div>
      </div>
    </nav>
  );
}

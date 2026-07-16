import { useEffect, useRef, useState } from 'react';
import { Landmark } from 'lucide-react';
import { provinceMeta } from '../utils/constants';
import schoolCoordinates from '../data/school_coordinates.json';

const mapGeoName = (gadmName) => {
  const mapping = {
    'Seoul': 'Seoul',
    'Busan': 'Busan',
    'Daegu': 'Daegu',
    'Incheon': 'Incheon',
    'Gwangju': 'Gwangju',
    'Daejeon': 'Daejeon',
    'Ulsan': 'Ulsan',
    'Gyeonggi-do': 'Gyeonggi',
    'Gangwon-do': 'Gangwon',
    'Chungcheongbuk-do': 'Chungbuk',
    'Chungcheongnam-do': 'Chungnam',
    'Jeollabuk-do': 'Jeonbuk',
    'Jeollanam-do': 'Jeonnam',
    'Gyeongsangbuk-do': 'Gyeongbuk',
    'Gyeongsangnam-do': 'Gyeongnam',
    'Jeju': 'Jeju'
  };
  return mapping[gadmName] || gadmName;
};

const loadLeaflet = () => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }
    if (window.L) {
      resolve();
      return;
    }

    // 1. Link stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    // 2. Script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    script.onload = () => {
      resolve();
    };
    document.body.appendChild(script);
  });
};

export default function KoreaMap({
  schoolsByRegion,
  selectedProvince,
  onSelectProvince
}) {
  const mapContainerRef = useRef(null);
  const leafletMapRef = useRef(null);
  const geoJsonLayerRef = useRef(null);
  const markersGroupRef = useRef(null);
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  // 1. Load Leaflet dynamic assets first
  useEffect(() => {
    loadLeaflet().then(() => {
      if (typeof window !== 'undefined' && window.L) {
        setLeafletLoaded(true);
      }
    });
  }, []);

  // 2. Fetch GeoJSON địa giới tỉnh Hàn Quốc từ local public directory
  useEffect(() => {
    fetch('/skorea-provinces-geo.json')
      .then(res => {
        if (!res.ok) throw new Error('Không thể tải bản đồ GeoJSON');
        return res.json();
      })
      .then(data => {
        setGeoJsonData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading GeoJSON:", err);
        setLoading(false);
      });
  }, []);

  // 3. Khởi tạo bản đồ Leaflet
  useEffect(() => {
    if (!leafletLoaded || leafletMapRef.current || !mapContainerRef.current) return;

    // Center of South Korea, Zoom level 7
    const map = window.L.map(mapContainerRef.current, {
      zoomControl: true,
      scrollWheelZoom: true,
      attributionControl: false
    }).setView([35.8, 127.8], 7);

    // Thêm CartoDB Positron làm base map
    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 18
    }).addTo(map);

    // Khởi tạo Layer Group cho Markers
    const markersGroup = window.L.layerGroup().addTo(map);
    markersGroupRef.current = markersGroup;

    leafletMapRef.current = map;
  }, [loading, leafletLoaded]);

  // 3. Cập nhật các Layer địa giới tỉnh dựa trên số lượng trường học hoạt động
  useEffect(() => {
    if (!geoJsonData || !leafletMapRef.current) return;

    // Xóa layer cũ nếu tồn tại
    if (geoJsonLayerRef.current) {
      leafletMapRef.current.removeLayer(geoJsonLayerRef.current);
    }

    const geoJsonLayer = window.L.geoJSON(geoJsonData, {
      style: (feature) => {
        const gadmName = feature.properties.NAME_1;
        const appRegion = mapGeoName(gadmName);
        const count = (schoolsByRegion[appRegion] || []).length;
        
        let fillColor = '#E0E0E0'; // không có trường
        
        if (count >= 10) {
          fillColor = '#0C447C';
        } else if (count >= 4) {
          fillColor = '#185FA5';
        } else if (count >= 1) {
          fillColor = '#378ADD';
        }

        const isSelected = selectedProvince === appRegion;
        
        return {
          fillColor,
          weight: isSelected ? 4 : 1.2, // viền đậm khi active
          opacity: 1,
          color: isSelected ? 'var(--primary)' : '#9CA3AF',
          fillOpacity: 0.25 // fill 0.25 bình thường
        };
      },
      onEachFeature: (feature, layer) => {
        const gadmName = feature.properties.NAME_1;
        const appRegion = mapGeoName(gadmName);
        const meta = provinceMeta[appRegion] || { name_vi: appRegion, name_ko: '' };
        const count = (schoolsByRegion[appRegion] || []).length;

        // Custom Tooltip
        layer.bindTooltip(`
          <div style="font-family: Inter, sans-serif; font-size: 0.8rem; padding: 0.15rem 0.3rem;">
            <strong>${meta.name_vi}</strong> ${meta.name_ko ? `(${meta.name_ko})` : ''}<br/>
            Có <strong>${count}</strong> trường đại học
          </div>
        `, {
          direction: 'top',
          sticky: true,
          opacity: 0.95
        });

        layer.on({
          mouseover: (e) => {
            const l = e.target;
            l.setStyle({
              weight: selectedProvince === appRegion ? 4.5 : 2.5,
              color: 'var(--primary)',
              fillOpacity: 0.5 // fill 0.5 khi hover
            });
            if (!window.L.Browser.ie && !window.L.Browser.opera && !window.L.Browser.edge) {
              l.bringToFront();
            }
          },
          mouseout: (e) => {
            const l = e.target;
            geoJsonLayer.resetStyle(l);
          },
          click: () => {
            onSelectProvince(appRegion);
            leafletMapRef.current.fitBounds(layer.getBounds(), {
              maxZoom: 9,
              padding: [40, 40]
            });
          }
        });
      }
    });

    geoJsonLayer.addTo(leafletMapRef.current);
    geoJsonLayerRef.current = geoJsonLayer;
  }, [geoJsonData, schoolsByRegion, selectedProvince, onSelectProvince]);

  // 4. Vẽ Marker (Pin) cho các trường thuộc tỉnh được chọn
  useEffect(() => {
    if (!leafletMapRef.current || !markersGroupRef.current) return;

    // Xóa marker cũ
    markersGroupRef.current.clearLayers();

    if (!selectedProvince) return;

    // Lấy danh sách trường trong khu vực chọn
    const provinceSchools = schoolsByRegion[selectedProvince] || [];

    provinceSchools.forEach(school => {
      const coords = schoolCoordinates[school.id];
      if (coords && coords.lat && coords.lon) {
        // Kiểm tra tọa độ hợp lý (nằm trong ranh giới Hàn Quốc)
        if (coords.lat < 33.0 || coords.lat > 38.9 || coords.lon < 124.5 || coords.lon > 129.6) {
          console.warn(`Tọa độ ngoài Hàn Quốc, bỏ qua: ${school.name_vi || school.name_en}`, coords.lat, coords.lon);
          return;
        }

        // Tạo custom icon cho marker
        const schoolIcon = window.L.divIcon({
          className: 'custom-school-marker',
          html: `
            <div style="
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background-color: var(--primary);
              border: 2px solid white;
              box-shadow: 0 0 6px rgba(0,0,0,0.3);
            "></div>
          `,
          iconSize: [12, 12],
          iconAnchor: [6, 6]
        });

        // Tạo marker và gắn popup chi tiết
        const marker = window.L.marker([coords.lat, coords.lon], { icon: schoolIcon })
          .bindPopup(`
            <div style="font-family: Inter, sans-serif; font-size: 0.8rem; padding: 0.15rem; max-width: 200px;">
              <strong style="color: var(--primary); display: block; margin-bottom: 0.25rem;">${school.name_vi}</strong>
              <span style="color: var(--text-secondary); font-size: 0.72rem; display: block; margin-bottom: 0.2rem;">${school.name_en}</span>
              <span style="color: var(--text-tertiary); font-size: 0.65rem;">Hạng toàn quốc: #${school.ranking}</span>
            </div>
          `);

        markersGroupRef.current.addLayer(marker);
      }
    });

  }, [selectedProvince, schoolsByRegion]);

  return (
    <div 
      className="glass-effect"
      style={{
        flex: 1,
        height: '620px',
        borderRadius: 'var(--border-radius-md)',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-app)'
      }}
    >
      {/* CSS Tooltip Custom overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        .leaflet-tooltip {
          background-color: var(--bg-surface) !important;
          color: var(--text-primary) !important;
          border: 1px solid var(--border-color) !important;
          box-shadow: var(--shadow-md) !important;
          border-radius: var(--border-radius-sm) !important;
        }
        .leaflet-container {
          background-color: #f3f4f6 !important;
        }
        [data-theme="dark"] .leaflet-container {
          background-color: #1f2937 !important;
        }
        [data-theme="dark"] .leaflet-layer {
          filter: invert(1) hue-rotate(180deg) brightness(0.9) contrast(0.9);
        }
      `}} />

      {/* Loading overlay */}
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--bg-glass)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          color: 'var(--primary)'
        }}>
          <Landmark size={48} className="animate-pulse" />
          <strong style={{ fontSize: '0.9rem' }}>Đang tải bản đồ Hàn Quốc...</strong>
        </div>
      )}

      {/* Map Legend */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--border-radius-sm)',
        padding: '0.6rem 0.8rem',
        zIndex: 999,
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.35rem',
        fontSize: '0.7rem',
        fontWeight: 600,
        color: 'var(--text-secondary)'
      }}>
        <div style={{ fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.1rem', fontSize: '0.75rem' }}>Số lượng trường</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#0C447C', borderRadius: '2px' }} />
          <span>10+ trường</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#185FA5', borderRadius: '2px' }} />
          <span>4 - 9 trường</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#378ADD', borderRadius: '2px' }} />
          <span>1 - 3 trường</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#E0E0E0', borderRadius: '2px' }} />
          <span>0 trường / xám mờ</span>
        </div>
      </div>

      {/* Map Target Div */}
      <div 
        ref={mapContainerRef} 
        style={{ width: '100%', height: '100%', outline: 'none' }} 
      />
    </div>
  );
}

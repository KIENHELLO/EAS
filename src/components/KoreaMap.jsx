import { useEffect, useRef, useState } from 'react';
import { Landmark } from 'lucide-react';
import { provinceMeta } from '../utils/constants';

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

export default function KoreaMap({
  schoolsByRegion,
  selectedProvince,
  onSelectProvince
}) {
  const mapContainerRef = useRef(null);
  const leafletMapRef = useRef(null);
  const geoJsonLayerRef = useRef(null);
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Fetch GeoJSON địa giới tỉnh Hàn Quốc từ local public directory
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

  // 2. Khởi tạo bản đồ Leaflet
  useEffect(() => {
    if (!window.L || leafletMapRef.current || !mapContainerRef.current) return;

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

    leafletMapRef.current = map;
  }, [loading]);

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
        
        let fillColor = '#E5E7EB'; // Xám mờ cho tỉnh 0 trường
        let fillOpacity = 0.55;
        
        if (count >= 10) {
          fillColor = '#185FA5'; // Xanh đậm
          fillOpacity = 0.85;
        } else if (count >= 4) {
          fillColor = '#378ADD'; // Xanh vừa
          fillOpacity = 0.8;
        } else if (count >= 1) {
          fillColor = '#B5D4F4'; // Xanh nhạt
          fillOpacity = 0.75;
        }

        const isSelected = selectedProvince === appRegion;
        
        return {
          fillColor,
          weight: isSelected ? 3 : 1.2,
          opacity: 1,
          color: isSelected ? 'var(--primary)' : '#9CA3AF',
          fillOpacity
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
              weight: selectedProvince === appRegion ? 3.5 : 2.5,
              color: 'var(--primary)',
              fillOpacity: l.options.fillOpacity + 0.08
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
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
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

      {/* Map Target Div */}
      <div 
        ref={mapContainerRef} 
        style={{ width: '100%', height: '100%', outline: 'none' }} 
      />
    </div>
  );
}

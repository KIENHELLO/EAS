"use client";

import { useEffect, useRef } from 'react';

export default function MiniMap({ lat, lng, schoolName }) {
  const mapContainerRef = useRef(null);
  const leafletMapRef = useRef(null);

  useEffect(() => {
    if (!window.L || leafletMapRef.current || !mapContainerRef.current) return;

    // Initialize map
    const map = window.L.map(mapContainerRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: false
    }).setView([lat, lng], 14);

    // Add base tiles
    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 18
    }).addTo(map);

    // Create marker
    const markerIcon = window.L.divIcon({
      className: 'custom-minimap-marker',
      html: `
        <div style="
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: var(--accent);
          border: 2px solid white;
          box-shadow: 0 0 8px rgba(244,63,94,0.5);
        "></div>
      `,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    window.L.marker([lat, lng], { icon: markerIcon })
      .bindPopup(`<strong style="font-family: inherit; font-size: 0.75rem;">${schoolName}</strong>`)
      .addTo(map);

    leafletMapRef.current = map;
  }, [lat, lng, schoolName]);

  return (
    <div 
      style={{
        width: '100%',
        height: '250px',
        borderRadius: 'var(--border-radius-sm)',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        position: 'relative'
      }}
    >
      <div 
        ref={mapContainerRef} 
        style={{ width: '100%', height: '100%', outline: 'none' }} 
      />
    </div>
  );
}

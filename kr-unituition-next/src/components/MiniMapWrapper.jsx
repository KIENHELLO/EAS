"use client";

import dynamic from 'next/dynamic';

const DynamicMiniMap = dynamic(
  () => import('./MiniMap'),
  { ssr: false }
);

export default function MiniMapWrapper({ lat, lng, schoolName }) {
  return <DynamicMiniMap lat={lat} lng={lng} schoolName={schoolName} />;
}

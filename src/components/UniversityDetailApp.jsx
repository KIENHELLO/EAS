'use island';

import React from 'react';
import App from '../App';

export default function UniversityDetailApp({ schoolId }) {
  return <App initialViewMode="map" initialActiveSchoolId={schoolId} />;
}

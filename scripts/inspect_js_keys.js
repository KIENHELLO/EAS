import { universities } from '../src/data/universities.js';

const allKeys = new Set();
universities.forEach(u => {
  Object.keys(u).forEach(k => allKeys.add(k));
});

console.log("All keys present in universities.js:", Array.from(allKeys));

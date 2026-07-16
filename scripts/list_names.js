import { universities } from '../src/data/universities.js';

console.log("First 50 school names in universities.js:");
universities.slice(0, 50).forEach((u, i) => {
  console.log(`${i+1}. ${u.id}: ${u.name_vi} | ${u.name_en} | ${u.name_ko}`);
});

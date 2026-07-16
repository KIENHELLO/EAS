import { universities } from '../src/data/universities.js';

const search = "gyeonggi";
const matches = universities.filter(u => 
  u.name_vi.toLowerCase().includes(search) || 
  u.name_en.toLowerCase().includes(search) ||
  u.name_ko.toLowerCase().includes(search)
);

console.log("Matches for:", search);
console.log(matches.map(u => ({ id: u.id, vi: u.name_vi, ko: u.name_ko })));

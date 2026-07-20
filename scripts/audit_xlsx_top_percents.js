import fs from 'fs';
import { universities } from '../src/data/universities.js';
import execSync from 'child_process';

console.log(`=======================================================`);
console.log(`   AUDIT BÁO CÁO MINH BẠCH VỀ TRƯỜNG TOP 1%, TOP 2%, TOP 3%   `);
console.log(`=======================================================\n`);

console.log(`Tổng số trường trong cơ sở dữ liệu (universities.js): ${universities.length} trường\n`);

// Stat in universities.js
const uniTop1 = universities.filter(u => u.top_1_percent === true || u.accept_gdtx === 'top1');
const uniTop2 = universities.filter(u => u.accept_gdtx === 'top2');
const uniTop3 = universities.filter(u => u.accept_gdtx === 'top3');
const uniNoTopik = universities.filter(u => u.master_no_topik === true);
const uniRestricted = universities.filter(u => u.is_restricted_school === true);

console.log(`--- THỐNG KÊ HIỆN TẠI TRONG WEBSITE (universities.js) ---`);
console.log(`- Trường TOP 1%: ${uniTop1.length} trường`);
console.log(`- Trường TOP 2%: ${uniTop2.length} trường`);
console.log(`- Trường TOP 3%: ${uniTop3.length} trường`);
console.log(`- Thạc sĩ nợ TOPIK: ${uniNoTopik.length} trường`);
console.log(`- Trường Hạn chế Visa: ${uniRestricted.length} trường\n`);

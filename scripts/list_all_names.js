import { universities } from '../src/data/universities.js';
import fs from 'fs';

const list = universities.map(u => `${u.id}: ${u.name_vi} | ${u.name_en} | ${u.name_ko}`).join("\n");
fs.writeFileSync("d:/EASS/scripts/school_list_all.txt", list, "utf-8");
console.log("Written school_list_all.txt");

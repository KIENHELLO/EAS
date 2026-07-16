import { universities } from '../src/data/universities.js';

console.log("Total schools:", universities.length);
console.log("Keys in school 0:", Object.keys(universities[0]));
console.log("School 0 (SNU):", JSON.stringify(universities[0], null, 2));

// Look for any school with insurance or language tuition fields
const withNotes = universities.filter(u => u.custom_notes && u.custom_notes.includes("học phí"));
console.log("\nNumber of schools with 'học phí' in custom_notes:", withNotes.length);
if (withNotes.length > 0) {
  console.log("Example custom_notes:", withNotes[0].custom_notes);
}

const withDorm = universities.filter(u => u.dorm_fee);
console.log("\nNumber of schools with dorm_fee:", withDorm.length);
if (withDorm.length > 0) {
  console.log("Example dorm_fee:", withDorm[0].dorm_fee);
}

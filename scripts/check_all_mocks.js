import { universities } from '../src/data/universities.js';

console.log("Total schools:", universities.length);

const mockSchools = universities.filter(u => u.id.startsWith("mock_uni_"));
console.log("Number of mock schools:", mockSchools.length);

// Count occurrences of each name
const counts = {};
mockSchools.forEach(u => {
  const name = u.name_vi;
  counts[name] = (counts[name] || 0) + 1;
});

const duplicates = Object.entries(counts).filter(([name, count]) => count > 1);
console.log("Number of unique names in mock schools:", Object.keys(counts).length);
console.log("Duplicates in mock schools (showing first 15):");
duplicates.slice(0, 15).forEach(([name, count]) => {
  console.log(`  - ${name}: repeated ${count} times`);
});

// Print some examples of mock schools that are unique
const uniques = Object.entries(counts).filter(([name, count]) => count === 1);
console.log("\nUniques in mock schools (showing first 15):");
uniques.slice(0, 15).forEach(([name, count]) => {
  console.log(`  - ${name}`);
});

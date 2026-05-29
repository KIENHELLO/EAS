import { universities } from './kr-unituition-next/src/data/universities.js';

console.log(`Total universities: ${universities.length}`);
const ids = universities.map(u => u.id);
const mockIds = ids.filter(id => id.startsWith('mock_') || id.startsWith('uni_'));
const realIds = ids.filter(id => !id.startsWith('mock_') && !id.startsWith('uni_'));

console.log(`Real school IDs count: ${realIds.length}`);
console.log(`Mock school IDs count: ${mockIds.length}`);

universities.forEach(u => {
  const isMock = u.id.startsWith('mock_') || u.id.startsWith('uni_');
  console.log(`[${isMock ? 'MOCK' : 'REAL'}] ID: ${u.id} | Name: ${u.name_vi} | Region: ${u.region} | Address: ${u.campus_address}`);
});

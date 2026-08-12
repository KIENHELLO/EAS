
const fs = require('fs');
const content = fs.readFileSync('src/data/universities.js', 'utf8');
// Evaluate the JS content to get the universities array
const universities = eval(content.replace('export const universities =', 'module.exports ='));
console.log('Total schools in universities.js:', universities.length);
universities.forEach((u, idx) => {
    console.log(`${idx+1}. ID: ${u.id} | Name: ${u.name_vi}`);
});

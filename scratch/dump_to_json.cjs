
const fs = require('fs');
const content = fs.readFileSync('src/data/universities.js', 'utf8');
const universities = eval(content.replace('export const universities =', 'module.exports ='));
console.log(JSON.stringify(universities));

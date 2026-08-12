import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { universities } from '../src/data/universities.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.writeFileSync(
  path.join(__dirname, 'db_schools.json'),
  JSON.stringify(universities, null, 2),
  'utf-8'
);
console.log(`Dumped all ${universities.length} schools from universities.js successfully!`);

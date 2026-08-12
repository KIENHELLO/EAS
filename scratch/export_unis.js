
import { universities } from '../src/data/universities.js';
import fs from 'fs';
fs.writeFileSync('scratch/unis.json', JSON.stringify(universities, null, 2), 'utf-8');

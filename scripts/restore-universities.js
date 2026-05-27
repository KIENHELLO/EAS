import fs from 'fs';
import path from 'path';

const transcriptPath = 'C:\\Users\\kient\\.gemini\\antigravity\\brain\\5bb7aa7d-b480-43af-82a2-4aa5018523b1\\.system_generated\\logs\\transcript.jsonl';
if (!fs.existsSync(transcriptPath)) {
  console.error('Transcript not found at:', transcriptPath);
  process.exit(1);
}

const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

let part1 = '';
let part2 = '';
let part3 = '';

for (const l of lines) {
  if (!l.trim()) continue;
  try {
    const obj = JSON.parse(l);
    if (obj.tool_calls && obj.tool_calls.length > 0) {
      // Find view_file tool call response or content
      // In ant-gravity transcripts, the tool outputs/contents might be in the step object
    }
    // Alternatively, let's check obj.content or tool output
    const output = obj.content || '';
    if (output.includes('Showing lines 1 to 800')) {
      part1 = output;
    } else if (output.includes('Showing lines 800 to 1599') || output.includes('Showing lines 800 to 1600')) {
      part2 = output;
    } else if (output.includes('Showing lines 1580 to 1616') || output.includes('Showing lines 1580 to 1615')) {
      part3 = output;
    }
  } catch (e) {
    // ignore malformed JSON lines
  }
}

function parseViewOutput(viewOutput) {
  const fileLines = {};
  const lines = viewOutput.split('\n');
  for (const line of lines) {
    const match = line.match(/^(\d+): (.*)$/);
    if (match) {
      const lineNum = parseInt(match[1]);
      const content = match[2];
      fileLines[lineNum] = content;
    }
  }
  return fileLines;
}

const parsed1 = parseViewOutput(part1);
const parsed2 = parseViewOutput(part2);
const parsed3 = parseViewOutput(part3);

console.log('Parsed lines count - Part 1:', Object.keys(parsed1).length);
console.log('Parsed lines count - Part 2:', Object.keys(parsed2).length);
console.log('Parsed lines count - Part 3:', Object.keys(parsed3).length);

const linesArray = [];
let missingCount = 0;

for (let i = 1; i <= 1616; i++) {
  const lineContent = parsed1[i] !== undefined ? parsed1[i] : (parsed2[i] !== undefined ? parsed2[i] : parsed3[i]);
  if (lineContent !== undefined) {
    linesArray.push(lineContent);
  } else {
    missingCount++;
  }
}

console.log('Missing lines:', missingCount);

if (linesArray.length > 0) {
  const mergedContent = linesArray.join('\n');
  fs.writeFileSync('d:\\EASS\\src\\data\\universities.js', mergedContent, 'utf8');
  console.log('Successfully restored src/data/universities.js with lines:', linesArray.length);
} else {
  console.error('Failed to parse any lines from transcript!');
}

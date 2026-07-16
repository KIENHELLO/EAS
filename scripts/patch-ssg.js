import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pluginPath = path.join(__dirname, '../node_modules/vite-plugin-ssg/dist/plugin.js');

if (fs.existsSync(pluginPath)) {
  let content = fs.readFileSync(pluginPath, 'utf-8');
  
  // Regex to patch buildCssBundle dynamically capturing fs and path variable names
  const regexCss = /([a-zA-Z0-9_]+)\.mkdirSync\(tempDir,\s*\{\s*recursive:\s*true\s*\}\);\s*const tempEntryPath\s*=\s*([a-zA-Z0-9_]+)\.join\(tempDir,\s*`_temp_\$\{slug\}_entry\.tsx`\);/;
  
  if (regexCss.test(content)) {
    const match = content.match(regexCss);
    const fsVar = match[1];
    const pathVar = match[2];
    
    // Check if it's already patched
    if (!content.includes(`${fsVar}.mkdirSync(${pathVar}.dirname(tempEntryPath)`)) {
      content = content.replace(
        regexCss,
        `${fsVar}.mkdirSync(tempDir, { recursive: true });\n  const tempEntryPath = ${pathVar}.join(tempDir, \`_temp_\${slug}_entry.tsx\`);\n  ${fsVar}.mkdirSync(${pathVar}.dirname(tempEntryPath), { recursive: true });`
      );
      console.log('Successfully patched buildCssBundle directory creation in vite-plugin-ssg!');
    } else {
      console.log('buildCssBundle in vite-plugin-ssg is already patched.');
    }
  } else {
    console.log('Warning: Could not find buildCssBundle pattern in vite-plugin-ssg.');
  }

  // Regex to patch buildHydrationBundle dynamically capturing fs and path variable names
  const regexHydrate = /([a-zA-Z0-9_]+)\.mkdirSync\(tempDir,\s*\{\s*recursive:\s*true\s*\}\);\s*const hydrateEntryPath\s*=\s*([a-zA-Z0-9_]+)\.join\(tempDir,\s*`_temp_\$\{slug\}_hydrate\.tsx`\);/;
  
  if (regexHydrate.test(content)) {
    const match = content.match(regexHydrate);
    const fsVar = match[1];
    const pathVar = match[2];
    
    // Check if it's already patched
    if (!content.includes(`${fsVar}.mkdirSync(${pathVar}.dirname(hydrateEntryPath)`)) {
      content = content.replace(
        regexHydrate,
        `${fsVar}.mkdirSync(tempDir, { recursive: true });\n  const hydrateEntryPath = ${pathVar}.join(tempDir, \`_temp_\${slug}_hydrate.tsx\`);\n  ${fsVar}.mkdirSync(${pathVar}.dirname(hydrateEntryPath), { recursive: true });`
      );
      console.log('Successfully patched buildHydrationBundle directory creation in vite-plugin-ssg!');
    } else {
      console.log('buildHydrationBundle in vite-plugin-ssg is already patched.');
    }
  } else {
    console.log('Warning: Could not find buildHydrationBundle pattern in vite-plugin-ssg.');
  }

  fs.writeFileSync(pluginPath, content, 'utf-8');
} else {
  console.log('vite-plugin-ssg not found, skipping patch.');
}

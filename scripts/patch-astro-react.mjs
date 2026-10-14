import fs from 'node:fs';
import path from 'node:path';

const targetFile = path.resolve(process.cwd(), 'node_modules/@astrojs/react/dist/server.js');
if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8');
  if (content.includes('import opts from "astro:react:opts";')) {
    content = content.replace('import opts from "astro:react:opts";', 'const opts = {};');
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('[postinstall] Successfully patched @astrojs/react/dist/server.js for Node 24 compatibility');
  }
}

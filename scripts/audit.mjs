import { readFile, access } from 'node:fs/promises';
import { join, normalize } from 'node:path';

const origin = process.env.AUDIT_URL;
const dist = join(process.cwd(), 'dist');
const routes = ['/', '/profile/', '/predictor/', '/campuses/', '/calculator/', '/estimator/', '/priority/', '/guide/', '/checklist/', '/notices/', '/affiliated/', '/compare/', '/financials/'];
let failures = 0;
const fail = (message) => { failures += 1; console.error(`FAIL ${message}`); };
const pass = (message) => console.log(`PASS ${message}`);

async function readRoute(route) {
  if (origin) {
    const response = await fetch(new URL(route, origin));
    if (!response.ok) fail(`${route} returned ${response.status}`);
    return response.text();
  }
  return readFile(join(dist, route === '/' ? 'index.html' : `${route.slice(1)}index.html`), 'utf8');
}

const titles = new Set();
for (const route of routes) {
  try {
    const html = await readRoute(route);
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    const heading = html.match(/<h1[^>]*>([^<]+)<\/h1>/i)?.[1];
    if (!title || !description || !canonical || !heading) fail(`${route} is missing title, description, canonical, or h1`);
    if (title && titles.has(title)) fail(`${route} duplicates a title`);
    if (title) titles.add(title);
    if (!html.includes('<main')) fail(`${route} has no main content`);
    const localRefs = [...html.matchAll(/(?:href|src)="(\/(?!\/)[^"]+)"/g)].map((match) => match[1].split(/[?#]/)[0]);
    for (const ref of new Set(localRefs)) {
      if (ref === '/' || ref.endsWith('/')) continue;
      try { await access(join(dist, normalize(ref.replace(/^\//, '')))); } catch { fail(`${route} references missing asset ${ref}`); }
    }
    pass(`${route} has crawlable HTML and unique metadata`);
  } catch (error) {
    fail(`${route} could not be read: ${error.message}`);
  }
}

try {
  const robots = origin ? await (await fetch(new URL('/robots.txt', origin))).text() : await readFile(join(dist, 'robots.txt'), 'utf8');
  for (const agent of ['Googlebot', 'OAI-SearchBot', 'GPTBot']) if (!robots.includes(`User-agent: ${agent}`)) fail(`robots.txt lacks ${agent} policy`);
  if (!robots.includes('sitemap-index.xml')) fail('robots.txt does not reference the generated sitemap index');
  pass('robots.txt has explicit crawler policies');
} catch (error) { fail(`robots.txt could not be read: ${error.message}`); }

try {
  const sitemap = origin ? await (await fetch(new URL('/sitemap-index.xml', origin))).text() : await readFile(join(dist, 'sitemap-index.xml'), 'utf8');
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  if (sitemapUrls.length === 0) fail('sitemap index has no child sitemap');
  else pass(`sitemap index contains ${sitemapUrls.length} child sitemap reference(s)`);
} catch (error) { fail(`sitemap index could not be read: ${error.message}`); }

console.log(failures ? `Audit failed with ${failures} issue(s).` : 'Audit passed.');
process.exitCode = failures ? 1 : 0;

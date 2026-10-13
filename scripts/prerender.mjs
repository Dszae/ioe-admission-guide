import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  ADMISSION_METADATA,
  CAMPUS_DETAILS,
  CAMPUS_NAMES,
  CAMPUS_SEATS,
  CUTOFFS,
  AFFILIATED_COLLEGES,
  FACULTY_DATA,
  FINANCIALS,
  OFFICIAL_PORTALS
} from '../src/data/admissionData.js';
import { ADMISSION_CHECKLIST_ITEMS } from '../src/data/checklistData.js';
import { NOTICES_DATA } from '../src/data/noticesData.js';

const DIST = join(process.cwd(), 'dist');
const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');
const link = (href, label) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
const objectList = (object) => list(Object.entries(object).map(([key, value]) => `<strong>${escapeHtml(key)}:</strong> ${escapeHtml(value)}`));
const pageNav = list([
  link('/', 'IOE Admission Hub home'),
  link('/predictor/', 'IOE rank predictor and historical cutoffs'),
  link('/campuses/', 'IOE campuses and seat matrix'),
  link('/calculator/', 'IOE CBT score calculator'),
  link('/estimator/', 'IOE score-to-rank estimator'),
  link('/priority/', 'IOE priority form optimizer'),
  link('/guide/', 'IOE admission guide'),
  link('/checklist/', 'IOE admission checklist'),
  link('/notices/', 'IOE admission notices'),
  link('/affiliated/', 'TU-affiliated engineering colleges'),
  link('/compare/', 'Compare engineering disciplines'),
  link('/financials/', 'IOE fees and living costs')
]);
const shellStyle = `body{margin:0;background:#f8fafc;color:#172033;font:16px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif}main{max-width:1080px;margin:auto;padding:32px 20px 64px}h1{font-size:clamp(1.8rem,4vw,3rem);line-height:1.15;color:#123b84}h2{margin-top:2rem;color:#183b70}h3{margin-bottom:.35rem}p{max-width:80ch}a{color:#1558b0}nav{padding:16px 20px;background:#fff;border:1px solid #d8e0ed;border-radius:10px}section{margin-top:20px;padding:20px;background:#fff;border:1px solid #d8e0ed;border-radius:10px}table{width:100%;border-collapse:collapse;margin:12px 0 20px;background:#fff}th,td{text-align:left;padding:9px;border:1px solid #d8e0ed;vertical-align:top}th{background:#edf4ff}small{color:#53657e}.meta{padding:12px 16px;background:#eef6ff;border-left:4px solid #2563eb}`;

function campusContent() {
  return Object.entries(CAMPUS_DETAILS).map(([key, campus]) => {
    const rows = (CAMPUS_SEATS[key] || []).map((seat) => `<tr><td>${escapeHtml(seat.program)}</td><td>${seat.regular}</td><td>${seat.fullFee}</td><td>${seat.total}</td></tr>`).join('');
    return `<section><h2>${escapeHtml(campus.fullName)}</h2><p>${escapeHtml(campus.description)}</p><p><strong>Location:</strong> ${escapeHtml(campus.location)} (${escapeHtml(campus.district)}). <strong>Established:</strong> ${campus.established}. <strong>Total seats:</strong> ${campus.totalSeats}.</p><p><strong>Facilities:</strong> ${escapeHtml(campus.facilities.join(', '))}. <strong>Campus portal:</strong> ${link(campus.website, campus.website)}</p><table><caption>${escapeHtml(CAMPUS_NAMES[key])} seat matrix</caption><thead><tr><th>Engineering program</th><th>Regular</th><th>Full Fee</th><th>Total</th></tr></thead><tbody>${rows}</tbody></table></section>`;
  }).join('');
}

function cutoffContent() {
  return Object.entries(CUTOFFS).map(([campus, programs]) => {
    const rows = Object.entries(programs)
      .flatMap(([program, fees]) => Object.entries(fees)
        .flatMap(([fee, quotas]) => Object.entries(quotas)
          .map(([quota, cutoff]) => `<tr><td>${escapeHtml(CAMPUS_NAMES[campus])}</td><td>${escapeHtml(program)}</td><td>${fee === 'FullFee' ? 'Full Fee' : fee}</td><td>${escapeHtml(quota)}</td><td>${cutoff}</td></tr>`)))
      .join('');
    return `<section><h2>${escapeHtml(CAMPUS_NAMES[campus])}</h2><table><thead><tr><th>Campus</th><th>Program</th><th>Fee category</th><th>Quota</th><th>Historical closing rank</th></tr></thead><tbody>${rows}</tbody></table></section>`;
  }).join('');
}

function checklistContent() {
  return ADMISSION_CHECKLIST_ITEMS.map((item, index) => `<article><h2>Step ${index + 1}: ${escapeHtml(item.title)}</h2><p><strong>${escapeHtml(item.phase)}</strong>. ${escapeHtml(item.description)}</p><p><strong>Required documents:</strong> ${escapeHtml(item.requiredDocs.join(', '))}. <strong>Official portal:</strong> ${link(item.portalLink, item.portalLink)}</p></article>`).join('');
}

function noticeContent() {
  return NOTICES_DATA.map((notice) => `<article><h2>${escapeHtml(notice.title)}</h2><p><strong>${escapeHtml(notice.category)}</strong> | ${escapeHtml(notice.academicYear)} | ${escapeHtml(notice.publishedDate)} | ${escapeHtml(notice.status)}</p><p>${escapeHtml(notice.summary)}</p><p><strong>Authority:</strong> ${escapeHtml(notice.authority)}. ${link(notice.sourceUrl, 'View official source')}</p></article>`).join('');
}

function affiliatedContent() {
  return `<table><thead><tr><th>College</th><th>Location</th><th>Programs</th><th>Fee reference</th><th>Cutoff reference</th><th>Website</th></tr></thead><tbody>${AFFILIATED_COLLEGES.map((college) => `<tr><td>${escapeHtml(college.name)}</td><td>${escapeHtml(college.location)}</td><td>${escapeHtml(college.programs)}</td><td>${escapeHtml(college.fee)}</td><td>${escapeHtml(college.cutoff)}</td><td>${link(college.website, college.website)}</td></tr>`).join('')}</tbody></table>`;
}

function compareContent() {
  return Object.entries(FACULTY_DATA).map(([name, faculty]) => `<section><h2>${escapeHtml(name)}</h2><p>${escapeHtml(faculty.description)}</p><p><strong>Focus areas:</strong> ${escapeHtml(faculty.tags.join(', '))}</p><p><strong>Career directions:</strong> ${escapeHtml(faculty.careers.join(', '))}</p><h3>Curriculum overlap</h3>${objectList(faculty.overlap)}</section>`).join('');
}

function financialContent() {
  return `<table><thead><tr><th>Path</th><th>Tuition</th><th>Living estimate</th><th>Estimated total</th><th>Notes</th></tr></thead><tbody>${Object.values(FINANCIALS).map((item) => `<tr><td>${escapeHtml(item.type)}</td><td>${escapeHtml(item.tuition)}</td><td>${escapeHtml(item.living)}</td><td>${escapeHtml(item.total)}</td><td>${escapeHtml(item.notes)}</td></tr>`).join('')}</tbody></table>`;
}

const pages = {
  predictor: {
    title: 'IOE Rank Predictor and Historical Cutoffs | IOE Admission Hub',
    description: 'Searchable historical IOE admission closing ranks by campus, engineering program, fee category, and quota.',
    heading: 'IOE Rank Predictor and Historical Closing Ranks',
    intro: 'Use the interactive predictor in the browser, or read the complete historical cutoff dataset directly below.',
    content: `<div class="meta">${objectList(ADMISSION_METADATA)}</div>${cutoffContent()}`
  },
  campuses: {
    title: 'IOE Campuses and Seat Matrix | IOE Admission Hub',
    description: 'IOE constituent campus profiles, engineering programs, facilities, and regular and full-fee seat capacities.',
    heading: 'IOE Constituent Campuses and Seat Matrix',
    intro: `The five constituent campuses have ${ADMISSION_METADATA.totalConstituentSeats} reference seats in total.`,
    content: campusContent()
  },
  calculator: {
    title: 'IOE CBT Score Calculator Rules | IOE Admission Hub',
    description: 'Direct reference for IOE CBT marks, duration, pass threshold, and negative marking rules.',
    heading: 'IOE CBT Score Calculator',
    intro: 'The interactive calculator is available after JavaScript loads; these calculation rules are directly readable here.',
    content: `<section>${objectList(ADMISSION_METADATA)}<p><strong>Formula:</strong> net score equals marks from correct answers minus the question-weighted penalty for incorrect answers. Blank answers do not add marks or penalty.</p></section>`
  },
  estimator: {
    title: 'IOE Score-to-Rank Estimator | IOE Admission Hub',
    description: 'Estimate an IOE entrance merit rank bracket from a raw CBT score using historical reference curves.',
    heading: 'IOE Score-to-Rank Estimator',
    intro: 'Enter a raw IOE CBT score in the interactive estimator. The result is a historical bracket, not an official rank.',
    content: `<section><p>IOE entrance reference: ${ADMISSION_METADATA.totalMarks} total marks, ${ADMISSION_METADATA.durationHours}-hour CBT, and a ${ADMISSION_METADATA.passPercentage}% pass reference (${ADMISSION_METADATA.totalMarks * ADMISSION_METADATA.passPercentage / 100} marks).</p><p>For official results, use the ${link(ADMISSION_METADATA.sourceUrl, 'IOE Entrance Examination Board portal')}.</p></section>`
  },
  priority: {
    title: 'IOE Priority Form Optimizer | IOE Admission Hub',
    description: 'Build an IOE counseling preference sequence from historical campus, program, fee, and quota cutoffs.',
    heading: 'IOE Priority Form Optimizer',
    intro: 'The interactive optimizer groups options into Reach, Target, and Safety bands. The underlying historical options are listed directly below.',
    content: cutoffContent()
  },
  guide: {
    title: 'IOE Admission Guide and Counseling Handbook | IOE Admission Hub',
    description: 'IOE counseling rounds, auto-upgrade rules, quota verification, documents, deposit windows, and objections.',
    heading: 'IOE Engineering Admission Guide and Counseling Handbook',
    intro: 'Read the admission process, document requirements, merit-list rules, and official verification guidance.',
    content: `<section><h2>Merit lists and auto-upgrade</h2><p>Initial and subsequent lists allocate choices from the centralized merit rank and priority form. Auto-upgrade may move a candidate to a higher choice when a seat becomes available. Verify every deadline on the official notice.</p></section><section><h2>Documents and claim window</h2><p>Prepare the admit card, citizenship or national ID, SEE/SLC records, +2 or diploma transcript, migration and character certificates, photographs, and quota documents where applicable. Check claim and objection deadlines immediately after each merit list.</p></section><section><h2>Official verification</h2><p>${link('https://entrance.ioe.edu.np/', 'IOE Entrance Examination Board')} and ${link('https://admission.ioe.edu.np/', 'IOE Central Admission Committee')} are the final authorities.</p></section>`
  },
  checklist: {
    title: 'IOE Admission Checklist | IOE Admission Hub',
    description: 'Complete IOE admission steps from entrance registration and CBT examination through campus document verification.',
    heading: 'IOE Admission Roadmap and Checklist',
    intro: 'These nine steps are available as a private interactive checklist in the browser and as directly readable HTML here.',
    content: checklistContent()
  },
  notices: {
    title: 'IOE Admission Notices and Circulars | IOE Admission Hub',
    description: 'IOE entrance guidelines, quota notices, priority form instructions, merit lists, and historical circulars.',
    heading: 'IOE Admission Notices and Circulars',
    intro: 'Each notice includes its category, date, authority, summary, status, and original source link.',
    content: noticeContent()
  },
  affiliated: {
    title: 'TU-Affiliated Engineering Colleges | IOE Admission Hub',
    description: 'Compare TU-affiliated private engineering colleges, locations, programs, fee references, and cutoff references.',
    heading: 'TU-Affiliated Engineering Colleges',
    intro: `${AFFILIATED_COLLEGES.length} college records are available directly below. Confirm fees and affiliation with each institution.`,
    content: affiliatedContent()
  },
  compare: {
    title: 'Compare IOE Engineering Disciplines | IOE Admission Hub',
    description: 'Compare IOE engineering discipline focus areas, career directions, and curriculum overlap.',
    heading: 'Compare IOE Engineering Disciplines',
    intro: 'Compare the locally maintained discipline reference data directly below.',
    content: compareContent()
  },
  financials: {
    title: 'IOE Engineering Fees and Living Costs | IOE Admission Hub',
    description: 'Compare IOE regular, full-fee, foreign, and affiliated engineering tuition and living cost references.',
    heading: 'IOE Engineering Fees and Living Costs',
    intro: 'These are reference estimates, not an official fee notice. Confirm current charges with IOE or the college.',
    content: financialContent()
  }
};

const source = await readFile(join(DIST, 'index.html'), 'utf8');
const script = source.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/)?.[1];
const stylesheet = source.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/)?.[1];
if (!script || !stylesheet) throw new Error('Vite assets were not found in dist/index.html');

for (const [slug, pageData] of Object.entries(pages)) {
  const canonical = `https://ioe-admission.dipeshsapkota7.com.np/${slug}/`;
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: pageData.title,
    description: pageData.description,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: 'IOE Admission Hub',
      url: 'https://ioe-admission.dipeshsapkota7.com.np/'
    },
    author: {
      '@type': 'Person',
      name: 'Dipesh Sapkota',
      url: 'https://www.dipeshsapkota7.com.np/'
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'IOE Admission Hub', item: 'https://ioe-admission.dipeshsapkota7.com.np/' },
        { '@type': 'ListItem', position: 2, name: pageData.heading, item: canonical }
      ]
    }
  }).replaceAll('<', '\\u003c');
  const html = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(pageData.title)}</title><meta name="description" content="${escapeHtml(pageData.description)}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${canonical}"><link rel="alternate" type="text/plain" href="/llms.txt"><link rel="stylesheet" href="${stylesheet}"><script type="application/ld+json">${structuredData}</script><style>${shellStyle}</style></head><body><div id="root"><main><header><p><strong>IOE Admission Hub by Dipesh Sapkota</strong></p><h1>${escapeHtml(pageData.heading)}</h1><p>${escapeHtml(pageData.intro)}</p></header><nav aria-label="IOE Admission Hub sections"><h2>Explore IOE Admission Hub</h2>${pageNav}</nav>${pageData.content}<section><h2>Official sources and disclaimer</h2><p>This is an independent educational reference. Official admissions are governed by IOE and Tribhuvan University. ${OFFICIAL_PORTALS.slice(0, 2).map((portal) => link(portal.url, portal.name)).join(' | ')}.</p></section></main></div><script type="module" crossorigin src="${script}"></script></body></html>`;
  const outputDir = join(DIST, slug);
  await mkdir(outputDir, { recursive: true });
  await writeFile(join(outputDir, 'index.html'), html);
}

console.log(`Prerendered ${Object.keys(pages).length} static IOE section pages.`);

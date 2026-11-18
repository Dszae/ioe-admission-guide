import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateOG() {
  const emblemPath = path.resolve('public/og-image.png');
  const outputPath = path.resolve('public/og-image.png');
  const backupEmblem = path.resolve('public/ioe-emblem.png');

  // If ioe-emblem doesn't exist yet, copy original portrait image to ioe-emblem.png
  if (!fs.existsSync(backupEmblem)) {
    fs.copyFileSync(emblemPath, backupEmblem);
  }

  // Resize the emblem to fit cleanly in 440px height
  const emblemBuffer = await sharp(backupEmblem)
    .resize({ height: 440, fit: 'inside' })
    .toBuffer();

  const svgBanner = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#080c14" />
          <stop offset="50%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#172554" />
        </linearGradient>
        <radialGradient id="glow" cx="22%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e40af" stop-opacity="0.45" />
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)" />
      <rect width="1200" height="630" fill="url(#glow)" />
      <rect x="40" y="40" width="1120" height="550" rx="24" fill="none" stroke="#334155" stroke-width="2" stroke-opacity="0.6" />
      
      <!-- Text content -->
      <g transform="translate(490, 160)">
        <!-- Subtitle badge -->
        <rect x="0" y="0" width="350" height="36" rx="18" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" />
        <text x="175" y="23" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#60a5fa" text-anchor="middle" letter-spacing="1.5">TRIBHUVAN UNIVERSITY • IOE</text>
        
        <!-- Main Title -->
        <text x="0" y="96" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="800" fill="#ffffff" letter-spacing="-1">IOE Admission Hub</text>
        
        <!-- Secondary Line -->
        <text x="0" y="152" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600" fill="#93c5fd">Entrance Rank Predictor &amp; Cutoffs</text>
        
        <!-- Description -->
        <text x="0" y="205" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#94a3b8">Syllabus, CBT calculator, seat matrix &amp; merit ranks</text>
        <text x="0" y="235" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#94a3b8">for Pulchowk, Thapathali, WRC, ERC &amp; Chitwan</text>
        
        <!-- Author / Footer tag -->
        <text x="0" y="318" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="500" fill="#cbd5e1">Created by <tspan font-weight="700" fill="#38bdf8">Dipesh Sapkota</tspan> • Free &amp; Open Access</text>
      </g>
    </svg>
  `);

  await sharp(svgBanner)
    .composite([
      {
        input: emblemBuffer,
        top: 95,
        left: 80
      }
    ])
    .png({ quality: 95 })
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  console.log(`Generated OG Image at ${outputPath}: ${meta.width}x${meta.height}`);
}

generateOG().catch(console.error);

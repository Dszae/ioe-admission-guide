# Hyperframes Composition Brief: IOE Admission Hub

## Objective
Create a 20-second vertical launch-style brag video for IOE Admission Hub — an admission toolkit for Tribhuvan University Institute of Engineering (IOE) applicants in Nepal.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: vertical — 1080x1920
- Duration: 20 seconds

## Source Material
- Project root: `c:/Users/DIPESH/ioe-predictor/`
- Primary files read: `index.html`, `src/App.jsx`, `src/components/Header.jsx`, `src/components/RankPredictor.jsx`, `src/components/CampusExplorer.jsx`, `src/components/PriorityGenerator.jsx`, `src/index.css`
- Product name: IOE Admission Hub
- Tagline / strongest claim: "A comprehensive admission toolkit for Tribhuvan University Institute of Engineering (IOE) applicants in Nepal."
- Key UI moment to recreate: Rank Predictor result card — green "High Probability" badge + closing cutoff + campus label
- Copy that must appear verbatim:
  - "IOE Admission Hub"
  - "Know your rank. Know your plan."
  - "Rank 240" (example rank used in simulation)
  - "High Probability"
  - "Closing Cutoff: 27"
  - "Pulchowk Campus — Computer Engineering"
  - "2,040 Verified Seats"
  - "Priority Optimizer"

## Creative Direction
- Tone preset: `app-store`
- Creative direction: calm, confident, feature-card-clean — "the admission toolkit that actually thinks for you"
- Interpretation: Clean card reveals, readable Manrope typography, restrained motion. The product's precision is the energy. High-contrast light theme matching the actual app's light mode.
- Angle: From anxious blank input to confident priority list in 20 seconds — the sequence every IOE applicant actually goes through before counseling day.
- Hook: "Rank 240." slams in. Then "Now what?" fades up. Hard cut to the product solving it.
- Outro / punchline: Logo → "IOE Admission Hub" → "Know your rank. Know your plan." → URL hint
- Avoid:
  - Generic SaaS language ("streamline", "all-in-one solution", "powerful")
  - Abstract filler visuals or color washes
  - Any dark-mode styling (the app runs light-mode only; match `#f8fafc` bg throughout)
  - Fabricated data (all ranks, cutoffs, seat counts must match what's in `src/data/admissionData.js`)

## Visual Identity
- Background: `#f8fafc` (slate-50)
- Text primary: `#0f172a` (slate-900)
- Text secondary: `#64748b` (slate-500)
- Accent / brand: `#2563eb` (blue-600)
- Success: `#10b981` (emerald-500) — for "High Probability" badge
- Warning / Ambitious: `#f59e0b` (amber-500) — Tier 2 dot
- Safety: `#3b82f6` (blue-500) — Tier 3 dot
- Card border: `#e2e8f0` (slate-200)
- Display font: Manrope 800 — load from Google Fonts
- Body font: Manrope 500 / 600 — same import
- Visual references from the project:
  - White card with `border border-slate-200 rounded-xl shadow-sm` styling
  - Blue-600 active pill for nav tabs and primary buttons
  - Emerald badge with `bg-emerald-50 border-emerald-300 text-emerald-950` for success states
  - Table rows with `divide-y divide-slate-100` and alternating hover `bg-slate-50/60`
  - `rounded-xl` corners throughout
  - `Manrope` font at all sizes via `font-family: 'Manrope', system-ui, sans-serif`

## Storyboard

Scene summary:
1. **Hook** — 2.5s — "Rank 240" + "Now what?" — no chrome, just the question
2. **Reveal: Predictor** — 5s — rank input → submit → green "High Probability" card with cutoff 27 / Pulchowk Computer
3. **Campus Seat Matrix** — 4s — Pulchowk table, 5 program rows appear one by one; banner "2,040 Verified Seats"
4. **Priority Optimizer** — 5s — rank input → Generate → 3 tier cards cascade (Ambitious/Realistic/Safety with cutoffs)
5. **Outro / Logo** — 3.5s — IOE logo → "IOE Admission Hub" → "Know your rank. Know your plan." → URL

Full scene specifications in `brag-output/brag-plan.md`.

## Audio
- Audio role: warm corporate bed, energetic and confident
- Audio arc: enters softly under hook, builds through feature reveals with beat-locked card arrivals, fades clean under logo
- Music: `happy-beats-business-moves-vol-9-by-ende-dot-app.mp3` (copy to `composition/assets/music/`)
- Music treatment: start at 0s, volume ~0.55 throughout, fade out over last 1.5s (18.5–20s)
- Music cue guidance: bundled preset JSON at `assets/music/cues/happy-beats-business-moves-vol-9-by-ende-dot-app.music-cues.json`
  - Tempo: 114.84 BPM, beat interval ~0.52s
  - Strong cues (use for major reveals): 4.23s, 6.34s, 12.65s
  - Beat grid in window: 1.07, 1.59, 2.12, 2.65, 3.18, 3.70, 4.23, 4.75, 5.28, 5.80, 6.34, 6.86, 7.40, 7.92, 8.44, 8.96, 9.50, 10.01, 10.54, 11.06, 11.60, 12.12, 12.65, 13.18, 13.70, 14.22, 14.76 ...
  - Sequential text rows (Campus table): reveal each row at every-other-beat (~1.04s spacing) starting at 6.34s strong cue
  - Priority tier cards: beat-locked at 12.65s, 13.70s, 14.76s
- Audio-reactive treatment: subtle — hero card background and "High Probability" badge glow breathe gently with music RMS; no waveform bars, no heavy pulsing
- Audio-coupled moments:
  - Scene 1 "Rank 240" slam — low-frequency impact accent SFX
  - Scene 2 cursor click + submit — `ui/mouseclick1.ogg` or `ui/click2.ogg`
  - Scene 2 badge pop-in — soft pop from `ui/switch1.ogg`
  - Scene 2 cutoff counter (0→27) — subtle tick sounds (keyboard or ui switches)
  - Scene 3 table rows — `ui/switch2–6.ogg` or similar, one per row, at beat-grid timestamps
  - Scene 4 priority tier cards — three `ui/click3-5.ogg` at 12.65s, 13.70s, 14.76s
  - Scene 5 logo landing — optional single soft announcement or let music fade carry
- SFX selection guidance: prefer low high-frequency-risk files; never more than one SFX simultaneously; keep SFX volume at or below music bed level
- SFX analysis guidance: use `assets/sfx/sfx-analysis.md` if present for file selection; `ui/` folder for all card/click/switch events; `keyboard/` folder for keypress ticks only in the typing simulation
- Exact SFX choice: Hyperframes should choose exact filenames and timestamps based on implemented animation
- Audio files: copy music to `composition/assets/music/`; SFX copied by Hyperframes after selection

## Hyperframes Instructions

Load `hyperframes-core`, `hyperframes-animation`, `hyperframes-creative`, `hyperframes-keyframes`, and `hyperframes-cli`. Do not enter the generic promo/launch-video workflow — this is a `/brag` run.

Requirements:
- 1080x1920 (vertical, YouTube Shorts / Reels format)
- 20 seconds total; scene durations as specified in brag-plan.md
- Show actual product UI: recreate the Rank Predictor result card, the Pulchowk seat table, and the Priority tier cards in HTML — using real data (cutoff 27 for Pulchowk Computer Open Regular; table seat counts from admissionData.js; tier cutoffs 27/75/164)
- All factual numbers grounded in `src/data/admissionData.js`
- Keep all text readable: Manrope font via Google Fonts, white cards, high-contrast text
- Include music + tasteful SFX layer as specified
- Run `hyperframes check` before render — fix all reported errors including WCAG contrast
- Render to `../brag.mp4` from inside `composition/` directory
- Beat-lock major reveals to strong cues at 4.23s, 6.34s, 12.65s (±0.15s)
- Snap sequential events (table rows, priority cards) to beat grid (±0.10s)


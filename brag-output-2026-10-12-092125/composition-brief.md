# Hyperframes Composition Brief: IOE Admission Hub

## Objective
Create a 20-second vertical product-launch video for IOE Admission Hub, using the project's actual light UI language and a cinematic data-to-decision story.

## Output
- Composition directory: `brag-output-2026-10-12-092125/composition/`
- Rendered video: `brag-output-2026-10-12-092125/brag.mp4`
- Format: vertical — 1080x1920
- Duration: 20 seconds

## Source Material
- Project root: `c:/Users/DIPESH/ioe-predictor`
- Primary files read: `index.html`, `README.md`, `src/App.jsx`, `src/index.css`, `src/components/Header.jsx`, `src/components/RankPredictor.jsx`, `src/components/CampusExplorer.jsx`, `src/components/PriorityGenerator.jsx`, `src/data/admissionData.js`
- Product name: IOE Admission Hub
- Tagline / strongest claim: `A comprehensive admission toolkit for Tribhuvan University Institute of Engineering (IOE) applicants in Nepal.`
- Key UI moment to recreate: merit rank input -> historical probability result card -> seat matrix -> priority tiers
- Copy that must appear verbatim:
  - `Admission Rank Probability Predictor`
  - `Constituent Campuses & Seat Matrix`
  - `Total 2,040 Seats`
  - `Priority Form Sequence Optimizer`
  - `Ambitious (Reach)` / `Realistic (Target)` / `Safety Backups`
  - `Make the list before the list makes you.`

## Creative Direction
- Tone preset: cinematic
- Creative direction: quiet exam-season command center, with precise data reveals and a premium blue signal
- Interpretation: dramatic motion with restrained copy, clear holds, and no invented admission guarantees.
- Angle: one merit rank becomes a practical plan across probability, campuses, seats, and priority tiers.
- Hook: `Your rank. Your options.` followed by a typed `240` in the actual predictor UI.
- Outro / punchline: `Make the list before the list makes you.`
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign
  - Claims of guaranteed admission or official IOE endorsement

## Visual Identity
- Background: `#f8fafc` and white surfaces
- Text: `#0f172a` with slate neutrals
- Accent: `#2563eb` / `#1e40af`
- Display font: Manrope 700/800
- Body font: Manrope 400/600; JetBrains Mono for numeric data
- Visual references from the project: blue active navigation, rounded white card surfaces, blue result/status accents, compact accessible data tables

## Storyboard
Use `brag-plan.md` as the creative contract.

Scene summary:
1. The rank — 2.5s — brand hook and typed merit rank `240`.
2. The signal — 3.5s — Pulchowk/Civil/Regular/Open predictor result.
3. The network — 5.0s — Campus Explorer and `2,040 Total Seats`.
4. The sequence — 4.0s — rank `1450` and Reach/Target/Safety bands.
5. Decide clearly — 5.0s — final lockup and independent-tool disclaimer.

## Audio
- Audio role: cinematic support
- Audio arc: low bed at the hook, widening during the seat-matrix reveal, then restrained final lockup.
- Music: `assets/music/happy-beats-business-moves-vol-12-by-ende-dot-app.mp3`
- Music treatment: 0.28-0.34 volume, gentle fade-in, slight duck under final lockup, fade out at 20s.
- Music cue guidance: use bundled `assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`; major cue targets 8.74s, 13.11s, 17.47s; use the beat grid only where it does not harm text readability.
- Audio-reactive treatment: subtle RMS/bass response in existing blue glow/card presence; no waveform, equalizer, strobe, or particle field.
- Audio-coupled moments:
  - rank entry — sparse typing/click
  - predictor result — soft impact
  - seat count — beat-aligned reveal
  - priority bands — every-other-beat sequential reveal
  - final lockup — restrained logo hit
- SFX selection guidance: prefer low/medium high-frequency-risk interface and impact sounds from the bundled library; use only a few cues.
- SFX analysis guidance: `c:/Users/DIPESH/ioe-predictor/.agents/skills/brag/assets/sfx/sfx-analysis.md`
- Exact SFX choice: Hyperframes chooses filenames, timestamps, density, and volume after implementing motion.
- Audio files: copy selected music and SFX into `composition/assets/` before render.

## Hyperframes Instructions
Load the current Hyperframes core, animation, creative, keyframes, and CLI guidance. Build the composition locally in the output directory, using the brief and plan as the product/story boundary.

Requirements:
- Show real IOE Admission Hub UI/copy and the actual product flow.
- Keep all text readable in 1080x1920.
- Keep total duration exactly 20 seconds and use seek-safe timing.
- Run `npx hyperframes check` before rendering and fix all errors.
- Beat-lock major reveals only when readable; mark any locked moments in the composition.
- Include bundled music and a few restrained SFX.
- Use local assets and relative paths only.
- Do not modify the application source files.
# Brag Plan: IOE Admission Hub

## What is this app?
An end-to-end admission toolkit for Tribhuvan University IOE applicants — it predicts your merit rank probability, explores 2,040 verified seats across 5 constituent campuses, calculates CBT net scores with negative marking, and generates a priority preference sequence optimised for the auto-upgrade algorithm.

## The angle
Most students walk into IOE counseling with a number and a prayer. IOE Admission Hub gives them a plan: enter your rank, get your odds, pick your campuses, rank your priorities, and walk in knowing exactly where you stand. The video captures that sequence — from anxious blank input to confident priority list — in 20 seconds.

## Hook (first 2-3 seconds)
Big white screen. Single stat appears: **"Rank 240."** Pause half a beat. Then text slam: **"Now what?"** — the question every IOE applicant actually has.

## Key moments (the middle)
- The rank input field on Predictor — cursor types "240", hit submit, a green "High Probability" badge animates in alongside a closing cutoff number, confirming Pulchowk Computer eligibility
- The Campus Seat Matrix table for Pulchowk scrolling in: program rows (Computer, Civil, Electrical, Mech, ECIE) with regular/full-fee seat counts appearing one by one
- The Priority Optimizer: "Generate Sequence" fires, three tier cards (Ambitious / Realistic / Safety) cascade in with cutoff badges

## Outro / punchline
Logo mark + text: **"IOE Admission Hub"** — then in smaller type: **"Know your rank. Know your plan."** (the tagline from the project's own header description area)

## User flow worth showing
1. **Entry** — user types rank 240 in the Rank Predictor input
2. **Key action** — result card shows "High Probability" + Pulchowk Computer Regular cutoff (27 Open)
3. **Result** — Priority Optimizer generates Ambitious / Realistic / Safety tiers

## Tone
- Preset: `app-store`
- Creative direction: calm, confident, feature-card-clean — "the admission toolkit that actually thinks for you"
- Interpretation: Clean card reveals, readable typography, restrained motion. No chaos. The product's precision is the energy. High-contrast light theme matching the actual app.

## Format: vertical — 1080x1920
## Duration: 20 seconds

## Visual identity (from the project)
- Background: `#f8fafc` (slate-50 — the app's light mode bg)
- Accent / brand: `#2563eb` (blue-600 — primary nav active color)
- Text primary: `#0f172a` (slate-900)
- Text secondary: `#64748b` (slate-500)
- Success green: `#10b981` (emerald-500 — "High Probability" badge)
- Display font: Manrope 800 (from Google Fonts import in index.html)
- Body font: Manrope 500/600
- Strongest visual: The Rank Predictor result card with its colored probability badge + closing cutoff stat

## Share copy (draft)
Built an IOE admission toolkit — rank prediction, 2,040 verified seats, CBT calculator, priority optimizer. One tab for each thing you actually need before counseling day.

## Audio direction
- Role: warm corporate bed, energetic but restrained
- Music: `happy-beats-business-moves-vol-9-by-ende-dot-app.mp3` — 114.84 BPM, upbeat business track
- Music treatment: starts at 0s, fades out over last 1.5s (sec 18.5–20s); maintain moderate volume ~0.55 throughout, no ducking needed
- Music cue guidance: bundled preset available at `assets/music/cues/happy-beats-business-moves-vol-9-by-ende-dot-app.music-cues.json`
  - Strong cues in window: 4.23s, 6.34s, 10.54s, 12.65s — use 4.23s for Reveal entrance, 6.34s for Campus table reveal, 12.65s for Priority cascade start
  - Beat grid at ~0.52s intervals (114.84 BPM); use every-other-beat (~1.04s) for sequential text rows so they're readable
- Audio-reactive treatment: subtle — the hero card background and badge glow should breathe gently with music RMS; no equalizer bars or heavy pulse
- SFX posture: sparse, professional; motion-matched
- Audio-coupled moments:
  - Hook ("Now what?" slam) — short low-frequency impact accent
  - Rank input typing — 3–4 subtle keypress ticks (from keyboard/ SFX library)
  - Green probability badge pop-in — soft `switch` or `click` pop (ui/click2.ogg or similar)
  - Campus table rows arriving — soft card/tick sounds per row (ui/switch1-3.ogg)
  - Priority tier cards cascade — three sequential soft card sounds
  - Logo landing — clean single announcement hit or let music carry it
- Restraint rule: no SFX stacking — never more than one SFX at a time; keep volume at or below music bed

## Storyboard

### Scene 1 — Hook — 2.5s
Large centered stat: **"Rank 240"** (Manrope 800, 96px, #0f172a) slams in from slightly below with a fast ease-out.
Half-beat hold, then **"Now what?"** (Manrope 700, 48px, #64748b) fades up underneath.
Background: pure `#f8fafc`. No chrome, no nav — just the number and the question.
Sequential/interaction: Rank number slams first, "Now what?" follows 0.6s later
Audio intent: Build tension; the silence under the crash makes the question land
Audio-coupled idea: sharp low-frequency impact SFX on "Rank 240" entry
Music: warm corporate bed enters softly
Transition mood: hard cut → Scene 2

### Scene 2 — Reveal: Rank Predictor in action — 5s
Recreate the Predictor interface: white card with blue border, label "Your Merit Rank", input field showing "240" already typed. User cursor hovers then submit button ("Predict Admission Odds") pulses.
After ~1.2s: Result card expands below — emerald-green "High Probability" badge + stat line "Closing Cutoff: 27 (Open, Regular)" + campus label "Pulchowk Campus — Computer Engineering".
Sequential/interaction: cursor click at ~1.0s → result card slides up → badge pops, cutoff number counts up 0→27 in 0.8s, campus label fades in
Audio intent: payoff — the product doing its job; confidence
Audio-coupled idea: cursor click SFX → badge pop SFX → counter ticks on number (subtle)
Music: beat-locked reveal at strong cue 4.23s (±0.15s)
Transition mood: soft slide → Scene 3

### Scene 3 — Campus Seat Matrix — 4s
Recreate the Campus Seat Matrix table for Pulchowk: header row ("Engineering Discipline / Regular / Full Fee / Total"), then 5 program rows animate in one by one:
- Computer Engineering — 24 — 72 — 96
- Civil Engineering — 48 — 144 — 192
- Electrical Engineering — 48 — 144 — 192
- Mechanical Engineering — 24 — 72 — 96
- ECIE — 12 — 36 — 48
Small banner above: "Constituent Campuses · 2,040 Verified Seats"
Sequential/interaction: rows arrive one by one on every-other-beat (~1.04s apart), snap to beat grid starting at 6.34s strong cue; each row slides in from left. Hold full table for 0.8s.
Audio intent: systematic, data-confidence rhythm; feels like facts clicking into place
Audio-coupled idea: soft tick/card SFX fires with each row at beat-grid timestamp
Music: beat-locked table start at 6.34s
Transition mood: clean wipe right → Scene 4

### Scene 4 — Priority Optimizer — 5s
Recreate the Priority Generator form: input "240" in rank field, "Generate Sequence" button. Simulate tap.
Three tier cards cascade in from bottom:
- Card 1 (green dot): "Tier 1: Ambitious (Reach)" — Pulchowk Comp, cutoff 27
- Card 2 (amber dot): "Tier 2: Realistic (Target)" — Thapathali Comp, cutoff 75
- Card 3 (blue dot): "Tier 3: Safety Backup" — WRC Computer, cutoff 164
Each card shows campus name + program + cutoff badge.
Sequential/interaction: button tap at 0.3s → cards cascade in at beat-grid from 12.65s (strong cue) — card 1 at 12.65s, card 2 at 13.70s, card 3 at 14.76s; each slides up + fades; hold all three for 1.5s
Audio intent: triumphant sequence; the three cards feel like the plan completing
Audio-coupled idea: three sequential card SFX at 12.65s, 13.70s, 14.76s
Music: beat-locked cascade start at 12.65s strong cue
Transition mood: soft crossfade → Scene 5

### Scene 5 — Outro / Logo — 3.5s
Clean white card center screen. IOE logo mark (circle with TU initials, as used in the app's header) fades in at top.
"**IOE Admission Hub**" in Manrope 800, blue-600. Then below in Manrope 500, slate-500: "Know your rank. Know your plan."
URL hint at bottom: `ioe-admission.dipeshsapkota7.com.np` in small slate-400 text.
Sequential/interaction: logo → title → tagline → URL each appear 0.4s apart, then hold
Audio intent: clean landing; music fades out gracefully
Audio-coupled idea: optional single soft announcement hit under title arrival; let music fade carry the rest
Music: fade out 18.5–20.0s
Transition mood: none (end)

**Music mood for this video:** upbeat corporate bed, confident and energetic but not chaotic
**Audio summary:** Music enters softly under the hook crash, builds through the feature reveals with beat-locked card arrivals, and fades cleanly under the logo outro.


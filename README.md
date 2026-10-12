# IOE Admission Hub

IOE Admission Hub is a mobile-first admission planning toolkit for Institute of Engineering (IOE), Tribhuvan University applicants in Nepal. It combines historical rank analysis, campus and seat data, CBT scoring, preference planning, notices, and counseling guidance in one accessible React application.

## Live Application

**Production:** [ioe-admission.dipeshsapkota7.com.np](https://ioe-admission.dipeshsapkota7.com.np/)

## Product Demo

GitHub does not reliably play MP4 files committed to a repository inside a README because raw repository binaries are served as downloads. For an inline player, upload `brag-output-2026-10-12-093257/brag.mp4` to a GitHub Issue or pull-request comment, then replace the placeholder URL below with the generated `github.com/user-attachments/assets/...` URL:

```html
<video controls width="100%" src="PASTE_GITHUB_VIDEO_ATTACHMENT_URL_HERE">
  Your browser does not support embedded video.
</video>
```

The rendered video is also available as a repository download: [16:9 launch video](brag-output-2026-10-12-093257/brag.mp4).

## Features

### Rank and scoring

- **Admission Rank Probability Predictor:** Evaluate historical admission probability for one campus and program, or compare the same program across all constituent campuses.
- **CBT Negative Marking Calculator:** Calculate net scores out of 140 using the documented 10% negative-marking rules and the 40% pass threshold.
- **CBT Score-to-Rank Curve Estimator:** Estimate a historical merit-rank bracket from a raw CBT score before official rank lists are released.

### Campuses and choices

- **Constituent Campus and Seat Matrix Explorer:** Browse Pulchowk, Thapathali, WRC Pokhara, ERC Dharan, and Chitwan Engineering Campus, including programs, locations, facilities, and the 2,040-seat constituent intake.
- **Affiliated Engineering Colleges Directory:** Search TU-affiliated private engineering colleges by institution, location, program, fee range, and reference cutoff.
- **Faculty Matrix Comparator:** Compare engineering disciplines by curriculum overlap, technical domains, and career outcomes.
- **Priority Form Sequence Optimizer:** Generate a balanced Reach, Target, and Safety preference sequence from an entrance rank and copy it to the clipboard.

### Admission planning

- **Official Admission Notices Tracker:** Search notices, circulars, quota documents, merit lists, and entrance updates by category and authority.
- **Admissions Roadmap and Action Checklist:** Track the admission journey from CBT registration through document verification, with progress persisted in local browser storage.
- **Admission Handbook and Counseling Guide:** Review merit-list rounds, auto-upgrade behavior, seat deposits, spot admissions, claim and objection timelines, and document requirements.
- **Financial Investment Breakdown:** Compare four-year tuition and estimated living costs across Regular, Full Fee, and affiliated paths.

## Data and Scope

- Academic reference cycle: **2082 BS**
- Governing body: Institute of Engineering, Tribhuvan University
- Exam format: two-hour Computer Based Test
- Total marks: 140
- Pass reference: 40% / 56 marks
- Negative marking: 10% per incorrect answer, with question-weighted deductions
- Constituent intake reference: 2,040 seats
- Historical closing ranks are statistical references, not admission guarantees.

## Technology

- React 19 with Vite 8
- Tailwind CSS with a light, responsive, accessible interface
- Modular component architecture with lazy-loaded secondary tools
- Vitest tests for calculation and data boundaries
- Oxlint for static analysis
- SEO metadata, Open Graph tags, Schema.org JSON-LD, sitemap, robots.txt, and `llms.txt`

## Repository Structure

```text
.
├── public/                 # Logos, metadata, crawler files, sitemap, and static assets
├── src/
│   ├── components/         # Predictor, calculators, explorers, guides, and shared UI
│   ├── data/               # Admission, notice, and checklist datasets
│   ├── utils/              # Rank, score, cutoff, and formatting calculations
│   ├── App.jsx             # Tabbed application shell and lazy-loaded modules
│   ├── index.css           # Tailwind base, typography, accessibility, and theme rules
│   └── main.jsx            # React entry point
├── index.html              # SEO shell, canonical metadata, Open Graph, and JSON-LD
├── package.json            # Scripts and dependencies
└── brag-output-2026-10-12-093257/ # Optional generated 16:9 product demo artifacts
```

## Local Development

### Requirements

- Node.js 20 LTS or later
- npm

### Setup

```bash
npm install
```

### Commands

```bash
npm run dev      # Start the Vite development server
npm run test     # Run Vitest tests
npm run lint     # Run Oxlint
npm run build    # Build the production bundle
npm run preview  # Preview the production build
```

## Source and Provenance

IOE Admission Hub is an independent educational toolkit. It is **not officially operated, affiliated with, or endorsed** by Tribhuvan University or the Institute of Engineering. Always verify current notices, deadlines, cutoffs, seat allocations, and admission decisions through the official [IOE Entrance Examination Board](https://entrance.ioe.edu.np/) and [Central Admission Committee](https://admission.ioe.edu.np/).

## ⚖️ Official Source & Provenance Disclaimer

IOE Admission Hub is an independent educational toolkit developed to assist engineering applicants in Nepal. It is **not officially operated, affiliated with, or endorsed** by Tribhuvan University (TU) or the Institute of Engineering (IOE). All official admissions, cutoff ranks, and seat allocations are governed exclusively by the IOE Entrance Examination Board ([entrance.ioe.edu.np](https://entrance.ioe.edu.np/)) and Central Admission Committee ([admission.ioe.edu.np](https://admission.ioe.edu.np/)).

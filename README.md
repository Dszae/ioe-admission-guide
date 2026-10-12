# IOE Admission Hub

A comprehensive, mobile-first, and accessible admission guidance platform for Institute of Engineering (IOE), Tribhuvan University (TU) applicants in Nepal. The application empowers students to evaluate admission odds, compare engineering faculties, verify seat matrices, and prepare counseling decisions with verified data.

## 🌐 Live Application
- **Production URL:** [https://ioe-admission.dipeshsapkota7.com.np/](https://ioe-admission.dipeshsapkota7.com.np/)

---

## 🎬 Product Demo

<video controls width="100%" src="https://raw.githubusercontent.com/Dszae/ioe-admission-guide/main/brag-output-2026-10-12-093257/brag.mp4">
	Your browser does not support embedded video. [Download the product demo](https://raw.githubusercontent.com/Dszae/ioe-admission-guide/main/brag-output-2026-10-12-093257/brag.mp4).
</video>

[Download the 16:9 launch video](https://raw.githubusercontent.com/Dszae/ioe-admission-guide/main/brag-output-2026-10-12-093257/brag.mp4)

---

## 🚀 Key Modules & Capabilities

* **Statistical Rank Probability Predictor:** Evaluates admission odds by individual campus or across all constituent campuses using verified historical closing merit ranks (2082 BS benchmark). Features probabilistic tiers (High, Moderate, Competitive, Reach) without misleading guarantees.
* **Constituent Campus & Seat Matrix Explorer:** Detailed exploration of all 5 constituent engineering colleges (Pulchowk, Thapathali, WRC Pokhara, ERC Dharan, ChEC Chitwan) with verified seat intakes (Total 2,040 constituent seats) and program breakdowns.
* **Affiliated Colleges Directory:** Comprehensive directory of 10 TU-affiliated private engineering institutions across Nepal with intake programs and locations.
* **Official Admission Notices Tracker:** Curated and searchable tracker of official notices, circulars, and quota documents directly linking to authentic IOE and campus admission portals.
* **Smart Priority Form Sequence Optimizer:** Generates a balanced 12-choice hierarchy (Reach, Match, and Safety) tailored to the IOE auto-upgrade algorithm, complete with 1-click clipboard export.
* **Interactive Admission Roadmap Checklist:** 9-step timeline from online CBT registration to final in-person document verification, persisted privately in local browser storage.
* **CBT Negative Marking Calculator:** Calculates exact net scores out of 140 applying the official 10% penalty (-0.1 for 1-mark and -0.2 for 2-mark questions) with a 40% (56-mark) pass threshold check.
* **Score-to-Rank Curve Estimator:** Maps raw test scores to historical rank brackets based on applicant performance distribution curves.
* **Admission Handbook & Counseling Guide:** Explains auto-upgrade rules, seat deposit windows, Dabi Birodh (Claim & Objection) timelines, and inclusive quota documentation.
* **Faculty Matrix Comparator:** Analyzes curriculum overlaps, technical domains, and career outcomes between engineering faculties.
* **Financial Investment Breakdown:** Comparative 4-year tuition and living cost analysis across Regular, Full Fee, and Affiliated private institutions.

---

## 🛠️ Technology Stack & Architecture

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS with WCAG 2.2 AA accessibility compliance and reduced-motion preferences
- **Component Architecture:** Modular domain-driven design (`src/components/`, `src/data/`, `src/utils/`) with code-split lazy loading
- **Testing:** Vitest automated test suite for calculations and data boundaries
- **Linter:** Oxlint (0 warnings, 0 errors)
- **SEO & Metadata:** Schema.org JSON-LD structured data graph, canonical URLs, XML sitemap, and `llms.txt`

---

## 📂 Repository Structure

```text
.
├── public/                 # Static assets (favicons, logos, sitemap.xml, robots.txt, llms.txt)
├── src/
│   ├── components/         # Modular feature components
│   │   ├── common/         # Reusable UI elements (InfoDisclaimer, StatusBadge)
│   │   ├── Header.jsx      # Accessible masthead with responsive navigation
│   │   ├── Footer.jsx      # Semantic footer with official links & disclaimers
│   │   ├── RankPredictor.jsx   # Core admission probability predictor
│   │   ├── CampusExplorer.jsx  # Constituent seat matrix explorer (2,040 seats)
│   │   ├── CBTCalculator.jsx   # 140-mark entrance calculator with 10% penalty
│   │   └── ...             # Feature modules (PriorityGenerator, Checklist, etc.)
│   ├── data/               # Verified admission matrices, notices, checklist data
│   ├── utils/              # Calculation helpers & formatting utilities
│   ├── App.jsx             # Shell container with accessible tab navigation & Suspense
│   ├── main.jsx            # Application bootstrap
│   └── index.css           # Global Tailwind CSS styles
├── index.html              # Valid semantic HTML5 shell with OpenGraph & JSON-LD
└── package.json            # Scripts and dependencies
```

---

## 💻 Local Development & Verification

### Prerequisites
- Node.js (recommended: Node 20 LTS or later)
- npm (comes with Node.js)

### Setup & Commands
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run automated unit test suite
npm run test

# Run linter
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ⚖️ Official Source & Provenance Disclaimer

IOE Admission Hub is an independent educational toolkit developed to assist engineering applicants in Nepal. It is **not officially operated, affiliated with, or endorsed** by Tribhuvan University (TU) or the Institute of Engineering (IOE). All official admissions, cutoff ranks, and seat allocations are governed exclusively by the IOE Entrance Examination Board ([entrance.ioe.edu.np](https://entrance.ioe.edu.np/)) and Central Admission Committee ([admission.ioe.edu.np](https://admission.ioe.edu.np/)).

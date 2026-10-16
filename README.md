# IOE Admission Hub & IOE Predictor

[![Website](https://img.shields.io/badge/Live%20Website-ioe--admission.dipeshsapkota7.com.np-blue?style=flat-square&logo=google-chrome)](https://ioe-admission.dipeshsapkota7.com.np/)
[![IOE Predictor](https://img.shields.io/badge/Tool-IOE%20Predictor-emerald?style=flat-square)](https://ioe-admission.dipeshsapkota7.com.np/predictor/)
[![IOE Syllabus](https://img.shields.io/badge/Curriculum-IOE%20Syllabus-indigo?style=flat-square)](https://ioe-admission.dipeshsapkota7.com.np/syllabus/)
[![Creator](https://img.shields.io/badge/Creator-Dipesh%20Sapkota-black?style=flat-square&logo=github)](https://github.com/Dszae)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**[IOE Admission Hub](https://ioe-admission.dipeshsapkota7.com.np/)** is the central, open-access entrance examination guidance and rank prediction platform engineered for high-school graduates (+2 Science / A-Level / Diploma in Engineering) applying to the **Institute of Engineering (IOE), Tribhuvan University (TU)** in Nepal.

The platform provides data-driven tools including the **[IOE Predictor](https://ioe-admission.dipeshsapkota7.com.np/predictor/)**, official **[IOE Entrance Syllabus](https://ioe-admission.dipeshsapkota7.com.np/syllabus/)**, CBT negative-marking calculator, 2,040 constituent campus seat matrix, fee structures, and counseling priority sequence optimization.

---

## 🌐 Live URLs & Direct Sitelinks

| Resource / Tool | Direct Link | Description |
| :--- | :--- | :--- |
| **IOE Admission Hub (Home)** | [ioe-admission.dipeshsapkota7.com.np](https://ioe-admission.dipeshsapkota7.com.np/) | Central portal, admission intelligence, and campus overview |
| **IOE Predictor** | [ioe-admission.dipeshsapkota7.com.np/predictor/](https://ioe-admission.dipeshsapkota7.com.np/predictor/) | Dedicated rank forecasting engine based on verified closing cutoffs |
| **IOE Entrance Syllabus** | [ioe-admission.dipeshsapkota7.com.np/syllabus/](https://ioe-admission.dipeshsapkota7.com.np/syllabus/) | Official 140-mark chapter breakdown (Math, Physics, Chemistry, English) |
| **CBT Marks Calculator** | [ioe-admission.dipeshsapkota7.com.np/calculator/](https://ioe-admission.dipeshsapkota7.com.np/calculator/) | CBT score calculator with exact 10% negative marking penalty rules |
| **Score-to-Rank Estimator** | [ioe-admission.dipeshsapkota7.com.np/estimator/](https://ioe-admission.dipeshsapkota7.com.np/estimator/) | Maps CBT entrance raw scores to historical merit-rank percentiles |
| **Constituent Campuses & Seats** | [ioe-admission.dipeshsapkota7.com.np/campuses/](https://ioe-admission.dipeshsapkota7.com.np/campuses/) | Pulchowk, Thapathali, WRC, ERC, and Chitwan (2,040 seat matrix) |
| **Priority Form Optimizer** | [ioe-admission.dipeshsapkota7.com.np/priority/](https://ioe-admission.dipeshsapkota7.com.np/priority/) | Algorithmic Reach, Target, and Safety counseling preferences |
| **IOE Fee Structure** | [ioe-admission.dipeshsapkota7.com.np/financials/](https://ioe-admission.dipeshsapkota7.com.np/financials/) | 4-year tuition breakdown across Regular vs Full Fee schemes |
| **Counseling Handbook** | [ioe-admission.dipeshsapkota7.com.np/guide/](https://ioe-admission.dipeshsapkota7.com.np/guide/) | Merit lists, auto-upgrade rules, physical document verification |
| **Creator Profile** | [ioe-admission.dipeshsapkota7.com.np/profile/](https://ioe-admission.dipeshsapkota7.com.np/profile/) | Developer background, engineering tools, and personal portfolio |

---

## 🚀 Key Features

### 1. Entrance Rank & Cutoff Intelligence
- **[IOE Predictor](https://ioe-admission.dipeshsapkota7.com.np/predictor/)**: Evaluate historical admission probabilities across constituent campuses (Pulchowk Campus, Thapathali Campus, Pashchimanchal Campus - WRC, Purwanchal Campus - ERC, and Chitwan Engineering Campus).
- **Quota & Fee Differentiation**: Supports Regular (subsidized) and Full Fee schemes across Open, Female, and affirmative action quotas.
- **Multi-Round Cutoff Benchmarks**: Toggle between Phase 1 first merit list cutoffs and estimated final round absorption cutoffs.

### 2. Official IOE Syllabus & Question Blueprint
- **140 Full Marks Curriculum**: Chapter-wise subject blueprint for:
  - **Mathematics (50 Marks, 36 Questions)**: Algebra, Trigonometry, Coordinate Geometry, Vectors, Calculus.
  - **Physics (45 Marks, 33 Questions)**: Mechanics, Heat & Thermodynamics, Optics, Waves, Electricity, Magnetism, Modern Physics.
  - **Chemistry (25 Marks, 17 Questions)**: Physical, Inorganic, and Organic Chemistry.
  - **English (20 Marks, 14 Questions)**: Grammar, Vocabulary, Syntax, and Reading Comprehension.
- **CBT Weightage**: Interactive view showing question distribution across 1-mark and 2-mark tiers.

### 3. CBT Scoring & Percentile Estimation
- **[IOE CBT Negative Marking Calculator](https://ioe-admission.dipeshsapkota7.com.np/calculator/)**: Instant net score calculation applying the official 10% negative marking penalty (-0.1 for 1-mark, -0.2 for 2-mark questions) and checking the mandatory 40% (56 marks) pass mark.
- **Score-to-Rank Curve**: Empirical distribution curve estimating merit rank brackets directly from raw mock CBT scores.

### 4. Campus Capacities & Counseling Optimization
- **2,040 Constituent Seat Matrix**: Complete breakdown of faculties across all 5 constituent engineering campuses.
- **TU-Affiliated Engineering Colleges Directory**: Comprehensive directory and fee comparisons for 10 TU-affiliated private engineering colleges.
- **Priority List Generator**: Builds structured Reach, Target, and Safety counseling preferences to prevent missed auto-upgrades.
- **Admission Checklist & Document Tracker**: Step-by-step interactive verification checklist with state saved in local browser storage.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation for 100/100 Core Web Vitals and instant TTFB)
- **UI Library**: [React 19](https://react.dev/) with TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with accessible high-contrast design
- **Testing**: [Vitest](https://vitest.dev/) for calculation formulas, probability curves, and negative marking verification
- **SEO & Search Indexing**:
  - Full Schema.org JSON-LD `@graph` (`WebSite`, `WebApplication`, `FAQPage`, `Course`, `BreadcrumbList`, `Person`)
  - Dedicated canonical URLs for all 14 tools and guides
  - Pre-rendered static HTML with non-blocking fonts and optimized WebP images
  - Machine-readable `/llms.txt` and `/llms-full.txt` for AI search crawlers

---

## 💻 Local Development

### Prerequisites
- Node.js 20 LTS or higher
- npm

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/Dszae/ioe-admission-guide.git

# Navigate into the project directory
cd ioe-admission-guide

# Install dependencies
npm install

# Start local development server
npm run dev

# Run Vitest test suites
npm run test

# Build production bundle with Astro static generator
npm run build

# Preview production build locally
npm run preview
```

---

## 👨‍💻 Creator & Author

**Dipesh Sapkota**  
Software Developer & Creator of [IOE Admission Hub](https://ioe-admission.dipeshsapkota7.com.np/) and [IOE Predictor](https://ioe-admission.dipeshsapkota7.com.np/predictor/).

- 🌐 **Personal Website**: [https://www.dipeshsapkota7.com.np/](https://www.dipeshsapkota7.com.np/)
- 🐙 **GitHub**: [@Dszae](https://github.com/Dszae)
- 💼 **LinkedIn**: [in/dipesh-sapkota](https://www.linkedin.com/in/dipesh-sapkota/)
- 📸 **Instagram**: [@dsz.ae](https://instagram.com/dsz.ae)

---

## ⚖️ Official Source & Provenance Disclaimer

**IOE Admission Hub** is an independent educational guidance platform conceived and maintained by Dipesh Sapkota. It is **not officially operated, affiliated with, or endorsed** by Tribhuvan University (TU) or the Institute of Engineering (IOE). All official admissions, cutoff ranks, examination schedules, and seat allocations are governed exclusively by the IOE Entrance Examination Board ([entrance.ioe.edu.np](https://entrance.ioe.edu.np/)) and Central Admission Committee ([admission.ioe.edu.np](https://admission.ioe.edu.np/)).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

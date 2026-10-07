# IOE Admission Hub

A web-based admission support tool for Institute of Engineering (IOE), Tribhuvan University applicants. The app helps students compare options, estimate admission chances, and prepare decisions during counseling.

## Live Demo

- **Production URL:** https://ioe-admission.dipeshsapkota7.com.np/

## Feature Overview

- IOE rank/cutoff predictor by campus, program, quota, and fee type
- Priority-form helper to generate ranked option groups from a target rank
- CBT negative-marking score calculator
- Raw-score to rank-range estimator
- Constituent and affiliated college comparison views
- Fee and living-cost comparison summaries
- Admission-process guidance and counseling notes

## Important Limitations & Disclaimer

This project provides **estimates and guidance**, not official admission decisions.

- Cutoffs, seat availability, and rankings can shift significantly each cycle and across admission phases.
- Score-to-rank and probability outputs are heuristic calculations based on historical patterns.
- Fee and private-college data are approximate and may change without notice.
- Always verify final decisions using official IOE/TU notices and campus publications.

## Technology Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS + PostCSS
- **Linting:** Oxlint
- **Package manager:** npm

## Repository Structure

```text
.
├─ src/
│  ├─ App.jsx            # Main UI, calculators, data tables, admission guidance
│  ├─ main.jsx           # App bootstrap
│  ├─ index.css          # Global styles
│  └─ App.css            # Component styles
├─ public/               # Static assets
├─ index.html            # SEO metadata + app entry HTML
├─ package.json          # Scripts and dependencies
└─ .github/workflows/    # GitHub Actions workflows
```

## Prerequisites

- Node.js (recommended: **20 LTS**)
- npm (comes with Node.js)

## Installation

```bash
npm ci
```

## Local Development

Start the development server:

```bash
npm run dev
```

Default Vite local URL is typically `http://localhost:5173`.

## Production Build & Preview

Build static assets:

```bash
npm run build
```

Check the source for lint issues:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This is a static Vite application and can be deployed to any static host (for example Vercel, Netlify, or GitHub Pages) using the `dist/` output from `npm run build`.

## Data & Configuration Notes

- Admission, cutoff, and fee reference data currently lives in application source (not an external API).
- No project-specific environment variables are defined in the current repository.
- Update data values carefully and document assumptions in pull requests.

## Contributing

Contributions are welcome. Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) before opening a pull request.

## Security

If you discover a security issue, please follow [`SECURITY.md`](./SECURITY.md).

## Support / Contact

- Open a repository issue for bugs or feature requests.
- Maintainer profile: https://github.com/Dszae

## License

A license file is not currently present in this repository.

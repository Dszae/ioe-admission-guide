# Astro migration report

## Architecture

The project now uses Astro 7 with the official React and sitemap integrations, TypeScript 6 strict checking, and static output for all public routes. Public headings, explanations, tables, navigation, titles, canonical URLs, and JSON-LD are rendered by Astro in the initial response. Interactive predictor, calculator, and admission tools are mounted in `App.tsx` React islands preserving the original visual UI and theme.

The migration branch is `migrate/astro-react-typescript`. The original Vite implementation remains recoverable from `main` and the existing git history.

## Route map

| Route | Astro output | Interactive layer |
| --- | --- | --- |
| `/` | Homepage, tool links, exam facts, author/disclaimer | New TypeScript React workspace |
| `/predictor/` | Historical predictor explanation and campus/program reference | Rank predictor |
| `/profile/` | Creator and independence disclosure | Static Astro page |
| `/campuses/` | Campus profiles and seat tables | Campus explorer |
| `/calculator/` | CBT rules and pass threshold | CBT calculator |
| `/estimator/` | Historical-estimate methodology | Score estimator |
| `/priority/` | Preference-planning explanation | Priority generator |
| `/guide/` | Admission and verification guidance | Admission guide |
| `/checklist/` | Nine-step roadmap | Student checklist |
| `/notices/` | Source-linked notice directory | Notice tracker |
| `/affiliated/` | College reference list | Affiliated colleges |
| `/compare/` | Discipline descriptions | Faculty comparison |
| `/financials/` | Cost reference table | Financial breakdown |

## Predictor preservation

The existing `src/utils/calculations.js` functions and their 14 regression/data-integrity tests were retained without changing thresholds, cutoff multipliers, probability labels, or CBT penalty rules. The predictor remains a historical heuristic: it does not guarantee admission and must be checked against current IOE notices.

## Data-source policy

The current datasets identify IOE/Tribhuvan University portals and the `2082 BS` reference cycle in `src/data/admissionData.js` and `src/data/noticesData.js`. Historical cutoffs, seat data, fee values, and notice summaries are treated as reference data, not live claims. Values that are not re-verified for a new cycle must be updated with a source URL, responsible publisher, academic cycle, verification date, and status before publication.

Primary verification portals:

- https://entrance.ioe.edu.np/
- https://admission.ioe.edu.np/
- https://www.ioe.tu.edu.np/notices

## Validation

- `npm test`: 14 predictor/data regression tests pass.
- `npm run build`: Astro typecheck and static generation pass; 13 HTML routes are emitted.
- `npm run audit`: checks route HTML, unique metadata, local assets, robots policies, and sitemap output.
- `npm run lint`: should be run as part of CI; existing JSX lint debt is outside this migration slice.

## Follow-up

The historical JavaScript data and calculation modules remain as data-compatible modules behind the typed workspace boundary; a future cycle can convert those modules to `.ts` without changing their contracts. Every historical value should also be re-verified against the latest official documents before changing the academic-year label.

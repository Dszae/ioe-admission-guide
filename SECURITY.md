# Security and privacy notes

- No authentication, tracking, personal-data collection, or server API was introduced.
- Predictor and checklist state remain browser-local; no submitted form values are sent to a server.
- The Astro build is static and does not expose server credentials.
- Vercel headers retain `nosniff` and strict referrer policy. Hashed build assets are cacheable; admission content should not be given an indefinite cache policy.
- External official links use HTTPS. React external links use `noopener noreferrer` where opened in a new tab.
- `npm install` currently reports seven dependency audit findings in the existing dependency graph. Review with `npm audit` before deployment; do not apply a breaking automatic fix without testing.

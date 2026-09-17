# Clairity Bio

Static consulting website, published by GitHub Pages from the root of `main` at https://clairitybio.com. No build step or third-party runtime dependencies.

## Local preview

Run `python3 -m http.server 8765` and open http://localhost:8765.

## Content and contact

- `index.html`: positioning, experience, offers, and contact details.
- `styles.css`: responsive design and accessibility styles.
- `script.js`: email draft and clipboard fallback. No form backend; visitors must send the draft from their email app. Nothing entered is stored or sent to a server by this site.
- `CNAME`: existing production domain; preserve it.

Experience claims are based on Aaron's supplied resume and his description of Comanche consulting. Net Purpose metrics are explicitly attributed to a prior role, not to a biotech engagement. The literature-triage framework is illustrative. The approved testimonial uses an excerpt from Allison August’s feedback, with an ellipsis marking omitted text and “[you]” marking an editorial clarification. Aaron confirmed Allison approved the exact wording and attribution for publication.

## Conversion readiness rubric

Independent review uses these fixed criteria, each item worth 5 points:

| Category | Criteria | Points |
| --- | --- | ---: |
| Positioning | First-screen buyer/category; concrete problem; defensible value | 15 |
| Offer clarity | Problem-linked services; tangible deliverables; understandable process; bounded starting scope | 20 |
| Trust | Named consultant and sourced background; inspectable expertise example; no invented proof | 15 |
| Conversion | Prominent repeated CTA; real contact; low-friction inquiry and fallback; expectations and fit | 20 |
| UX | Coherent visual hierarchy; responsive layouts; working navigation and controls | 15 |
| Accessibility | Semantic structure, labels and focus; AA text contrast and usable targets | 10 |
| Delivery | Metadata, clean runtime, working assets, lightweight delivery, known deployment target | 5 |

A full score means these readiness criteria are met, not that real-world conversion is maximized. Qualified inquiries and signed engagements are the meaningful business outcomes.

## Useful next improvements

A real scheduling URL or form backend can reduce dependence on visitors' email apps. Evaluate actual inquiry quality before changing positioning; this version installs no analytics or tracking.

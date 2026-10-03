# Nagaraj Kalburgi — Portfolio
React + Vite + Tailwind + Framer Motion + Lenis + Lucide.

    npm install
    npm run dev
    npm run build

All content is in `src/data/content.js`. Search the repo for `TODO` to find what to replace.

## Replace these placeholders
| What | Where |
|---|---|
| Email, GitHub, LinkedIn, Student ID | `src/data/content.js` (`site`) |
| Resume | `public/assets/resume.pdf` |
| Profile photo | `public/assets/profile.jpg` |
| Character (transparent WebM + PNG fallback) | `public/assets/character.webm`, `character.png` |
| Project screenshots | `public/assets/projects/{workpulse,waste,python-dsa,sih}.jpg` |
| Live demo URLs | `projects[].live` in `content.js` (button stays disabled while empty) |

Missing media never breaks the layout: video → PNG → placeholder; photos/screenshots fall back to styled placeholders.

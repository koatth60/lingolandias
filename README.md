# Lingolandias — Landing Page

Public-facing marketing website for Lingolandias, an online language school offering one-on-one classes in Spanish, English, and Polish. Live at [lingolandias.net](https://lingolandias.net).

---

## Overview

This is the main website for the Lingolandias school — showcasing courses, teachers, student reviews, and a built-in language proficiency quiz. Fully responsive and available in multiple languages.

---

## Features

- **Multi-language UI** — full i18n support via react-i18next (Spanish, English, Polish)
- **Language proficiency quiz** — interactive test to assess student level before enrolling
- **Course showcase** — display of available language courses and levels
- **Teacher profiles** — meet the teaching team
- **Student reviews** — testimonials section
- **Contact form** — direct inquiry form for prospective students
- **Fully responsive** — optimized for mobile, tablet and desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS + Material Tailwind |
| Internationalization | i18next + react-i18next |
| Icons | Font Awesome |
| Routing | React Router DOM |
| Deployment | GitHub Pages |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/koatth60/lingolandias.git
cd lingolandias
npm install
npm run dev
```

### Deploy

```bash
npm run deploy
```

---

## Project Structure

```
src/
├── sections/         # Page sections (Hero, Courses, Team, Reviews, Contact...)
├── components/       # Reusable UI components
├── pages/            # Route-level pages
├── questions-test/   # Language proficiency quiz logic
├── contexts/         # React context providers
└── i18n.js           # Internationalization config
```

---

## Live Site

[lingolandias.net](https://lingolandias.net)

---

## Related

- [lingolandias-front](https://github.com/koatth60/lingolandias-front) — Student/teacher platform (React + NestJS)
- [lingolandias-back](https://github.com/koatth60/lingolandias-back) — Platform API

---

## License

MIT

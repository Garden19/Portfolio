# Edan Read | Portfolio

A personal portfolio showcasing my professional experience, development projects and technical skills. Built with **React**, **TypeScript**, **Vite** and **Tailwind CSS**, with an emphasis on responsive design, accessibility and clear presentation.

**[View the live portfolio](https://portfolio-bxl.pages.dev/)** · **[Explore the source code](https://github.com/Garden19/Portfolio)**

## About the project

I built this portfolio to bring my work and experience together in one place. Alongside highlighting projects, I wanted to use it as an opportunity to develop my React and TypeScript skills, experiment with scroll-based interactions, and learn more about accessibility, performance and technical SEO.

The site is an ongoing personal project, so I continue to refine its design and functionality as I learn.

## Features

- **Responsive layout:** Designed to work across desktop, tablet and mobile screens.
- **Interactive introduction:** An illustrated mascot with eyes that follow the cursor.
- **Experience timeline:** Role summaries and dedicated detail pages covering responsibilities and achievements.
- **Project case studies:** Filterable projects with problem statements, solutions, challenges and screenshots.
- **Scroll-driven animation:** A projects showcase that transitions as the user scrolls, built with Motion for React.
- **Accessibility options:** High-contrast mode and an alternative font option, with preferences stored in the browser's `localStorage`.
- **Contact form:** Form.taxi integration and a confirmation page.
- **Page metadata and discovery:** Page-specific titles and descriptions, alongside `robots.txt`, `sitemap.xml` and `llms.txt`.

## Featured projects

The portfolio includes commercial websites, development projects and automation work.

| Project | Focus | Case study |
| --- | --- | --- |
| Northern Spectre Airsoft | Commercial website built with Angular, TypeScript, Node.js and Express | [View project](https://portfolio-bxl.pages.dev/project/1) |
| Just B You By J | Responsive makeup artistry website built with Angular, TypeScript and DaisyUI | [View project](https://portfolio-bxl.pages.dev/project/2) |
| Ohm's Law Calculator | Full-stack Angular and ASP.NET Core Web API project | [View project](https://portfolio-bxl.pages.dev/project/3) |
| Cruise Admin Dashboard | Angular application using RxJS, reactive forms and API integration | [View project](https://portfolio-bxl.pages.dev/project/4) |
| Weather Disruption Monitor | Automation workflow using Make.com, Airtable and a weather API | [View project](https://portfolio-bxl.pages.dev/project/5) |

The technologies in this table describe the **individual showcased projects**; the portfolio website itself uses the stack below.

## Technology stack

| Technology | How it's used |
| --- | --- |
| [React 19](https://react.dev/) | Component-based user interface |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe components and structured project data |
| [Vite](https://vite.dev/) | Local development and production builds |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling, responsive layouts and design tokens |
| [React Router](https://reactrouter.com/) | Navigation and dynamic project/experience routes |
| [Motion for React](https://motion.dev/) | Scroll-linked animations |
| [Form.taxi](https://form.taxi/) | Contact-form submissions |
| [Cloudflare Pages](https://pages.cloudflare.com/) | Hosting and deployment |

The repository also includes **GSAP**, **Oxlint** and **Oxfmt** as dependencies or development tools.

## Getting started

You'll need **Node.js** and **npm** installed.

1. Clone the repository and open the frontend directory:

   ```bash
   git clone https://github.com/Garden19/Portfolio.git
   cd Portfolio/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

   Open the localhost URL shown by Vite (normally `http://localhost:5173/`).

### Production build and checks

```bash
npm run build    # Generate production files in frontend/dist
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

Vite Preview normally serves the local build at `http://localhost:4173/`.

## Project structure

```text
Portfolio/
├── frontend/
│   ├── public/                   # Fonts, crawler and discovery files
│   ├── src/
│   │   ├── assets/images/        # Mascot and project images
│   │   ├── components/           # Shared UI and page sections
│   │   ├── data/                 # Project and experience content
│   │   │   ├── experienceData.ts
│   │   │   └── projectData.ts
│   │   ├── types/                # TypeScript types
│   │   ├── App.tsx               # Routes and page composition
│   │   └── index.css            # Theme variables, fonts and styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

This is a simplified overview, not a complete file listing.

### Routing

| Route | Purpose |
| --- | --- |
| `/` | Homepage, including Experience, Projects, Skills and Contact sections |
| `/experience/:id` | Individual experience details |
| `/project/:id` | Individual project case studies |
| `/thank-you` | Contact-form confirmation |

The homepage also uses URL fragments such as `/#experience`, `/#projects-list`, `/#skills` and `/#contact` for section navigation.

## Accessibility and SEO

Accessibility is built into the interface through responsive layouts, visible keyboard focus styles, labelled form controls and user-selectable display settings. High-contrast and alternative font preferences are saved locally so they can be restored on return visits.

For search-engine and crawler discovery, the project includes descriptive page metadata, a `robots.txt` file, an XML sitemap and an experimental `llms.txt` guide. These files help describe and expose the site; they do not guarantee search-engine indexing or AI-agent adoption.

## Lighthouse testing

I used Lighthouse to establish a baseline, make improvements and compare results on a **local production preview** of the homepage (`http://localhost:4173/`).

| Category | 13 Nov 2026 Mobile | 15 Nov 2026 Mobile | 13 Nov 2026 Desktop | 15 Nov 2026 Desktop |
| --- | ---: | ---: | ---: | ---: |
| Performance | 94 | 89 | 98 | 99 |
| Accessibility | 100 | 100 | 100 | 100 |
| Best Practices | 100 | 100 | 100 | 100 |
| SEO | 75 | 100 | 75 | 100 |

The experimental **Agentic Browsing** audit reported 2 passed checks initially and 3 afterward. These are check counts, not scores out of 100.

The SEO audit improved following metadata and crawler-file changes. Mobile performance fell by five points in the subsequent run, so repeat testing is needed before treating that as a confirmed regression. Lighthouse scores are diagnostic results, not guarantees about real-world performance, accessibility or search rankings.

## Deployment

The site is hosted on **Cloudflare Pages**. For a build configured from this repository, the frontend lives in `frontend/`:

- **Root directory:** `frontend`
- **Build command:** `npm run build`
- **Build output directory:** `dist`

The generated site is available at **https://portfolio-bxl.pages.dev/**.

## Further improvements

- Investigate and improve mobile performance, with repeat Lighthouse measurements.
- Expand automated browser testing across common browsers and screen sizes.
- Improve sitemap coverage for individual project and experience pages.
- Review whether prerendering would help make client-side page content easier for crawlers to access.
- Continue refining accessibility and responsive behaviour.

## Contact

Have a project, opportunity or question? You can reach me through the [contact section of my portfolio](https://portfolio-bxl.pages.dev/#contact).

---

Built and maintained by **Edan Read**.

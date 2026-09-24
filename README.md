# Muhammad Asif portfolio

React 18, TypeScript, Vite, Tailwind CSS 3, React Router 6 and lucide-react icons. The charts and diagrams are hand-built SVG, so the site has no charting or animation library.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/ (adds 404.html and sitemap.xml)
npm run preview
```

## Deploy to GitHub Pages (net2asif.github.io)

1. Run `npm run build`.
2. Publish the **contents** of `dist/` to the `net2asif.github.io` repository (the root of the default branch), or use a GitHub Actions Pages workflow that uploads `dist/`.
3. `dist/404.html` is a copy of `index.html`. It lets deep links such as `/projects/enterprise-data-warehouse` work on GitHub Pages.

If you host somewhere without SPA fallback, run `npm run build:hash` instead. It builds with hash URLs (`/#/projects`) and relative paths.

## Editing content

All content lives in `src/data/`. You do not need to touch components to update it.

| File | What it holds |
|---|---|
| `profile.ts` | Name, headline, contact details, social links, snapshot stats, education |
| `experience.ts` | Roles, responsibilities, impact, problem-to-result chains, career evolution |
| `projects.ts` | Projects, filters and case-study sections |
| `skills.ts` | Capability domains, skill evidence map, tool groups, proof of work |
| `content.ts` | Certifications, values, architecture layers, MIS/BA flows, AI lab, roadmap, insights |

Every skill, project and roadmap item has an evidence label (`professional`, `project`, `working`, `developing`, `learning`, `prototype`, `planned`, `concept`, `in-progress`). Update the label as work progresses.

### Placeholders to fill in

- `projects.ts`: add `repo` URLs for the three featured projects and the SQL and Excel projects. The site shows "Repo link to be added" until you do.
- `content.ts`: add `credentialUrl` to each certification. Until then each card links to your LinkedIn certifications page.
- `profile.ts`: `education.year` and `education.coursework` are empty on purpose because the CV doesn't list them.
- `profile.ts`: set `contact.formEndpoint` (for example a Formspree URL) if you want the contact form to send messages directly. Without it, the form opens the visitor's email app with the message filled in.
- `content.ts`: `insights` is empty, so the Insights page shows "Coming soon". Add articles there when you publish them.

## Content accuracy notes (checked September 2026)

The CV is the source of truth. Where other sources disagreed, the site follows the CV:

| Item | Old portfolio / GitHub | Site uses |
|---|---|---|
| Years of experience | 3+ (portfolio), 5 (GitHub bio) | 4+ (CV) |
| Phone | +92 311 7397676 | +966 53 611 3905 (CV) |
| Certifications | 2 | 5 (CV) |
| Degree dates | 2020–2024 | Not shown. This overlaps with IR Solutions (Jul 2022), so confirm before adding |
| ML/LLM tools (PyTorch, LangChain, OpenAI, Groq, HuggingFace) | Listed as skills | Not listed. The CV only supports "ML, NLP, LLMs, MLOps" through the Atomcamp bootcamp, shown as Learning |
| "Data Wizard" headline | Portfolio hero | Removed |
| Airbnb project | CV: "insights adopted into strategic pricing and expansion decisions" | Shown only as a project finding (4 cities = 67% of market share in the dataset) |

Other notes:

- GitHub shows 20 repositories, but only 6 were publicly listed when this was checked: Muhammad-Asif, Hotel_projects, Customer_RFM_analysis, Northwind_Traders_KPIs, Northwind_Traders_KPIs_Reports and word_cloud_app. Project descriptions only mention files that were verified in those repositories.
- Customer_RFM_analysis is written in R. R appears on the site as project-level only.
- The CV doesn't name any tools for the Hama Istifaa role, so the site doesn't list any.
- Every dashboard, MIS table, hero pipeline and data story on the site uses labelled sample data.
- The roadmap statuses in `content.ts` (`buildingNext`, `nextGen`) are defaults. Set them to match what you are actually working on.

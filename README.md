# Project Arunima static prototype

This project uses HTML5, CSS3, Tailwind CSS CDN, Font Awesome, and vanilla JavaScript. It preserves the supplied homepage and provides one direct HTML entry point for each major section and subsection. Shared navigation and footer are in `header.html` and `footer.html`; page rendering and interactions are in `js/main.js`.

The page list is in [SITEMAP.md](SITEMAP.md).

## Run locally

Because the shared header and footer load with `fetch`, serve the folder over HTTP instead of opening an HTML file directly. With Python installed:

```powershell
python -m http.server 8000
```

Then open http://localhost:8000/. No build step or backend is required.

## Deploy to Vercel

Import the repository into Vercel and use its static deployment defaults. Keep the root HTML files, `header.html`, `footer.html`, `css/`, `js/`, and `assets/` in the project root. Every page can be opened directly by its `.html` path.

## Prototype notes

Forms validate in the browser and show demonstration feedback. They do not submit to or store data on a backend. Mail and WhatsApp links open a prepared draft only after a visitor chooses that action. No payment is taken. Current donation methods, admissions availability, vacancies, and official policies should be confirmed with Project Arunima.

The existing photographs and brand assets are referenced from the image URLs in the supplied homepage. The annual report and policy manual link to documents listed on Project Arunima's official site; verify current versions with the organization.

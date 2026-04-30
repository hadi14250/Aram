# Aram Group

Corporate website for **Aram Group**, a diversified business group founded in 2006 by Eng. Mohamad Alhalouch. The site presents the group's services across construction, trading, building contracting, and agricultural services, along with company history, vision, projects portfolio, and contact information.

## Business Divisions

- **Aram Construction** — Civil & structural construction, repairs, maintenance, and renovations.
- **Aram Golden Line General Trading** — Quality products and tailored solutions across diverse industries.
- **Golden Aram Building Contracting** — Construction, renovation, and maintenance project management.
- **Aram Golden Line Agricultural Services** — Support and innovative solutions for farming and agribusiness.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router) with Turbopack
- React 19 + TypeScript
- Tailwind CSS 4
- Leaflet / React-Leaflet for the location map
- Swiper for the hero slider
- EmailJS for the contact form

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

- `npm run dev` — Start the development server (with Turbopack)
- `npm run build` — Create a production build
- `npm run start` — Run the production server
- `npm run lint` — Lint the project

## Project Structure

```
app/
  about/          About page
  business/       Business divisions
  Contact/        Contact form
  components/     Shared components (HeroSlider, Map, Footer, Partners, ...)
  projects/      Projects portfolio
  services/       Services pages
  summary/        Division summaries
  vision/         Vision & mission
public/
  assets/         Project images
  images/         Site imagery
```

## Deployment

The site can be deployed to any platform that supports Next.js, including [Vercel](https://vercel.com).

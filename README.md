# Portfolio 2 — Ekrem Gürsoy

A personal portfolio website built with React and TypeScript, showcasing three frontend development projects from the Noroff Front-End Development programme.

## Description

This portfolio is a multi-page single-page application (SPA) built as a course assignment for Portfolio 2. It features a home page with teaser cards for each project and dedicated article pages with full project details, live links, and repository links.

### Featured Projects

| Project | Description | Live Site | Repository |
| --- | --- | --- | --- |
| **CSS Frameworks** | A social media app built with Bootstrap and Sass | [Live](https://css-frameworks-sable.vercel.app/) | [Repo](https://github.com/EkremGursoy/css-frameworks) |
| **Auction House** | A full-featured auction platform with bidding and credits | [Live](https://semester-project-2-auctionhouse.vercel.app/) | [Repo](https://github.com/EkremGursoy/semester-project-2-auctionhouse) |
| **Eeveelutions Shop** | An e-commerce store built with React and TypeScript | [Live](https://eeveelutionsshop.netlify.app/) | [Repo](https://github.com/NoroffFEU/jsfw-2025-v1-eeveelutions-supreme-jsfw) |

## Built With

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5.9
- [React Router](https://reactrouter.com/) v7
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Vite](https://vite.dev/) 7

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/EkremGursoy/portfolio-2.git
```

2. Navigate to the project folder:

```bash
cd portfolio-2
```

3. Install dependencies:

```bash
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`.

### Building for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready for deployment.

## Project Structure

```
├── public/
│   └── assets/              # Project screenshots
├── src/
│   ├── assets/
│   │   ├── icons/           # SVG icons (envelope, github, linkedin, link)
│   │   └── images/          # Profile photo
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Tag.tsx
│   ├── data/
│   │   └── projects.ts      # Project data
│   ├── pages/
│   │   ├── HomePage.tsx      # Home page with hero + teaser cards
│   │   └── ProjectPage.tsx   # Individual project article page
│   ├── App.tsx
│   ├── index.css             # Tailwind config + theme tokens
│   ├── main.tsx              # Entry point with BrowserRouter
│   └── routes.tsx            # Route definitions
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Contact

- **Email:** [e.ogulcan.gursoy@gmail.com](mailto:e.ogulcan.gursoy@gmail.com)
- **LinkedIn:** [linkedin.com/in/ekremgursoy](https://linkedin.com/in/ekremgursoy)
- **GitHub:** [github.com/EkremGursoy](https://github.com/EkremGursoy)

## License

This project is for educational purposes as part of the Noroff Front-End Development programme.

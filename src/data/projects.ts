export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  image: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "css-frameworks",
    title: "CSS Frameworks",
    shortDescription:
      "A modern social media application built with JavaScript and Tailwind CSS, featuring login, registration, and a dynamic feed.",
    fullDescription: [
      "CSS Frameworks is a social media application I built to explore and learn modern CSS tooling — specifically Tailwind CSS. The project features a complete authentication flow with login and registration forms, styled entirely using Tailwind's utility-first approach.",
      "The app includes a feed page where users can view posts, search and filter content, a profile section with follow functionality, and responsive navigation. I used Tailwind CSS utility classes to handle the layout and UI, keeping the styling modular, consistent, and maintainable.",
      "This project was a great exercise in learning how to leverage a utility-first CSS framework effectively — understanding when to use utility classes versus custom styles, and how to structure a clean, scalable front-end codebase with Vite as the build tool.",
    ],
    image: "/assets/css-frameworks.png",
    tags: ["HTML", "JavaScript", "Tailwind CSS"],
    repoUrl: "https://github.com/EkremGursoy/css-frameworks",
    liveUrl: "https://css-frameworks-sable.vercel.app/",
  },
  {
    id: "auction-house",
    title: "Auction House",
    shortDescription:
      "A full-featured auction platform where users can create listings, place bids, and manage their credits.",
    fullDescription: [
      "Auction House is a semester project where I built a complete auction platform from scratch. Users can register, log in, create auction listings with images and descriptions, and place bids on other users' items. The platform includes a credit system — new users receive starter credits that they can use to bid on items.",
      "The front end communicates with the Noroff Auction API using token-based authentication. I implemented search and filtering functionality, tag-based categorisation, and a toggle to show only active listings. Each listing displays a countdown timer, bid history, and the current highest bid. The UI is built with Tailwind CSS for a clean, responsive design.",
      "This was my most complex JavaScript project to date — it required managing multiple API endpoints, handling authentication state, building dynamic UI components with Vite and vanilla ES Modules, and creating a smooth user experience across listing creation, bidding, and profile management.",
    ],
    image: "/assets/auction-house.png",
    tags: ["JavaScript", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/EkremGursoy/semester-project-2-auctionhouse",
    liveUrl: "https://semester-project-2-auctionhouse.vercel.app/",
  },
  {
    id: "eeveelutions-shop",
    title: "Eeveelutions Shop",
    shortDescription:
      "An e-commerce store built with React and TypeScript, featuring product search, sorting, and a full cart experience.",
    fullDescription: [
      "Eeveelutions Shop is an e-commerce application built as a group project using React, TypeScript, and a modern JavaScript framework workflow. The store lets users browse products, search and sort by name or price, view detailed product pages, and manage a shopping cart with real-time totals.",
      "The app features a clean component architecture with React Router for navigation, a global cart managed through React state, and a responsive layout that works well on mobile and desktop. The product data is fetched from an external API and displayed in a dynamic grid with discount badges and ratings.",
      "Working on this project as a team taught me how to collaborate using Git branches, code reviews, and task planning. It was my first experience building a full React application with TypeScript, and it solidified my understanding of component-based architecture, props, state management, and modern front-end tooling.",
    ],
    image: "/assets/eeveelutions-shop.png",
    tags: ["React", "TypeScript", "Vite"],
    repoUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-eeveelutions-supreme-jsfw",
    liveUrl: "https://eeveelutionsshop.netlify.app/",
  },
];

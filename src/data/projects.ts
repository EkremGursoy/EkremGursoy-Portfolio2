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
      "A social media app with login, post feed with search and filtering, and a profile page with follow functionality.",
    fullDescription: [
      "CSS Frameworks is a multi-page social media application I built to learn and apply a utility-first CSS framework. The app is styled entirely with Tailwind CSS and powered by vanilla JavaScript with Vite as the build tool.",
      "The login page features email and password validation with a clean, accessible form layout. Once logged in, users land on the feed page where they can browse posts from multiple users, search and filter content by title, author, or keywords, and create new posts with a title, body text, and image — all without reloading the page.",
      "The profile page displays user information such as bio and follower statistics, lists the user's own posts with a dedicated search bar, and includes a follow/unfollow button that dynamically updates the follower count. The entire app uses a responsive grid layout that adapts smoothly from mobile to desktop.",
    ],
    image: "/assets/css-frameworks.webp",
    tags: ["HTML", "JavaScript", "Tailwind CSS"],
    repoUrl: "https://github.com/EkremGursoy/css-frameworks",
    liveUrl: "https://css-frameworks-sable.vercel.app/",
  },
  {
    id: "auction-house",
    title: "Auction House",
    shortDescription:
      "An auction platform consuming the Noroff API v2, with listing search, bidding, credit management, and user dashboards.",
    fullDescription: [
      "Auction House is my semester project — a multi-page auction platform built with vanilla JavaScript (ES Modules), Vite, and Tailwind CSS, consuming the Noroff API v2 Auction House endpoints. Users restricted to @stud.noroff.no emails can register, log in, and receive starter credits to start bidding.",
      "The home page lets anyone browse, search by keyword, filter by tags, toggle active-only listings, and scroll through results. Each listing detail page shows the full image gallery, bid history (newest first), the current highest bid, seller information, a countdown timer, and a bid form for authenticated users. Logged-in users can also create, edit, and delete their own listings, including uploading multi-image media galleries.",
      "The user dashboard displays the user's own listings, placed bids with resolved listing data, wins, and a profile editor for avatar, banner, and bio. Credits are always visible in the navbar. The app features persistent token-based authentication, mobile-responsive navigation with a hamburger menu, and clean directory-based routing deployed on Vercel.",
    ],
    image: "/assets/auction-house.webp",
    tags: ["JavaScript", "Tailwind CSS", "Noroff API"],
    repoUrl: "https://github.com/EkremGursoy/semester-project-2-auctionhouse",
    liveUrl: "https://semester-project-2-auctionhouse.vercel.app/",
  },
  {
    id: "eeveelutions-shop",
    title: "Eeveelutions Shop",
    shortDescription:
      "A React + TypeScript e-commerce store with product search, sorting, discount badges, ratings, and a shopping cart.",
    fullDescription: [
      "Eeveelutions Shop is an e-commerce application built as a group project with two teammates (Ailin and Thea) using React, TypeScript, and Vite. The store fetches product data from an external API and displays it in a dynamic, responsive grid where each product card shows its image, name, rating, price, and a discount badge when applicable.",
      "Users can search products by name, sort by name (A–Z) or price (low-to-high / high-to-low), and click into individual product detail pages. The shopping cart is managed through React state, allowing users to add products, update quantities, see real-time totals, and proceed to checkout — all with instant UI feedback.",
      "The app uses React Router for client-side navigation between the home page, individual product pages, a contact page, and the cart. This was my first full React + TypeScript project, and working as a team taught me Git branching, code reviews, component-based architecture, typed props and state, and modern front-end tooling.",
    ],
    image: "/assets/eeveelutions-shop.webp",
    tags: ["React", "TypeScript", "Vite"],
    repoUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-eeveelutions-supreme-jsfw",
    liveUrl: "https://eeveelutionsshop.netlify.app/",
  },
];

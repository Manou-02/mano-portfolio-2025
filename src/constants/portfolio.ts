import { IMAGE_CONSTANT } from "./image";

export const portfolioData = {
  personal: {
    name: "John Developer",
    title: "Full-Stack Developer",
    // profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    profileImage:  IMAGE_CONSTANT.profil,
    stats: {
      projects: "50+",
      years: "5+",
      commits: "100+"
    }
  },
  skills: {
    frontend: ["React", "TypeScript", "Vue.js", "TailwindCSS", "Next.js", "Vite"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
    tools: ["Git", "Docker", "AWS", "Figma", "Jest", "Cypress"]
  },
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      descriptionFr: "Solution e-commerce complète avec React, Node.js et intégration Stripe",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team collaboration",
      descriptionFr: "Gestion collaborative des tâches avec mises à jour en temps réel et collaboration d'équipe",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Firebase", "Tailwind", "PWA"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecasts, maps, and location-based alerts",
      descriptionFr: "Belle application météo avec prévisions, cartes et alertes basées sur la localisation",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "TypeScript", "Chart.js", "API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics platform with real-time data visualization",
      descriptionFr: "Plateforme d'analyse complète avec visualisation de données en temps réel",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "D3.js", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-first fitness app with workout tracking and progress analytics",
      descriptionFr: "Application fitness mobile avec suivi d'entraînement et analyses de progression",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Expo", "SQLite", "Health Kit"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Modern blogging platform with CMS, SEO optimization, and community features",
      descriptionFr: "Plateforme de blog moderne avec CMS, optimisation SEO et fonctionnalités communautaires",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ],
  contact: {
    email: "john.developer@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      dribbble: "https://dribbble.com"
    }
  }
};

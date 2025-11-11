import { IMAGE_CONSTANT } from "./image";

export const portfolioData = {
  siteName: "Mano Developer",
  personal: {
    name: "Mano Developer",
    title: "Full-Stack Developer",
    // profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    profileImage: IMAGE_CONSTANT.profil,
    stats: {
      projects: "10+",
      years: "3+",
      commits: "100+",
    },
  },
  skills: {
    frontend: [
      "React",
      "TypeScript",
      "Vue.js",
      "TailwindCSS",
      "Next.js",
      "Vite",
    ],
    backend: [
      "Node.js",
      "Php",
      "Express",
      "MySQL",
      "MongoDB",
      "GraphQL",
      "REST APIs",
    ],
    tools: [
      "Git",
      "Docker",
      // "AWS",
      "Figma",
      "Jest",
      "Cypress",
    ],
  },
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      descriptionFr:
        "Solution e-commerce complète avec React, Node.js et intégration Stripe",
      image: IMAGE_CONSTANT.project_1,
      technologies: [
        "React",
        "Redux",
        "TailwindCSS",
        "Node.js",
        "MongoDB",
        "Stripe",
      ],
      // liveUrl: "#",
      githubUrl: "https://github.com/Manou-02/front-e-commerce",
    },
    // {
    //   id: 2,
    //   title: "Task Management App",
    //   description:
    //     "Collaborative task management with real-time updates and team collaboration",
    //   descriptionFr:
    //     "Gestion collaborative des tâches avec mises à jour en temps réel et collaboration d'équipe",
    //   image:
    //     "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   technologies: ["Vue.js", "Firebase", "Tailwind", "PWA"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description:
    //     "Beautiful weather app with forecasts, maps, and location-based alerts",
    //   descriptionFr:
    //     "Belle application météo avec prévisions, cartes et alertes basées sur la localisation",
    //   image:
    //     "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   technologies: ["React", "TypeScript", "Chart.js", "API"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
  ],
  contact: {
    email: "mrakotoarivelo97@gmail.com",
    phone: "+261 34 18 096 80",
    location: "Antananarivo, Madagascar",
    illustration: IMAGE_CONSTANT.work,
    social: {
      github: "https://github.com/Manou-02",
      linkedin: "https://www.linkedin.com/in/mano-rakotoarivelo-003685195/",
      // twitter: "https://twitter.com",
      // dribbble: "https://dribbble.com",
    },
  },
};

// Personal Information
export const personalInfo = {
  name: 'Cosmin',
  fullName: 'Oprea Cosmin Alexandru',
  title: 'Software Designer / Engineer',
  location: 'Bucharest, Romania',
  email: 'opreacosmin2000@gmail.com',
  resumeFileName: 'CV-Oprea_Cosmin_Alexandru.pdf',
  githubUsername: 'opreacosmin',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/opreacosminalexandru/',
    github: 'https://github.com/opreacosmin',
  },
} as const;

// Navigation Items
export const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;

// Education Data
export interface Education {
  institution: string;
  faculty: string;
  degree: string;
  period: string;
  location: string;
}

export const educationData: Education[] = [
  {
    institution: 'Universitatea Babeș-Bolyai',
    faculty: 'Facultatea de Matematică și Informatică',
    degree: 'LICENȚĂ ÎN INFORMATICĂ',
    period: '2020 - 2023',
    location: 'Cluj-Napoca',
  },
];

// Experience Data
export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description?: string;
}

export const experienceData: Experience[] = [
  {
    title: 'Dezvoltator WordPress',
    company: 'MySkin SRL',
    period: '08.2024 - Prezent',
    location: 'București',
    description:
      'Dezvoltarea și întreținerea site-urilor WordPress, implementarea de teme și plugin-uri personalizate, optimizarea performanței și SEO a site-urilor.',
  },
  {
    title: 'Inginer Software (Intern)',
    company: 'Raiffeisen Bank | Think Tank Lab',
    period: '12.2023 - 03.2024',
    location: 'Cluj-Napoca',
    description:
      'Lucrul la soluții bancare inovatoare, colaborarea cu echipe multifuncționale și contribuția la dezvoltarea instrumentelor interne.',
  },
  {
    title: 'Dezvoltator Web Full-stack',
    company: 'Freelance',
    period: '07.2022 - 08.2024',
    location: 'Cluj-Napoca | București',
    description:
      'Oferirea de soluții web personalizate pentru diverse companii, de la afaceri mici la startup-uri. Specializare în React, Node.js și tehnologii web moderne.',
  },
];

// Skills Data with Tech Stack
export interface Skill {
  title: string;
  description: string;
  imageKey: 'frontend' | 'backend';
}

export const skillsData: Skill[] = [
  {
    title: 'Dezvoltare Back-end',
    description:
      'Fie că lucrez cu baze de date, structurarea API-urilor sau proiectarea modelelor de date, mă bucur de munca pe partea de server. Este responsabilitatea mea să mă asigur că fiecare proiect este scalabil, sigur și performant.',
    imageKey: 'backend',
  },
  {
    title: 'Dezvoltare Front-end',
    description:
      'Partea mea artistică îmi permite să creez designuri vizuale atractive pentru site-uri prietenoase cu utilizatorul. Uneltele mele preferate sunt Figma și React.js, dar sunt mereu curios în privința celor mai recente tendințe.',
    imageKey: 'frontend',
  },
];

// Tech Stack with Progress Bars
export interface TechSkill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  icon?: string;
}

export const techStackData: TechSkill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'HTML5 & CSS3', level: 95, category: 'frontend' },
  { name: 'SCSS/SASS', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'RESTful APIs', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 70, category: 'backend' },

  // Tools
  { name: 'Git & GitHub', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'AWS', level: 65, category: 'tools' },
  { name: 'Vite', level: 85, category: 'tools' },
  { name: 'Sanity CMS', level: 80, category: 'tools' },

  // Design
  { name: 'Figma', level: 80, category: 'design' },
  { name: 'UI/UX Design', level: 75, category: 'design' },
  { name: 'Responsive Design', level: 90, category: 'design' },
];

// Services Data
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  route: string;
}

export const servicesData: Service[] = [
  {
    id: 'website',
    title: 'Site de Prezentare',
    description: 'Promovează-ți afacerea online și atrage clienți noi cu un design modern.',
    image: 'website',
    route: '/presentation-website',
  },
  {
    id: 'online-store',
    title: 'Magazin Online',
    description: 'Vinde-ți produsele 24/7 cu o soluție e-commerce completă și securizată.',
    image: 'store',
    route: '/ecommerce-website',
  },
];

// Services Description
export const servicesDescription = {
  heading: 'Cum te pot ajuta?',
  content: `Ca dezvoltator web, mă concentrez pe crearea de site-uri unice, adaptate special nevoilor afacerii tale. Cred cu tărie că soluțiile generice sau șabloanele standard nu fac dreptate identității brandului tău. În schimb, ofer designuri personalizate la prețuri accesibile.

Website-ul tău este adesea prima impresie pe care clienții o au despre afacerea ta și sunt dedicat să mă asigur că aceasta lasă un impact pozitiv de durată.

Hai să colaborăm pentru a da viață ideilor tale și pentru a crea o prezență online remarcabilă pentru brandul tău.`,
};

// Header Greetings
export const headerGreetings = ['world !', 'clients !', 'everybody!', '!'] as const;

export const headerServices = ['site prezentare', 'magazin online', 'seo', 'mentenanta'] as const;

// Project Filter Categories
export const projectCategories = ['Website', 'Mobile App'] as const;

// Blog Posts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    excerpt:
      'Learn how to structure large-scale React applications using TypeScript best practices, custom hooks, and component architecture patterns.',
    content: `
## Introduction

Building scalable React applications requires careful planning and the right architecture. In this article, I'll share my approach to structuring large React projects using TypeScript.

## Key Principles

1. **Component Architecture**: Break down your UI into reusable components
2. **Type Safety**: Leverage TypeScript for better developer experience
3. **State Management**: Choose the right state management solution
4. **Performance**: Optimize rendering and bundle size

## Conclusion

Following these principles will help you build maintainable and scalable React applications.
    `,
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['React', 'TypeScript', 'Architecture'],
    slug: 'scalable-react-typescript',
  },
  {
    id: '2',
    title: 'Modern CSS Techniques Every Developer Should Know',
    excerpt:
      'Explore modern CSS features like Grid, Flexbox, Custom Properties, and Container Queries to create responsive and maintainable styles.',
    content: `
## Introduction

CSS has evolved significantly in recent years. Let's explore the modern techniques that every developer should master.

## CSS Grid and Flexbox

These layout systems have revolutionized how we create responsive designs...

## Custom Properties (CSS Variables)

CSS variables enable dynamic theming and reduce code duplication...

## Container Queries

The future of responsive design is here with container queries...
    `,
    date: '2024-01-10',
    readTime: '4 min read',
    tags: ['CSS', 'Frontend', 'Design'],
    slug: 'modern-css-techniques',
  },
  {
    id: '3',
    title: 'API Design Best Practices for Full-Stack Developers',
    excerpt:
      'A comprehensive guide to designing RESTful and GraphQL APIs that are scalable, secure, and developer-friendly.',
    content: `
## Introduction

Good API design is crucial for building successful applications. Here are my recommendations for designing robust APIs.

## RESTful Principles

1. Use proper HTTP methods
2. Consistent naming conventions
3. Version your APIs
4. Implement proper error handling

## GraphQL Considerations

When to choose GraphQL over REST and how to structure your schema...
    `,
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['API', 'Backend', 'Node.js'],
    slug: 'api-design-best-practices',
  },
  {
    id: '4',
    title: 'WordPress Development: Custom Themes vs Page Builders',
    excerpt:
      'Comparing custom WordPress theme development with popular page builders to help you choose the right approach for your project.',
    content: `
## Introduction

WordPress powers over 40% of the web. Let's explore the pros and cons of custom themes versus page builders.

## Custom Themes

Benefits of building custom WordPress themes from scratch...

## Page Builders

When page builders make sense and which ones to consider...
    `,
    date: '2023-12-20',
    readTime: '5 min read',
    tags: ['WordPress', 'PHP', 'Web Development'],
    slug: 'wordpress-custom-themes-vs-builders',
  },
  {
    id: '5',
    title: 'From Junior to Mid-Level Developer: My Journey',
    excerpt:
      'Personal insights and lessons learned transitioning from a junior to mid-level software developer in the competitive tech industry.',
    content: `
## My Journey

Starting out as a junior developer can be overwhelming. Here's what helped me grow...

## Key Learnings

1. Focus on fundamentals
2. Build side projects
3. Contribute to open source
4. Never stop learning

## Advice for Juniors

Be patient, stay curious, and keep coding!
    `,
    date: '2023-12-15',
    readTime: '4 min read',
    tags: ['Career', 'Personal Growth', 'Advice'],
    slug: 'junior-to-mid-level-journey',
  },
];

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandru Popescu',
    role: 'Project Manager',
    company: 'MySkin SRL',
    content:
      'Cosmin delivered exceptional work on our WordPress website. His attention to detail, technical expertise, and ability to understand our business needs made the collaboration seamless. Highly recommended!',
  },
  {
    id: '2',
    name: 'Maria Ionescu',
    role: 'Startup Founder',
    company: 'TechStart Romania',
    content:
      'Working with Cosmin was a game-changer for our startup. He built our entire web platform from scratch, and the results exceeded our expectations. His communication skills and technical knowledge are outstanding.',
  },
  {
    id: '3',
    name: 'Cristian Dumitru',
    role: 'Senior Developer',
    company: 'Raiffeisen Bank',
    content:
      'Cosmin showed great initiative and technical ability during his internship. . A talented developer with a bright future ahead.',
  },
  {
    id: '4',
    name: 'Elena Stan',
    role: 'E-commerce Manager',
    company: 'Fashion Boutique',
    content:
      'The online store Cosmin built for us has significantly increased our sales. He understood our requirements perfectly and delivered a beautiful, fast, and user-friendly e-commerce solution.',
  },
];

// Case Studies
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  image?: string;
  slug: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'E-commerce Platform Modernization',
    client: 'Fashion Boutique',
    description:
      'Complete overhaul of an outdated e-commerce website resulting in 150% increase in conversions.',
    challenge:
      'The client had an outdated WordPress WooCommerce site that was slow, not mobile-friendly, and had a poor user experience. Sales were declining, and the site was difficult to maintain.',
    solution:
      'I designed and developed a modern React-based frontend with a custom Node.js backend. Implemented a headless CMS architecture using Sanity for content management, integrated Stripe for payments, and optimized performance with lazy loading and image optimization.',
    technologies: ['React', 'Node.js', 'Sanity CMS', 'Stripe', 'PostgreSQL', 'AWS'],
    results: [
      '150% increase in conversion rate',
      '60% reduction in page load time',
      'Mobile-first design with 95+ Lighthouse score',
      'Seamless content management for non-technical staff',
    ],
    slug: 'ecommerce-platform-modernization',
  },
  {
    id: '2',
    title: 'Banking Dashboard Application',
    client: 'Raiffeisen Bank - Think Tank Lab',
    description:
      'Internal dashboard for visualizing and analyzing banking data with real-time updates.',
    challenge:
      'The bank needed a modern internal tool to visualize complex financial data for their analysts. The existing solution was slow, hard to use, and lacked real-time capabilities.',
    solution:
      "Built a React-based dashboard with TypeScript, integrated with the bank's existing APIs. Implemented data visualization using D3.js and Recharts, added real-time updates via WebSockets, and created role-based access control.",
    technologies: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'Node.js', 'Docker'],
    results: [
      'Real-time data visualization for 10,000+ transactions daily',
      'Reduced report generation time by 80%',
      'Improved analyst productivity by 40%',
      'Secure and scalable architecture',
    ],
    slug: 'banking-dashboard-application',
  },
  {
    id: '3',
    title: 'Multi-tenant SaaS Platform',
    client: 'Startup Client',
    description:
      'Scalable SaaS platform serving multiple clients with isolated data and custom branding.',
    challenge:
      'A startup needed a multi-tenant SaaS platform that could serve multiple businesses with isolated data, custom branding, and role-based features while maintaining high performance and security.',
    solution:
      'Architected and developed a full-stack solution using Next.js for the frontend and Node.js with PostgreSQL for the backend. Implemented tenant isolation at the database level, created a flexible theming system, and set up CI/CD pipelines for automated deployments.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Redis', 'AWS ECS'],
    results: [
      'Successfully onboarded 15+ business clients',
      '99.9% uptime since launch',
      'Sub-200ms API response times',
      'Reduced infrastructure costs by 30%',
    ],
    slug: 'multitenant-saas-platform',
  },
];

// Featured Projects (Additional to CMS projects)
export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  category: 'web' | 'mobile' | 'tool';
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'fp1',
    title: 'Task Management App',
    description:
      'A full-featured task management application with real-time collaboration, drag-and-drop interface, and team workspaces.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/opreacosmin',
    liveUrl: '#',
    category: 'web',
  },
  {
    id: 'fp2',
    title: 'Weather Dashboard',
    description:
      'Beautiful weather dashboard with 7-day forecasts, interactive maps, and location-based alerts using OpenWeatherMap API.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Geolocation API'],
    githubUrl: 'https://github.com/opreacosmin',
    liveUrl: '#',
    category: 'web',
  },
  {
    id: 'fp3',
    title: 'Portfolio CMS',
    description:
      'Headless CMS built for managing portfolio content with rich text editing, image optimization, and GraphQL API.',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS S3'],
    githubUrl: 'https://github.com/opreacosmin',
    category: 'tool',
  },
  {
    id: 'fp4',
    title: 'Expense Tracker Mobile',
    description:
      'Cross-platform mobile app for tracking personal expenses with budget planning and spending analytics.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart Kit'],
    githubUrl: 'https://github.com/opreacosmin',
    category: 'mobile',
  },
  {
    id: 'fp5',
    title: 'URL Shortener Service',
    description:
      'High-performance URL shortening service with analytics, custom domains, and QR code generation.',
    technologies: ['Node.js', 'Redis', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/opreacosmin',
    liveUrl: '#',
    category: 'tool',
  },
  {
    id: 'fp6',
    title: 'Real-time Chat Application',
    description:
      'Feature-rich chat application with group channels, file sharing, message reactions, and end-to-end encryption.',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB', 'WebRTC'],
    githubUrl: 'https://github.com/opreacosmin',
    liveUrl: '#',
    category: 'web',
  },
];

// Resume/CV Data
export interface ResumeData {
  personalInfo: typeof personalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: TechSkill[];
  certifications: string[];
  languages: { language: string; level: string }[];
}

export const resumeData: ResumeData = {
  personalInfo,
  summary:
    'Passionate Full-Stack Developer with 2+ years of experience building scalable web applications. Specialized in React, Node.js, and modern web technologies. Strong focus on writing clean, maintainable code and creating intuitive user experiences. Experienced in both freelance and corporate environments, with a track record of delivering high-quality projects on time.',
  experience: experienceData,
  education: educationData,
  skills: techStackData,
  certifications: [
    'AWS Certified Cloud Practitioner (In Progress)',
    'Meta Front-End Developer Professional Certificate',
    'Google UX Design Professional Certificate',
  ],
  languages: [
    { language: 'Romanian', level: 'Native' },
    { language: 'English', level: 'Professional Working Proficiency' },
  ],
};

// Sanity Queries
export const projectsQuery_default = '*[_type == "project"] | order(_createdAt desc)';
export const projectsQuery_mobile = '*[_type == "project" && category=="mobile" ] ';
export const projectsQuery_web = '*[_type == "project" && category=="web"]';

export const projectDetailQuery = (slug: string): string => {
  return `*[_type == "project" && slug.current == "${slug}"][0]{ 
        image{ 
            asset->{ 
                url 
            } 
        }, 
        name, 
        slug,
        descriere, 
        details, 
        destination, 
        category,
        link
    }`;
};

// Analytics Configuration
// Set these through environment variables (.env.local) when deploying.
// When empty, the analytics scripts are not loaded at all.
export const analyticsConfig = {
  googleAnalyticsId: import.meta.env.VITE_GA_MEASUREMENT_ID ?? '',
  plausibleDomain: import.meta.env.VITE_PLAUSIBLE_DOMAIN ?? '',
};

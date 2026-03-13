export interface CaseStudy {
  overview: string;
  designApproach: string;
  features: string[];
  screenshots: string[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  liveUrl: string;
  alt: string;
  techStack: string[];
  caseStudy: CaseStudy;
}

export const PORTFOLIO_ITEMS: Project[] = [
  {
    title: "Coffee Roast Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000",
    description: "A modern responsive coffee brand website featuring a clean landing page, product showcase sections, and strong call-to-action design focused on presenting a premium coffee experience.",
    liveUrl: "https://coffeeroastsite.netlify.app",
    alt: "Coffee Roast brand website landing page screenshot",
    techStack: ["Next.js", "Tailwind CSS", "React", "Responsive Design"],
    caseStudy: {
      overview: "The primary objective was to create a modern and visually appealing online presence for a premium coffee brand, aiming to boost direct-to-consumer sales and brand awareness.",
      designApproach: "We utilized a warm, rich color palette inspired by roasted coffee beans paired with clean, modern typography to evoke a sense of premium quality and comfort.",
      features: [
        "Modern landing page structure",
        "Responsive product showcase",
        "Clear call-to-action sections",
        "Mobile-first optimization"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1501339817302-ee4bda4299c5?auto=format&fit=crop&q=80&w=1000"
      ]
    }
  },
  {
    title: "Mazaqal Reef Bakery Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000",
    description: "A responsive bakery website designed for a food business with sections for products, brand presentation, and customer engagement, focusing on warm visuals and clear navigation.",
    liveUrl: "https://mazaqalreefbakery.netlify.app",
    alt: "Mazaqal Reef Bakery website landing page screenshot",
    techStack: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    caseStudy: {
      overview: "Mazaqal Reef needed a digital storefront to showcase their artisanal baked goods and tradition, encouraging local customers to visit and pre-order products.",
      designApproach: "The layout focuses on large, appetizing imagery of baked goods combined with easy-to-navigate menus and a welcoming brand presentation.",
      features: [
        "Responsive layout",
        "Engaging product galleries",
        "Clear contact and location info",
        "Smooth navigation"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000"
      ]
    }
  },
  {
    title: "EcoTech Mobile App",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    description: "An innovative mobile application helping users track and reduce their daily carbon footprint through intuitive gamification and smart insights.",
    liveUrl: "#",
    alt: "EcoTech Mobile App screenshot",
    techStack: ["React Native", "Firebase", "Node.js", "Mobile UX"],
    caseStudy: {
      overview: "To create an engaging way for users to actively participate in eco-friendly habits through daily tracking and rewards.",
      designApproach: "We designed a clean, green-themed interface with playful charts and easy data entry forms to keep the user engaged without feeling overwhelmed.",
      features: ["Real-time carbon tracking", "Gamified reward system", "Social sharing features", "Offline data sync"],
      screenshots: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
      ]
    }
  },
  {
    title: "Nova Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
    description: "Complete visual identity overhaul for a tech startup, including logo design, color palette, typography guidelines, and brand assets.",
    liveUrl: "#",
    alt: "Nova Brand Identity design",
    techStack: ["Figma", "Illustrator", "Brand Strategy", "UI Design"],
    caseStudy: {
      overview: "Nova needed a cohesive brand identity that communicated their position as an innovative, forward-thinking tech company.",
      designApproach: "Implemented a bold, minimalist aesthetic with high-contrast colors and geometric logo elements.",
      features: ["Logo design", "Brand guidelines", "Stationery mockups", "Social media templates"],
      screenshots: [
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000"
      ]
    }
  },
  {
    title: "Aura Streaming Service",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    description: "A high-performance media streaming platform offering seamless video payback across web and mobile surfaces.",
    liveUrl: "#",
    alt: "Aura Streaming Service interface",
    techStack: ["Next.js", "GraphQL", "AWS UX", "Tailwind CSS"],
    caseStudy: {
      overview: "To build a scalable and lag-free streaming experience for independent filmmakers to showcase their work.",
      designApproach: "Inspired by modern cinema, the UI uses a dark mode template with large, immersive artwork for content discovery.",
      features: ["Seamless video playback", "Personalized recommendations", "Cross-platform progress syncing", "Custom video player"],
      screenshots: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1574375927938-d5a98e8f80f9?auto=format&fit=crop&q=80&w=1000"
      ]
    }
  },
];

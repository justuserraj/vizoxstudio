export interface CaseStudy {
  overview: string;
  designApproach: string;
  features: string[];
  screenshots: string[];
}

export interface FullCaseStudy {
  fullOverview: string;
  fullDesignApproach: string;
  fullFeatures: { title: string; description: string }[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  liveUrl: string;
  alt: string;
  techStack: string[];
  caseStudy: CaseStudy;
  fullCaseStudy: FullCaseStudy;
}

export const PORTFOLIO_ITEMS: Project[] = [
  {
    slug: "coffee-roast-website",
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
        "https://images.unsplash.com/photo-1447933630913-221b4a60bc61?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    fullCaseStudy: {
      fullOverview: "Coffee Roast came to Vizox Studio with a clear mission: establish a strong digital presence that would reflect the premium quality of their products and drive direct-to-consumer sales. The brand had a loyal local following but lacked a professional website capable of converting online visitors into buyers. Our goal was to design and develop a fast, elegant, and conversion-focused website that told the brand's story while making it effortless for customers to explore their product range and take action.",
      fullDesignApproach: "We began with an in-depth brand audit and competitor analysis, identifying gaps in the market that Coffee Roast could own visually. The design system was built around warm, earthy tones — deep browns, cream whites, and copper accents — drawing inspiration from the roasting process itself. We selected a combination of a serif display font for headlines to convey heritage and trust, paired with a clean sans-serif for body text to ensure maximum readability. The layout was structured around large hero imagery, minimal friction navigation, and strategically placed CTAs to guide visitors from discovery to purchase.",
      fullFeatures: [
        {
          title: "Hero Landing Section",
          description: "A full-viewport hero section with high-quality photography, a compelling value proposition, and a primary CTA button to drive immediate engagement."
        },
        {
          title: "Product Showcase Grid",
          description: "A responsive product display grid with smooth hover animations, product descriptions, and direct links to purchase or learn more."
        },
        {
          title: "Brand Story Section",
          description: "An immersive storytelling section highlighting the origin, roasting process, and ethos behind the brand, designed to build emotional connection."
        },
        {
          title: "Mobile-First Responsive Design",
          description: "The entire site was built mobile-first, ensuring a seamless and fast experience across all device sizes from smartphones to large desktop screens."
        },
        {
          title: "Performance Optimization",
          description: "Images are lazy-loaded and optimized for web delivery. The site scores 95+ on Google Lighthouse for performance and accessibility."
        }
      ]
    }
  },
  {
    slug: "mazaqal-reef-bakery-website",
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
    },
    fullCaseStudy: {
      fullOverview: "Mazaqal Reef Bakery is a beloved local artisanal bakery with a strong reputation for quality and tradition. Despite a loyal customer base, they had no online presence — all orders were walk-in or phone-based. Vizox Studio was engaged to design and build a professional website that would function as a digital storefront, allowing customers to browse products, understand the brand's story, find location details, and get in touch to place orders. The goal was to increase reach and streamline customer communication.",
      fullDesignApproach: "The visual direction was rooted in warmth, homeliness, and appetite appeal. We selected a palette of golden wheat, warm cream, and deep chocolate tones. Large hero imagery of freshly baked goods was placed prominently to trigger an immediate emotional response. Typography was kept friendly yet legible — a rounded sans-serif for body copy and a decorative serif for headings. Navigation was intentionally simplified so customers of all age groups could find what they needed quickly. The site was designed to feel like walking into the bakery itself.",
      fullFeatures: [
        {
          title: "Visually Driven Homepage",
          description: "A warm, full-width landing page with hero photography, a welcome message, and clear CTAs for viewing the menu and contacting the bakery."
        },
        {
          title: "Product Gallery",
          description: "A structured gallery showcasing baked goods by category — breads, pastries, cakes — with appetizing photography and brief descriptions."
        },
        {
          title: "Location & Contact Section",
          description: "An embedded map along with phone number, email, and opening hours, making it easy for local customers to find and visit the bakery."
        },
        {
          title: "Responsive Design",
          description: "Fully responsive across all devices, ensuring customers on mobile can navigate and access information as comfortably as on a desktop."
        },
        {
          title: "Smooth Page Interactions",
          description: "Subtle scroll animations and hover effects applied throughout to create a polished and professional browsing experience."
        }
      ]
    }
  },
  {
    slug: "ecotech-mobile-app",
    title: "EcoTech Mobile App",
    category: "Mobile App Development",
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
    },
    fullCaseStudy: {
      fullOverview: "EcoTech approached Vizox Studio with a bold vision: build a mobile application that makes environmental responsibility accessible, measurable, and even enjoyable for everyday users. The product needed to track carbon footprint data across transportation, diet, and energy consumption — then translate that data into actionable insights and reward users for positive behavior change. The challenge was making complex environmental data feel simple, personal, and motivating without overwhelming the user.",
      fullDesignApproach: "We adopted a nature-inspired design language — lush greens, soft sky blues, and clean whites — to reinforce the app's environmental theme without feeling clinical. The UX was structured around a daily habit loop: log an activity, see your impact, earn a reward. We used progressive disclosure to avoid overwhelming new users, revealing more advanced tracking features as users became comfortable with the app. Data visualizations were kept bold and celebratory rather than alarming, encouraging continued use.",
      fullFeatures: [
        {
          title: "Real-Time Carbon Footprint Tracker",
          description: "Users can log daily activities across categories — transport, food, energy — and see their carbon output calculated in real time with clear visual feedback."
        },
        {
          title: "Gamified Reward System",
          description: "A points-based reward system with badges, streaks, and milestones keeps users engaged and motivated to build sustainable habits over time."
        },
        {
          title: "Smart Insights Dashboard",
          description: "Personalized weekly and monthly insights highlight where users are having the most impact and suggest targeted actions for improvement."
        },
        {
          title: "Social Sharing & Challenges",
          description: "Users can share their milestones and join community challenges, fostering accountability and spreading awareness through social networks."
        },
        {
          title: "Offline Data Sync",
          description: "The app works fully offline and syncs data seamlessly when reconnected, ensuring a smooth experience regardless of connectivity."
        }
      ]
    }
  },
  {
    slug: "nova-brand-identity",
    title: "Nova Brand Identity",
    category: "Brand Identity",
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
    },
    fullCaseStudy: {
      fullOverview: "Nova is an AI-powered SaaS startup that needed a brand identity to match their ambition. Prior to engaging Vizox Studio, Nova was operating with a generic placeholder logo and inconsistent visual language across their website, pitch decks, and social channels. Investors and early adopters were responding positively to the product but the brand looked unfinished. Our mandate was to design a complete, scalable brand identity system that would position Nova as a serious, innovative, and trustworthy technology company ready for its series A.",
      fullDesignApproach: "We started with a brand strategy session to define Nova's core values: intelligence, precision, growth, and accessibility. From this foundation, we developed a visual language rooted in geometric forms and high contrast. The logo — a sharp, dynamic 'N' constructed from intersecting lines — evokes forward motion and connectivity. The color palette pairs a deep midnight navy with an electric indigo accent for digital applications, ensuring the brand pops on screens. Typography was selected to balance authority (a geometric sans-serif for headings) with approachability (a humanist sans-serif for body text).",
      fullFeatures: [
        {
          title: "Primary Logo & Variants",
          description: "A full logo system including primary, stacked, icon-only, and monochrome variants, ensuring the brand works across all formats from app icons to billboards."
        },
        {
          title: "Brand Guidelines Document",
          description: "A 40-page brand guide covering logo usage rules, spacing, color codes (HEX, RGB, CMYK), typography hierarchy, and dos and don'ts."
        },
        {
          title: "Color Palette System",
          description: "A primary and secondary palette with defined usage contexts — digital, print, dark mode, light mode — ensuring brand consistency across all touchpoints."
        },
        {
          title: "Stationery & Print Collateral",
          description: "Business cards, letterheads, email signatures, and presentation templates designed to extend the brand into physical and professional contexts."
        },
        {
          title: "Social Media Template Kit",
          description: "A set of ready-to-use Figma templates for announcements, product updates, and promotional content, allowing the Nova team to maintain brand consistency independently."
        }
      ]
    }
  },
  {
    slug: "aura-streaming-service",
    title: "Aura Streaming Service",
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    description: "A high-performance media streaming platform offering seamless video playback across web and mobile surfaces.",
    liveUrl: "#",
    alt: "Aura Streaming Service interface",
    techStack: ["Next.js", "GraphQL", "AWS", "Tailwind CSS"],
    caseStudy: {
      overview: "To build a scalable and lag-free streaming experience for independent filmmakers to showcase their work.",
      designApproach: "Inspired by modern cinema, the UI uses a dark mode template with large, immersive artwork for content discovery.",
      features: ["Seamless video playback", "Personalized recommendations", "Cross-platform progress syncing", "Custom video player"],
      screenshots: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1574375927938-d5a98e8f80f9?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    fullCaseStudy: {
      fullOverview: "Aura was founded with a mission to democratize film distribution — giving independent filmmakers a platform to reach global audiences without depending on the major streaming gatekeepers. They came to Vizox Studio needing a full-stack streaming platform capable of handling high-quality video delivery, user authentication, subscription management, and personalized content recommendations. The platform needed to feel cinematic and premium, competing aesthetically with established streaming giants while remaining fast and scalable.",
      fullDesignApproach: "The design philosophy was 'cinema first'. We chose an immersive dark theme as the foundation, allowing content artwork to dominate the visual experience — just as a darkened theatre puts the spotlight on the screen. Navigation was designed to be unobtrusive, appearing contextually rather than persisting and cluttering the interface. Content discovery was built around editorial curation and algorithmic personalization working together. On mobile, we adopted a gesture-based interaction model to create a native app-like feel within the web platform.",
      fullFeatures: [
        {
          title: "High-Performance Video Playback",
          description: "A custom-built video player with adaptive bitrate streaming ensures the highest possible quality for the viewer's connection speed, minimizing buffering."
        },
        {
          title: "Personalized Content Recommendations",
          description: "A GraphQL-powered recommendation engine analyzes watch history, genre preferences, and ratings to surface content each viewer is most likely to enjoy."
        },
        {
          title: "Cross-Platform Progress Syncing",
          description: "Viewers can start a film on their laptop and continue on their phone or smart TV with seamless progress syncing across all authenticated devices."
        },
        {
          title: "Filmmaker Dashboard",
          description: "Independent filmmakers get a dedicated dashboard to upload content, set pricing tiers, view analytics, and manage audience engagement."
        },
        {
          title: "Subscription & Payment Management",
          description: "Integrated subscription tiers with Stripe for billing, supporting monthly and annual plans as well as pay-per-view options for premium content."
        }
      ]
    }
  },
];

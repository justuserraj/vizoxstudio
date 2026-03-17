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
        "/images/Pic/coffeeroastsite/coffeeroastsite.netlify.app [1].png",
        "/images/Pic/coffeeroastsite/coffeeroastsite.netlify.app [2].png",
        "/images/Pic/coffeeroastsite/coffeeroastsite.netlify.app [3].png"
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
        "/images/Pic/mazaqalreefbakery/mazaqalreefbakery.netlify.app [1].png",
        "/images/Pic/mazaqalreefbakery/mazaqalreefbakery.netlify.app [2].png",
        "/images/Pic/mazaqalreefbakery/mazaqalreefbakery.netlify.app [3].png"
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
  {
    slug: "growth-analytics-campaign",
    title: "Growth Analytics Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    description: "A comprehensive digital marketing campaign for an e-commerce brand that increased conversion rates by 45% through targeted SEO and data-driven ad strategies.",
    liveUrl: "#",
    alt: "Growth Analytics dashboard and marketing data",
    techStack: ["SEO", "Google Analytics", "Paid Ads", "Content Strategy"],
    caseStudy: {
      overview: "To scale an emerging e-commerce brand by identifying high-value customer segments and optimizing all digital touchpoints for maximum conversion.",
      designApproach: "We implemented a data-first approach, using heatmaps and user journey mapping to identify friction points in the sales funnel before launching creative campaigns.",
      features: ["Conversion rate optimization", "Audience segmentation", "Multivariate A/B testing", "Automated marketing reports"],
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    fullCaseStudy: {
      fullOverview: "A rapidly growing e-commerce brand in the luxury lifestyle space partnered with Vizox Studio to solve a critical challenge: high traffic but stagnating conversion rates. They had invested heavily in social media ads but weren't seeing the ROI needed to sustain growth. Our mission was to conduct a full audit of their digital ecosystem, rebuild their marketing strategy from the ground up, and implement a scalable system for customer acquisition and retention.",
      fullDesignApproach: "Our strategy moved away from 'spray and pray' advertising. We started by deep-diving into their Google Analytics and Shopify data to build detailed customer personas. We identified that while their creative was strong, their landing pages lacked a clear information hierarchy and their checkout process had too many steps. We redesigned key conversion pages with a focus on trust signals, clear value propositions, and reduced friction. This was supported by a refined SEO strategy targeting high-intent long-tail keywords.",
      fullFeatures: [
        {
          title: "Funnel Optimization",
          description: "Redesign of high-traffic landing pages based on user behavior data, resulting in a cleaner path to purchase and reduced bounce rates."
        },
        {
          title: "Precision Audience Targeting",
          description: "Implementation of custom cohorts and lookalike audiences on Meta and Google Ads, significantly lowering the cost per acquisition (CPA)."
        },
        {
          title: "Content Marketing Engine",
          description: "Development of a sustainable content calendar focusing on educational and storytelling pieces that increased organic search traffic by 60%."
        },
        {
          title: "Integrated Data Dashboard",
          description: "Creation of a custom Looker Studio dashboard that aggregates data from all marketing channels, providing the client with real-time ROI visibility."
        }
      ]
    }
  },
  {
    slug: "supply-chain-automation",
    title: "Supply Chain Automation",
    category: "System Automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    description: "Custom internal tool developed to automate inventory tracking and supplier communications for a global logistics firm, reducing manual errors by 80%.",
    liveUrl: "#",
    alt: "System automation and industrial tech interface",
    techStack: ["Node.js", "Python", "AWS Lambda", "SQL"],
    caseStudy: {
      overview: "To eliminate manual data entry and communication delays in a complex global supply chain through intelligent automation and real-time tracking.",
      designApproach: "We designed a robust backend architecture capable of handling thousands of concurrent data streams, paired with a minimal, dashboard-style frontend for management oversight.",
      features: ["Automated inventory alerts", "Supplier API integration", "Predictive delay modeling", "Role-based access control"],
      screenshots: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1580894732444-8fecef2601da?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    fullCaseStudy: {
      fullOverview: "A mid-sized global logistics provider was struggling with a supply chain managed primarily through disparate spreadsheets and manual emails. This led to frequent inventory stock-outs, delayed supplier responses, and a significant overhead in administrative labor. Vizox Studio was commissioned to build a custom 'Supply Chain Brain' — an automated middleware layer that would sit between their suppliers' systems and their internal management software, automating the flow of information across the entire chain.",
      fullDesignApproach: "The focus was on reliability and data integrity. We built the core system using a serverless architecture on AWS, ensuring it could scale during peak shipping seasons without increased maintenance costs. For the user interface, we focused on 'exception management' — instead of showing users everything, the dashboard only highlights anomalies that require human intervention, such as a delayed shipment or a low-stock alert. This dramatically reduced the cognitive load on the operations team.",
      fullFeatures: [
        {
          title: "Automated Supplier Communication",
          description: "A system that automatically triggers purchase orders and follows up on shipping confirmations when inventory levels hit pre-defined thresholds."
        },
        {
          title: "Real-Time Inventory Sync",
          description: "Bridges the gap between physical warehouse scans and digital records, providing a single source of truth for stock levels globally."
        },
        {
          title: "Predictive Analytics Engine",
          description: "Uses historical data to predict potential delays due to weather or port congestion, allowing the team to pivot before the supply chain is impacted."
        },
        {
          title: "Comprehensive Audit Trail",
          description: "Every automated action is logged and searchable, providing full transparency for compliance and troubleshooting purposes."
        }
      ]
    }
  },
  {
    slug: "interactive-3d-showcase",
    title: "Interactive 3D Showcase",
    category: "Motion & Interaction",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
    description: "Engaging 3D product showcase with interactive elements and smooth motion graphics designed to create an immersive online shopping experience.",
    liveUrl: "#",
    alt: "3D model and interactive web design",
    techStack: ["Three.js", "React Three Fiber", "WebGL", "Blender"],
    caseStudy: {
      overview: "To elevate a digital storefront by allowing customers to interact with products in a 3D space, increasing engagement and purchase confidence.",
      designApproach: "We focused on creating highly optimized 3D assets that load quickly on mobile, using smooth spring-based animations for an organic and responsive feel.",
      features: ["360 degree product rotation", "Interactive exploded views", "Real-time material swapping", "Mobile touch optimization"],
      screenshots: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000"
      ]
    },
    fullCaseStudy: {
      fullOverview: "A high-end electronics brand wanted to move beyond static product photography for their latest flagship launch. They needed a way for customers to explore the intricate internal engineering and premium materials of their product directly in the browser. Vizox Studio developed an interactive 3D experience that allows users to 'deconstruct' the product and see how it works, creating a level of engagement and purchase intent that traditional media couldn't match.",
      fullDesignApproach: "The challenge was delivering high-fidelity 3D visuals without compromising on page load performance. We used Blender for high-poly modeling and baking, then exported optimized GLTF models for use with Three.js. The user experience was built around natural gestures — orbiting, zooming, and tapping. To add narrative depth, we integrated 'hotspots' that, when clicked, trigger smooth camera transitions and reveal detailed technical specifications, ensuring the motion serves the brand story.",
      fullFeatures: [
        {
          title: "Immersive 3D Interaction",
          description: "Full 360-degree rotation and zoom capabilities using high-performance WebGL, providing a tactile feel to digital product discovery."
        },
        {
          title: "Interactive Exploded Views",
          description: "Users can 'explode' the product into its component parts to see the engineering inside, with physics-based animations for a smooth transition."
        },
        {
          title: "Real-Time Customization",
          description: "An integrated material swapping system allows users to see the product in different finishes and colors, updating the lighting and reflections in real time."
        },
        {
          title: "Optimized Mobile Delivery",
          description: "Dynamic asset loading and level-of-detail (LOD) techniques ensure the 3D experience is just as fluid on a smartphone as it is on a desktop computer."
        }
      ]
    }
  },
  {
    slug: "hulk-gym-bgs",
    title: "Hulk Gym BGS",
    category: "Web Development",
    image: "/images/Pic/hulkgymbgs/hulkgymbgs.netlify.app [1].png",
    description: "A bold, energetic web presence for a specialized fitness facility, focused on member acquisition and showcasing gym amenities.",
    liveUrl: "https://hulkgymbgs.netlify.app",
    alt: "Hulk Gym website landing page screenshot",
    techStack: ["React", "CSS", "Frontend Development"],
    caseStudy: {
      overview: "The primary objective was to define a strong digital footprint for Hulk Gym, appealing to fitness enthusiasts with dynamic visuals and clear call-to-actions.",
      designApproach: "We utilized high-energy layouts, dark UI elements with vibrant accents, and smooth scroll interactions to reflect the gym's intensity.",
      features: [
        "Membership onboarding flow",
        "Class schedule integration",
        "High-performance media galleries",
        "Mobile-first responsive design"
      ],
      screenshots: [
        "/images/Pic/hulkgymbgs/hulkgymbgs.netlify.app [1].png",
        "/images/Pic/hulkgymbgs/hulkgymbgs.netlify.app [2].png",
        "/images/Pic/hulkgymbgs/hulkgymbgs.netlify.app [3].png"
      ]
    },
    fullCaseStudy: {
      fullOverview: "Hulk Gym needed to translate their hardcore, high-energy physical environment into a compelling digital experience. Without a robust website, they were relying solely on social media and foot traffic for new sign-ups. Vizox Studio stepped in to build an aggressive, high-converting landing platform that puts their facilities and coaching staff front and center, significantly driving up membership inquiries.",
      fullDesignApproach: "Our design system was bold and unapologetic. We relied on aggressive typography, stark contrasts (deep blacks, electric greens), and full-bleed action photography. The user journey is straightforward: see the facility, check the schedule, sign up. We optimized every button and form to reduce friction while keeping the visual intensity high throughout the scrolling experience.",
      fullFeatures: [
        { title: "Dynamic Hero Banner", description: "Immersive action shots with clear membership CTAs instantly capture user intent." },
        { title: "Facility Showcase", description: "A structured gallery showcasing gym equipment and spaces to build trust before visits." },
        { title: "Trainer Profiles", description: "Dedicated sections for coaching staff, highlighting expertise and specialties." },
        { title: "Lead Generation Forms", description: "Optimized, low-friction contact forms to drive free trial signups." },
        { title: "Mobile Optimization", description: "Fast-loading mobile experience since over 70% of local traffic comes from smartphones." }
      ]
    }
  },
  {
    slug: "raj-portfolio-pvt",
    title: "Raj Portfolio Pvt",
    category: "Web Development",
    image: "/images/Pic/rajportfoliopvt/rajportfoliopvt.vercel.app [1].png",
    description: "A professional, minimalist personal portfolio website built to showcase freelance projects, resume, and contact details effectively.",
    liveUrl: "https://rajportfoliopvt.netlify.app",
    alt: "Raj Portfolio personal website screenshot",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    caseStudy: {
      overview: "To establish a clean and professional personal brand for a freelance developer, highlighting technical skills and past projects.",
      designApproach: "We chose a minimalist, distraction-free aesthetic with a focus on typography and subtle animations to let the work speak for itself.",
      features: [
        "Minimalist UI",
        "Project case studies",
        "Interactive resume",
        "Contact integration"
      ],
      screenshots: [
        "/images/Pic/rajportfoliopvt/rajportfoliopvt.vercel.app [1].png",
        "/images/Pic/rajportfoliopvt/rajportfoliopvt.vercel.app [2].png",
        "/images/Pic/rajportfoliopvt/rajportfoliopvt.vercel.app [3].png"
      ]
    },
    fullCaseStudy: {
      fullOverview: "Raj required a digital portfolio that was as technically sharp as his development skills. The goal was to move away from generic templates and create a tailored web experience that serves as both a resume and a lead generation tool for freelance clients.",
      fullDesignApproach: "We stripped away all unnecessary visual noise. The design relies heavily on whitespace, a strict monochromatic palette with a single accent color, and crisp typography. By keeping the interface minimal, we ensure that the visitor's attention is entirely focused on Raj's project case studies and technical capabilities.",
      fullFeatures: [
        { title: "Clean Landing Experience", description: "A simple, strong introduction that clearly states the value proposition and core skills." },
        { title: "Interactive Project Grid", description: "A responsive grid displaying past work with hover states that reveal tech stacks and quick links." },
        { title: "Digital Resume", description: "A timeline-based experience and education section that is easy to scan." },
        { title: "Direct Contact Form", description: "A built-in messaging system connecting directly to Raj's inbox, removing friction for prospects." },
        { title: "Optimized Lighthouse Score", description: "Engineered for maximum performance, scoring 100 on accessibility and speed metrics." }
      ]
    }
  },
  {
    slug: "the-brothers-cafe",
    title: "The Brothers Cafe & Restaurant",
    category: "Web Development",
    image: "/images/Pic/thebrotherscafeandrestaurantbgs/thebrotherscafeandrestaurantbgs.netlify.app [1].png",
    description: "A warm, appetizing website for a local dining establishment featuring digital menus, reservations, and location details.",
    liveUrl: "https://thebrotherscafeandrestaurantbgs.netlify.app",
    alt: "The Brothers Cafe website screenshot",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    caseStudy: {
      overview: "To generate a welcoming online presence for a cafe, making it simple for customers to explore menus and find ordering information.",
      designApproach: "The aesthetic was driven by the cafe's physical interior—using warm ambient colors, elegant typography, and high-quality food photography.",
      features: [
        "Interactive digital menu",
        "Engaging food photography",
        "Business hours and location",
        "Mobile-friendly layout"
      ],
      screenshots: [
        "/images/Pic/thebrotherscafeandrestaurantbgs/thebrotherscafeandrestaurantbgs.netlify.app [1].png",
        "/images/Pic/thebrotherscafeandrestaurantbgs/thebrotherscafeandrestaurantbgs.netlify.app [2].png",
        "/images/Pic/thebrotherscafeandrestaurantbgs/thebrotherscafeandrestaurantbgs.netlify.app [3].png"
      ]
    },
    fullCaseStudy: {
      fullOverview: "The Brothers Cafe & Restaurant needed a website that matched the warmth and quality of their food. They wanted an online platform where locals and tourists could easily view their extensive menu, check their operating hours, and get a feel for the dining atmosphere before visiting.",
      fullDesignApproach: "We focused heavily on appetite appeal. The site uses edge-to-edge imagery of signature dishes paired with a warm, inviting color palette of deep browns, creams, and rustic oranges. We structured the content so that the most critical information—menu, location, and contact details—is always one click (or tap) away, prioritizing the user journey on mobile devices.",
      fullFeatures: [
        { title: "Digital Menu Navigation", description: "An easy-to-browse menu categorized logically, eliminating the need for clunky PDF downloads." },
        { title: "Atmosphere Gallery", description: "A visual tour of the cafe space highlighting the ambiance and dining experience." },
        { title: "Prominent Location Info", description: "Integrated Google Maps and clear business hours heavily highlighted on the homepage." },
        { title: "Responsive Typographic Hierarchy", description: "Ensuring menu items and prices are highly legible on both large desktop screens and small phones." },
        { title: "Fast Loading Assets", description: "Optimized high-resolution images to ensure the site remains snappy even on slower mobile networks." }
      ]
    }
  }
];

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: any; // We'll handle icons in the component
  fullDescription: string;
  process: string[];
}

export const SERVICES_DATA = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    description: "Crafting memorable brand identities that resonate with your target audience.",
    fullDescription: "At Vizox Studio, we believe a brand is more than just a logo — it's an emotional connection. We work closely with you to define your brand's soul, creating a cohesive visual and verbal identity that sets you apart and builds lasting trust with your customers.",
    process: [
      "Brand strategy",
      "Logo design",
      "Typography and color system",
      "Brand guidelines",
      "Visual identity creation"
    ]
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern tech.",
    fullDescription: "Our development team specializes in building high-performance, accessible, and scalable digital products. From simple landing pages to complex web applications, we use the latest technologies like Next.js, React, and Node.js to ensure your site is fast, secure, and future-proof.",
    process: [
      "Website planning and structure",
      "UI/UX design",
      "Frontend development",
      "Backend integration",
      "Performance optimization"
    ]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Creating native and cross-platform mobile experiences that users love.",
    fullDescription: "We build intuitive, high-performance mobile applications for both iOS and Android. Our approach balances beautiful interface design with robust engineering, ensuring your app provides a seamless experience and solves real problems for your users.",
    process: [
      "App concept and planning",
      "UI/UX design",
      "iOS and Android development",
      "API integrations",
      "Testing and launch"
    ]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven digital marketing strategies to accelerate your business growth.",
    fullDescription: "Success in the digital world requires more than just a great product — it requires the right audience. Our marketing experts use data-driven strategies across SEO, content, and paid channels to increase your visibility and drive high-quality traffic that converts into loyal customers.",
    process: [
      "Content marketing strategy",
      "Social media campaigns",
      "SEO optimization",
      "Google Ads and Facebook Ads",
      "Performance tracking and scaling"
    ]
  },
  {
    slug: "system-automation",
    title: "System Automation",
    description: "Automating repetitive tasks and complex workflows to increase efficiency.",
    fullDescription: "Inefficiency is the enemy of growth. We design and implement custom automation systems that handle repetitive tasks, sync data across platforms, and streamline your business workflows, allowing your team to focus on high-impact work that actually moves the needle.",
    process: [
      "Business workflow automation",
      "AI system integrations",
      "CRM and tool integrations",
      "Automated pipelines",
      "Custom coded automation systems"
    ]
  },
  {
    slug: "motion-interaction",
    title: "Motion & Interaction",
    description: "Designing engaging motion graphics and interactive digital experiences.",
    fullDescription: "Motion brings digital products to life. We use advanced animation and interactive design to create engaging experiences that captivate users, explain complex concepts simply, and add that 'premium' feel that distinguishes world-class products.",
    process: [
      "Motion graphics",
      "UI interaction design",
      "Video animations",
      "3D visuals",
      "Interactive digital experiences"
    ]
  }
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'web' | 'ai' | 'marketing';
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Skill {
  name: string;
  level: number; // percentage (0-100)
  category: 'programming' | 'ai-ml' | 'seo-marketing' | 'tools';
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "SHAIKH AWAIS SARFARAZ",
    title: "AI & ML Engineer",
    subtitle: "Web Developer | SEO Specialist | Prompt Engineer",
    location: "Kalyan, Maharashtra, India",
    phone: "+91 8928196697",
    email: "shaikhawais.masoorkar@gmail.com",
    github: "https://github.com/shaikhawaismasoorkar-pixel",
    linkedin: "#", // Placeholder for user
    summary: "Artificial Intelligence & Machine Learning student with practical experience in full-stack web development and digital marketing. Passionate about bridging cutting-edge AI technologies with practical web solutions and ROI-driven marketing strategies to solve complex, real-world business problems.",
    languages: ["English", "Hindi", "Marathi"],
    softSkills: [
      "Communication",
      "Problem Solving",
      "Critical Thinking",
      "Leadership",
      "Time Management",
      "Adaptability",
      "Analytical Thinking",
      "Client Handling",
      "Teamwork"
    ]
  },
  experiences: [
    {
      id: "exp-1",
      role: "Artificial Intelligence & Software Engineering Intern",
      company: "Life Tech",
      location: "Thane, India",
      period: "2026 - Present",
      responsibilities: [
        "Developed and maintained highly responsive client-facing web applications using React and Tailwind CSS.",
        "Optimized client websites for performance, achieving up to 40% improvement in loading speeds and Lighthouse performance scores.",
        "Collaborated with senior engineers to implement scalable software architectures and intuitive user interfaces.",
        "Conducted website performance audits, detailed analysis, and mobile-responsiveness optimizations."
      ]
    },
    {
      id: "exp-2",
      role: "Freelance Web Developer & Digital Strategist",
      company: "Self-Employed",
      location: "Remote / Kalyan, India",
      period: "2024 - Present",
      responsibilities: [
        "Designed and developed custom SEO-optimized business websites for local enterprises, directly boosting their online search rankings.",
        "Leveraged on-page and technical SEO strategies (keyword research, sitemap setup, robots optimization) to drive organic lead generation.",
        "Implemented secure, fast, and cross-browser responsive layouts to deliver smooth user experiences.",
        "Assisted clients with integrated digital marketing setups, Google Analytics integration, and social media ad campaigns."
      ]
    }
  ] as Experience[],
  education: [
    {
      id: "edu-1",
      degree: "Diploma in Artificial Intelligence & Machine Learning",
      institution: "Abdul Razzaq Kalsekar Polytechnic",
      period: "2026 - Present",
      details: "In-depth specialization in neural networks, machine learning algorithms, deep learning models, prompt engineering, and modern web application integration."
    }
  ] as Education[],
  projects: [
    {
      id: "proj-1",
      title: "Enterprise Web Platforms",
      description: "Custom, SEO-optimized business portals engineered for high-speed conversion, pixel-perfect responsive layouts, and modern glassmorphic aesthetics.",
      longDescription: "A collection of high-performance web applications developed for local businesses. Built with React, Tailwind CSS, and optimized for maximum mobile speed, Google Lighthouse standards, and targeted keyword architectures.",
      category: "web",
      techStack: ["React", "Tailwind CSS", "SEO Strategy", "Google Analytics"],
      githubUrl: "https://github.com/shaikhawaismasoorkar-pixel",
      liveUrl: "#",
      stats: [
        { label: "Performance", value: "98+" },
        { label: "SEO Rating", value: "100" },
        { label: "Load Time", value: "0.8s" }
      ]
    },
    {
      id: "proj-2",
      title: "AI-Powered Conversational Assistant",
      description: "An intelligent, context-aware customer success agent capable of streamlining lead generation, automated answers, and enhancing user retention.",
      longDescription: "Designed an AI chatbot using state-of-the-art Large Language Models. It enables e-commerce and SaaS platforms to automate front-line customer engagement, qualify leads, and synchronize inquiries directly with business databases.",
      category: "ai",
      techStack: ["Python", "Gemini API", "JavaScript", "NLP", "Prompt Engineering"],
      githubUrl: "https://github.com/shaikhawaismasoorkar-pixel",
      liveUrl: "#",
      stats: [
        { label: "Accuracy", value: "94%" },
        { label: "Inquiries Saved", value: "70%" },
        { label: "Response Latency", value: "<150ms" }
      ]
    },
    {
      id: "proj-3",
      title: "Digital Growth & Meta Ad Engine",
      description: "Comprehensive marketing campaigns leveraging precise keyword research, automated funnel optimization, and hyper-targeted social ads.",
      longDescription: "An advanced digital marketing workspace analyzing keyword competition, Meta campaign performance, and cost-per-lead dynamics. Utilized advanced Google Analytics dashboards to segment audiences and optimize CTR.",
      category: "marketing",
      techStack: ["Meta Ads", "Technical SEO", "Lead Gen Funnels", "Google Analytics"],
      githubUrl: "https://github.com/shaikhawaismasoorkar-pixel",
      liveUrl: "#",
      stats: [
        { label: "CTR Boost", value: "12%" },
        { label: "CPL Reduction", value: "28%" },
        { label: "Leads Captured", value: "1.2K+" }
      ]
    }
  ] as Project[],
  skills: [
    // Programming
    { name: "Python", level: 85, category: "programming" },
    { name: "JavaScript", level: 90, category: "programming" },
    { name: "HTML5 & CSS3", level: 95, category: "programming" },
    { name: "Responsive Web Design", level: 95, category: "programming" },
    
    // AI/ML
    { name: "Artificial Intelligence", level: 80, category: "ai-ml" },
    { name: "Machine Learning", level: 75, category: "ai-ml" },
    { name: "Prompt Engineering", level: 95, category: "ai-ml" },
    { name: "Generative AI Integrations", level: 88, category: "ai-ml" },
    
    // SEO & Marketing
    { name: "Search Engine Optimization (SEO)", level: 92, category: "seo-marketing" },
    { name: "On-Page & Technical SEO", level: 90, category: "seo-marketing" },
    { name: "Meta Ads & Lead Gen", level: 85, category: "seo-marketing" },
    { name: "Google Analytics & GTM", level: 80, category: "seo-marketing" },
    
    // Tools
    { name: "WordPress", level: 85, category: "tools" },
    { name: "Git & GitHub", level: 88, category: "tools" },
    { name: "Canva & UI Design", level: 90, category: "tools" }
  ] as Skill[]
};

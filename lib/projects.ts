export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "kumar-ro-plant",
    title: "Kumar RO Plant",
    category: "Performance Marketing",
    shortDescription:
      "Comprehensive SEO and paid advertising campaign driving organic growth and qualified leads for water purification business.",
    description: [
      "Kumar RO Plant project focused on establishing a strong digital presence for a water purification business through integrated SEO and paid advertising strategies. The goal was to increase brand visibility, drive qualified traffic, and generate high-quality leads.",
      "The SEO strategy involved comprehensive keyword research targeting 50+ industry-specific terms, on-page optimization, and technical SEO improvements. This resulted in significant improvements in organic search rankings and traffic.",
      "Parallel to SEO efforts, managed Google Ads and Facebook Ads campaigns with strategic audience targeting, ad copy optimization, and continuous A/B testing to maximize ROI and conversion rates.",
    ],
    features: [
      "Tracked and optimized 50+ industry-specific keywords",
      "Achieved top-5 rankings for 10+ high-value keywords",
      "Managed multi-platform paid advertising campaigns",
      "Implemented comprehensive A/B testing strategy",
      "Developed conversion-optimized landing pages",
      "Real-time performance tracking and reporting",
    ],
    technologies: [
      "Google Ads",
      "Facebook Ads",
      "SEMrush",
      "Google Analytics 4",
      "Google Search Console",
      "A/B Testing Tools",
    ],
    coverImage: "/kumar.png",
    thumbnailImage: "/kumar.png",
    gallery: [
      { url: "/kumar-gsc.png", caption: "SEO Performance Dashboard" },
      { url: "/kumar-dash.png", caption: "Google Ads Campaign Results" },
      { url: "/kumar-analytics.png", caption: "Google Analytics" },
      
    ],
    client: "Kumar Enterprises",
    timeline: "10 months (Nov 2023 - Oct 2024)",
    role: "SEO and PPC Manager",
    liveUrl: "https://kumarroplant.com/",
    relatedProjects: [
      {
        slug: "policy-digit",
        title: "Policy Digit",
        category: "Lead Generation",
        image: "/digit.png",
      },
      {
        slug: "the-winning-hand",
        title: "The Winning Hand",
        category: "Growth & Web Development",
        image: "/twh.png",
      },
    ],
  },
  {
    id: 2,
    slug: "policy-digit",
    title: "Policy Digit",
    category: "Lead Generation",
    shortDescription:
      "Built insurance policy website with integrated lead generation system, combining web development and digital marketing for optimal results.",
    description: [
      "Policy Digit is a comprehensive lead generation project for an insurance policy platform. The project involved building a responsive website from scratch using WordPress and Elementor, followed by implementing strategic SEO and paid advertising campaigns.",
      "The website was designed with user engagement and conversion optimization in mind, featuring intuitive navigation, clear call-to-actions, and mobile-responsive design that significantly improved user experience metrics.",
      "Digital marketing efforts focused on driving qualified traffic through organic search optimization and targeted paid campaigns across Google Ads and Meta platforms, resulting in substantial growth in lead generation.",
    ],
    features: [
      "Custom WordPress website with Elementor design",
      "Responsive design optimized for all devices",
      "Comprehensive keyword research and on-page SEO",
      "Header optimization and internal linking strategy",
      "Multi-platform paid advertising campaigns",
      "Lead capture forms with conversion tracking",
      "Performance analytics and reporting dashboard",
    ],
    technologies: [
      "WordPress",
      "Elementor",
      "Google Ads",
      "Meta Ads",
      "Yoast SEO",
      "Google Analytics 4",
      "Google Tag Manager",
    ],
    coverImage: "/digit.png",
    thumbnailImage: "/digit.png",
    gallery: [
      { url: "/digit.png", caption: "Homepage Design" },
      { url: "/digit-phone.png", caption: "Responsive" },
      { url: "/policy-ads.png", caption: "Campaign Performance" },
      { url: "", caption: "SEO Improvements" },
    ],
    client: "Agency Project",
    timeline: "4 months (2024)",
    role: "Web Developer & Digital Marketing Manager",
    liveUrl: "https://www.policydigit.com//",
    relatedProjects: [
      {
        slug: "kumar-ro-plant",
        title: "Kumar RO Plant",
        category: "Performance Marketing",
        image: "/kumar.png",
      },
      {
        slug: "the-winning-hand",
        title: "The Winning Hand",
        category: "Growth & Web Development",
        image: "/twh.png",
      },
    ],
  },
  {
    id: 3,
    slug: "the-winning-hand",
    title: "The Winning Hand",
    category: "Growth & Web Development",
    shortDescription:
      "End-to-end digital growth project combining website optimization, technical SEO, and data-driven PPC campaigns for business expansion.",
    description: [
      "The Winning Hand project encompassed comprehensive digital growth strategies including website development, technical SEO optimization, and performance marketing campaigns. The objective was to establish a strong online presence and drive consistent business growth.",
      "Website optimization focused on improving technical performance, implementing structured data, and enhancing user experience. These improvements resulted in significant gains in organic visibility and user engagement metrics.",
      "Paid advertising campaigns were strategically managed across Google Ads and Meta platforms, utilizing data-driven bid strategies and precise audience targeting to maximize ROI while reducing acquisition costs.",
    ],
    features: [
      "Responsive WordPress website development",
      "Technical SEO and structured data implementation",
      "Content restructuring and meta element optimization",
      "Google Analytics and GSC performance monitoring",
      "Cross-platform PPC campaign management",
      "Data-driven bid strategies and audience targeting",
      "Comprehensive performance tracking and reporting",
    ],
    technologies: [
      "WordPress",
      "Elementor",
      "Google Ads",
      "Meta Ads",
      "Google Analytics 4",
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
    ],
    coverImage: "/twh.png",
    thumbnailImage: "/twh.png",
    gallery: [
      { url: "/twh.png", caption: "Website Performance Improvements" },
      { url: "/twh-seo.png", caption: "SEO Rankings Growth" },
      { url: "/twh-gmb.png", caption: "PPC Campaign Dashboard" },
      { url: "", caption: "Traffic Analytics" },
    ],
    client: "Agency Project",
    timeline: "12 months (Oct 2023 - Oct 2024)",
    role: "Digital Marketing & Web Development Manager",
    liveUrl: "https://thewinninghand.in/",
    relatedProjects: [
      {
        slug: "kumar-ro-plant",
        title: "Kumar RO Plant",
        category: "Performance Marketing",
        image: "/kumar.png",
      },
      {
        slug: "policy-digit",
        title: "Policy Digit",
        category: "Lead Generation",
        image: "/digit.png",
      },
    ],
  },

  {
    id: 4,
    slug: "dvault",
    title: "Dvault",
    category: "File Storage App",
    shortDescription:
      "Dvault is a secure, cloud-based platform for storing, organizing, and accessing your files anytime, anywhere.",
    description: [
      "Protect your files with advanced encryption and reliable cloud security to ensure your data stays safe. Access peace of mind knowing your documents are always protected against unauthorized access.",
      "Manage, view, and share your files effortlessly from any device, anywhere in the world. Dvault keeps your data just a click away, whether for work, school, or personal use.",
      "Keep all your documents, media, and projects neatly structured in one centralized space. Powerful tools help you categorize, search, and retrieve files quickly and efficiently.",
    ],
    features: [
      "Reach your data anytime from any device.",
      "Share files securely with links or permissions.",
      "Your files are always safe and backed up.",
      "Restore deleted files or previous versions easily.",
      "Preview documents, images, videos, PDFs without downloading.",
      "Powerful search by file name, type, tags, or content.",
      "Upload/download directly from mobile devices.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "ESLint",
      "Firebase",
      "Google Cloud Vision API",
      "Autoprefixer",
      "Axios",
    ],
    coverImage: "/dvault-all.png",
    thumbnailImage: "/dvault.png",
    gallery: [
      { url: "/dvault-up.png", caption: "Home" },
      { url: "/dvault.png", caption: "Upload files" },
      { url: "/dvault-all.png", caption: "Your Files Section" },
      { url: "/dvault-file.png", caption: "Traffic Analytics" },
    ],
    client: "Personal Project",
    timeline: "2 months",
    role: "Personal Project",
    liveUrl: "https://dvault.vercel.app/",
    relatedProjects: [
      {
        slug: "kumar-ro-plant",
        title: "Kumar RO Plant",
        category: "Performance Marketing",
        image: "/kumar.png",
      },
      {
        slug: "policy-digit",
        title: "Policy Digit",
        category: "Lead Generation",
        image: "/digit.png",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}

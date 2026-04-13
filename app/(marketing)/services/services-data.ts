export type ServiceContent = {
  slug: string;
  number: string;
  title: string;
  overview: string;
  process: string[];
  benefits: string[];
  results: string[];
  tools: string[];
};

export const servicesContent: ServiceContent[] = [
  {
    slug: "marketplace-onboarding-automation",
    number: "01",
    title: "Marketplace Onboarding with Automation",
    overview:
      "ISNAP enables seamless onboarding of sellers and brands across leading marketplaces with a fully automated and compliance-driven approach, reducing manual effort and time-to-launch.",
    process: [
      "Business and documentation audit",
      "Marketplace selection strategy (Amazon, Flipkart, Walmart, etc.)",
      "Automated onboarding workflows",
      "Compliance verification and approvals",
      "Account activation and initial setup"
    ],
    benefits: ["Faster go-live timelines", "Error-free onboarding", "Compliance-ready setup", "Multi-marketplace scalability"],
    results: ["70% faster onboarding timelines", "98% approval success rate", "Reduced manual dependency by 60%"],
    tools: ["Amazon Seller Central", "Flipkart Seller Hub", "API-based onboarding tools", "Internal automation dashboards"]
  },
  {
    slug: "catalogue-listing-automation",
    number: "02",
    title: "Catalogue Listing Automation",
    overview:
      "We streamline product catalog creation and listing through automation, ensuring accuracy, speed, and marketplace compliance.",
    process: [
      "Data collection and structuring",
      "Category mapping",
      "Automated bulk uploads",
      "Quality checks and optimization",
      "Listing activation and monitoring"
    ],
    benefits: ["Faster catalog uploads", "SEO-optimized listings", "Reduced listing errors", "Scalable product expansion"],
    results: ["3x faster listing speed", "60% increase in discoverability", "45% improvement in conversion rates"],
    tools: ["Bulk listing tools", "Excel and API integrations", "Marketplace listing engines"]
  },
  {
    slug: "product-image-editing-creatives",
    number: "03",
    title: "Product Image Editing and Creatives",
    overview:
      "ISNAP delivers high-quality, marketplace-compliant product visuals that enhance brand appeal and drive conversions.",
    process: [
      "Image audit and requirement analysis",
      "Editing (background removal and enhancement)",
      "Creative design (banners and infographics)",
      "Marketplace compliance check",
      "Final optimization",
      "A+ content creatives",
      "Storytelling videos"
    ],
    benefits: ["Higher click-through rates", "Professional brand presentation", "Compliance with platform guidelines"],
    results: ["Up to 45% increase in CTR", "30-40% higher conversion rates"],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva Pro", "AI-based image enhancement tools"]
  },
  {
    slug: "product-content-copywriting",
    number: "04",
    title: "Product Content and Copywriting",
    overview:
      "We create high-converting product content tailored to marketplace algorithms and customer psychology.",
    process: [
      "Keyword research",
      "Competitor benchmarking",
      "Content creation (titles, bullets, descriptions)",
      "SEO optimization",
      "Continuous refinement"
    ],
    benefits: ["Better search rankings", "Improved conversions", "Strong brand storytelling"],
    results: ["30% increase in organic visibility", "20% boost in sales conversions"],
    tools: ["Keyword research tools", "AI writing assistants", "SEO optimization platforms"]
  },
  {
    slug: "key-account-management",
    number: "05",
    title: "Key Account Management (KAM) - End-to-End",
    overview:
      "ISNAP provides complete account management with automation, ensuring growth, performance, and operational efficiency.",
    process: [
      "Account health monitoring",
      "Sales and performance tracking",
      "Issue resolution",
      "Campaign execution",
      "Growth strategy planning"
    ],
    benefits: ["Dedicated growth management", "Reduced operational burden", "Data-driven decision making"],
    results: ["2x-5x revenue growth for managed accounts", "90%+ account health score maintenance"],
    tools: ["Marketplace dashboards", "Analytics platforms", "Automation tools"]
  },
  {
    slug: "ecommerce-website-brand-store-development",
    number: "06",
    title: "eCommerce Website and Brand Store Development",
    overview:
      "We design and develop high-performance eCommerce websites and brand stores tailored for conversion and scalability.",
    process: [
      "Requirement analysis",
      "UI and UX design",
      "Development and integrations",
      "Testing and deployment",
      "Ongoing management"
    ],
    benefits: ["Strong brand identity", "Higher conversion rates", "Scalable infrastructure"],
    results: ["40% increase in direct sales", "Improved user engagement"],
    tools: ["Shopify", "WooCommerce", "Custom tech stacks", "Payment and CRM integrations"]
  },
  {
    slug: "digital-marketing",
    number: "07",
    title: "Digital Marketing (Meta, Google, YouTube)",
    overview:
      "ISNAP delivers full-funnel digital marketing solutions to drive traffic, engagement, and conversions.",
    process: [
      "Market and audience research",
      "Campaign strategy",
      "Ad creation and execution",
      "Performance tracking",
      "Optimization"
    ],
    benefits: ["Targeted reach", "Higher ROI", "Scalable campaigns"],
    results: ["3x-6x ROAS", "50% lower cost per acquisition"],
    tools: ["Meta Ads Manager", "Google Ads", "YouTube Ads", "Analytics tools"]
  },
  {
    slug: "seo-geo-performance-optimization",
    number: "08",
    title: "SEO, GEO and Performance Optimization",
    overview:
      "We enhance visibility and performance across search engines and marketplaces through advanced optimization strategies.",
    process: [
      "Keyword and competitor analysis",
      "On-page and technical SEO",
      "Content optimization",
      "Performance tracking"
    ],
    benefits: ["Increased organic traffic", "Better rankings", "Long-term growth"],
    results: ["2x organic traffic growth", "Top-ranking keywords within 3-6 months"],
    tools: ["Google Analytics", "Google Search Console", "Ahrefs", "SEMrush"]
  },
  {
    slug: "logistics-last-mile-automation",
    number: "09",
    title: "3PL Logistics and Last-Mile Automation",
    overview:
      "ISNAP provides end-to-end logistics automation solutions, ensuring efficient order fulfillment and delivery.",
    process: ["Carrier integration", "Order routing", "Real-time tracking", "Delivery management", "Returns handling"],
    benefits: ["Faster deliveries", "Reduced logistics cost", "Improved customer satisfaction"],
    results: ["25% reduction in delivery time", "20% cost optimization"],
    tools: ["Logistics APIs", "Tracking systems", "Automation dashboards"]
  },
  {
    slug: "additional-brand-growth-solutions",
    number: "10",
    title: "Additional Brand Growth Solutions",
    overview:
      "ISNAP acts as a growth partner, offering customized solutions tailored to each brand's goals and industry.",
    process: ["Business analysis", "Growth strategy design", "Execution and optimization", "Continuous scaling"],
    benefits: ["End-to-end growth support", "Data-driven strategies", "Scalable business models"],
    results: ["Sustainable long-term growth", "Multi-channel expansion success"],
    tools: ["Analytics platforms", "Automation tools", "Custom-built solutions"]
  }
];

export const closingPositioningStatement =
  "ISNAP is not just a service provider — we are an automation-first growth partner enabling brands to scale faster, smarter, and more efficiently across digital ecosystems.";

export type BlogStatus = "draft" | "review" | "approved" | "scheduled" | "published";

export interface BlogVersion {
  id: string;
  updatedAt: any;
  updatedBy: string;
  content: string;
  note?: string;
}

export interface Blog {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  createdAt?: any;
  updatedAt?: any;
  published: boolean;
  featured: boolean;
  status: BlogStatus;
  scheduledAt?: any;
  
  // Intelligence
  seoTitle?: string;
  seoDescription?: string;
  seoScore?: number;
  readabilityScore?: number;
  readingTime: number;
  wordCount?: number;
  
  // Versions
  versionHistory?: BlogVersion[];
  
  // Metrics (Simulated for Dashboard)
  metrics?: {
    views: number;
    completion: number;
    engagement: number;
  };
}

import * as z from "zod";

export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string(),
  content: z.string(),
  coverImage: z.string(),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()),
  author: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string(),
  }),
  status: z.enum(["draft", "review", "approved", "scheduled", "published"]),
  featured: z.boolean(),
  published: z.boolean(),
  scheduledAt: z.any().optional(),
  readingTime: z.number(),
  createdAt: z.any().optional(),
  updatedAt: z.any().optional(),
  metrics: z.object({
    views: z.number(),
    completion: z.number(),
    engagement: z.number(),
  }),
  seoScore: z.number().optional(),
});

export type BlogFormValues = z.infer<typeof blogSchema>;

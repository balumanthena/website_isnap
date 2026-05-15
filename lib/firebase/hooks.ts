"use client";

import { useState, useEffect } from "react";
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  onSnapshot,
  doc
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Blog } from "@/types/blog";

const BLOGS_COLLECTION = "blogs";

export function useRealtimeBlogs(initialBlogs: Blog[], limitCount = 50) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  useEffect(() => {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveBlogs = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() } as Blog))
        .filter(blog => blog.published);
      setBlogs(liveBlogs);
    });

    return () => unsubscribe();
  }, [limitCount]);

  return blogs;
}

export function useRealtimeFeaturedBlogs(initialBlogs: Blog[]) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  useEffect(() => {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveBlogs = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() } as Blog))
        .filter(blog => blog.published && blog.featured)
        .slice(0, 3);
      setBlogs(liveBlogs);
    });

    return () => unsubscribe();
  }, []);

  return blogs;
}

export function useRealtimeBlog(slug: string, initialBlog: Blog | null) {
  const [blog, setBlog] = useState<Blog | null>(initialBlog);

  useEffect(() => {
    const q = query(collection(db, BLOGS_COLLECTION));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allBlogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
      const found = allBlogs.find(b => b.slug === slug);
      setBlog(found || null);
    });

    return () => unsubscribe();
  }, [slug]);

  return blog;
}

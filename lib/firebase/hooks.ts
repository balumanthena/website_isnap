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
      where("published", "==", true),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveBlogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
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
      where("published", "==", true),
      where("featured", "==", true),
      orderBy("createdAt", "desc"),
      limit(3)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const liveBlogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
      setBlogs(liveBlogs);
    });

    return () => unsubscribe();
  }, []);

  return blogs;
}

export function useRealtimeBlog(slug: string, initialBlog: Blog | null) {
  const [blog, setBlog] = useState<Blog | null>(initialBlog);

  useEffect(() => {
    const q = query(
      collection(db, BLOGS_COLLECTION),
      where("slug", "==", slug),
      limit(1)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        setBlog(null);
      } else {
        const doc = snapshot.docs[0];
        setBlog({ id: doc.id, ...doc.data() } as Blog);
      }
    });

    return () => unsubscribe();
  }, [slug]);

  return blog;
}

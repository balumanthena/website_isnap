import { db } from "@/lib/firebase";
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp 
} from "firebase/firestore";
import { Blog } from "@/types/blog";

const BLOGS_COLLECTION = "blogs";

export async function getPublishedBlogs(limitCount = 50) {
  const q = query(
    collection(db, BLOGS_COLLECTION),
    where("published", "==", true),
    orderBy("createdAt", "desc"),
    limit(limitCount)
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
}

export async function getFeaturedBlogs() {
  const q = query(
    collection(db, BLOGS_COLLECTION),
    where("published", "==", true),
    where("featured", "==", true),
    orderBy("createdAt", "desc"),
    limit(3)
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const q = query(
    collection(db, BLOGS_COLLECTION),
    where("slug", "==", slug),
    limit(1)
  );
  
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() } as Blog;
}

export async function getAllBlogsForAdmin() {
  const q = query(
    collection(db, BLOGS_COLLECTION),
    orderBy("createdAt", "desc")
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
}

export async function getBlogById(id: string): Promise<Blog | null> {
  const docRef = doc(db, BLOGS_COLLECTION, id);
  const snapshot = await getDoc(docRef);
  
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as Blog;
}

export async function createBlog(blogData: Omit<Blog, "id" | "createdAt" | "updatedAt">) {
  const docRef = await addDoc(collection(db, BLOGS_COLLECTION), {
    ...blogData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return docRef.id;
}

export async function updateBlog(id: string, blogData: Partial<Blog>) {
  const docRef = doc(db, BLOGS_COLLECTION, id);
  await updateDoc(docRef, {
    ...blogData,
    updatedAt: serverTimestamp()
  });
}

export async function deleteBlog(id: string) {
  const docRef = doc(db, BLOGS_COLLECTION, id);
  await deleteDoc(docRef);
}

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

/**
 * Enterprise Media Helper
 * Handles optimized delivery and transformation logic
 */
export const getOptimizedUrl = (publicId: string, options: any = {}) => {
  return cloudinary.url(publicId, {
    fetch_format: "auto",
    quality: "auto",
    ...options,
  });
};

/**
 * Upload utility for server-side environments
 */
export const uploadToCloudinary = async (fileUri: string, folder: string = "isnap_media") => {
  try {
    const res = await cloudinary.uploader.upload(fileUri, {
      folder,
      resource_type: "auto",
    });
    return res;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error;
  }
};

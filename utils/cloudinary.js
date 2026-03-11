"use server"

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;


import { revalidatePath } from 'next/cache';

export async function uploadImage(formData) {
  const file = formData.get('image');
  
  if (!file || file.size === 0) {
    throw new Error("No file uploaded");
  }

  // Convert the File object to a Buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    // Use upload_stream for direct buffer upload
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { 
          folder: 'nextjs16_uploads',
          resource_type: 'auto' 
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    // Optional: Refresh the page to show new data
    revalidatePath('/'); 
    
    return { success: true, url: result.secure_url };
  } catch (error) {
    console.error("Upload failed:", error);
    return { success: false, error: error.message };
  }
}
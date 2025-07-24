// WARNING: Writing files to the public/ directory will NOT persist on Vercel serverless functions. Use cloud storage for production uploads.
import { connectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";

const { NextResponse } = require("next/server")
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const loadDB = async () => {
    await connectDB();
}

loadDB();

//API Endpoint to get all Blogs
export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    } else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs})
    }
}

// Helper to upload buffer to Cloudinary
async function uploadToCloudinary(buffer, filename) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "blog-images", public_id: filename },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
}

//API Endpoint for Uploading Blogs
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get('image');
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const filename = `${timestamp}_${image.name}`;
  let imgUrl;
  try {
    imgUrl = await uploadToCloudinary(buffer, filename);
  } catch (err) {
    return NextResponse.json({ success: false, msg: "Image upload failed", error: err.message });
  }

  const blogData = {
    title: `${formData.get('title')}`,
    description: `${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get('authorImg')}`
  }

  await BlogModel.create(blogData);
  console.log("Blog saved");

  return NextResponse.json({success:true,msg:"blog added"})
}

// Creating API Endpoint to delete Blog
export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    // Delete image from Cloudinary if it exists
    if (blog && blog.image) {
        try {
            // Extract public_id from the Cloudinary URL
            // Example: https://res.cloudinary.com/<cloud_name>/image/upload/v1234567890/blog-images/filename.jpg
            const urlParts = blog.image.split('/');
            const folderIndex = urlParts.findIndex(part => part === 'upload') + 1;
            const publicIdWithExt = urlParts.slice(folderIndex).join('/').replace(/\.[^/.]+$/, "");
            const publicId = publicIdWithExt;
            await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
        } catch (err) {
            console.error('Failed to delete image from Cloudinary:', err.message);
        }
    }
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"blog is Deleted"});
}


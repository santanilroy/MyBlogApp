import mongoose from "mongoose";

 export const connectDB = async () => {
     await mongoose.connect('mongodb+srv://roysantanil696:Rony_roy2003@cluster0.ec00mhg.mongodb.net/blog-app')
     console.log("DB Connected");
}
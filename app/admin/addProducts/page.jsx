"use client";

import axios from "axios";
import React, { useState } from "react";
import { LuHardDriveUpload } from "react-icons/lu";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Technology",
    author: "Alex",
    authorImg: "/alex.jpg",
  });

  const onchangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onsubmithandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Technology",
        author: "Alex",
        authorImg: "/alex.jpg",
      });
    } else {
      toast.error("Error!");
    }
  };

  return (
    <>
      <form onSubmit={onsubmithandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <div
            id="upload_area"
            className="mt-4 w-30 h-20 flex justify-center items-center bg-slate-50 border-2 border-zinc-300 rounded-xl border-dotted"
          >
            <LuHardDriveUpload size={40} />
          </div>
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          type="text"
          name="title"
          onChange={onchangehandler}
          value={data.title}
          placeholder="Type here"
          required
          className="w-full sm-w-[500px] mt-4 px-4 py-3 border rounded-xl shadow-[-5px_5px_0px_#000000]"
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          type="text"
          name="description"
          onChange={onchangehandler}
          value={data.description}
          placeholder="Write content here"
          rows={7}
          required
          className="w-full sm-w-[500px] mt-4 px-4 py-3 border rounded-xl shadow-[-5px_5px_0px_#000000]"
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onchangehandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500 rounded-xl"
        >
          <option value="Technology">Technology</option>
          <option value="Science">Science</option>
          <option value="Sports">Sports</option>
        </select>
        <br />
        <button
          type="submit"
          className="my-8 w-40 h-12 bg-black text-white font-medium rounded-xl cursor-pointer"
        >
          ADD
        </button>
      </form>
    </>
  );
};

export default page;

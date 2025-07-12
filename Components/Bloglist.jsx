import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";
import axios from "axios";

const Bloglist = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchblogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchblogs();
  }, []);

  return (
    <>
      <div className="flex justify-center gap-6 my-10 cursor-pointer">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white px-4 py-1 rounded-2xl" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white px-4 py-1 rounded-2xl"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Science")}
          className={
            menu === "Science"
              ? "bg-black text-white px-4 py-1 rounded-2xl"
              : ""
          }
        >
          Science
        </button>
        <button
          onClick={() => setMenu("Sports")}
          className={
            menu === "Sports" ? "bg-black text-white px-4 py-1 rounded-2xl" : ""
          }
        >
          Sports
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <Blogs
                key={index}
                id={item._id}
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
              />
            );
          })}
      </div>
    </>
  );
};

export default Bloglist;

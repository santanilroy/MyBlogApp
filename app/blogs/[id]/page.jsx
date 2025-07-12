"use client";

import { blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "@/Components/Footer";
import Link from "next/link";
import axios from "axios";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 p-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src="/Group 1.png"
              alt="logo"
              width={140}
              height={100}
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="text-black border-2 border-black px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-2xl shadow-[-7px_7px_0px_0px_#000000] font-medium active:shadow-[-2px_2px_0px_0px_#000000] duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            alt="auther image"
            width={80}
            height={40}
            className="rounded-full mx-auto mt-8 border border-white shadow-2xl"
          />
          <p className="mt-2 pb-2 text-lg max-w-[700px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          width={1280}
          height={780}
          alt="image"
          className="rounded-xl border-4 border-white"
        />
        <p className="my-5 text-[18px] font-semibold text-base/7">
          {data.description}
        </p>
        <div className="mt-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex gap-4">
            <div className="p-4 rounded-full shadow-2xl hover:scale-110 duration-300 delay-150 cursor-pointer">
              <FaSquareFacebook size={30} />
            </div>
            <div className="p-4 rounded-full shadow-2xl hover:scale-110 duration-300 delay-150 cursor-pointer">
              <FaInstagram size={30} />
            </div>
            <div className="p-4 rounded-full shadow-2xl hover:scale-110 duration-300 delay-150 cursor-pointer">
              <FaXTwitter size={30} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <> </>
  );
};

export default page;

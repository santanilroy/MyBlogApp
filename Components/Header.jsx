import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

const Header = () => {
  const [email, setEmail] = useState("");
  const onsubmithandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error!");
    }
  };
  return (
    <>
      <nav className="p-5 md:px-10 lg:px-20">
        <div className="flex justify-between items-center">
          <Image
            src="/Group 1.png"
            alt="logo"
            width={140}
            height={100}
            className="w-[130px] sm:w-auto"
          />
          <Link
            href={"/admin"}
            className="text-black border-2 border-black px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-2xl shadow-[-7px_7px_0px_0px_#000000] font-medium active:shadow-[-2px_2px_0px_0px_#000000] duration-300 cursor-pointer"
          >
            Get Started
          </Link>
        </div>
        <div className="text-center my-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            Latest Posts
          </h1>
          <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
            Welcome to our vibrant blogging community, where passionate writers and curious readers come together to share stories, insights, and inspiration. Whether you're here to discover the latest trends in technology, dive into thought-provoking articles, or connect with fellow enthusiasts, our platform is designed to empower your voice and spark meaningful conversations. Join us on this journey of creativity and knowledge—explore, write, and be part of a growing network that celebrates the power of words.
          </p>
          <form
            onSubmit={onsubmithandler}
            className="flex justify-between max-w-[500px] m-auto border-2 rounded-2xl scale-75 shadow-[-7px_7px_0px_0px_#000000] overflow-hidden cursor-pointer hover:shadow-[-2px_2px_0px_0px_#000000] duration-300"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Enter your email"
              className="p-5 outline-none text-[18px]"
            />
            <button
              className="p-3 sm:p-4 md:p-5 border-l-2 active:bg-black active:text-white font-medium duration-300 text-sm sm:text-base md:text-lg"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;

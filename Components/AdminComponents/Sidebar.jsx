import Image from "next/image";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { GoChecklist } from "react-icons/go";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-100 rounded-r-2xl min-h-screen">
        <Link href={"/"} className="px-2 sm:pl-8 py-3 flex justify-center sm:justify-start">
          <Image src="/Group 1.png" alt="logo" width={100} height={80} className="w-16 sm:w-24" />
        </Link>
        <div className="w-16 sm:w-64 md:w-80 h-[100vh] relative py-6 sm:py-12">
          <div className="w-full sm:w-[80%] absolute right-0">
            <Link
              href="/admin/addProducts"
              className="flex items-center gap-3 font-medium px-3 py-2 border border-black bg-white shadow-[-5px_5px_0px_0px_#000000] rounded-sm"
            >
              <IoIosAddCircleOutline size={25} />
              <p>Add Blogs</p>
            </Link>

            <Link
              href="/admin/blogList"
              className="flex items-center gap-3 mt-5 font-medium px-3 py-2 border border-black bg-white shadow-[-5px_5px_0px_0px_#000000] rounded-sm"
            >
              <GoChecklist size={25} />
              <p>Blog Lists</p>
            </Link>

            <Link
              href="/admin/subscription"
              className="flex items-center gap-3 mt-5 font-medium px-3 py-2 border border-black bg-white shadow-[-5px_5px_0px_0px_#000000] rounded-sm"
            >
              <HiOutlineMail size={25} />
              <p>Subscription</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

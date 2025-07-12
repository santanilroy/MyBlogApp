"use client";

import Bloglist from "@/Components/Bloglist";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <ToastContainer theme="light" />
      <Header />
      <Bloglist />
      <Footer />
    </>
  );
}

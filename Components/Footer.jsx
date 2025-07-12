import React from 'react';
import Image from 'next/image';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black items-center py-10'>
                <Image src="/Group 1.png" alt='logo' width={100} height={100} className='invert-100' />
                <p className='text-sm text-white'>All rights reserved. &copy; Bloggers</p>
                <div className='flex gap-5 invert-100'>
                    <FaSquareFacebook size={40} className='hover:scale-110 duration-300 delay-100 cursor-pointer' />
                    <FaInstagram size={40} className='hover:scale-110 duration-300 delay-100 cursor-pointer' />
                    <FaXTwitter size={40} className='hover:scale-110 duration-300 delay-100 cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default Footer

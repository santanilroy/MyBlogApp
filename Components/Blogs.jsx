import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const Blogs = ({ image, description, category, title, id }) => {
    return (
        <>
            <div className='max-w-[330px] sm:max-w-[300px] border-2 rounded-xl hover:shadow-[-7px_7px_0px_0px_#000000] duration-300 delay-150 overflow-hidden'>
                <Link href={`/blogs/${id}`}>
                    <Image src={image} alt='blog-1' width={400} height={400} className='border-b-2' />
                </Link>
                <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
                <div className='p-5'>
                    <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
                    <p className='mb-3 text-sm tracking-tight text-gray-700 h-30 overflow-hidden'>{description}</p>
                    <Link href={`/blogs/${id}`} className='flex justify-center items-center gap-3 p-2 hover:text-blue-700 duration-300 cursor-pointer font-semibold'>
                        <span>Read More</span><FaArrowRight />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Blogs

import Image from "next/image";
import React from "react";
import { CgProfile } from "react-icons/cg";

const BlogTableItem = ({ authorImg, title, author, deleteBlogs, mongoId }) => {
  let BlogDate = new Date();
  return (
    <>
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <Image
            src={authorImg ? authorImg : <CgProfile size={30} />}
            alt=""
            width={50}
            height={50}
          />
          <p>{author ? author : "No Author"}</p>
        </th>
        <td className="px-6 py-4">{title ? title : "No Title"}</td>
        <td className="px-6 py-4">{BlogDate.toDateString()}</td>
        <td onClick={() => deleteBlogs(mongoId)} className="px-6 py-4">
          X
        </td>
      </tr>
    </>
  );
};

export default BlogTableItem;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostCard } from "../blog/type";

const BlogPostCard = ({ title, desc, imgURL, postURL }: PostCard) => {
  return (
    <div className="h-[32%] card justify-between bg-primary-100 shadow-primary-600 relative">
      <div className="px-4 py-1 flex justify-between">
        <h2 className="font-semibold tracking-wider">{title}</h2>
        <Link href={postURL}>
          <svg
            className="w-4 fill-primary-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z" />
          </svg>
        </Link>
      </div>
      <div className="rounded-md relative h-[90%] w-full">
        <Image
          className="rounded-b-md"
          src={imgURL}
          layout="fill"
          objectFit="cover"
          alt={`"${title}" blog post image`}
        />
      </div>
      <p className="text-sm absolute bottom-0 px-4 py-2 bg-primary-300 bg-opacity-20">
        {desc}
      </p>
    </div>
  );
};

export default BlogPostCard;

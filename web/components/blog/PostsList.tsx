import Image from "next/image";
import React from "react";
import BlogPostCard from "../cards/BlogPostCard";
import { PostCard } from "./type";

const blogPosts: PostCard[] = [
  {
    title: "Title",
    desc: "This is some random blog post description. Doesn't mean anything.",
    imgURL:
      "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
    postURL: "",
  },
  {
    title: "Title",
    desc: "This is some random blog post description. Doesn't mean anything.",
    imgURL:
      "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
    postURL: "",
  },
  {
    title: "Title",
    desc: "This is some random blog post description. Doesn't mean anything.",
    imgURL:
      "https://img.freepik.com/vecteurs-premium/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000",
    postURL: "",
  },
];

const PostsList = () => {
  return (
    <div className="flex flex-col w-full gap-2 px-12 text-primary-900">
      <h2 className="mb-2 text-center text-2xl text-primary-100 font-extralight">
        Latest blog posts
      </h2>
      {blogPosts.map((post, index) => (
        <BlogPostCard key={index} {...post} />
      ))}
      <p className="underline underline-offset-8 mt-3 text-primary-100 font-light tracking-widest text-center animate-bounce">
        View More &gt;
      </p>
    </div>
  );
};

export default PostsList;
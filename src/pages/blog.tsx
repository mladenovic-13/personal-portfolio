import React from "react";

const Blog = () => {
  return <div>Blog</div>;
};

export default Blog;
// import React, { ReactElement, ReactNode } from "react";
// import { fetchPosts, usePosts } from "../hooks/posts";
// import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
// import MainMask from "../components/mask/MainMask";
// import { NextPageWithLayout } from "./_app";
// import BlogPostCardV2 from "../components/cards/BlogPostCardV2";
// import Layout from "../components/layout/Layout";
// import Link from "next/link";

// const Blog: NextPageWithLayout = () => {
//   const { data } = usePosts();

//   return (
//     <div className="pb-24 w-full h-fit py-3 bg-slate-900">
//       <MainMask />
//       <div className="w-full flex-col lg:flex-row flex flex-wrap center gap-5">
//         {data?.map((post) => (
//           <Link key={post.title} href={`/post/${post.slug}`}>
//             <div className="cursor-pointer w-5/6 lg:w-[32%] h-56 ">
//               <BlogPostCardV2 {...post} />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Generating the static props for the blog page
// export const getStaticProps = async () => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(["posts"], () => fetchPosts());

//   // Return the pages static props
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
// Blog.getLayout = (page: ReactElement) => {
//   return <Layout isPost>{page}</Layout>;
// };

// export default Blog;
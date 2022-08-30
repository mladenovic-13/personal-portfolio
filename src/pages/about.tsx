import Image from "next/image";
import React, { ReactNode } from "react";
import MainLayout from "../components/layout/IndexLayout";
import MainMask from "../components/mask/MainMask";
import { NextPageWithLayout } from "./_app";
import profileImg from "../../public/images/profile.jpeg";
import SocialLinks from "../components/social/SocialLinks";
import { socialLinks } from "../utils/data";

const AboutMe: NextPageWithLayout = () => {
  return (
    <div className="flex py-4 lg:py-16 bg-slate-900 pb-12 min-h-screen justify-center">
      <MainMask />
      <div className="hidden lg:flex max-w-4xl justify-center items-center">
        <h1 className="text-2xl font-light text-center">About Me</h1>
        <div className="flex w-full">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div>
              <div className="z-40 flex flex-col justify-center items-center  relative rounded-full w-40 h-40 border-4 border-slate-600/50">
                <Image
                  className="rounded-full"
                  src={profileImg}
                  layout="fill"
                  alt="nikola mladenovic mladenovic13 about me profile image"
                />
              </div>
              <h2 className="  text-slate-500 font-light">Nikola Mladenovic</h2>
            </div>
            <ul className="flex w-5/6">
              <div className="flex-1">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>NodeJS</li>
                <li>NextJS</li>
              </div>
              <div className="flex-1">
                <li>TailwindCSS</li>
                <li>C/C++</li>
                <li>MongoDB/Firestore</li>
                <li>SQL</li>
              </div>
            </ul>
          </div>
          <div className="w-1/2">
            <p className="indent-6">
              First and foremost, I love writing code. Ever since I writing my
              first program in C and manipulating it to produce a desirable
              output, I have been obsessed with idea of using software to solve
              real world problems. This is one of many reasons that I decided to
              study Computer Science on Belgrade University.
            </p>
            <p className="indent-6 ">
              Over time I realized that university courses isn&apos;t enough and
              I started digging deeper into the digital world. I was fascinated
              by Digital Marketing, some e-commerce business models, content
              writing et cetera, but I always went back to my first love,
              coding.
            </p>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className="lg:hidden w-5/6 flex justify-center gap-5 flex-col items-center ">
        <h1 className="text-2xl font-light text-center">About Me</h1>
        <div>
          <div className="z-40 flex flex-col justify-center items-center  relative rounded-full w-40 h-40 border-4 border-slate-600/50">
            <Image
              className="rounded-full"
              src={profileImg}
              layout="fill"
              alt="nikola mladenovic mladenovic13 about me profile image"
            />
          </div>
          <h2 className="text-center  text-slate-500 font-light">
            Nikola Mladenovic
          </h2>
        </div>
        <p className="indent-6 font-light">
          First and foremost, I love writing code. Ever since I writing my first
          program in C and manipulating it to produce a desirable output, I have
          been obsessed with idea of using software to solve real world
          problems. This is one of many reasons that I decided to study Computer
          Science on Belgrade University.
        </p>
        <p className="indent-6 font-light">
          Over time I realized that university courses isn&apos;t enough and I
          started digging deeper into the digital world. I was fascinated by
          Digital Marketing, some e-commerce business models, content writing et
          cetera, but I always went back to my first love, coding.
        </p>
        <ul className="flex w-5/6">
          <div className="flex-1">
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>NodeJS</li>
            <li>NextJS</li>
          </div>
          <div className="flex-1">
            <li>TailwindCSS</li>
            <li>C/C++</li>
            <li>MongoDB/Firestore</li>
            <li>SQL</li>
          </div>
        </ul>
        <SocialLinks {...socialLinks} />
      </div>
    </div>
  );
};

AboutMe.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutMe;

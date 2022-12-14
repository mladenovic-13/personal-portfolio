import { MutableRefObject, ReactNode, useRef } from "react";
import PostsList from "../components/blog/PostsList";
import Contact from "../components/forms/Contact";
import Hero from "../components/hero/Hero";
import ScrollDown from "../components/hero/ScrollDown";
import MainLayout from "../components/layout/IndexLayout";
import MainMask from "../components/mask/MainMask";
import ProjectList from "../components/projects/ProjectList";
import ScrollCounter from "../components/scroll-counter/ScrollCounter";
import SocialLinks from "../components/social/SocialLinks";
import useOnScreen from "../hooks/useOnScreen";
import { socialLinks } from "../utils/data";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const refHeroSection = useRef() as MutableRefObject<HTMLDivElement>;
  const refProjectsSection = useRef() as MutableRefObject<HTMLDivElement>;
  const refBlogSection = useRef() as MutableRefObject<HTMLDivElement>;
  const refContactSection = useRef() as MutableRefObject<HTMLDivElement>;

  const isHeroOnScreen = useOnScreen(refHeroSection);
  const isProjectsOnScreen = useOnScreen(refProjectsSection);
  const isBlogOnScreen = useOnScreen(refBlogSection);
  const isContactOnScreen = useOnScreen(refContactSection);

  const sectionProps = [
    { ref: refHeroSection, isOnScreen: isHeroOnScreen },
    { ref: refProjectsSection, isOnScreen: isProjectsOnScreen },
    { ref: refBlogSection, isOnScreen: isBlogOnScreen },
    { ref: refContactSection, isOnScreen: isContactOnScreen },
  ];

  return (
    <>
      <div className="main__container">
        {/* Scroll Container */}
        <div className="section__container">
          {/* Section */}
          <div ref={refHeroSection} className="section">
            <MainMask />
            <Hero />
            <ScrollDown />
          </div>

          {/* Section */}
          <div ref={refProjectsSection} className="section">
            <MainMask />
            <ProjectList />
          </div>

          {/* Section */}
          <div ref={refBlogSection} className="section">
            <MainMask />
            <PostsList />
          </div>

          {/* Section */}
          <div ref={refContactSection} className="section">
            <MainMask />
            <div className="flex flex-col justify-evenly items-center w-5/6 h-[90%]">
              <Contact />
              <SocialLinks {...socialLinks} />
            </div>
          </div>
        </div>

        <ScrollCounter sections={sectionProps} />
      </div>
    </>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;

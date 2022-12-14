import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { usePinnedRepos } from "../../hooks/githubRepos";
import ProjectCard from "../cards/ProjectCard";

const queryClient = new QueryClient();

const ProjectList = () => {
  const { data } = usePinnedRepos();

  return (
    <>
      {/* MOBILE */}
      <div className="mobile list__cards">
        <div className="space__cards ">
          <h2 className="section__heading">projects</h2>
          {data?.slice(0, 3).map((card, index) => (
            <ProjectCard
              openGraphImageUrl={card.openGraphImageUrl || null}
              key={index}
              title={card.name}
              desc={card.description || "No description."}
              demoLink={card.homepageUrl || ""}
              githubLink={card.url}
              stack={["No stack."]}
            />
          ))}
          <Link href="/projects">
            <p className="view__more mb-2">View More &gt;</p>
          </Link>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="desktop md:flex flex-col gap-10 justify-evenly h-[95%] w-[95%]">
        <h1 className="text-center text-3xl font-extralight uppercase">
          projects
        </h1>
        <div className="flex flex-row flex-wrap flex-1 justify-center gap-4">
          {data?.map((card, index) => (
            <div
              key={index}
              className="w-[30%] h-[45%] hover:scale-105 transition duration-300"
            >
              <ProjectCard
                openGraphImageUrl={card.openGraphImageUrl || null}
                key={index}
                title={card.name}
                desc={card.description || "No description."}
                demoLink={card.homepageUrl || ""}
                githubLink={card.url}
                stack={["No stack."]}
              />
            </div>
          ))}
        </div>
        <Link href="/projects">
          <p className="view__more">View More &gt;</p>
        </Link>
      </div>
    </>
  );
};

export default function Wraper(props: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProjectList {...props} />
    </QueryClientProvider>
  );
}

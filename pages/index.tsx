import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { urlFor } from "../sanity";
import { fetchPageInfo } from "../utils/fetch/fetchPageInfo";
import { fetchProjects } from "../utils/fetch/fetchProjects";
import { fetchSkills } from "../utils/fetch/fetchSkills";
import { fetchSocials } from "../utils/fetch/fetchSocials";
import { PageInfo, Project, Skill, Social } from "../utils/typings/sanity";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

export default function Home({ pageInfo, projects, skills, socials }: Props) {
  return (
    <div className="h-screen snap-y snap-mandatory bg-[url('../public/background.png')] bg-repeat overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-violet7/80 scrollbar-corner-gray-400/20">
      <Head>
        <title>Abdoulaye's Portfolio</title>
      </Head>

      <Header socials={socials} />

      <Main pageInfo={pageInfo} skills={skills} projects={projects} />

      {/* Problem scroll: h-screen block useScroll() */}
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo("en");
  const projects: Project[] = await fetchProjects("en");
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      projects,
      skills,
      socials,
    },
    revalidate: 10,
  };
};

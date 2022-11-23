import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import { sanityClient } from "../sanity";
import { CountryContext } from "../utils/context/country";
import { PageInfo, Project, Skill, Social } from "../utils/typings/sanity";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

export default function Home_Fr({
  pageInfo,
  projects,
  skills,
  socials,
}: Props) {
  return (
    <CountryContext.Provider value={{ language: "fr" }}>
      <div className="h-screen snap-y snap-mandatory bg-[url('../public/background.png')] bg-repeat overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-violet7/80 scrollbar-corner-gray-400/20">
        <Head>
          <title>Portfolio d'Abdoulaye</title>
        </Head>

        <Header socials={socials} />

        <Main pageInfo={pageInfo} skills={skills} projects={projects} />
      </div>
    </CountryContext.Provider>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await sanityClient.fetch(
    groq`*[_type == "pageInfoFr"][0]`
  );

  const projects: Project[] = await sanityClient.fetch(
    groq`*[_type == "projectFr"] { ..., technologies[]-> } | order(_updatedAt desc)`
  );

  const skills: Skill[] = await sanityClient.fetch(groq`*[_type == "skill"]`);

  const socials: Social[] = await sanityClient.fetch(
    groq`*[_type == "social"]`
  );

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

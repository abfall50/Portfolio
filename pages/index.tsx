import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import { sanityClient } from "../sanity";
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
        <title>Abdoulaye Fall</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header socials={socials} />

      <Main pageInfo={pageInfo} skills={skills} projects={projects} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await sanityClient.fetch(
    groq`*[_type == "pageInfoEn"][0]`
  );

  const projects: Project[] = await sanityClient.fetch(
    groq`*[_type == "projectEn"] { ..., technologies[]-> } | order(_updatedAt desc)`
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

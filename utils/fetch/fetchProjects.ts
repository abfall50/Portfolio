import { Project } from "../typings/sanity";

export const fetchProjects = async (language: string) => {
  let data: any;
  if (language === "en") {
    data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getProjectsEn`).then(
      (res) => res.json()
    );
  } else {
    data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getProjectsFr`).then(
      (res) => res.json()
    );
  }

  const projects: Project[] = data.projects;

  //console.log("fetching projects: ", projects);

  return projects;
};

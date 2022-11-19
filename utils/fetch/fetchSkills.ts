import { Skill } from "../typings/sanity"

export const fetchSkills = async () => {
	const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`).then(res => res.json())

	const skills: Skill[] = data.skills

	//console.log("fetching skills: ", skills)

	return skills
}
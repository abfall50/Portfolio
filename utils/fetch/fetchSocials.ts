import { Social } from "../typings/sanity"

export const fetchSocials = async () => {
	const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`).then(res => res.json())

	const socials: Social[] = data.socials

	//console.log("fetching socials: ", socials)

	return socials
}
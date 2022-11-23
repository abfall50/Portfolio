interface SanityBody {
	_createdAt: string,
	_id: string,
	_rev: string,
	_updatedAt: string
}

interface Image {
	_type: "image"
	asset: {
		_ref: string
		_type: "reference"
	}
}

export interface Technology extends SanityBody {
	_type: "skill"
	title: string
	image: Image
}

export interface Skill extends SanityBody {
	_type: "skill"
	title: string
	image: Image
	link: string
}


export interface PageInfo extends SanityBody {
	_type: "pageInfo"
	name: string
	role: string
	aboutMe: string
	phoneNumber: string
	email: string
	address: string
	profilPic: Image
}

export interface Project extends SanityBody {
	_type: "project"
	title: string
	summary: string
	image: Image
	technologies: Technology[]
	linkToBuild: string
}

export interface Social extends SanityBody {
	_type: "social"
	title: string
	url: string
}
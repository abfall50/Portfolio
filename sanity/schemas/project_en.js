export default {
	name: "projectEn",
	title: "ProjectEn",
	type: "document",
	fields: [
	  {
		name: "title",
		title: "Title",
		type: "string",
	  },
	  {
		name: "summary",
		title: "Summary",
		type: "string",
	  },
	  {
		name: "image",
		title: "Image",
		type: "image",
		options: { hotspot: true },
	  },
	  {
		name: "technologies",
		title: "Technologies",
		type: "array",
		of: [{ type: "reference", to: { type: "skill" } }]
	  },
	  {
		name: "linkToBuild",
		title: "LinkToBuild",
		type: "url",
	  },
	],
  };
  
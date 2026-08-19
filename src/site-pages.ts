// Page metadata shared by the router (sets title/description on navigation) and by
// vite.config.ts (emits a static HTML file per route so GitHub Pages serves deep links).
// Keep this module free of imports — vite.config.ts loads it in Node.

export interface SitePage {
	path: string
	title: string
	description: string
}

export const sitePages: SitePage[] = [
	{
		path: "/",
		title: "Forsyte Studios",
		description: "Forsyte Studios — playful games and apps for the real world. Home of Territor.io.",
	},
	{
		path: "/privacy",
		title: "Privacy Policy — Territor.io | Forsyte Studios",
		description: "Privacy Policy for the Territor.io app by Forsyte Studios — what we collect, why, and the choices you have.",
	},
	{
		path: "/terms",
		title: "Terms of Service — Territor.io | Forsyte Studios",
		description: "Terms of Service and End User License Agreement for the Territor.io app by Forsyte Studios.",
	},
	{
		path: "/account-deletion",
		title: "Account and Data Deletion — Territor.io | Forsyte Studios",
		description: "How to delete your Territor.io account and the data associated with it, and what happens when you do.",
	},
]

import { createRouter, createWebHistory, type RouteMeta } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import { sitePages } from "@/site-pages"

declare module "vue-router" {
	interface RouteMeta {
		title: string
		description: string
	}
}

function metaFor(path: string): RouteMeta {
	const page = sitePages.find((candidate) => candidate.path === path)
	if (!page) throw new Error(`No site page metadata for "${path}"`)
	return { title: page.title, description: page.description }
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	// The trailing-slash aliases match the static files emitted for each route and the
	// cross-doc links rewritten by src/lib/markdown.ts.
	routes: [
		{ path: "/", name: "home", component: HomeView, meta: metaFor("/") },
		{
			path: "/privacy",
			alias: "/privacy/",
			name: "privacy",
			component: () => import("@/views/PrivacyView.vue"),
			meta: metaFor("/privacy"),
		},
		{
			path: "/terms",
			alias: "/terms/",
			name: "terms",
			component: () => import("@/views/TermsView.vue"),
			meta: metaFor("/terms"),
		},
		{
			path: "/account-deletion",
			alias: "/account-deletion/",
			name: "account-deletion",
			component: () => import("@/views/AccountDeletionView.vue"),
			meta: metaFor("/account-deletion"),
		},
	],
	scrollBehavior(to, _from, savedPosition) {
		if (to.hash) {
			// getElementById, not querySelector — several doc headings slug to ids that start
			// with a digit ("#7-purchases-and-subscriptions"), which is an invalid CSS selector.
			const el = document.getElementById(decodeURIComponent(to.hash.slice(1)))
			if (el) return { el, top: 16 }
		}
		return savedPosition ?? { top: 0 }
	},
})

router.afterEach((to) => {
	document.title = to.meta.title
	document.querySelector('meta[name="description"]')?.setAttribute("content", to.meta.description)
})

export default router

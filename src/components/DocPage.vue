<script setup lang="ts">
	import { computed } from "vue"
	import { useRouter } from "vue-router"
	import { renderMarkdown } from "@/lib/markdown"

	const props = defineProps<{ markdown: string }>()

	const html = computed(() => renderMarkdown(props.markdown))

	const router = useRouter()

	// Cross-doc links inside the rendered markdown are plain <a href="/terms/"> elements the
	// router can't see, so hand internal ones to it instead of reloading the page.
	function onContentClick(event: MouseEvent) {
		if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

		const anchor = (event.target as HTMLElement | null)?.closest("a")
		const href = anchor?.getAttribute("href")
		if (!anchor || !href || anchor.target === "_blank") return
		if (!href.startsWith("/")) return // mailto:, external, and in-page #anchors stay native

		event.preventDefault()
		router.push(href)
	}
</script>

<template>
	<div class="relative min-h-screen overflow-x-clip bg-neutral-50 text-neutral-900">
		<!-- Soft decorative brand-green blobs -->
		<div class="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-brand-300/20 blur-3xl" aria-hidden="true"></div>
		<div class="pointer-events-none absolute -bottom-48 -left-48 h-[36rem] w-[36rem] rounded-full bg-brand-600/10 blur-3xl" aria-hidden="true"></div>

		<div class="relative mx-auto max-w-4xl px-4 sm:px-6">
			<header class="flex items-center justify-between gap-4 py-8">
				<RouterLink to="/" class="group inline-flex items-center gap-3">
					<img src="/img/logo.png" alt="" class="h-10 w-10" aria-hidden="true" />
					<span class="font-display text-xl tracking-wide transition group-hover:text-brand-600">Forsyte Studios</span>
				</RouterLink>
				<RouterLink to="/" class="text-sm font-medium text-brand-600 transition hover:text-brand-600/70">&larr; Back to home</RouterLink>
			</header>

			<main
				class="prose prose-neutral max-w-none rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-10 prose-headings:font-display prose-headings:scroll-mt-8 prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-brand-600 prose-blockquote:not-italic prose-th:text-left"
				@click="onContentClick"
				v-html="html"
			></main>

			<footer class="mt-10 border-t border-neutral-200 py-8 text-center text-sm text-neutral-400">
				<a href="mailto:forsyte.studios@gmail.com" class="transition hover:text-brand-600">forsyte.studios@gmail.com</a>
				<span class="mx-2" aria-hidden="true">·</span>
				&copy; 2026 Forsyte Studios
			</footer>
		</div>
	</div>
</template>

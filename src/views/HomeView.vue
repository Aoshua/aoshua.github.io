<script setup lang="ts">
	import ProductCarousel from "@/components/ProductCarousel.vue"

	const territorIoImages = [{ src: "/img/products/run-io.png", alt: "Territor.io app showing a live run on a map" }]

	const legalLinks = [
		{ to: "/privacy", title: "Privacy Policy", blurb: "What Territor.io collects, why, and who it's shared with." },
		{ to: "/terms", title: "Terms of Service", blurb: "The agreement covering your use of the app, including fair play and safety." },
		{ to: "/account-deletion", title: "Account & Data Deletion", blurb: "How to delete your account and what happens to your data." },
	]
</script>

<template>
	<div class="relative min-h-screen overflow-x-clip bg-neutral-50 text-neutral-900">
		<!-- Soft decorative brand-green blobs -->
		<div class="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-brand-300/20 blur-3xl" aria-hidden="true"></div>
		<div class="pointer-events-none absolute -bottom-48 -left-48 h-[36rem] w-[36rem] rounded-full bg-brand-600/10 blur-3xl" aria-hidden="true"></div>

		<div class="relative mx-auto max-w-4xl px-4 sm:px-6">
			<!-- Hero -->
			<header class="flex flex-col items-center pt-10 pb-8 text-center sm:pt-24 sm:pb-20">
				<img src="/img/logo.png" alt="Forsyte Studios eye logo" class="h-24 w-24 sm:h-28 sm:w-28" />
				<h1 class="font-display mt-4 text-4xl tracking-wide sm:text-5xl">Forsyte Studios</h1>
				<p class="mt-3 max-w-md text-lg text-neutral-600">Games for the real world.</p>
				<div class="mt-5 h-1 w-16 rounded-full bg-brand-600 sm:mt-6" aria-hidden="true"></div>
			</header>

			<main class="space-y-12 pb-12 sm:space-y-20 sm:pb-16">
				<!-- Our Apps -->
				<section aria-labelledby="apps-heading">
					<p class="font-display text-sm font-bold uppercase tracking-widest text-brand-600">What we make</p>
					<h2 id="apps-heading" class="mt-1 text-2xl font-semibold sm:text-3xl">Our Apps</h2>

					<div class="mt-5 space-y-6 sm:mt-6 sm:space-y-8">
						<!-- Territor.io — future app cards slot in below this one -->
						<article class="grid grid-cols-1 items-center gap-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:gap-8 sm:p-8 md:grid-cols-2">
							<div class="mx-auto w-full max-w-[16rem] md:max-w-xs">
								<ProductCarousel :images="territorIoImages" />
							</div>
							<div class="text-center md:text-left">
								<h3 class="font-display text-3xl sm:text-4xl">Territor.io</h3>
								<p class="mt-2 text-lg font-medium text-brand-600">Run. Claim your streets. Compete with friends.</p>
								<p class="mt-3 text-neutral-600">
									Territor.io turns every run into a game of conquest — trace routes through your neighborhood to capture territory on a live map and defend it
									from other runners.
								</p>
								<!-- TODO: replace # with real App Store / Google Play URLs -->
								<div class="mt-5 flex flex-wrap justify-center gap-3 sm:mt-6 md:justify-start">
									<a href="#" class="inline-flex items-center gap-2.5 rounded-xl bg-neutral-900 px-4 py-2.5 text-white transition hover:bg-neutral-700">
										<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
											<path
												d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
											/>
										</svg>
										<span class="text-left leading-tight"
											><span class="block text-[0.65rem] text-neutral-300">Download on the</span
											><span class="block text-sm font-semibold">App Store</span></span
										>
									</a>
									<a href="#" class="inline-flex items-center gap-2.5 rounded-xl bg-neutral-900 px-4 py-2.5 text-white transition hover:bg-neutral-700">
										<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
											<path
												d="M3.61 1.81a1.5 1.5 0 0 0-.61 1.2v17.98c0 .5.24.94.61 1.2l9.79-10.19L3.61 1.81zm11.2 8.72L5.6 1.02l11.53 6.63-2.32 2.88zm3.85-1.6 2.62 1.5c.96.56.96 1.58 0 2.14l-2.62 1.5-2.6-2.57 2.6-2.57zm-3.85 5.54 2.32 2.88L5.6 22.98l9.21-8.51z"
											/>
										</svg>
										<span class="text-left leading-tight"
											><span class="block text-[0.65rem] text-neutral-300">Get it on</span><span class="block text-sm font-semibold">Google Play</span></span
										>
									</a>
								</div>
							</div>
						</article>
					</div>
				</section>

				<!-- Mission -->
				<section aria-labelledby="mission-heading">
					<p class="font-display text-sm font-bold uppercase tracking-widest text-brand-600">Why we build</p>
					<h2 id="mission-heading" class="mt-1 text-2xl font-semibold sm:text-3xl">Our Mission</h2>
					<p class="mt-3 max-w-3xl text-lg leading-relaxed text-neutral-600 sm:mt-4">
						We create imaginative, accessible experiences that bring people together through play. Our focus is on polished, innovative games and apps that get people
						moving, exploring, and connecting in the real world — and we're just getting started.
					</p>
				</section>

				<!-- Legal -->
				<section aria-labelledby="legal-heading">
					<p class="font-display text-sm font-bold uppercase tracking-widest text-brand-600">Your data</p>
					<h2 id="legal-heading" class="mt-1 text-2xl font-semibold sm:text-3xl">Legal</h2>
					<p class="mt-3 max-w-3xl text-lg leading-relaxed text-neutral-600 sm:mt-4">
						The policies covering Territor.io — how your data is handled, the terms you agree to, and how to delete your account whenever you like.
					</p>
					<div class="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-3">
						<RouterLink
							v-for="link in legalLinks"
							:key="link.to"
							:to="link.to"
							class="group rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:ring-brand-600/40 sm:p-5"
						>
							<h3 class="font-display text-lg transition group-hover:text-brand-600">{{ link.title }}</h3>
							<p class="mt-2 text-sm leading-relaxed text-neutral-600">{{ link.blurb }}</p>
						</RouterLink>
					</div>
				</section>

				<!-- Contact -->
				<section aria-labelledby="contact-heading">
					<p class="font-display text-sm font-bold uppercase tracking-widest text-brand-600">Get in touch</p>
					<h2 id="contact-heading" class="mt-1 text-2xl font-semibold sm:text-3xl">Contact Us</h2>
					<p class="mt-3 text-lg text-neutral-600 sm:mt-4">Questions, feedback, or support requests — we'd love to hear from you.</p>
					<a
						href="mailto:forsyte.studios@gmail.com"
						class="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 font-medium text-white transition hover:bg-brand-600/90 sm:mt-5"
					>
						<svg
							class="h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<rect x="2" y="4" width="20" height="16" rx="2" />
							<path d="m22 7-10 6L2 7" />
						</svg>
						forsyte.studios@gmail.com
					</a>
				</section>
			</main>

			<footer class="border-t border-neutral-200 py-6 text-center text-sm text-neutral-400 sm:py-8">
				<nav class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2" aria-label="Legal">
					<RouterLink v-for="link in legalLinks" :key="link.to" :to="link.to" class="transition hover:text-brand-600">{{ link.title }}</RouterLink>
				</nav>
				<p class="mt-3 sm:mt-4">© 2026 Forsyte Studios</p>
			</footer>
		</div>
	</div>
</template>

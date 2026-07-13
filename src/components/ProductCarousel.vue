<script setup lang="ts">
	import { ref, onMounted, onUnmounted } from "vue"

	interface CarouselImage {
		src: string
		alt: string
	}

	const props = withDefaults(defineProps<{ images?: CarouselImage[] }>(), {
		images: () => [{ src: "/img/products/run-io.png", alt: "Territorio app screenshot" }],
	})

	const current = ref(0)
	let interval: number | undefined

	function startInterval() {
		if (props.images.length < 2) return
		interval = window.setInterval(next, 7000)
	}
	function resetInterval() {
		if (interval) {
			window.clearInterval(interval)
			interval = undefined
		}
		startInterval()
	}

	function next() {
		current.value = (current.value + 1) % props.images.length
	}
	function goTo(idx: number) {
		current.value = idx
		resetInterval()
	}

	onMounted(() => {
		startInterval()
	})

	onUnmounted(() => {
		if (interval) {
			window.clearInterval(interval)
		}
	})
</script>

<template>
	<div class="flex flex-col items-center">
		<div class="w-full overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg bg-white">
			<img :src="images[current].src" :alt="images[current].alt" class="w-full h-full object-cover transition duration-500" />
		</div>
		<div v-if="images.length > 1" class="flex gap-2 items-center justify-center mt-4">
			<button
				v-for="(img, idx) in images"
				:key="idx"
				@click="goTo(idx)"
				:class="['w-2.5 h-2.5 rounded-full transition-colors', current === idx ? 'bg-brand-600' : 'bg-neutral-300 hover:bg-neutral-400']"
				:aria-label="'Go to slide ' + (idx + 1)"
			></button>
		</div>
	</div>
</template>

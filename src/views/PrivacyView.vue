<script setup lang="ts">
	import DocPage from "@/components/DocPage.vue"
	import markdown from "@/content/PrivacyPolicy.md?raw"
</script>

<template>
	<DocPage :markdown="markdown" />
</template>

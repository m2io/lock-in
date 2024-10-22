<script setup lang="ts">
import { useWebsiteController } from '@/composables/useWebsiteController'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

const { getWebsiteEntries } = useWebsiteController()

onMounted(async () => {
	await getWebsiteEntries()
})
</script>

<template>
	<main>
		<RouterView />
	</main>
</template>

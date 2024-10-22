<script setup lang="ts">
import AppIconsSprite from '@/components/AppIconsSprite.vue'
import { useWebsiteController } from '@/composables/useWebsiteController'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

const { getWebsiteEntries } = useWebsiteController()

onMounted(async () => {
	await getWebsiteEntries()
})
</script>

<template>
	<div>
		<AppIconsSprite />
		<main>
			<RouterView />
		</main>
	</div>
</template>

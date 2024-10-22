<script setup lang="ts">
import { useIcons } from '@/composables/useIcons'

const { size = '16', name = '' } = defineProps<{
	name: keyof typeof icons
	size?: string
}>()

const icons = useIcons()

const computedIconName = computed(() => {
	if (!name) {
		return ''
	}
	return `#${icons[name]}`
})

const computedIconSize = computed(() => {
	return `${size}px`
})
</script>

<template>
	<svg
		v-if="computedIconName"
		viewBox="0 0 100 100"
		class="icon"
	>
		<use :xlink:href="computedIconName" />
	</svg>
</template>

<style scoped>
svg {
	width: v-bind(computedIconSize);
	height: v-bind(computedIconSize);
}
</style>

<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon.vue'

const { type = 'button', variant = 'primary', icon = null, disabled = false } = defineProps<{
	type?: 'button' | 'submit'
	variant?: 'primary' | 'ghost'
	icon?: keyof typeof _icons
	iconSize?: string
	disabled?: boolean
}>()

const _icons = useIcons()
</script>

<template>
	<button
		class="rounded transition-colors duration-100 disabled:opacity-50 disabled:bg-zinc-500 disabled:text-zinc-800"
		:class="{
			'bg-indigo-500 hover:bg-indigo-400 p-2': variant === 'primary' && !icon,
			'p-1 text-zinc-500 hover:text-zinc-200': variant === 'ghost' || icon,
		}"
		:type="type"
		:disabled="disabled"
	>
		<slot></slot>
		<BaseIcon
			v-if="icon"
			:name="icon"
			:size="iconSize"
		/>
	</button>
</template>

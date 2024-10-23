<script setup lang="ts">
import BaseIcon from '@/components/base/BaseIcon.vue'
import { useIcons } from '@/composables/useIcons'

const { type = 'button', variant = 'primary', icon = null, disabled = false } = defineProps<{
	type?: 'button' | 'submit'
	variant?: 'primary' | 'danger'
	icon?: keyof typeof _icons
	iconSize?: string
	disabled?: boolean
}>()

const _icons = useIcons()
</script>

<template>
	<button
		class="rounded-md transition-colors text-[14px] h-9 font-medium duration-100 disabled:bg-zinc-100 disabled:text-zinc-500 disabled:cursor-not-allowed"
		:class="{
			' bg-zinc-950 hover:bg-zinc-925 text-zinc-50': variant === 'primary',
			'bg-red-500 hover:bg-red-400 text-red-100': variant === 'danger',
			'px-3': !icon,
			'flex items-center justify-center min-w-9': icon,
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

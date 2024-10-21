<script setup lang="ts">
const { type = 'button', variant = 'primary', disabled = false } = defineProps<{
	type?: 'button' | 'submit'
	variant?: 'primary' | 'delete'
	disabled?: boolean
}>()
</script>

<template>
	<button
		class="rounded transition-colors duration-100 disabled:opacity-50 disabled:bg-zinc-500 disabled:text-zinc-800"
		:class="{
			'bg-indigo-500 hover:bg-indigo-400 p-2': variant === 'primary',
			'p-1 text-zinc-500 hover:text-zinc-200': variant === 'delete',
		}"
		:type="type"
		:disabled="disabled"
	>
		<slot></slot>
	</button>
</template>

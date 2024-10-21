<script setup lang="ts">
const { type = 'button', variant = 'primary' } = defineProps<{
	type?: 'button' | 'submit'
	variant?: 'primary' | 'delete'
}>()
</script>

<template>
	<button
		class="p-2 bg-zinc-800 rounded transition-colors duration-100"
		:class="{
			'bg-indigo-500 hover:bg-indigo-400': variant === 'primary',
			'bg-red-500 hover:bg-red-400': variant === 'delete',
		}"
		:type="type"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
defineProps<{
	id?: string
	label?: string
	placeholder: string
}>()

const modelValue = defineModel<string>()
</script>

<template>
	<label
		v-if="label"
		:for="id"
		class="flex flex-col gap-1"
	>
		{{ label }}
	</label>
	<input
		:id="id"
		v-model="modelValue"
		class="border border-zinc-700 p-2 bg-zinc-800 rounded w-full"
		:placeholder="placeholder"
	/>
</template>

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
		class="border border-zinc-200 px-2 h-9 bg-white text-[14px] rounded-md w-full"
		:placeholder="placeholder"
		autocomplete="off"
	/>
</template>

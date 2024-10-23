<script setup lang="ts">
const modelValue = defineModel<boolean>({ required: true })
</script>

<template>
	<label class="inline-flex cursor-pointer items-center">
		<input
			v-model="modelValue"
			type="checkbox"
			class="sr-only peer"
		>
		<div
			class="peer
			relative
			h-6
			w-10
			rounded-full
			border
			border-zinc-200
			bg-zinc-100
			peer-focus:outline-none
			after:absolute
			after:shadow-sm
			after:start-[1px]
			after:top-[1px]
			after:h-[20px]
			after:w-[20px]
			after:rounded-full
			after:border
			after:border-zinc-200
			after:bg-white
			after:transition-all
			after:duration-200
			after:ease-in-out
			after:content-['']
			peer-checked:bg-zinc-925
			peer-checked:after:translate-x-[16px]
			peer-checked:after:border-white

			"
		></div>
	</label>
</template>

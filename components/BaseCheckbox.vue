<script setup lang="ts">
defineProps<{
	id: string
}>()

const isChecked = defineModel<boolean>()
</script>

<template>
	<label
		:for="id"
		class="min-w-5 min-h-5 border rounded-[7px] group inline-flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out"
		:class="{
			'bg-indigo-500 border-indigo-600': isChecked,
			'border-zinc-500': !isChecked,
		}"
	>
		<input
			:id="id"
			v-model="isChecked"
			type="checkbox"
			hidden
			:checked="isChecked"
		>
		<div
			class="absolute"
			:class="{
				'group-hover:block hidden text-zinc-500': !isChecked,
				'block': isChecked,
			}"
		>
			<svg
				id="material-symbols-check-rounded"
				viewBox="0 0 24 24"
				class="w-4 h-4"
			><path
				fill="currentColor"
				d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
			/>
			</svg>
		</div>
	</label>
</template>

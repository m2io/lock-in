<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon.vue'

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
			<BaseIcon name="checkmark" />
		</div>
	</label>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseToggle from '@/components/base/BaseToggle.vue'
import { useWebsiteController } from '@/composables/useWebsiteController'

const { state, deleteWebsiteEntry } = useWebsiteController()
</script>

<template>
	<ul
		v-if="state.websites.length"
		class="flex flex-col gap-y-2 p-4 max-h-[291px] overflow-y-auto scrollbar"
	>
		<li
			v-for="(site, index) in state.websites"
			:key="site.url"
			class="flex items-center gap-x-2"
		>
			<BaseToggle v-model="site.blocked" />

			<BaseInput
				v-model="site.url"
				placeholder="youtube.com/shorts or x.com"
			/>

			<BaseButton
				variant="danger"
				icon="delete"
				@click="deleteWebsiteEntry(index)"
			/>
		</li>
	</ul>
</template>

<style scoped>
ul {
	scrollbar-width: thin;
}
</style>

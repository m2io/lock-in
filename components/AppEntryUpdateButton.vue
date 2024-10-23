<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { useWebsiteController } from '@/composables/useWebsiteController'
import { ref, watch } from 'vue'

const { state, initialWebsitesState, updateWebsiteEntries } = useWebsiteController()

const updateButtonDisabled = ref(true)
watch(
	() => state.value.websites,
	(nv) => {
		if (nv.length !== 0 && nv.length === initialWebsitesState.value.length) {
			const currentStateChanged = nv.some((site, index) => {
				if (site.blocked !== initialWebsitesState.value[index].blocked || site.url !== initialWebsitesState.value[index].url) {
					return true
				}

				return false
			})

			updateButtonDisabled.value = !currentStateChanged
		}
	},
	{
		deep: true,
	},
)

async function handleUpdate() {
	await updateWebsiteEntries()
	updateButtonDisabled.value = true
}
</script>

<template>
	<BaseButton
		v-if="state.websites.length"
		class="w-full mt-auto"
		:disabled="updateButtonDisabled"
		@click="handleUpdate"
	>
		Sync changes
	</BaseButton>
</template>

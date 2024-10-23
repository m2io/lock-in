<script setup lang="ts">
import AppIconsSprite from '@/components/AppIconsSprite.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseInput from '@/components/BaseInput.vue'

import { useWebsiteController } from '@/composables/useWebsiteController'
import { onMounted, ref, watch } from 'vue'

const { state, initialWebsitesState, createWebsiteEntry, getWebsiteEntries, updateWebsiteEntries, deleteWebsiteEntry } = useWebsiteController()

onMounted(async () => {
	await getWebsiteEntries()
})

const newWebsite = ref('')
async function handleSubmit() {
	await createWebsiteEntry({ url: newWebsite.value, blocked: true })
	newWebsite.value = ''
}

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
	<AppIconsSprite />
	<article class="flex flex-col gap-y-4 p-4">
		<form
			class="flex gap-x-2"
			@submit.prevent="handleSubmit"
		>
			<BaseInput
				id="new-website"
				v-model="newWebsite"
				placeholder="youtube.com/shorts, x.com"
			/>
			<BaseButton
				type="submit"
				class="whitespace-nowrap"
			>
				Block Site
			</BaseButton>
		</form>
		<ul
			v-if="state.websites.length"
			class="flex flex-col gap-y-2"
		>
			<li
				v-for="(site, index) in state.websites"
				:key="index"
				class="flex items-center gap-x-4"
			>
				<BaseCheckbox
					:id="`checkbox-${index}`"
					v-model="site.blocked"
				/>
				<BaseInput
					v-model="site.url"
					placeholder="youtube.com/shorts or x.com"
				/>

				<BaseButton
					variant="ghost"
					icon="delete"
					@click="deleteWebsiteEntry(index)"
				/>
			</li>
		</ul>
		<BaseButton
			v-if="state.websites.length"
			class="w-full"
			:disabled="updateButtonDisabled"
			@click="handleUpdate"
		>
			Sync changes
		</BaseButton>
	</article>
</template>

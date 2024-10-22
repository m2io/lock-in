<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseInput from '@/components/BaseInput.vue'

import { useWebsiteController } from '@/composables/useWebsiteController'
import { ref } from 'vue'

const { state, initialWebsitesState, createWebsiteEntry, updateWebsiteEntries, deleteWebsiteEntry } = useWebsiteController()

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
	<div class="p-4 flex flex-col gap-y-4">
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
					variant="delete"
					@click="deleteWebsiteEntry(index)"
				>
					<svg
						class="w-5 h-5"
						viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13zm5 7.9l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"
					/></svg>
				</BaseButton>
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
	</div>
</template>

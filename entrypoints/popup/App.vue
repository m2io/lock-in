<script setup lang="ts">
import AppCreateEntryForm from '@/components/AppCreateEntryForm.vue'
import AppEntryList from '@/components/AppEntryList.vue'
import AppEntryUpdateButton from '@/components/AppEntryUpdateButton.vue'
import BaseIconSprite from '@/components/base/BaseIconSprite.vue'

import { useWebsiteController } from '@/composables/useWebsiteController'
import { onMounted } from 'vue'

const { getWebsiteEntries, state } = useWebsiteController()

onMounted(async () => {
	await getWebsiteEntries()
})
</script>

<template>
	<BaseIconSprite />
	<main class="h-full flex flex-col">
		<section class="px-3 pt-4 pb-2 border-b border-zinc-200">
			<AppCreateEntryForm />
		</section>
		<section class="flex-1">
			<AppEntryList v-if="state.websites.length" />
			<div
				v-else
				class="flex justify-center items-center h-full"
			>
				<p class="text-zinc-400 text-lg font-medium">
					Start blocking websites and get back to work.
				</p>
			</div>
		</section>

		<section class="p-4 border-t border-zinc-200 empty:hidden">
			<AppEntryUpdateButton />
		</section>
	</main>
</template>

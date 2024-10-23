<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import { useWebsiteController } from '@/composables/useWebsiteController'
import { ref } from 'vue'

const { createWebsiteEntry } = useWebsiteController()

const newWebsite = ref('')

async function handleSubmit() {
	await createWebsiteEntry({ url: newWebsite.value, blocked: true })
	newWebsite.value = ''
}
</script>

<template>
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
			icon-size="20"
			icon="add"
		/>
	</form>
</template>

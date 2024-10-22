import { storage } from 'wxt/storage'

interface StorageState {
	websites: Website[]
}

export interface Website {
	url: string
	blocked: boolean
}

const sites = [
	{
		url: 'youtube.com',
		blocked: false,
	},
	{
		url: 'x.com',
		blocked: true,
	},
]

const state = ref<StorageState>({
	websites: sites,
})

const initialWebsitesState = ref<Website[]>(sites)

export function useWebsiteController() {
	async function getWebsiteEntries() {
		const storedWebsites = await storage.getItem<string>('local:websites')

		if (storedWebsites) {
			state.value.websites = JSON.parse(storedWebsites)
			initialWebsitesState.value = JSON.parse(storedWebsites)
		}
	}

	async function updateWebsiteEntries() {
		const currentStateStringified = JSON.stringify(state.value.websites)
		await storage.setItem('local:websites', currentStateStringified)
		initialWebsitesState.value = JSON.parse(currentStateStringified)
	}

	async function createWebsiteEntry(website: Website) {
		if (state.value.websites.find((w) => w.url === website.url)) {
			return
		}

		state.value.websites.push(website)
		const currentStateStringified = JSON.stringify(state.value.websites)
		await storage.setItem('local:websites', currentStateStringified)
		initialWebsitesState.value = JSON.parse(currentStateStringified)
	}

	async function deleteWebsiteEntry(index: number) {
		state.value.websites.splice(index, 1)
		const currentStateStringified = JSON.stringify(state.value.websites)
		await storage.setItem('local:websites', currentStateStringified)
		initialWebsitesState.value = JSON.parse(currentStateStringified)
	}

	return {
		state,
		initialWebsitesState,
		createWebsiteEntry,
		getWebsiteEntries,
		updateWebsiteEntries,
		deleteWebsiteEntry,
	}
}

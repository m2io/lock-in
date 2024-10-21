import { browser } from 'wxt/browser'

export default defineBackground({
	// Set manifest options
	persistent: true,
	type: 'module',

	main() {
		const { state, getWebsiteEntries } = useWebsiteController()

		browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
			if (changeInfo.status === 'complete' && tab.url) {
				await getWebsiteEntries()
				const currentUrl = new URL(tab.url!).hostname

				const matchedWebsite = state.value.websites.find((site) => currentUrl.includes(site.url))
				if (!matchedWebsite) {
					return
				}

				if (matchedWebsite.blocked) {
					browser.tabs.update(tabId, { url: browser.runtime.getURL('/lock-in.html') })
				} else {
					// Implement time tracking logic here
					console.log(`Tracking time spent on ${currentUrl}`)
				}
			}
		})
	},
})

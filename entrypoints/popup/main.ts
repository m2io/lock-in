import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import '@/assets/tailwind.css'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: () => import('./pages/index.vue'),
		},
	],
})

const app = createApp(App)

app.use(router)

app.mount('#app')

//theme
import "primevue/resources/primevue.min.css"
import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primeflex/primeflex.css"

import "./assets/main.css"

import PrimeVue from 'primevue/config'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(PrimeVue)
app.use(pinia)
app.mount('#app')

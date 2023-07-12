//theme
import "primevue/resources/primevue.min.css"
import "primevue/resources/themes/md-light-indigo/theme.css"
import "primeflex/primeflex.css"
import 'primeicons/primeicons.css';


import "./assets/main.css"

import PrimeVue from 'primevue/config'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)

app.mount('#app')

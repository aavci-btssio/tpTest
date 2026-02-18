import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Injection du routeur dans notre application
app.use(router)
// Injection du store Pinia
app.use(createApp())

app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'

// import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia).use(ElementPlus)

app.mount('#app')

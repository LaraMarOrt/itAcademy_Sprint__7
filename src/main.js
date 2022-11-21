// Sin Bootstrap
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
// --------------------------------


// Introduciendo Bootstrap

//  import { createApp, use } from 'vue'

// import App from './App.vue'
// import router from './router'
// import BootstrapVue from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// use(BootstrapVue)
// createApp(App).use(router).mount('#app')

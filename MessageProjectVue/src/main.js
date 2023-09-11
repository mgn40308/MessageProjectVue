import { createApp } from 'vue'
import App from './App.vue'
import List from './components/List.vue'
import AddMessage from './components/AddMessage.vue'
import Detail from './components/Detail.vue'
import Login from './components/Login.vue'
import store from './Store'
import bus from './Bus'
import router from './Route'

const app = createApp(App)
app.config.globalProperties.$mitt = bus;
app.use(router).use(store)
     .component('list', List)
     .component('addMessage', AddMessage)
     .component('detail', Detail)
     .component('login', Login)
     .mount('#app')



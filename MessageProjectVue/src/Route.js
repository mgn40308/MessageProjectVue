

import List from './components/List.vue'
import AddMessage from './components/AddMessage.vue'
import Detail from './components/Detail.vue'
import Login from './components/Login.vue'

import Father from './components/Father.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

    {
        path: '/Message/List',
        name: 'MessageList',
        component: List,
    },
    {
        path: '/Message/Detail',
        name: 'MessageDetail',
        component: Detail,

    },
    {
        path: '/Message/AddMessage',
        name: 'AddMessage',
        component: AddMessage,

    },
    {
        path: '/Member/Login',
        name: 'Login',
        component: Login,

    },
    {
        path: '/',
        name: 'Index',
        component: Father,

    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
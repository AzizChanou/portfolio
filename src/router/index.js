import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import Home from "../views/Home.vue"

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/:catchAll(.*)',
        component: Home,
        name: 'Home'
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
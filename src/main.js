import './assets/main.css'

import { createApp } from 'vue'
import * as VueRouter from "vue-router"
// import require from "webpack"
import App from './App.vue'
import HomeItem from "./pages/HomeItem.vue"
import ProjectsItem from "./pages/ProjectsItem.vue"
import AboutItem from "./pages/AboutItem.vue"
import GalleryItem from "./pages/GalleryItem.vue"

const routes = [
    { path: '/', component: HomeItem },
    { path: '/projects', component: ProjectsItem },
    { path: '/about', component: AboutItem },
    { path: '/gallery', component: GalleryItem },
    { path: '/:pathMatch(.*)', redirect: '/'}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

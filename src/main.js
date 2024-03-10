import './assets/main.css'

import { createApp } from 'vue'
import * as VueRouter from "vue-router"
// import require from "webpack"
import App from './App.vue'
import HomeItem from "./pages/HomeItem.vue"
import ProjectsItem from "./pages/ProjectsItem.vue"
import AboutItem from "./pages/AboutItem.vue"
import GalleryItem from "./pages/GalleryItem.vue"
import i18n from './i18n'

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

// determines if the user has a set theme
function detectColorScheme() {
    var theme = "dark";    // default to dark

    // local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") == "light"){
            theme = "light";
        }
    } else if (!window.matchMedia) {
        // matchMedia method not supported
        return false;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        // OS theme setting detected as white
        theme = "light";
    }

    // white theme preferred, set document with a `data-theme` attribute
    if (theme == "light") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')

detectColorScheme();

// identify the toggle switch HTML element
const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

// function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = false;
    }    
}

// listener for changing themes
toggleSwitch.addEventListener('change', switchTheme, false);

// pre-check the dark-theme checkbox if light-theme is set
if (document.documentElement.getAttribute("data-theme") == "light"){
    toggleSwitch.checked = true;
}
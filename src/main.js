import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";
// import './style.css'
import './index.css'
import App from './App.vue'

import Home from './components/Home.vue'
import Pricing from './components/Pricing.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/pricing', component: Pricing},
    ]
});

createApp(App)
    .use(router)
    .mount('#app')

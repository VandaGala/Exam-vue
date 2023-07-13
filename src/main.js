import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Group from './components/Group.vue';
import Class from './components/Class.vue';

let routes = [
    { path: '/class', component: Class },
    { path: '/group', component: Group },   
]

let router = createRouter({
    history: createWebHashHistory(),
    routes
});

let va = createApp(App);
va.use(router);
va.mount('#app');

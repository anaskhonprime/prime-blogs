import { createWebHistory, createRouter } from "vue-router";

import Home from '../components/Home'


import Login from '../account/Login'
import Register from '../account/Register'
import Dashboard from '../account/Dashboard'


const routes = [{
        path: '/',
        component: Home,
    },

    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    }, {
        path: '/Dashboard',
        component: Dashboard,
    },

];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
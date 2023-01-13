import { createWebHistory, createRouter } from "vue-router";

import Home from '../components/Home'


import Login from '../account/Login'
import Register from '../account/Register'
import Admin from '../account/Admin'

import Overview from '../account/Overview'
import Activity from '../account/Activity'
import Users from '../account/Allusers'
import Display from '../account/Display'
import Blogs from '../account/Blogs'
import Drafts from '../account/Drafts'

import UserDashboard from '../account/user/UserDashboard'




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
    },

    {
        path: '/dashboard',
        component: UserDashboard,
    },
    {
        path: '/admin',
        component: Admin,
        children: [{
                path: 'overview',
                name: 'overview',
                component: Overview,
            },
            {
                path: 'activity',
                name: 'activity',
                component: Activity,
            },
            {
                path: 'users',
                name: 'Users',
                component: Users,
            },
            {
                path: 'display',
                name: 'display',
                component: Display,
            },
            {
                path: 'blogs',
                name: 'Blogs',
                component: Blogs,
            },
            {
                path: 'drafts',
                name: 'Drafts',
                component: Drafts,
            },

        ]
    },

];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
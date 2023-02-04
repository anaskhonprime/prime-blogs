import { createWebHistory, createRouter } from "vue-router";


import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { db, auth } from '../main.js'

import Home from '../components/Home'
import NewUpload from "../components/UploadBlog";
import Login from '../account/Login'
import Register from '../account/Register'
import Admin from '../account/Admin'

import Overview from '../account/Overview'
import Activity from '../account/Activity'
import Users from '../account/Allusers'
import Display from '../account/Display'
import Blogs from '../account/Blogs'
import Drafts from '../account/Drafts'
import Upload from '../account/Upload'

import General from '../account/General'



import UserDashboard from '../account/user/UserDashboard'


const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/uploadblogs",
    component: NewUpload,
  },

  {
    path: "/dashboard",
    component: UserDashboard,
    //meta: { requiresAuth: true },
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: "overview",
        name: "overview",
        component: Overview,
      },
      {
        path: "general",
        name: "general",
        component: General,
      },
      {
        path: "upload",
        name: "upload",
        component: Upload,
      },
      {
        path: "activity",
        name: "activity",
        component: Activity,
      },
      {
        path: "users",
        name: "Users",
        component: Users,
      },
      {
        path: "display",
        name: "display",
        component: Display,
      },
      {
        path: "blogs",
        name: "Blogs",
        component: Blogs,
      },
      {
        path: "drafts",
        name: "Drafts",
        component: Drafts,
      },
    ],
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/login')
        alert("Please login!")

    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router;
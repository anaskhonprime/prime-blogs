import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router.js';
import './style/tailwind.css';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDIdYii98QJzN2I9_LWaBn42WGwbuz3km8",
    authDomain: "vueblog-13514.firebaseapp.com",
    projectId: "vueblog-13514",
    storageBucket: "vueblog-13514.appspot.com",
    messagingSenderId: "5840313268",
    appId: "1:5840313268:web:d33d3720ad95afcc5cb0e1",
    measurementId: "G-BH06B8ZTFV"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

/* firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
    } else {
        // No user is signed in.
    }
}); */

createApp(App).use(router).mount('#app')
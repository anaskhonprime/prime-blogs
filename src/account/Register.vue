<template>
  <section class="bg-purple-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="w-8 h-8 mr-2" src="../images/main.png" />
        Prime Blogs
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
         
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Username</label
              >
              <input
                v-model="username"
                type="username"
                name="username"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
                required=""
              />
            </div>            
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

           

            <div class="flex items-center justify-between">
              <div class="flex items-start">
               
                
              </div>
              
              
            </div>
            <div class="flex items-center justify-center">
              <button
                @click ="register"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-10  py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Start Now
              </button>
            </div>

            <div
              class="flex items-center my-6 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
              <p class="text-center font-medium mx-4 mb-0">OR</p>
            </div>

            <div
              class="flex flex-row items-center justify-center lg:justify-center"
            >
              <p class="text-medium mb-0 mr-4 hidden lg:flex">Start With</p>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
              </button>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-yellow-300 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <img
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-5 h-5"
                  src="../images/kakao-talk.png"
                />
              </button>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block p-3 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="ml-0.5 w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32
                    14.3 32 32V448c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4V448c0
                    17.7-14.3 32-32 32s-32-14.3-32-32V64C0 50.5 8.4 38.5 21.1 33.9z"
                  />
                </svg>
              </button>
            </div>

            <div class="text-center">
              <p
                class="text-sm pr-2 mt-3 font-light text-gray-600 dark:text-gray-400"
              >
                Don’t have an account yet?
                <router-link
                  to="/register"
                  class="font-bold pl-2 text-primary-600 hover:underline dark:text-primary-500"
                  >Sign up</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {db, auth} from '../main.js'


import Navbar from '../components/Navbar'
export default {
  data(){
    return {
      username : '',
      email : '',
      password: '',
    }
  },
  components: {
    Navbar
  },

  methods: {
    register(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(()=>{
        console.log('User' + this.email)
        alert("Congrats, Welcome to the Prime Blogs.");
        this.$router.replace('login')
      }).catch((error)=>{
        var errorCode  = error.code;
        var errorMessage = error.message;
        if(errorCode == 'auth/weak-password'){
          alert(errorMessage);
        }
        console.log(error);
      });

    }

  },
}
</script>

<style></style>

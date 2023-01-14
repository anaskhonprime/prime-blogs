<template>  

      <div class="w-full">

        

        <div class="bg-green-600 pt-8 pb-16 relative z-10">
          <div
            class="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between"
          >
            <div class="flex-col flex lg:flex-row items-start lg:items-center">
              <div class="ml-0 my-6 lg:my-0">
                <h4 class="text-2xl ml-2 font-bold leading-tight text-white mb-2">
                  Upload Page
                </h4>
                <p class="flex items-center text-gray-300 text-xs  " >
                  <div class="mt-3 ml-2 text-sm" >
                  <router-link to="/" class="cursor-pointer rounded-lg hover:bg-green-500 p-2">Admin Panel</router-link>
                
                  <span class="mx-1">&gt;</span>
                  <router-link to="admin/users" class="cursor-pointer">Upload </router-link>
                  </div>
                </p>
              </div>
            </div>
            <div class="mr-5">
               
                <router-link to ="/" 
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 mr-3 bg-transparent transition duration-150 ease-in-out rounded hover:bg-green-500 text-white px-5 py-2 text-base font-medium border border-white hover:border-green-600"
              >
                Home
              </router-link>

             
              <router-link to="admin/blogs"
                class=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition duration-150 ease-in-out hover:bg-grey-200 border bg-white rounded text-green-700 px-8 py-2 font-medium text-base"
              >
                Drafts
              </router-link>
            </div>
          </div>
        </div>

        <div >

        <div>

        <div  class="flex items-center justify-center w-full p-10 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
           

            <div class="px-10 py-10 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Simple Upload Page</h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input v-model="blog.title" type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Title" required>
                    </div>
                    <div>
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input v-model="blog.writer" type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Author" required>
                    </div>

                    <!-- <div>
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input v-model="blog.date" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required>
                    </div> -->

                    <div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Intro Text</label>
    <input v-model="blog.intro" type="text" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
</div>

                    <div class="flex justify-between">
                       
                        
                    </div>
                    <button

                    @click="upload" 
                    
                    type="submit" 
                    class="w-full text-white bg-blue-700 
                    hover:bg-blue-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Upload</button>
                    
                </form>

                
            </div>
        </div>
    </div>
</div> 

        </div>
            


        </div>
    

    </div>
    
    
</template>

<script>


import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {db, auth} from '../main.js'

import { collection, addDoc } from "firebase/firestore";



export default {

    data(){
        return {
            blog: {
                title : '',
                writer : '',
                intro: '',

            }
        }
    },

    methods:{

    upload(){
    db.collection("blogs").add({ first: "Ada", last: "Lovelace", born: 1815 })

    .then((docRef) => {
        alert("Completed!")
    console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
    console.error("Error adding document: ", error);
    })
    }

    }    
}
</script>

<style>

</style>

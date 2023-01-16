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
               
                <div class="space-y-3">

                    
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                       <input  type="text" id="disabled-input" aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Prime Blogs" disabled>
                    </div>


                    <div>
                        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input v-model="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Title" required>
                    </div>

                    <label for="category"
  class="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
>Category</label>
<select
  v-model ="category"
  id="countries"
  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
>
  <option disabled value="">Select the Category</option>
  <option v-for="(a,i) in type" :key="a">{{type[i].name}}</option>
</select>


<!-- <label class="block mb-2 text-sm mt-4 font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
 -->

                   <div class="mb-6 mt-4">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Link</label>
    <input v-model="img" type="text" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
</div>
 

                    <div class="mb-6 mt-4">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Intro Text</label>
    <input v-model="intro" type="text" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
</div>

                    <div class="flex justify-between">
                       
                        
                    </div>
                    <button

                    @click="addBlog"

                    button ="submit" 
                    
                   
                    class="w-full text-white bg-blue-700 
                    hover:bg-blue-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Upload</button>
                    
                </div>

                
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

import Categories from '../data/categories.js'

export default {

  data() {
    return {

      type : Categories,

      writer: "Prime Blogs",
      
      category : "",
      title : "", 
      intro : "",
      img : "",
      createdAt : null,
    }
  },
    methods: {

    addBlog(){

      const product = {

        author: "Prime Blogs",
        title: this.title,
        intro : this.intro,
        image : this.img,
        category : this.category,
        createdAt: new Date(),
      }
  db.collection("blogs").doc().set(product, { merge: true })
  .then(() => {
  alert("Done");
  product = null;
   
 })
 .catch((error) => {
    console.error("Error writing document: ", error);  
 });
    },    
    }    
}
</script>

<style>

</style>

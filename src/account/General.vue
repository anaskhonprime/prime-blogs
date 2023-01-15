<template>  


       <div class="w-full">
          <div class="bg-green-500 pt-8 pb-16 relative z-10">
          <div
            class="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between"
          >
            <div class="flex-col flex lg:flex-row items-start lg:items-center">
              <div class="ml-0 my-6 lg:my-0">
                <h4 class="text-2xl ml-2 font-bold leading-tight text-white mb-2">
                  General 
                </h4>
                <p class="flex items-center text-gray-300 text-xs  " >
                  <div class="mt-3 ml-2 text-sm" >
                  <router-link to="/" class="cursor-pointer rounded-lg hover:bg-green-500 p-2">Admin Panel</router-link>
                
                  <span class="mx-1">&gt;</span>
                  <router-link to="admin/users" class="cursor-pointer"> General </router-link>
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

    <div>

    <div class=" hidden lg:flex flex-col lg:w-full lg:flex-row items-center lg:justify-evenly justify-center">
          
    <div class="w-72 flex flex-row m-5 p-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
   
        <div class="flex items-center mr-10 p-5">
            <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-10 h-10 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>

            </svg>
         </div>
    
        <div class="flex flex-col justify-center items-center ">
           <h5 class="mb-1 text-xl font-bold text-green-700 dark:text-white">808</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">Total Users</span>
        
        </div>
       
       
       </div>

       <div class="w-72 flex flex-row m-5 p-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
   
        <div class="flex items-center mr-10 p-5">
            <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-10 h-10 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>

            </svg>
         </div>
    
        <div class="flex flex-col justify-center items-center ">
           <h5 class="mb-1 text-xl font-bold text-green-700 dark:text-white">22</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">Total Uploded</span>
         </div>
    

       </div>

       <div class="w-72 flex flex-row m-5 p-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
   
        <div class="flex items-center mr-10 p-5">
            <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-10 h-10 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>

            </svg>
         </div>
    
        <div class="flex flex-col justify-center items-center ">
           <h5 class="mb-1 text-xl font-bold text-green-700 dark:text-white">1528</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">Total Stars</span>
         </div>
    

       </div>

       <div class="w-72 flex flex-row m-5 p-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
   
        <div class="flex items-center mr-10 p-5">
            <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-10 h-10 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"></path>

            </svg>
         </div>
    
        <div class="flex flex-col justify-center items-center ">
           <h5 class="mb-1 text-xl font-bold text-green-700 dark:text-white">20K</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">Total Visitors</span>
         </div>
    

       </div>
        </div>


        <div>
            
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
       
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
            <ul class="py-1" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>

        </div>






      </div>
    </div>

        

    
    
</template>

<script>
export default {

}
</script>

<style>

</style>

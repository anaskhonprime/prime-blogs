<template>  

      <div class="w-full">

        <nav
          class="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10"
         >
          <div class="hidden lg:flex w-full">
            <div class="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
              <div class="relative w-full">
                <div class="text-blue-700 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg3.svg"
                    alt="Search"
                  />
                </div>
                <input
                  class="border border-gray-100 focus:outline-none focus:border-indigo-700  rounded w-full text-sm text-gray-600 placeholder-gray-600 bg-gray-100 pl-12 py-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>

            <div class="w-1/2 hidden lg:flex">
              <div class="w-full flex items-center pl-8 justify-end">
                <div
                  class="h-full w-20 flex items-center justify-center border-r border-l"
                >
                  <button
                    aria-label="open notifications"
                    class="relative cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg5.svg"
                      alt="notifications"
                    />
                    <div
                      class="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mt-1 mr-1 m-auto"
                    ></div>
                  </button>
                </div>
                <div
                  class="h-full w-20 flex items-center justify-center cursor-pointer text-gray-600"
                >
                  <button
                    onclick="toggleFAQSlideOver()"
                    aria-label="open chats"
                    class="focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg4.svg"
                      alt="chats"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            aria-label="Main Menu"
            class="text-gray-600 mr-8 visible lg:hidden relative focus:outline-none focus:ring-2 focus:ring-gray-600"
            onclick="sidebarHandler(true)"
            id="menu"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg7.svg"
              alt="toggler"
            />
          </button>
        </nav>

        <div class="bg-green-600 pt-8 pb-16 relative z-10">
          <div
            class="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between"
          >
            <div class="flex-col flex lg:flex-row items-start lg:items-center">
              <div class="ml-0 my-6 lg:my-0">
                <h4 class="text-2xl ml-2 font-bold leading-tight text-white mb-2">
                  User Info
                </h4>
                <p class="flex items-center text-gray-300 text-xs  " >
                  <div class="mt-3 ml-2 text-sm" >
                  <router-link to="/" class="cursor-pointer rounded-lg hover:bg-green-500 p-2">Admin Panel</router-link>
                
                  <span class="mx-2">&gt;</span>
                  <router-link to="admin/users" class="cursor-pointer">User Info</router-link>
                  </div>
                </p>
              </div>
            </div>
            <div class="mr-5">
              <router-link to="/"
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
    

      </div>
    
    
</template>

<script>
export default {

}
</script>

<style>

</style>

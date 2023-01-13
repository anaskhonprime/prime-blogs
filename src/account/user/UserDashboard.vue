<template>
  <div class="w-full h-full bg-purple-50">
    <div class="flex flex-no-wrap">
      <!-- Sidebar starts -->

      <div
        id="navbar-search"
        class="flex lg:relative w-64 z-0 h-full lg:h-screen shadow bg-gray-100 hidden lg:block"
      >
        <div class="flex flex-col justify-between h-screen bg-white border-r">
          <div class="px-4 py-3">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="true"
              class="block lg:hidden mt-5 align-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 opacity-80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <h4
              class="text-2xl font-bold leading-tight mt-10 text-green-800 mb-2"
            >
              Prime Blogs
            </h4>

            <nav class="flex flex-col mt-6 space-y-3">
              <a
                href=""
                class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span class="ml-3 text-md font-medium"> General </span>
              </a>

              <a
                href=""
                class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>

                <span class="ml-3 text-md font-medium"> Calendar </span>
              </a>

              <a
                href=""
                class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>

                <span class="ml-3 text-md font-medium"> Liked </span>
              </a>

              <a
                href=""
                class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  ></path>
                </svg>

                <span class="ml-3 text-md font-medium"> Saved </span>
              </a>

              <details class="group">
                <summary
                  class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span class="ml-3 text-md font-medium"> Account </span>

                  <span
                    class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <nav class="mt-1.5 ml-8 flex flex-col">
                  <a
                    href=""
                    class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      ></path>
                    </svg>

                    <span class="ml-3 text-md font-medium">Settings</span>
                  </a>

                  <a
                    href=""
                    class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>

                    <span class="ml-3 text-md font-medium"> Details </span>
                  </a>

                  <a
                    href=""
                    class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>

                    <span class="ml-3 text-md font-medium"> Security </span>
                  </a>

                  <a
                    href=""
                    class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"
                      ></path>
                    </svg>

                    <span class="ml-3 text-md font-medium"> Edit Account </span>
                  </a>

                  <form action="">
                    <button
                     data-modal-target="popup-modal" data-modal-toggle="popup-modal"

                      type="button"

                      class="flex items-center w-full px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>

                      <span class="ml-3 text-md font-medium"> Logout </span>
                    </button>

                    <button
                      type="submit"
                      class="flex items-center w-full px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>

                      <span class="ml-3 text-md font-medium"> Delete </span>
                    </button>
                  </form>
                </nav>
              </details>
            </nav>
          </div>

          <div class="sticky inset-x-0 bottom-10 border-t border-gray-300">
            <a
              href=""
              class="flex items-center mr-3 p-4 bg-white hover:bg-gray-50 shrink-0"
            >
              <img
                class="object-cover w-10 h-10 rounded-full"
                src="@/images/profile.jpg"
              />

              <div class="ml-1.5">
                <p class="text-xs">
                  <strong class="block font-medium">Username</strong>

                  <span> user@name.com </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!--Mobile responsive sidebar-->

      <!-- Sidebar ends -->
      <div class="w-full">
        <!-- Navigation starts -->
        <nav
          class="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white z-10"
        >
          <div class="flex md:order-2">
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class="inline-flex items-center sticky p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <!-- Navigation ends -->
        <!-- Remove class [ h-64 ] when adding a card block -->
        <!-- Page title starts -->
        <div class="bg-green-500 pt-8 pb-16 relative z-10">
          <div
            class="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between"
          >
            <div class="flex-col flex lg:flex-row items-start lg:items-center">
              <div class="ml-0 my-6 lg:my-0">
                <h4
                  class="text-md lg:text-2xl font-bold leading-tight text-white mb-2"
                >
                  User Dashboard
                </h4>
                <p class="flex items-center text-gray-300 text-xs lg:text-sm">
                  <span class="cursor-pointer">User Dashboard</span>
                  <span class="mx-2">&gt;</span>
                  <span class="cursor-pointer">General</span>
                </p>
              </div>
            </div>
            <div>
              <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 mr-3 bg-transparent transition duration-150 ease-in-out rounded hover:bg-green-400 text-white px-5 py-2 font-medium text-sm lg:text-base border border-white"
              >
                Back
              </button>
              <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-700 transition duration-150 ease-in-out hover:bg-green-200 border font-medium bg-white rounded text-green-700 px-5 mt-1 py-2 text-sm lg:text-base"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div>
          



          <div
            id="popup-modal"
            tabindex="-1"
            class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div class="relative w-full h-full max-w-md md:h-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>

                
                <div class="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3
                    class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                  >
                    Are You Sure You Want to Sign Out?
                  </h3>
                  <button
                    @click="logout"
                    data-modal-hide="popup-modal"
                    type="submit"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Sign Out
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Never Mind
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Page title ends -->
        <div class="container px-6 mx-auto">
          <!-- Remove class [ h-64 ] when adding a card block -->
          <div
            class="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full h-64"
          >
            <!--  content here -->

            <div
              id="faq-slide-over"
              class="fixed inset-0 overflow-hidden z-100 hidden"
              aria-labelledby="slide-over-title"
              role="dialog"
              aria-modal="true"
            >
              <div class="absolute inset-0 overflow-hidden">
                <!-- Background overlay, show/hide based on slide-over state. -->
                <div class="absolute inset-0" aria-hidden="true">
                  <div
                    class="fixed inset-y-0 pl-16 max-w-full right-0 flex"
                  ></div>
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

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export default {
  methods: {
    logout () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/')
        })
        .catch(error => {
          alert('Error ' + error.message)
        })
    }
  }
}
</script>

<style></style>

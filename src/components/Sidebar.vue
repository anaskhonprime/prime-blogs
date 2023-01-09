<template>
  <div class="flex" >
    <aside class="w-64 fixed left-0 top-20 mt-5 h-full z-0" aria-label="Sidebar">
      <div class="flex md:order-2">
        <button
          data-collapse-toggle="categories"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="categories"
          aria-expanded="false"
        >
          <span class="sr-only">Open Categories</span>
          <svg
            aria-hidden="true"
            class="flex-shrink-0 ml-3 mt-3 w-7 h-7 text-purple-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
        </button>
      </div>

      <div class="hidden md:flex md:order-1" id="categories">
        <div
          class="px-5 py-5 pr-20 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-screen"
        >
          <ul class="space-y-2">
            <li>
              <a
                href=""
                class="flex items-center p-2 text-2xl font-bold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
                <span class="ml-3">Categories</span>
                <span
                  class="inline-flex items-center justify-center w-4 h-4 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
                  >8
                </span>
              </a>
            </li>

            <div v-for="(a, i) in category" :key="a">
              <li>
                <a
                  href="#"
                  class="flex items-center p-1 ml-5 text-lg font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-100 hover:p-2 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>

                  <span class="flex-1 ml-3 whitespace-nowrap">{{
                    category[i].name
                  }}</span>
                </a>
              </li>
            </div>
          </ul>

          <ul
            class="pt-4 mt-4 ml-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
          >
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-blue-900 bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Discover
              <svg
                class="w-4 h-4 ml-1"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              id="dropdown"
              class="z-10 hidden ml-5 bg-purple-50 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-base text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <div v-for="(a, i) in discover" :key="a">
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 ml-5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                        ></path>
                      </svg>

                      <span class="flex-1 ml-3 whitespace-nowrap">{{
                        discover[i]
                      }}</span>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </ul>

          <div class="mt-5 ml-5">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="social"
              class="text-purple-900 bg-purple-100 hover:bg-purple-200 focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              type="button"
            >
              Social
              <svg
                class="w-4 h-4 ml-7"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id="social"
              class="z-10 hidden ml-5 mb-5 bg-purple-50 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-base text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <div>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 ml-5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                        ></path>
                      </svg>

                      <span class="flex-1 ml-3 whitespace-nowrap">GitHub</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 ml-5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                        ></path>
                      </svg>

                      <span class="flex-1 ml-3 whitespace-nowrap">Guide</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 ml-5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
                        ></path>
                      </svg>

                      <span class="flex-1 ml-3 whitespace-nowrap"
                        >Personal</span
                      >
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div class="mt-10 ml-5">
            <img
              id="avatarButton"
              type="button"
              data-dropdown-toggle="userDropdown"
              data-dropdown-placement="bottom-start"
              class="w-12 h-12 rounded-full cursor-pointer"
              src="../images/profile.jpg"
              alt="User dropdown"
            />
            <div class="text-bold text-xl mt-3">Prime Blogs</div>

            <div
              id="userDropdown"
              class="z-10 hidden bg-purple-50 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div class="px-5 py-3 text-base text-gray-900 dark:text-white">
                <div>Prime Blogs</div>
                <div class="font-medium truncate">hello@gmail.com</div>
              </div>
              <ul
                class="py-1 text-base text-gray-700 dark:text-gray-200"
                aria-labelledby="avatarButton"
              >
                <div v-for="(a, i) in profile" :key="a">
                  <li>
                    <a
                      href="#"
                      class="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >{{ profile[i] }}</a
                    >
                  </li>
                </div>
              </ul>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-5 mr-3 ml-3 py-2 text-base bg-purple-100 rounded-md text-grey-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>

   <main class="flex-1  md:order-2 ml-64 mt-20 sm:px-4">
            <div class="h-96 bg-amber-400 p-10">
                <h1 class="text-4xl">Top Content</h1>
            </div>
            <div class="h-96 bg-white p-10">
                <h1 class="text-4xl">Middle Content</h1>
            </div>
            <div class="h-96 bg-green-400 p-10">
                <h1 class="text-4xl">Middle Content</h1>
            </div>
            <div class="h-96 bg-indigo-400 p-10">
                <h1 class="text-4xl">Last Content</h1>
            </div>
        </main>

  </div>
</template>

<script>
import Categories from '../data/categories.js'

export default {
  data () {
    return {
      category: Categories,
      discover: ['Trends', 'Recently', 'Popular', 'All Blogs'],
      profile: ['Dashboard', 'Settings', 'Saved', 'History']
    }
  },
  methods: {}
}
</script>

<style></style>

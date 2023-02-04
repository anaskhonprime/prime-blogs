<template>
  <div class="flex">
    <aside class="flex sticky left-0 top-0 h-full" aria-label="Sidebar">
      <div class="hidden md:flex md:order-1" id="categories">
        <div
          class="px-5 py-5 pr-20 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-screen">
          <ul class="space-y-2">
            <li>
              <a
                href=""
                class="flex items-center p-2 text-2xl font-bold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span class="ml-3">Categories</span>
                <span
                  class="inline-flex items-center justify-center w-4 h-4 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  8
                </span>
              </a>
            </li>

            <div v-for="(a, i) in category" :key="a">
              <li>
                <a
                  class="flex items-center p-1 ml-5 text-lg font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-100  dark:hover:bg-gray-700">
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"></path>
                  </svg>

                  <span class="flex-1 ml-3 font-semibold text-green-700 whitespace-nowrap cursor-pointer">
                    {{ category[i].name }}
                  </span>
                </a>
              </li>
            </div>
          </ul>

          <ul
            class="pt-4 mt-4 ml-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-blue-900 bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button">
              Discover
              <svg
                class="w-4 h-4 ml-1"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div
              id="dropdown"
              class="z-10 hidden ml-5 bg-purple-50 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
              <ul
                class="py-2 text-base text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton">
                <div v-for="(a, i) in discover" :key="a">
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 ml-5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"></path>
                      </svg>

                      <span class="flex-1 ml-3 whitespace-nowrap">
                        {{ discover[i] }}
                      </span>
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
              type="button">
              Social
              <svg
                class="w-4 h-4 ml-7"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div
              id="social"
              class="z-10 hidden ml-5 mb-5 bg-purple-50 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
              <ul
                class="py-2 text-base text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton">
                <div>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 ml-5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"></path>
                      </svg>

                      <span class="flex-1 ml-3 whitespace-nowrap">GitHub</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 ml-5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"></path>
                      </svg>

                      <span class="flex-1 ml-3 whitespace-nowrap">Guide</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 ml-5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-5 h-5 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                      </svg>

                      <span class="flex-1 ml-3 whitespace-nowrap">
                        Personal
                      </span>
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
              alt="User dropdown" />
            <div class="text-bold text-xl mt-3">Prime Blogs</div>

            <div
              id="userDropdown"
              class="z-10 hidden bg-purple-50 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <div class="px-5 py-3 text-base text-gray-900 dark:text-white">
                <div>Prime Blogs</div>
                <div class="font-medium truncate">hello@gmail.com</div>
              </div>
              <ul
                class="py-1 text-base text-gray-700 dark:text-gray-200"
                aria-labelledby="avatarButton">
                <div v-for="(a, i) in profile" :key="a">
                  <li>
                    <router-link
                      to="/dashboard"
                      href="#"
                      class="block px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      {{ profile[i] }}
                    </router-link>
                  </li>
                </div>
              </ul>
              <div class="py-1">
                <a
                  href="#"
                  class="block px-5 mr-3 ml-3 py-2 text-base bg-purple-100 rounded-md text-grey-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <main class="flex flex-col w-full m-2">
      <div class="hidden md:flex items-center justify-center mt-6 mb-10">
        <button
          @click="disBlogs"
          class="text-orange-900 mr-5 bg-orange-100 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          type="button">
          All Blogs
          <svg
            class="w-5 h-5 ml-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
          </svg>
        </button>

        <button
          class="text-red-900 mr-5 bg-red-100 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button">
          Hot Trends
          <svg
            class="w-5 h-5 ml-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"></path>
          </svg>
        </button>

        <button
          @click="recently"
          class="text-green-900 mr-5 bg-green-100 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          type="button">
          Recently Uploaded
          <svg
            class="w-5 h-5 ml-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path>
          </svg>
        </button>

        <button
          class="text-blue-900 bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button">
          Popular
          <svg
            class="w-5 h-5 ml-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
          </svg>
        </button>
      </div>

      <!-- <div class="container mx-auto px-4 py-5">
        <div
          href=""
          class="flex items-center p-2 text-2xl font-bold text-purple-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg
            class="w-6 h-6 mr-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"></path>
          </svg>

          <span class="">Discover</span>
        </div>

        <div
          class="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="(a, i) in blogs"
            :key="blogs"
            class="px-0 lg:px-5 mt-3 lg:mt-1">
            <div
              class="h-96 rounded-lg bg-white overflow-hidden shadow-lg hover:-mt-1 hover:shadow-2xl hover:shadow-green-200">
              <img class="object-cover h-48 w-96" :src="a.image" />

              <div class="flex flex-col w-full">
                <div
                  class="flex items-center justify-center text-center font-bold text-base m-3 p-1 h-12">
                  {{ a.title }}
                </div>
                <p
                  class="text-ellipsis overflow-hidden text-center h-10 text-gray-700 p-1 text-sm m-1">
                  {{ a.intro }}
                </p>

                <div
                  class="flex flex-row justify-evenly text-gray-700 text-sm p-1 mt-5">
                  <div class="flex flex-row">
                    <svg
                      class="w-5 h-5 mx-1"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>

                    <p class="">
                      {{ dateTime(i.createdAt) }}
                    </p>
                  </div>

                  <div class="flex flex-row">
                    <svg
                      class="w-5 h-5 mx-1"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>

                    <p>77</p>
                  </div>

                  <div class="flex flex-row">
                    <svg
                      class="w-5 h-5 mx-1"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                    </svg>

                    <p>8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(a, i) in blogs" :key="blogs">
          <div
            class="flex justify-center items-center p-3 mt-1 rounded-t-xl bg-gray-50 cursor-pointer hover:-mt-1">
            <div class="flex flex-col rounded-2xl shadow-xl max-w-sm">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover rounded-t-lg"
                  :src="a.image" />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm leading-5 font-medium text-teal-600">
                    <a href="#" class="hover:underline">#{{ a.category }}</a>
                  </p>
                  <a href="#" class="block">
                    <h3 class="mt-2 text-lg h-12 font-semibold text-gray-900">
                      {{ a.title }}
                    </h3>
                    <p
                      class="text-ellipsis overflow-hidden h-12 mt-4 text-sm leading-6 text-gray-500">
                      {{ a.intro }}
                    </p>
                  </a>
                </div>
                <div class="mt-2">
                  <a
                    class="text-teal-400 hover:text-teal-900 text-sm transition duration-150 ease-in-out"
                    href="#">
                    Read more
                    <svg
                      class="chev inline-block ml-1 w-2 h-2 stroke-2 stroke-current"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true">
                      <g fill-rule="evenodd">
                        <path d="M1 1l4 4-4 4"></path>
                      </g>
                    </svg>
                    <svg
                      class="arr hidden hover:inline-block ml-1 w-2 h-2 stroke-2 stroke-current"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true">
                      <g fill-rule="evenodd">
                        <path d="M0 5h7"></path>
                        <path d="M4 1l4 4-4 4"></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"></path>
                    </svg>
                  </div>
                  <div class="ml-1">
                    <div class="flex text-sm leading-5 text-gray-500">
                      <div class="flex flex-row">
                     {{randomDate()}}
                      </div>
                    </div>
                  </div>

                  <div class="flex ml-16">
                    <div class="flex flex-row justify-center items-center">
                      <svg
                        class="w-4 h-4 mx-1"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>

                      <div>
                        <p class="flex text-sm leading-5 text-gray-500">{{randomView()}}</p>
                      </div>
                    </div>

                    <div class="flex flex-row items-center justify-center pl-2">
                      <svg
                        class="w-4 h-4 mx-1"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                      </svg>

                      <div>
                        <p class="flex text-sm leading-5 text-gray-500">
                          {{ randomNumber() }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Categories from "../data/categories.js";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import moment from "moment";

import { db, auth } from "../main.js";

export default {
  data() {
    return {
      category: Categories,
      discover: ["Trends", "Recently", "Popular", "All Blogs"],
      profile: ["Dashboard", "Settings", "Saved", "History"],
      blogs: [],
      uploadDate: "",
      testObject: {},
    };
  },

  filters: {
    yyyyMMdd: function (value) {},
  },

  filters: {
    yyyyMMdd: function (value) {
      if (value == "") return "";

      var js_date = new Date(value);

      var year = js_date.getFullYear();
      var month = js_date.getMonth() + 1;
      var day = js_date.getDate();

      if (month < 10) {
        month = "0" + month;
      }

      if (day < 10) {
        day = "0" + day;
      }

      return year + "-" + month + "-" + day;
    },
  },

  methods: {
    dateTime(value) {
      return moment(value).format("DD/MM/YY");
    },

    recently() {
      db.collection("blogs")
        .orderBy("createdAt")
        .onSnapshot(querySnapshot => {
          var newBlogs = [];
          querySnapshot.forEach(doc => {
            newBlogs.push(doc.data());
            this.createdAt = new Date();
          });
          this.blogs = newBlogs;
        });
    },

    disBlogs() {
      db.collection("blogs").onSnapshot(querySnapshot => {
        var allBlogs = [];
        querySnapshot.forEach(doc => {
          allBlogs.push(doc.data());
          this.createdAt = new Date();
        });
        this.blogs = allBlogs;
      });
    },

    randomNumber() {
      return Math.ceil(Math.random() * 20);
    },

    randomView() {
      return Math.ceil(Math.random() * 200);
    },
    randomDate() {
      var day = Math.ceil(Math.random() * 30);
      var month = Math.ceil(Math.random() * 12);
      if(day <= 9) {
        day = "0" + day;
      }
      if( month <= 9) {
        month = "0" + month;
      }

      
      const year = 2022;
      var randDate = day + "." + month + "." + year
           
     return  randDate;
    },
   
  },

  created: function () {
    this.moment = moment;

    db.collection("blogs")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.blogs.push(doc.data());
        });
      });
  },
};
</script>

<style></style>

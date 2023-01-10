<template>
  <div class="flex">
    <aside class="flex w-96 sticky left-0 top-0 h-full" aria-label="Sidebar">
      <div class="max-w-24">
        <button
          data-collapse-toggle="categories"
          type="button"
          class="inline-flex items-center p-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="categories"
          aria-expanded="false"
        >
          <span class="sr-only">Open Categories</span>
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-7 h-7 text-purple-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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

    <main class="">
      <div class="hidden md:flex md:order-1 mt-6">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-orange-900 mr-5 bg-orange-100 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          type="button"
        >
          All Blogs
          <svg
            class="w-5 h-5 ml-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            ></path>
          </svg>
        </button>

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-red-900 mr-5 bg-red-100 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
        >
          Hot Trends
          <svg
            class="w-5 h-5 ml-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
            ></path>
          </svg>
        </button>

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-green-900 mr-5 bg-green-100 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          type="button"
        >
          New Blogs
          <svg
            class="w-5 h-5 ml-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            ></path>
          </svg>
        </button>

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-blue-900 bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-md px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Popular
          <svg
            class="w-5 h-5 ml-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            ></path>
          </svg>
        </button>
      </div>

      <div class="container my-10 mr-3 pr-3 md:px-0">
        <div
          href=""
          class="flex items-center p-2 text-2xl font-bold text-purple-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            class="w-6 h-6 mr-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            ></path>
          </svg>

          <span class="">Hot Trends</span>
        </div>

        <div class="flex flex-wrap max-w-6xl md:max-w-8xl -mx-1 lg:-mx-4">
          <!-- Column -->
          <div
            v-for="a in 3"
            class="my-1 px-1 md:w-1/2 md:max-w-8xl lg:my-4 lg:px-4 lg:w-1/3"
          >
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header
                class="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer
                class="flex items-center justify-between leading-none p-2 md:p-4"
              >
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
            <!-- END Article -->
          </div>
          <!-- END Column -->
        </div>

        <div
          href=""
          class="flex items-center p-2 mt-10 text-2xl font-bold text-blue-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            class="w-6 h-6 mr-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            ></path>
          </svg>

          <span class="">New Blogs</span>
        </div>

        <div class="flex flex-wrap max-w-6xl md:max-w-8xl -mx-1 lg:-mx-4">
          <!-- Column -->
          <div
            v-for="a in 3"
            class="my-1 px-1 md:w-1/2 md:max-w-8xl lg:my-4 lg:px-4 lg:w-1/3"
          >
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header
                class="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer
                class="flex items-center justify-between leading-none p-2 md:p-4"
              >
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
            <!-- END Article -->
          </div>
          <!-- END Column -->
        </div>

        <div
          href=""
          class="flex items-center p-2 mt-10 text-2xl font-bold text-blue-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            class="w-6 h-6 mr-3"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            ></path>
          </svg>

          <span class="">Popular</span>
        </div>

        <div class="flex flex-wrap max-w-6xl md:max-w-8xl -mx-1 lg:-mx-4">
          <!-- Column -->
          <div
            v-for="a in 3"
            class="my-1 px-1 md:w-1/2 md:max-w-8xl lg:my-4 lg:px-4 lg:w-1/3"
          >
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header
                class="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer
                class="flex items-center justify-between leading-none p-2 md:p-4"
              >
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
            <!-- END Article -->
          </div>
          <!-- END Column -->
        </div>
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

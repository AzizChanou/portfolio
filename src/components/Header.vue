<script setup>
const toggleDarkMode = () => {
  const html = document.querySelector('html');
  html.classList.toggle('dark')
  if (html.classList.contains('dark')) {
    document.getElementById('toggle-dark-icon').classList.add('hidden');
    document.getElementById('toggle-light-icon').classList.remove('hidden');
  } else {
    document.getElementById('toggle-light-icon').classList.add('hidden');
    document.getElementById('toggle-dark-icon').classList.remove('hidden');
  }
}
</script>

<template>
  <header class="sticky max-w-screen-lg mx-auto">
    <nav>
      <div class="mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-28">

          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block hover:scale-110 duration-300" href="/">
              <span class="font-bold text-2xl">Aziz<span class="font-semibold">CH.</span></span>
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav class="hidden md:block" aria-labelledby="header-navigation">
              <h2 class="sr-only" id="header-navigation">En-tete navigation</h2>

              <ul class="hidden items-center font-medium gap-6 text-sm">
                <li>
                  <a class="text-lg transition hover:text-gray-700" href="/">
                    Accueil
                  </a>
                </li>

                <li>
                  <a class="text-lg transition hover:text-gray-700" href="/projects#projects">
                    Projets
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="gap-4 flex items-center">
                <a id="twitter" href="https://twitter.com/azizchanou" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-twitter"
                    class="text-xl hover:text-blue-400 duration-300  hover:scale-110" />
                </a>
                <a id="linkedin" href="https://www.linkedin.com/in/aziz-chanou-65ba24215" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-linkedin"
                    class="text-xl hover:text-blue-500 duration-300  hover:scale-110" />
                </a>
                <a id="github" href="https://github.com/AzizChanou" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-github"
                    class="text-xl hover:text-gray-400 duration-300  hover:scale-110" />
                </a>
              </div>
              <button id="themeToggle" type="button" @click="toggleDarkMode()"
                class="text-primary dark:text-white hover:animate-spin rounded-lg text-sm p-2 duration-1000">
                <svg id="toggle-dark-icon" class="w-8 h-8 hidden" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg id="toggle-light-icon" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </button>

            </div>
          </div>

        </div>

        <ul class="hidden flex-col text-center font-medium w-full space-y-4 text-sm divide-y">
          <li class=" w-full">
            <a class="text-lg transition hover:text-gray-700 " href="/">
              Accueil
            </a>
          </li>

          <li class=" w-full">
            <a class="text-lg transition hover:text-gray-700 " href="/projects#projects">
              Projets
            </a>
          </li>
        </ul>

      </div>
    </nav>
  </header>
</template>

<style>
* {
  border-width: 0px;
}

html::-webkit-scrollbar {
  display: none;
  width: 0px;
}

html,
body {
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
}

*::-webkit-scrollbar {
  display: none;
}
</style>

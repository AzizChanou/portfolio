<script setup>
import LocalSelect from './LocalSelect.vue'
import ToggleMode from './ToggleMode.vue'

</script>

<template>
  <header class="w-3/4 max-w-screen-lg mx-auto">
    <nav>
      <div class="mx-auto px-2 lg:px-8">
        <div class="flex items-center justify-between h-28">

          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block hover:scale-110 duration-300" href="/">
              <span class="font-bold text-2xl">Aziz<span class="font-semibold">CH.</span></span>
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
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
              <LocalSelect />
              <ToggleMode />
            </div>
          </div>

        </div>
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

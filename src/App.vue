<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div id="" class="max-w-screen-2xl flex flex-col items-center mx-auto p-4 bg-cover bg-origin-content"
    style="background-image: url('/bg.svg')">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: #F2FDFF;
}

::-webkit-scrollbar-thumb {
  background: rgb(37 99 235);
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(37 99 235 / 0.7);
}
</style>
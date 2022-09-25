<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div id="" class="max-w-screen-2xl mx-auto p-4 bg-cover bg-origin-content" style="background-image: url('/bg.svg')">
    <Header />
    <router-view></router-view>
  </div>
</template>

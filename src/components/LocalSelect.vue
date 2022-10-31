<script setup>
import { allLocales, setLocale } from "../i18n";
</script>

<template>
  <select class="bg-transparent outline-none text-xl p-2" :value="$i18n.locale"
    @change="setLocale($event.target.value)" id="locale">
    <option v-for="locale in allLocales" :value="locale" class="text-black text-xs">{{ locale }}</option>
  </select>
</template>
<script setup>
defineProps({
  name: String,
  link: String,
  pic: String,
})

</script>

<template>
  <div class="flex flex-col-reverse text-white rounded min-w-[350px] bg-cover bg-center h-[300px]"
    :style="'background-image: url(\'' + pic + '\')'">
    <a :href="link" target="_blank"
      class="bg-secondary/70 overflow-hidden p-4 h-12 hover:h-full text-justify mt-40 duration-1000">
      <h4 class="text-xl uppercase font-semibold">
        {{ name }}
      </h4>
      <p>
        {{ $t("project." + name) }}
      </p>
    </a>
  </div>
</template>

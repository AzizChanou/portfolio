<script setup>

defineProps({
  name: String,
  description: String,
  link: String,
  pic: String,
})

</script>

<template>
  <div class="flex flex-col-reverse text-white rounded w-full bg-cover bg-center min-h-full h-[300px] duration-300"
    :style="'background-image: url(\'' + pic + '\')'">
    <a :href="link" target="_blank" class="bg-secondary/70 overflow-hidden p-4 h-12 hover:h-full duration-1000 text-justify mt-40">
      <h4 class="text-xl uppercase font-semibold">
        {{name}}
      </h4>
      <p>
        {{description}}
      </p>
    </a>
  </div>
</template>

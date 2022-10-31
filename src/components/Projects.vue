<script setup>
import Project from './Project.vue';
import projects from '../../db/projects.json'

</script>

<template>
  <div class="space-y-8">
    <h3 class="text-center text-3xl font-semibold"> {{ $t("project.project") }}</h3>
    <div class="grid sm:grid-cols-2 gap-4 max-w-3xl">
      <Project v-for="project in projects" :key="project.name" :name="project.name" :link="project.link"
        :pic="project.pic" />
    </div>
  </div>
</template>
<template>
  <div>
    <h1>Game Jams</h1>

    <div style="margin-bottom: 30px;">
      Here are some Game Jam submissions I participated in :
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      There is more to see on <a target="_blank" href="https://jeserak.itch.io">itch.io</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>

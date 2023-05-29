<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'App',

  data() {
    return {
      projects: [],
    }
  },

  components: {
    ProjectCard,
  },

  created() {
    this.getProjects();
  },

  methods: {
    getProjects() {

      axios.get('http://127.0.0.1:8000/api/projects').then(response => {
        console.log(response.data.results);
        this.projects = response.data.results;
      });
    }
  },
}

</script>

<template>
  <div v-if="projects.length > 0" class="container">
    <h1 class="py-4">I miei Progetti</h1>

    <div class="card-container">
      <ProjectCard v-for=" project in projects" :project="project"></ProjectCard>
    </div>
      
  </div>
  <div v-else class="loading">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container{
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  overflow-x: scroll;
}

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 600px;
}
</style>
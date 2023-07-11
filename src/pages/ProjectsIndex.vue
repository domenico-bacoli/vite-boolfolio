<script>

import {store} from '../store.js';

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';


export default {
    name: 'ProjectsIndex',

    data() {
        return {
            store,
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
            this.store.projects = response.data.results;
            console.log(this.store.projects);
            });
        },

    },
}
</script>

<template>
  <div v-if="store.projects.length > 0" class="container">
    <h1>My Projects</h1>

    <div class="card-container">
      <ProjectCard v-for=" project in store.projects" :project="project"></ProjectCard>
    </div>
  </div>
  <div v-else class="container loading-container">
    <div class="loading">
        <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding-top: 80px;

    h1{
        padding: 20px 0;
        margin-left: 50px;
    }
}
.card-container{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 50px;
  overflow: auto;
  padding: 30px 100px 40px;
}

.container.loading-container{
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
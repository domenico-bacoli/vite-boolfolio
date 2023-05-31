<script>

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';


export default {
    name: 'ProjectsIndex',

    data() {
        return {
            projects: [],
            showButton: false,
        }
    },

    components: {
        ProjectCard,
    },

    created() {
        this.getProjects();
        window.addEventListener('scroll', this.handleScroll);

    },


    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects').then(response => {
            // console.log(response.data.results);
            this.projects = response.data.results;
            });
        },

        handleScroll() {
            if (window.pageYOffset > 100) {
                this.showButton = true;
            } else {
                this.showButton = false;
            }
        },

        scrollTop() {
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
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
    <div>
        <button v-if="showButton" @click="scrollTop" class="back-to-top"><i class="fa-solid fa-arrow-up"></i></button>
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
    padding-top: 60px;
}
.card-container{
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  padding: 0 10px;

}

.container.loading-container{
    height: calc(100vh - 56px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 40px;
  color: white;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.3s;
  background-color: #e6e6e6;

  i {
    font-size: 1em;
  }

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

</style>
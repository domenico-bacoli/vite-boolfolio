<script>
import axios from 'axios';
export default {
  name: 'App',

  data() {
    return {
      projects: [],
    }
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
  <div class="container pt-5">
    <h1>I miei Progetti</h1>
  </div>
</template>

<style lang="scss" scoped>

</style>

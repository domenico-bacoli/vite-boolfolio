<script>
export default {
    name: 'appHeader',
    data() {
        return {

        }; 
    },


}
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link :to="{ name: 'home' }" class="navbar-brand">Boolfolio</router-link>
    <!-- <a class="navbar-brand" href="#">Boolfolio</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'projects.index' }" class="nav-link">Projects</router-link>  
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>  
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
</style>
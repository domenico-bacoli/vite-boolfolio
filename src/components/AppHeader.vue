<script>
export default {
    name: 'appHeader',
    data() {
        return {
            scrolled: 0,
        }; 
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {
            this.scrolled = window.scrollY > 0;
        }
    }


}
</script>

<template>
<nav class="navbar navbar-expand-lg" :class="this.scrolled ? 'scrolled' : 'navbar-transparent'">
  <div class="container-fluid">
    <router-link :to="{ name: 'home' }" class="navbar-brand">Boolfolio</router-link>
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
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
nav{
    position: fixed;
    width: 100%;
    transition: background-color 0.4s;

    .container-fluid{
        display: flex;
        justify-content: space-around;
    }

    .navbar-collapse{
        display: flex;
        flex-grow: unset;
    }
}


.navbar-transparent{
    background-color: transparent;
}

.scrolled{
    background-color: #e6e6e6;
    border: none;
}
</style>
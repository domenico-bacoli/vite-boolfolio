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
<!-- <nav class="navbar navbar-expand-lg">
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
</nav> -->

<!-- <nav class="navbar navbar-expand-md bg-body-tertiary">
  <div class="container bg-body-tertiary">
    <a class="navbar-brand" href="#">Portfolio</a>
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
</nav> -->

<nav class="navbar navbar-expand-md bg-body-white fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Portfolio</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1">
            <li class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page"><button data-bs-dismiss="offcanvas">Home</button></router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'projects.index' }" class="nav-link"><button data-bs-dismiss="offcanvas">Projects</button></router-link>  
            </li>
            <li class="nav-item dropdown">
                <router-link :to="{ name: 'about' }" class="nav-link"><button data-bs-dismiss="offcanvas">About</button></router-link>
            </li>  
        </ul>    
      </div>
    </div>
  </div>
</nav>

</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

button{
    border: none;
    background-color: transparent;
}
.navbar-toggler{
    border: none;
}
nav{
    height: 60px;
    width: 100%;
    z-index: 1;
    background-color: white;
    margin: 0 auto;

    .offcanvas-body{
        ul{
            gap: 10px;
        }
    }
}

@media screen and ((min-width: 300px) and (max-width: 767px)) {
    .offcanvas-body{
        ul{
            text-align: center;
            gap: 60px;
            padding-top: 150px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.2ch;
            color: $text-color;
        }
    }
    button{
        text-transform: uppercase;
    }
}

@media screen and (min-width: 992px) {
    .container{
        padding: 0 200px;
    }
}
</style>
<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
<router-link class="nav-link active" :to="{name:'p_register'}">Product Register</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link active" :to="{name:'saleitem'}">saleitem </router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link active" :to="{name:'purchaseitem'}">purchaseitem </router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link active" :to="{name:'supplier'}">Supplier </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@import "vue-select/dist/vue-select.css";
</style>

<script>
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
  
  export default {
      data () {
          
  
          return {}
      },
      mounted () {
        localStorage.setItem("link", "http://127.0.0.1:8000");

      
      },
  }
  </script>
  
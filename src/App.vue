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



<nav class="navbar bg-light sticky-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" @click="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Japan</a>

          <div  style="width:200px" class="shadow offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"  tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Japan</h5>
              <button type="button" class="btn-close" @click="" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="nav flex-column" style="text-align:justify">
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
        <li class="nav-item">
          <router-link  class="nav-link active" :to="{name:'PurchaseHistory'}">PurchaseHistory </router-link>
        </li>


      </ul>
            </div>
          </div>
        </div>
      </nav>

      <div class="p-5" id="content_div" style="min-height:100vh;padding-top: 20px;">
        <router-view/>
      </div>

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
          
  
          return {
            width:true,
    
          }
      },
      mounted () {
        localStorage.setItem("link", "http://kkwstorebk.sithuhein.software");

      
      },
      methods: {
        navon:function()
    {
  
        this.width=!this.width;
        if(this.width==true)
        {
            document.getElementById("content_div").style.marginLeft = "0px";
        }
        else{
            document.getElementById("content_div").style.marginLeft = "200px";
        }
    }
      },
  }
  </script>
  
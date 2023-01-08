<template>




<nav class="navbar bg-light sticky-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" @click="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">KKW-Store</a>

          <div  style="width:300px" class="shadow offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"  tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Japan</h5>
              <button type="button" class="btn-close" @click="" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">

              <p>
  
                <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Product
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul class="nav flex-column" style="text-align:justify">
        <li class="nav-item">
         
<router-link class="nav-link active" :to="{name:'brand'}">Brand</router-link>
   
        </li>
         <li class="nav-item">
         
<router-link class="nav-link active" :to="{name:'unittype'}">Unit Type</router-link>

        </li>

         <li class="nav-item">
         
<router-link class="nav-link active" :to="{name:'category'}">Category</router-link>

        </li>

         <li class="nav-item">
         
<router-link class="nav-link active" :to="{name:'subcategory'}">Sub Category</router-link>

        </li>
        <li class="nav-item">
         
         <router-link class="nav-link active" :to="{name:'p_register'}">Product List</router-link>
         
         </li>

        

        </ul>



      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Management
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">

        <ul class="nav flex-column" style="text-align:justify">
     

        <li class="nav-item">
          <router-link  class="nav-link active" :to="{name:'saleitem'}">saleitem </router-link>

        </li>
        <li class="nav-item">
          <router-link  class="nav-link active" :to="{name:'purchaseitem'}">purchaseitem </router-link>

        </li>


        </ul>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Report
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">

        <ul class="nav flex-column" style="text-align:justify">
     
          <li class="nav-item">
          <router-link  class="nav-link active" :to="{name:'PurchaseHistory'}">PurchaseHistory </router-link>
        </li>


          </ul>


      </div>
    </div>
  </div>
</div>


</p>




              <ul class="nav flex-column" style="text-align:justify">
       
      
        <li class="nav-item">
          <router-link  class="nav-link active" :to="{name:'supplier'}">Supplier </router-link>
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

.colored-toast.swal2-icon-success {
  background-color: #a5dc86 !important;
}

.colored-toast.swal2-icon-error {
  background-color: #f27474 !important;
}

.colored-toast.swal2-icon-warning {
  background-color: #f8bb86 !important;
}

.colored-toast.swal2-icon-info {
  background-color: #3fc3ee !important;
}

.colored-toast.swal2-icon-question {
  background-color: #87adbd !important;
}

.colored-toast .swal2-title {
  color: white;
}

.colored-toast .swal2-close {
  color: white;
}

.colored-toast .swal2-html-container {
  color: white;
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
    //   localStorage.setItem("link", "http://127.0.0.1:8000");
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
  
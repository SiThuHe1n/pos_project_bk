<template>
    <div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-12 ">
            
                <div class="row d-flex justify-content-center">
                    <div class="col-5 border p-3 shadow rounded m-2">
                        <table>
                            <tr>
                                <td>Name</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Code</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Brand</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td> </td>
                            </tr>
                        </table>
                        </div>
            <div class="col-5 border p-3 shadow rounded m-2">
                <form action=""  ref="form" v-on:submit.prevent="docreate">
                    <input type="hidden" :value="product_id" name="product_id">
                    <label for="">Unit Type</label>
                    <select name="unittype" id="" class="form-select" required>
                        <option value=""> Select </option>
                        <option v-for="mt in mtype" :value="mt.id">{{ mt.name }}</option>
                    </select>
                    <label for=""> Amount </label>
                    <input type="number" name="amount" class="form-control" required>
                    <label for=""> Price </label>
                    <input type="number" name="price" class="form-control" required>
                    <button class="btn btn-primary  mt-3" style="width:100%" type="submit">Add Product Unit</button>  
                </form>
                </div>
                </div>

            <!-- <form action="">
                <div class="row">
                    <div class="col">

                    </div>
                </div>
            </form> -->
            <div class="border rounded shadow p-4 m-3">
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                        <th>No </th>
                        <th>Product Unit </th>
                        <th>Amount </th>
                        <th>Price </th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(sl,index) in stocklist">
                            <td>{{ ++index }} </td>
                            <td >  <span v-for="mt in mtype"><span v-if="sl.unittype_id==mt.id">{{ mt.name }}</span> </span>  </td>
                            <td>{{ sl.amount }}  </td>
                            <td>{{ sl.price }}  </td>
                            <td>
                                <button class="btn btn-danger " @click="dodelete(sl.id)">   <font-awesome-icon icon="fa-solid fa-trash" /> </button>    
                            
                            </td>
                        </tr>
                    </tbody>
                 
                </table>
            </div>
               
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from './../../router'
export default {
    data () {
        

        return {
            product_id:this.$route.query.product_id,
            mtype:[],
            stocklist:null,
            

        }
    },
    methods: {
   
        dodelete:function(id) {

//                 

 
            axios.post(localStorage.getItem("link")+"/api/deletestock/"+id)
   .then(response =>{console.log(response)
    this.showdata()
    
  
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);
      })
      
      

    },
        docreate:function() {

//                 

 
            axios.post(localStorage.getItem("link")+"/api/productstock", this.$refs.form)
   .then(response =>{console.log(response)
    this.showdata()
    
  
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);
      })
      
      

    },
    showdata:function() {

//                 

 
            axios.get(localStorage.getItem("link")+"/api/productstock", this.$refs.form)
   .then(response =>{console.log(response)
    
        this.stocklist=response.data
  
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);
      })
      
      

    },

     
doshow:function(database){

  
axios.get(localStorage.getItem("link")+"/api/"+database)
   .then(response => {
    if(database=='brand')
    {
        this.listbrand = response.data
    }
    if(database=='category')
    {
        this.category = response.data
    }
    if(database=='subcategory')
    {
        this.subcategory = response.data
    }
    if(database=='unittype')
    {
        this.mtype = response.data
    }


  
    
       
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);});
     

       },
    },
    mounted () {
        this.doshow('unittype');
        this.showdata()
    },
}
</script>

<style lang="scss" scoped>

</style>
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
                <form action=""  ref="form1" v-on:submit.prevent="docreate">
                    <input type="hidden" :value="product_id" name="product_id">
                    <label for="">Unit Type</label>
                    <select name="unittype" id="" class="form-select" required>
                        <option value=""> Select </option>
                        <option v-for="mt in mtype" :value="mt.code">{{ mt.name }}</option>
                    </select>
                    <label for=""> Amount </label>
                    <input type="number" name="amount" class="form-control" required>
                    <label for="">PurchasePrice</label>
     <input type="number" class="form-control" name="purchaseprice" required>

     <label for="">SellingPrice</label>
     <input type="number" class="form-control" name="sellingprice" required>
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
                        <th>purchaseprice </th>
                        <th>sellingprice </th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(sl,index) in stocklist">
                            <td>{{ ++index }} </td>
                            <td >  <span v-for="mt in mtype"><span v-if="sl.unittype_id==mt.id">{{ mt.name }}</span> </span>  </td>
                            <td>{{ sl.amount }}  </td>
                            <td>{{ sl.purchaseprice }}  </td>
                            <td>
                           
                                
                                {{ sl.sellingprice }}  </td>
                            <td>
                              
                                <button class="btn btn-danger " @click="dodelete(sl.id)">   <font-awesome-icon icon="fa-solid fa-trash" /> </button>    
                                <button type="button" class="btn btn-primary" @click="doedit(sl)" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit
</button>

<!-- Modal -->

                            </td>
                        </tr>
                    </tbody>
                 
                </table>
            </div>
               
            </div>
        </div>
    </div>
    <form action=""  ref="form2" v-on:submit.prevent="doupdate">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Detail</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">


       
                    <input type="hidden" :value="product_id" name="product_id">
                
                    <label for="">Unit Type</label>
                    <select name="unittype" id="" v-model="uunittype" class="form-select" required>
                        <option value=""> Select </option>
                        <option v-for="mt in mtype" :value="mt.code">{{ mt.name }}</option>
                    </select>
                    <input type="hidden" class="form-control" name="id"  v-model="uid" required>
     <label for="">Amount</label>
     <input type="text" class="form-control" name="amount" v-model="uamount" required>

     <label for="">PurchasePrice</label>
     <input type="text" class="form-control" v-model="upurchaseprice" name="purchaseprice" required>

     <label for="">SellingPrice</label>
     <input type="text" class="form-control" v-model="usellingprice" name="sellingprice" required>

    

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
</form>
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
            uid:'',
            uunittype:'',
            uamount:'',
            upurchaseprice:'',
            usellingprice:'',
            isedit:false,

            

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
    doedit:function(data)
    {
        this.uid=data.id;
        this.uamount=data.amount;
        this.upurchaseprice=data.purchaseprice;
        this.usellingprice=data.sellingprice;
        this.uunittype=data.unittype_id;
    
    },

 

    doupdate:function() {

//                 

 
            axios.post(localStorage.getItem("link")+"/api/updatestock/"+this.$refs.form2.id.value, this.$refs.form2)
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

 
            axios.post(localStorage.getItem("link")+"/api/productstock", this.$refs.form1)
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
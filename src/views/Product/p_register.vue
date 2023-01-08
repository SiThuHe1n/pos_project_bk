<template>
    <div>
        <div>
            <div v-if="isaddproduct==true" class="row gx-0 d-flex justify-content-center">
                <div class="col-xxl-5 col-xl-8 col-lg-8  col-md-8 border shadow p-5 m-5">
                    <h1> <b>Add Product</b></h1>
                  <form  ref="form"  action="" v-on:submit.prevent="docreate">
                    <div class="row">
                <div class="col-6">
                    <label for="">Name</label>
                    <input class="form-control m-1" name="name" v-model="productname" type="text" placeholder="Enter Product Name" required> 
                    <label for="">Code</label>
                    <input class="form-control m-1" name="code" v-model="productname" type="text" placeholder="Enter Product Name" required>

              
                    <!-- <label for="">Quantity</label>
                    <input class="form-control m-1" name="amount" v-model="quantity" type="text" placeholder="Enter Product Name">
         

                     -->

                    <!-- <label for="">Purchase Price</label>
                    <div class="row gx-0 ">
                        <div class="col-sm-12"> 
                            <input type="text" name="price" class="form-control" v-model="purchaseprice">
                        </div>

                    
                                                
                     </div> -->
<!-- 
                     <label for="">Amount </label>
                    <div class="row gx-0 ">
                        <div class="col-sm-12"> 
                            <input type="text" name="amount" class="form-control" v-model="amount">
                        </div>

                    
                                                
                     </div> -->


                     <label for="">Description</label>
                    <textarea  class="form-control" name="description" v-model="productdescription" id="" cols="30" rows="3"></textarea>
            
                    
           
              
                </div>
                <div class="col-6 ">
                    
                    <label for="">Category</label> 
                    <div class="row gx-0">
                        <div class="col-sm-12">
                            <select  name="category" class="form-select" v-model="categorylist" id="categorylist">
                            <option v-for="c in category" :value=c.code>{{c.name}}</option>
                           
                            </select>
        
                        </div>

                    
                      
                    </div>
              


                    <!--  -->
                    <label for="">Subcategory</label> 
                    <div class="row gx-0">
                        <div class="col-sm-12">
                            <select  name="subcategory" class="form-select " v-model="subcategorylist" id="subcategorylist">
                            <option v-for="c in subcategory" :value=c.code>{{c.name}}</option>
                           
                            </select>
        
                        </div>

                  
                      
                    </div>
               
                    <!-- unittype -->
                    <!-- <label for="">Unit Type</label> 
                    <div class="row gx-0">
                        <div class="col-sm-12">
                            <select  name="unittype" class="form-select " v-model="mtypelist" id="mtypelist" required>
                          <option value="">Please Select</option>
                 
                            <option v-for="c in mtype" :value=c.code>{{c.name}}</option>
                           
                            </select>
        
                        </div>

                      
                    </div> -->

                    <label for="">Brand</label> 
                    <div class="row gx-0">
                        <div class="col-sm-12">
                            <select    name="brand" v-model="brandlist" class="form-select" id="">
                            <option v-for="b in listbrand" :value=b.code>{{b.name}}</option>
       
                            </select>
        
                        </div>

                      
                      
                    </div>
                


             
               


       





                   
                </div>
                
            </div>
            <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-secondary m-2" @click="isaddproduct=!isaddproduct" >Close</button>
        <button type="submit" class="btn btn-primary m-2">Create</button>
       
        </div>
     
                  </form>
        
        
        
     
              </div>
            </div>
      

<div class="row gx-0 d-flex justify-content-center p-5">
    <div class="col-sm-3  d-flex justify-content-center">
        
<button type="button" class="btn btn-primary" v-if="isaddproduct==false" @click="isaddproduct=!isaddproduct">
  Add Product
</button>

    </div>
    <div class="col-sm-4 d-flex justify-content-center">
        <div class="row ">
            <div class="col-sm-6">
                <h5>Filter by Name :</h5>
            </div>
            <div class="col-sm-6">
                <select class="form-control" id="">
            <option value=""> Filter by Name</option>
            <option value=""> Filter by Brand</option>
            <option value=""> Filter by Category</option>
            <option value=""> Filter by SubCategory</option>

        </select>
                </div>

        </div>
     
        
            </div>
            <div class="col-sm-4  d-flex justify-content-center">
                <div class="row">
            <div class="col-sm-6">
                <h5>Search with :</h5>
            </div>
            <div class="col-sm-6">
                <input type="text" placeholder="search" class="form-control">
      
                </div>

        </div>
     
  
            </div>

</div>

<div class="row gx-0 d-flex justify-content-center mt-5">
<div class="col-sm-10 ">
    <table ref="tablefeature" class="table table-bordered table-hover">
        <thead> 
            <tr>
             
                <th>No</th>
                <th>Code</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Description</th>
          
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(dat,index) in productlist">
                <td> {{++index}} </td>
                <td> {{dat.code}} </td>
                <td>  {{dat.name}} </td>
                <td  > <span v-for="b in listbrand "> <span v-if="dat.brand_id==b.code">{{dat.brand_id}}  </span> </span> </td>
                <td  > <span v-for="cat in category "> <span v-if="dat.category_id==cat.code">{{dat.category_id}} </span>  </span></td>
                <td>  {{dat.description}} </td>
     
                <td>
                    <button class="btn btn-primary" @click="productdetail(dat.id)"><font-awesome-icon icon="fa-solid fa-info" /></button>
                
                    <button class="btn btn-warning" @click="doupdate(dat.id)">    <font-awesome-icon icon="fa-solid fa-pen-to-square" /> </button>
                    <button class="btn btn-danger" @click="dodelete(dat.id)">  <font-awesome-icon icon="fa-solid fa-trash" /></button></td>
            

            </tr>
        </tbody>
    </table>
</div>

</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  
      </div>
      <div class="modal-footer">
    
      </div>
    </div>
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
            link:'http://127.0.0.1:8000',
            percentage:'',
            saleprice:'',
            purchaseprice:'',
            brandlist:'',
            categorylist:'',
           subcategorylist:'',
            mtypelist:'',

            listbrand:[],

            category:[],
            subcategory:[],
            mtype:[],
            newbrand:'',
            newcategory:'',
            newsubcategory:'',
            newmtype:'',
      
            isedit:false,
            isaddproduct:true,
            productlist:null,

        }
    },
    watch: {
        productlist(val) {
    this.dat.destroy();
    this.$nextTick(() => {
        this.dat= $(this.$refs.tablefeature).DataTable({

            "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $('td:eq(0)', nRow).html(iDisplayIndexFull +1);
    }

        })
    });
    }
},
    mounted () {
        
        this.doshow('brand')
        this.doshow('category')
        this.doshow('subcategory')
        this.doshow('unittype')
        this.doshowproduct()
        this.dat= $(this.$refs.tablefeature).DataTable({
            "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $('td:eq(0)', nRow).html(iDisplayIndexFull +1);
    }
        })
    },
    methods: {
        productdetail:function(id)
        {
            router.push({ path: '/productdetail', query: { product_id:id } })
        },
      doshowproduct:function()
      {
        
        axios.get(localStorage.getItem("link")+"/api/product")
   .then(response =>{
    this.productlist=response.data
    console.log(this.productlist);
   
   
  
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);
      })
      },
        docreate:function() {

                let inputdata={
                    data:this.$refs.form,
              
                }

         if(this.isedit==false)
         {

            axios.post(localStorage.getItem("link")+"/api/product",this.$refs.form)
   .then(response =>{console.log(response)
   
    this.doshowproduct()
  
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);
      })
         }
         else{
            let article={
                    'name':this.name,
                    'code':this.code
                }
            axios.patch(localStorage.getItem("link")+"/api/product/"+this.id, article)
   .then(response =>{console.log(response)
   
    this.doshowproduct()
   this.isedit=false;
  
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);
      })
         }

    },
    dodelete:function(id) {


axios.delete(localStorage.getItem("link")+"/api/product/"+id)
.then(response =>{console.log(response)

this.doshowproduct()

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
}
</script>

<style lang="scss" scoped>
   
</style>
<template>
    <div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-12">
                <table ref="tablefeature" class="display" style="width:100%">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Unit Type</th>
                            <th>Amount</th>
                            <th>Price</th>
                            <th>Note</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pl,index) in purchasedlist">
                            
                            <td>{{ ++index }}</td>
                            <td>{{ pl.product_id }}</td>
                            <td>{{ pl.productstock_id }}</td>
                            <td>{{ pl.amount }}</td>
                            <td>{{ pl.price }}</td>
                            <td>{{ pl.note }}</td>
                          
                        </tr>
                    </tbody>
                </table>

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
            listbrand:[],

category:[],
subcategory:[],
mtypelist:[],
            purchasedlist:null,
            productlist:null,
            unitlist:null,
            pdid:this.$route.query.selling_id,
        }
    },
    mounted () {
        this.showdata();
        this.doshow('brand')
        this.doshow('category')
        this.doshow('subcategory')
        this.doshow('unittype')
        this.dat= $(this.$refs.tablefeature).DataTable({

"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
$('td:eq(0)', nRow).html(iDisplayIndexFull +1);
}

})
    },
    watch: {
        purchasedlist(val) {
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
    methods: {
        
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
        this.mtypelist = response.data
    }


  
    
       
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);});
     

       },
       
        showdata:function() {

//                 

 
            axios.get(localStorage.getItem("link")+"/api/saledetail/"+this.pdid)
   .then(response =>{
console.log(response)
  this.purchasedlist=response.data;
 
 
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);
      })
      
      

    },
 
    },
}
</script>

<style lang="scss" scoped>

</style>
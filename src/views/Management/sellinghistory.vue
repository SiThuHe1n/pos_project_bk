<template>
    <div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-12" >
                <table  ref="tablefeature" id="tabledata2" class="display" style="width:100%"  >
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer_id</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Total Price</th>
                            <th>Total Paid</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="(pl,index) in sellinglist"  >
                            
                            <td ></td>
                            <td>  <span v-if="pl.customer_id==0">Unknown</span> <span v-if="pl.customer_id!=0">{{ pl.customer_id }}</span>    </td>
                            <td>{{ pl.type }}</td>
                            <td>{{ pl.date }}</td>
                            <td>{{ pl.totalprice }}</td>
                            <td>{{ pl.totalpaid }}</td>
                            <td>
                                <button class="btn btn-info" @click="purchasedetail(pl.id)">Detail</button>
                            </td>
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
            sellinglist:[],
            tabledata:[],
            supplierlist:[],
        }
    },
    mounted () {
        this.showsupplier()
        this.showdata();
       
      this.dat=  $(this.$refs.tablefeature).DataTable({

        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $('td:eq(0)', nRow).html(iDisplayIndexFull +1);
    }
     
      });
     
    },
    watch: {
        
        sellinglist(val) {
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
        showsupplier:function()
        {

          
     axios.get(localStorage.getItem("link")+"/api/supplier")
       .then(response =>{console.log(response)
       this.supplierlist= response.data
      
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);
          })

        },
        tabledata1:function()
        {
            for(let a=0;a<this.sellinglist.length;a++)
    {
        
        this.tabledata.push([a+1,  this.sellinglist[a].supplier_id ,
        this.sellinglist[a].date ,
        this.sellinglist[a].totalprice,
        this.sellinglist[a].totalpaid])
      
    }
    console.log(this.tabledata)
        },
        purchasedetail:function(id)
        {
            router.push({ path: '/saledetail', query: { selling_id:id } })
        },
        showdata:function() {

//                 

 
            axios.get(localStorage.getItem("link")+"/api/selling")
   .then(response =>{
console.log(response)
  this.sellinglist=response.data;
for(let a=0;a<this.sellinglist.length;a++)
{
   
}
  
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
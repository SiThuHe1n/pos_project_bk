<template>
    <div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-12" >
                <table  ref="tablefeature" id="tabledata2" class="display" style="width:100%"  >
                    <thead>
                        <tr>
                            <th></th>
                            <th>Supplier</th>
                            <th>Date</th>
                            <th>TotalPrice</th>
                            <th>TotalPaid</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="(pl,index) in purchaselist"  >
                            
                            <td ></td>
                            <td>      {{ pl.supplier_id }}</td>
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
            purchaselist:[],
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
        
        purchaselist(val) {
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
            for(let a=0;a<this.purchaselist.length;a++)
    {
        
        this.tabledata.push([a+1,  this.purchaselist[a].supplier_id ,
        this.purchaselist[a].date ,
        this.purchaselist[a].totalprice,
        this.purchaselist[a].totalpaid])
      
    }
    console.log(this.tabledata)
        },
        purchasedetail:function(id)
        {
            router.push({ path: '/purchasedetail', query: { purchase_id:id } })
        },
        showdata:function() {

//                 

 
            axios.get(localStorage.getItem("link")+"/api/purchase")
   .then(response =>{
console.log(response)
  this.purchaselist=response.data;
for(let a=0;a<this.purchaselist.length;a++)
{
    for(let b=0;b<this.supplierlist.length;b++)
    {
        if(this.purchaselist[a].supplier_id==this.supplierlist[b].code)
        {
            this.purchaselist[a].supplier_id=this.supplierlist[b].name
        }
    }
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
<template>
    <div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-10">
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Supplier</th>
                            <th>Date</th>
                            <th>TotalPrice</th>
                            <th>TotalPaid</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pl,index) in purchaselist">
                            
                            <td>{{ ++index }}</td>
                            <td>{{ pl.supplier_id }}</td>
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
            purchaselist:null,
        }
    },
    mounted () {
        this.showdata();
    },
    methods: {
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
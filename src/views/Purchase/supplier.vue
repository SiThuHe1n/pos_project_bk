<template>
    <div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-5 mb-5">



                <form action="" ref="form" v-on:submit.prevent="docreate">
                <div class="card">
                    <div class="card-header">
                        Supplier 
                    </div>
                    <div class="card-body">


                            <div class="row d-flex justify-content-center">
                                            <div class="col-md-10 mb-3">
                                                <label for="">Code</label>
                                                <input v-if="isedit==false" name="code" v-model="code"  type="text" class="form-control" requried>
                                                <input v-if="isedit==true" name="code"  v-model="code" type="text" class="form-control" requried>
                                        
                                            </div>
                                            
                                            <div class="col-md-10 mb-3">
                                                <label for="">Name</label>
                                                <input v-if="isedit==false" name="name" v-model="name" type="text" class="form-control" requried>
                                                <input v-if="isedit==true" name="name" v-model="name" type="text" class="form-control" requried>
                                        
                                            </div>
                                            <div class="col-md-10 mb-3">
                                                <label for="">Email</label>
                                                <input v-if="isedit==false" name="email" v-model="email"  type="text" class="form-control" requried>
                                                <input v-if="isedit==true" name="email"  v-model="email" type="text" class="form-control" requried>
                                        
                                            </div>
                                            <div class="col-md-10 mb-3">
                                                <label for="">Phone1</label>
                                                <input v-if="isedit==false" name="phone" v-model="phone"  type="text" class="form-control" requried>
                                                <input v-if="isedit==true" name="phone"  v-model="phone" type="text" class="form-control" requried>
                                        
                                            </div>

                                            <div class="col-md-10 mb-3">
                                                <label for="">Phone2</label>
                                                <input v-if="isedit==false" name="phone2" v-model="phone2"  type="text" class="form-control" requried>
                                                <input v-if="isedit==true" name="phone2"  v-model="phone2" type="text" class="form-control" requried>
                                        
                                            </div>

                                            <div class="col-md-10 mb-3">
                                                <label for="">Address</label>
                                                <textarea v-if="isedit==false" name="address" v-model="address"  type="text" class="form-control" requried></textarea>
                                                <textarea v-if="isedit==true" name="address"  v-model="address" type="text" class="form-control" requried></textarea>
                                        
                                            </div>

                                            <input v-if="isedit==true" name="_method"  type="hidden" value="PATCH" class="form-control" requried>
                                        



                                            <div class="col-md-10 mb-3">
                                            <button v-if="isedit==false" type="submit" class="btn btn-primary" style="width:100%">Save</button>
                                            <button v-if="isedit==true" type="submit"  class="btn btn-primary" style="width:100%">update</button>
                                            <br>
                                           <button v-if="isedit==true" @click="isedit=false" type="submit"  class="btn btn-danger" style="width:100%">cancle</button>
                                            </div>
                                        </div>
                        </div>
        </div>

    </form>
                </div>

                <div class="col-md-10">
                    <div>
                        <table ref="tablefeature" class="display">
                            <thead>
                                <tr>
                                    <th >No</th>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>TotalPaid</th>
                                    <th>NeedtoPaid</th>
                                    <th>Information</th>
                              
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr v-for="(dat,index) in data">    
                                    <td> {{ ++index }}  </td>
                                    <td> {{ dat.code }}  </td>
                                    <td> {{ dat.name }}   </td>
                                    <td> {{ dat.purchaseamount }}   </td>
                                    <td> {{ dat.needtopaid }}   </td>
                                    <td>
                                        <span v-if="dat.phone!='' && dat.phone ">   Phone: {{ dat.phone }} </span>    <br>
                                        <span v-if="dat.phone2!='' && dat.phone2 ">   Phone2: {{ dat.phone2 }} </span> <br>  
                                        <span v-if="dat.email!='' && dat.email ">   Email: {{ dat.email }} </span>  <br>
                                        <span v-if="dat.address!='' && dat.address">   Address: {{ dat.address }} </span>  <br>
                                        
                                        </td>
                                        
                                      
                                    <td style="width:130px;"> 
                                    <button class="btn btn-warning m-1" @click="doedit(dat)"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>    
                                    <button class="btn btn-danger m-1" @click="dodelete(dat.id)">   <font-awesome-icon icon="fa-solid fa-trash" /></button>
                                 
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
export default {
    data () {
        

        return {

            isedit:false,
            name:'',
            code:'',
            data:'',
            id:'',
            phone:'',
            email:'',
            phone2:'',
            address:''

        }
    },
    watch: {
        data(val) {
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
    
        doshow:function()
        {

          
     axios.get(localStorage.getItem("link")+"/api/supplier")
       .then(response =>{console.log(response)
       this.data= response.data
      
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);
          })

        },
        docreate:function() {

    //                 

             if(this.isedit==false)
             {
                axios.post(localStorage.getItem("link")+"/api/supplier", this.$refs.form)
       .then(response =>{console.log(response)
        this.doshow();

       
      
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);
          })
             }
             else{
            
                axios.post(localStorage.getItem("link")+"/api/supplier/"+this.id, this.$refs.form)
       .then(response =>{console.log(response)
        this.doshow();

       this.isedit=false;
      
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);
          })
             }

        },
        doedit:function(data)
        {
            this.isedit=true;
            this.name=data.name;
            this.code=data.code;
            this.phone=data.phone;
            this.phone2=data.phone2;
            this.address=data.address;
            this.email=data.email;

            this.id=data.id;
        },
        dodelete:function(id)
        {
            axios.delete(localStorage.getItem("link")+"/api/brand/"+id)
       .then(response =>{console.log(response)
        this.doshow();

      
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);
          })
        }
        
        
    
    },
    mounted () {
        this.doshow();
        this.dat= $(this.$refs.tablefeature).DataTable({

"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
$('td:eq(0)', nRow).html(iDisplayIndexFull +1);
}

})
    },
}
</script>

<style lang="scss" scoped>

</style>
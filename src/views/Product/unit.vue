<template>
    <div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-5 mb-5">



                <form action="" ref="form" v-on:submit.prevent="docreate">
                <div class="card">
                    <div class="card-header">
                        Unit 
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
                        <table ref="tablefeature" class="display ">
                            <thead>
                                <tr>
                                    <th >No</th>
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr v-for="(dat,index) in data">    
                                    <td> {{ ++index }}  </td>
                                    <td> {{ dat.code }}  </td>
                                    <td> {{ dat.name }}   </td>
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

        }
    },
    methods: {
    
        doshow:function()
        {

          
     axios.get(localStorage.getItem("link")+"/api/unittype")
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
                axios.post(localStorage.getItem("link")+"/api/unittype", this.$refs.form)
       .then(response =>{console.log(response)
        this.doshow();

       
      
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
                axios.patch(localStorage.getItem("link")+"/api/unittype/"+this.id, article)
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
            this.id=data.id;
        },
        dodelete:function(id)
        {
            axios.delete(localStorage.getItem("link")+"/api/unittype/"+id)
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
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <section>
            <div class="row gx-0 d-flex justify-content-center">
                <div class="col-sm-8 col-md-7 col-lg-5">
                    <div class="row gx-0">
                     
                        <div class="col-md-9">
        
                            <select name="" class=" selectpick" data-live-search="true" v-model="selectpick"  id="selectpick">
                                <option value=""> Select </option>
                                <option v-for="pl in productlist" :value=" pl.id "> {{ pl.code  }} {{pl.name}} </option>
                             
                            </select>

                     
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-primary" @click="setproduct()">Add</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="card p-3 m-3 ms-4 shadow  bg-body rounded">
                                <div class="row gx-0 mb-3">
                        <div class="col-md-5">
                           <label for="">Product Name : </label>
                           
                        </div>
                        <div class="col-md-7">
                            <input type="text" class="form-control" id="name" v-model="name" disabled>
                        </div>
                    </div>
                    <div class="row gx-0 mb-3">
                        <div class="col-md-5">
                           <label for="">Purchase Price : </label>
                        </div>
                        <div class="col-md-7">
                            <input type="number" class="form-control" id="pprice"   v-model="pprice">
                        </div>
                    </div>
                 
                    <div class="row gx-0 mb-3">
                        <div class="col-4">
                           <label for="">Quantity : </label>
                        </div>
                        <div class="col-5">
                            <input type="number" class="form-control" id="qty" v-model="qty">
                        </div>
                        <div class="col-3">
                         <select name="" class="form-control"   id="mtype" v-model="mtype">
                            <option value=""> Unit</option>
                            <option v-for="sl in stocklist" :value="sl.code">

                               
                                {{ sl.name }}
                              
                               </option>
                           
                         </select>
                         
                        

                        </div>
                    </div>
                    <div class="row gx-0 mb-3 ">
                        <div class="col-md-4">
                           <label for="">Note : </label>
                        </div>
                        <div class="col-md-8">
                            <textarea type="text" class="form-control" v-model="desc"></textarea>
                        </div>
                    </div>
                    <div class="row gx-0 mb-3 d-flex justify-content-center ">
                    <div class="col-md-8">
                        <button class="btn btn-primary" @click=addproduct()>{{btnproduct}}</button>
                    </div>
                    </div>
                            </div>
                        </div>
                    </div>
               
                </div>
                 <div class="col-sm-12 col-md-12 col-lg-7">
                    <form action=""  ref="form" v-on:submit.prevent="docreate">
             
                    <div class="row  card p-3 m-2 me-4 mb-3 shadow  bg-body rounded">
                        <div class="col-md-12">
                            <div class="row ">
                                <div class="col-md-6">
                        <label for="">Supplier</label>   
                        <select name="supplier" class="form-control" v-model="supplier" id="" required>
                        <option value="">Select</option>
                        <option v-for="sl in supplierlist" :value="sl.code">{{ sl.name }}</option>
                 
                    
                    
                    </select>


                    
                        <label for="">Total Price</label>   
                        <input type="text" v-model="totalprice" class="form-control" disabled>
                        <input type="hidden" name="totalprice" v-model="totalprice" class="form-control" >
                        </div>
                        <div class="col-md-6">
                            <label for="">Total Paid</label>   
                        <input type="text" class="form-control" name="totalpaid" v-model="totalpaid">
                       
                            <label for="">Purchase Date</label>   
                        <input type="date" name="purchasdate" v-model="purchasdate"  class="form-control" >
                        <br>
                        <button class="btn btn-primary" type="submit" @click="printvoucher">doprint</button>
                        <button class="btn btn-primary" type="submit" @click="">Purchase</button>
                        
                        </div>
                            </div>
                        </div>
                    
                    </div>
                    <div class="row card p-3 m-2 me-4 shadow  bg-body rounded">
                        <div class="col-md-12 overflow-scroll">
                            <input type="hidden" :value="JSON.stringify(purchaseList)" name="productdata">
                            <table class="table table-bordered ">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Qty</th>
                                    <th>Purchase_Price</th>
                                    <th>Note</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                       

                          
                                <tr v-for="(plist,index) in purchaseList" v-bind:key = "plist.id">
                                    <td>
                                       {{plist.id=index+1}} 
                                  <!-- <input type="text" :name="'id'+index" :value="plist.pid">
                                  <input type="text" :name="'name'+index" :value="plist.name">
                                  <input type="text" :name="'qty'+index" :value="plist.qty">
                                  <input type="text" :name="'purchase_price'+index" :value="plist.pprice">
                                  <input type="text" :name="'note'+index" :value="plist.desc"> -->
                                   </td>
                                    <td>{{plist.name}}
                                    
                                    
                                    </td>
                                    <td><span>{{plist.qty}}</span>  / <span v-for="sl in stocklist"> <span v-if="sl.code==plist.mtype">{{ sl.name }} </span> </span></td>
                                    
                                    <td>{{plist.pprice}}</td>
                                    
                                    <td>{{plist.desc}}</td>
                                    <td><button class="btn btn-danger" @click="removeproduct(index)"><font-awesome-icon icon="fa-solid fa-trash" />   </button>
                                        <!-- <button class="btn btn-warning" @click="edit(index)"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> </button> -->
                                    </td>
                                    

                                </tr>
                       
                            </tbody>
                            
                            </table>
                    
                        </div>
                    </div>
                </form>
                </div>
         
            </div>
                

        </section>

        <section>
            <div class="invisible" id="printelement" style="margin:30px;padding:30px;border:1px;border-style:solid;border-radius:5px;">
                <h1 style="text-align:center;">Kyu Kyu Win</h1>

                <div class="" style="display:flex; position: relative;">
                    <div class=" " style="text-align:left; display:inline;">
                    <h3>Supplier : <b> {{supplier}}</b></h3>
                    <h3>Phone : <b> 12345678</b></h3>
                    <h3>Address : <b>Yangon</b></h3>
                    </div>
                    <div class="" style="text-align:right;display:inline;right:0;position: absolute;">
                        <h3>Date : <b>12/12/2022</b></h3>
                    </div>
                </div>
                <div class="">
                    <div class="">
                        <table style="width:100%;border:1px;border-style:solid;">
                            <thead >
                                <tr  >
                                   <th>No</th>
                                   <th>Name</th>
                                   <th>Qty</th>
                                   <th>Price</th>
                                   <th>Desc</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(plist,index) in purchaseList" v-bind:key = "plist.id">
                                    <td>
                                       {{plist.id=index+1}} 
                              
                                   </td>
                                    <td>{{plist.name}}</td>
                                    <td><span>{{plist.qty}}</span> <span> {{plist.mtype}}</span></td>
                                    
                                    <td>{{plist.pprice}}</td>
                                
                                    <td>{{plist.desc}}</td>
                                 

                                </tr>
                                
                                <tr>
                                <td></td>
                                <td colspan="3">Total Charges:</td>
                                <td >{{totalprice}}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td colspan="3">Total Paid:</td>
                                <td >{{totalpaid}}</td>
                            </tr>

                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import { tSExpressionWithTypeArguments } from '@babel/types';
import axios from 'axios';

export default {
    name: "App",
 
    data () {
        

        return {
            listbrand:[],

category:[],
subcategory:[],
mtypelist:[],
supplierlist:[],
purchasdate:new Date().toISOString().slice(0,10),
            totalpaid:'',
            supplier:'',
            showproduct:[],
            showproduct2:[],
            selectedproduct:null,
            purchaseList:[],
            name:"",
            sprice:"",
            pprice:"",
            qty:"",
            mtype:"",
            desc:"",
            id:null,
            btnproduct:'Add Product',
            totalprice:"",
            search:"",
            pid:'',
            productlist:null,
            percentage:'',
            selectpick:'',
            stocklist:[],

        }

    },
    methods: {
        showdata:function() {

//                 

 
            axios.get(localStorage.getItem("link")+"/api/showstock/"+this.pid, this.$refs.form)
   .then(response =>{
    
    this.stocklist=[];
   for(let a=0;a<    response.data.length;a++)
   {
    
    for(let b=0;b< this.mtypelist.length;b++)
    {
  
        if(this.mtypelist[b].code== response.data[a].unittype_id)
        {
    
            this.stocklist.push({code:response.data[a].id,name:this.mtypelist[b].name})
        }
    }
   }
       
   console.log( this.stocklist)

  
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);
      })
      
      

    },

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

        docreate:function() {


         
            axios.post(localStorage.getItem("link")+"/api/purchase", this.$refs.form)
   .then(response =>{console.log(response)


    const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})
 Toast.fire({
  icon: 'success',
  title: 'Success'
})
  

location.reload();
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
        this.mtypelist = response.data
    }


  
    
       
   })
   .catch(error => {
     this.errorMessage = error.message;
     console.error("There was an error!", error);});
     

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
        setpercentage()
        {
            if(this.sprice!="" && this.pprice!="")
            {
            let value=parseInt(this.sprice)-parseInt(this.pprice);
            this.percentage=parseFloat(value/this.pprice*100);
            }
        
        },
        calpercentage() {
            if(this.pprice!="")
            {
                let saleprice=0;
            saleprice= parseInt(this.pprice) +parseInt((this.pprice/100)*this.percentage);
            this.sprice=saleprice;
            }
        },
        caltotalprice()
        {
            let totalprc=0;
            for (let a=0;a<this.purchaseList.length;a++)
            {
                totalprc+=this.purchaseList[a].pprice*this.purchaseList[a].qty
            } 
            this.totalprice=totalprc;
   
        },
   

        addproduct() {
  
            let name=this.name;
            let id=this.pid;
            let pprice=this.pprice;
            let qty=this.qty;
            let mtype=this.mtype;
            let desc=this.desc;
           
           if(name=="")
           {
        

           return  document.getElementById("name").focus();
           }
       
           else if(pprice=="")
           {
            
            return document.getElementById("pprice").focus();
           }
           else   if(qty=="")
           {
       
            return document.getElementById("qty").focus();
           }
           else  if(mtype=="")
           {
            return document.getElementById("mtype").focus();
           }
        

           
            for (let a=0;a<this.purchaseList.length;a++)
            {
                if(this.purchaseList[a].pid==id  && this.purchaseList[a].mtype==mtype &&
                this.btnproduct!="Update"
                
            )
                {
                  
                    return (alert('already'),this.btnproduct="Add Product")
                }
                
                else if(this.purchaseList[a].id==this.id+1 )
                {
                    
                    if(this.purchaseList[a].name==name && 
                    this.purchaseList[a].pprice==pprice && 
                    this.purchaseList[a].desc==desc && 
                    this.purchaseList[a].mtype==mtype && 
             
             
             this.purchaseList[a].qty==qty 
     
         )
             {
               
                 return (alert('Dosent Change'),this.btnproduct="Add Product")
             }
             for (let b=0;b<this.purchaseList.length;b++)
             {     
          
            if(this.purchaseList[b].pid==id &&    this.purchaseList[b].mtype==mtype &&  b!=a)
             {
                return (alert('Item Already'))
             }

             }
         
             
        
                    this.purchaseList[a].name=name  
              
                this.purchaseList[a].pprice=pprice 
                this.purchaseList[a].qty=qty 
                this.purchaseList[a].mtype=mtype 
                this.purchaseList[a].desc=desc 
                this.id=this.purchaseList.length+1;
                this.btnproduct="Add Product"
                return (  this.caltotalprice(), alert('updated') )
                }
               
            
             
            }
            this.purchaseList.push(
                {
                    pid:this.pid,
                    id:this.id,
                    name:name,
        
                    pprice:pprice,
                    qty:qty,
                    mtype:mtype,
                    desc:desc,
                }
               
            );
            this.id++
       
 
            this.caltotalprice()
          
        },
        removeproduct(idas)
        {
          
            this.purchaseList.splice(idas, 1);
            this.caltotalprice();
        },
        edit(id)
        {
            this.id=this.purchaseList[id].id-1;
          this.name=this.purchaseList[id].name;
        this.sprice=this.purchaseList[id].sprice;
          this.pprice=this.purchaseList[id].pprice;
         this.qty=this.purchaseList[id].qty;
         this.mtype=this.purchaseList[id].mtype;
          this.desc=this.purchaseList[id].desc;
          this.btnproduct="Update"
          this.setpercentage()
        },
        selectitem(id)
        {
                this.selectedproduct=[];
            this.search=this.showproduct2[id].name;
            this.selectedproduct=
                {
                    id:this.showproduct2[id].id,
                    name:this.showproduct2[id].name,
                    mtype:this.showproduct2[id].mtype,
                    sprice:this.showproduct2[id].sprice,
                    pprice:this.showproduct2[id].pprice,

                }
                this.showproduct2=[]
                this.pid= this.selectedproduct.id
            this.name=  this.selectedproduct.name
            this.pprice=this.selectedproduct.pprice
            this.sprice=this.selectedproduct.sprice
      
            this.mtype=this.selectedproduct.mtype
            this.setpercentage()
            
        },
        searcher()
        {
            this.showproduct2=[]
            for(let a=0;a<this.showproduct.length;a++)
            {
                if(this.search.toLowerCase()==this.showproduct[a].name.toLowerCase())
                {
                    this.showproduct2.push(
                        {
                            id:this.showproduct[a].id,
                            name:this.showproduct[a].name,
                            Brand:this.showproduct[a].Brand,
                            Category:this.showproduct[a].Category,
                            SubCategory:this.showproduct[a].SubCategory,
                            mtype:this.showproduct[a].mtype,
                            pprice:this.showproduct[a].pprice,
                            sprice:this.showproduct[a].sprice
                            
                        }
                    )
                }
            }
            
        },
        setproduct()
        {
            
         
           for(let a=0;a<this.productlist.length;a++)
           {
            if(this.productlist[a].id==this.selectpick)
            {
                this.pid= this.productlist[a].id
            this.name=  this.productlist[a].name
            this.pprice=""
      
            this.mtype=""
            this.qty=""
            this.desc=""
            
        
            }
           }
        
           this.showdata();
        },
        printvoucher()
{
    var mywindow = window.open('', 'PRINT', 'height=1000,width=800');

    mywindow.document.write('<html><head><title> Purchase  Voucher</title>');
    mywindow.document.write(`</head><body >
  <style>
    table, th, td {
  border: 1px solid black;
  border-radius:10px;
  border-collapse: collapse;
}
    </style>
  
        `);
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById('printelement').innerHTML);
    mywindow.document.write(`
   
    </body></html>`);

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}
    },
    mounted () {
        this.showsupplier()
        this.doshow('brand')
        this.doshow('category')
        this.doshow('subcategory')
        this.doshow('unittype')
this.doshowproduct()

  
        $('.selectpick').selectpicker({
    liveSearch: true,
    noneSelectedText: 'Nichts ausgewählt',
});
    },
    updated () {
        $('.selectpick').selectpicker('refresh');
    },
    watch: {
        filterstate(){//v-model of select


  }
    },
}
</script>

<style lang="scss" scoped>

</style>
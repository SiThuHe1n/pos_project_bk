<template>
    <div>
        <section>
            <div class="row gx-0">
                <div class="col-md-5">
                    <div class="row gx-0">
                        <div class="col-md-4">
                            <label for="">Search</label>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" v-model="search" @change="searcher()">
                            <ul class="list-group " style="max-height:150px; overflow:scroll">
                                <li class="list-group-item"  v-for="(sdata,index) in showproduct2" v-bind:key = "sdata.id" :id="sdata.id" @click="selectitem(index)">
                                  B={{sdata.Brand}}/
                                N={{sdata.name}}/
                               
                                C={{sdata.Category}}/
                                SC={{sdata.SubCategory}}/
                                T={{sdata.mtype}}
                                </li>
                               
                            </ul>
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-primary" @click="setproduct()">Add</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="card p-3 m-3 ms-4 shadow  bg-body rounded">
                                <div class="row gx-0 mb-3">
                        <div class="col-md-4">
                           <label for="">Product Name : </label>
                           
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="name" v-model="name" disabled>
                        </div>
                    </div>
                    <div class="row gx-0 mb-3">
                        <div class="col-md-4">
                           <label for="">Discount Price : </label>
                        </div>
                        <div class="col-md-8">
                            <input type="number" class="form-control" id="pprice"  v-model="discount">
                        </div>
                    </div>
                    <div class="row gx-0 mb-3">
                        <div class="col-md-4">
                           <label for="">Sell Price : </label>
                        </div>
                        <div class="col-md-8">
                            <input type="number" class="form-control" id="sprice"  v-model="sprice">
                        </div>
                    </div>
                    <div class="row gx-0 mb-3">
                        <div class="col-md-4">
                           <label for="">Quantity : </label>
                        </div>
                        <div class="col-md-5">
                            <input type="number" class="form-control" id="qty" v-model="qty">
                        </div>
                        <div class="col-md-3">
                         <select name="" class="form-control" disabled id="mtype" v-model="mtype">
                            <option value="pack">pack</option>
                            <option value="Piece">Piece</option>
                         </select>
                        </div>
                    </div>
                    <div class="row gx-0 mb-3 ">
                        <div class="col-md-4">
                           <label for="">Description : </label>
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
                <div class="col-md-7">
                    <div class="row  card p-3 m-2 me-4 mb-3 shadow  bg-body rounded">
                        <div class="col-md-12">
                            <div class="row ">
                                <div class="col-md-6">
                        <label for="">Customer</label>   
                      <input type="text" class="form-control" v-model="customer">
                     
    
                        <label for="">Total Price</label>   
                        <input type="text" v-model="totalprice" class="form-control" disabled>
                        </div>
                        <div class="col-md-6">
                            <label for="">Total Paid</label>   
                        <input type="text" class="form-control" v-model="totalpaid">
                            <br>
                        <button class="btn btn-primary" @click="printvoucher">Purchase</button>
                       
                        
                        </div>
                            </div>
                        </div>
                    
                    </div>
                    <div class="row card p-3 m-2 me-4 shadow  bg-body rounded">
                        <div class="col-md-12 overflow-scroll">
                            <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Qty</th>
                                    <th>B_Price</th>
                                    <th>S_Price</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr v-for="(plist,index) in purchaseList" v-bind:key = "plist.id">
                                    <td>
                                       {{plist.id=index+1}} 
                              
                                   </td>
                                    <td>{{plist.name}}</td>
                                    <td><span>{{plist.qty}}</span> <span> {{plist.mtype}}</span></td>
                                    
                                    <td>{{plist.sprice}}</td>
                                    <td>{{plist.discount}}</td>
                                    <td>{{plist.desc}}</td>
                                    <td><button class="btn btn-danger" @click="removeproduct(index)">Del{{}}</button><button class="btn btn-warning" @click="edit(index)">Edit {{index}}</button></td>


                                </tr>

                            </tbody>
                            
                            </table>
                        </div>
                    </div>
                </div>
            </div>
                

        </section>

        <section>
            <div class="invisible" id="printelement" style="margin:30px;padding:30px;border:1px;border-style:solid;border-radius:5px;">
                <h1 style="text-align:center;">Kyu Kyu Win</h1>

                <div class="" style="display:flex; position: relative;">
                    <div class=" " style="text-align:left; display:inline;">
                    <h3>Customer : <b> {{customer}}</b></h3>
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
export default {
    data () {
        

        return {
            totalpaid:'',
            customer:'',
            showproduct:[],
            showproduct2:[],
            selectedproduct:null,
            purchaseList:[],
            name:"",
            sprice:"",
            discount:"0",
            qty:"",
            mtype:"",
            desc:"",
            id:null,
            btnproduct:'Add Product',
            totalprice:"",
            search:"",
            pid:'',



        }

    },
    methods: {
        caltotalprice()
        {
            let totalprc=0;
            for (let a=0;a<this.purchaseList.length;a++)
            {
                totalprc+=this.purchaseList[a].sprice*this.purchaseList[a].qty
            } 
            this.totalprice=totalprc;
   
        },
   

        addproduct() {
  
            let name=this.name;
            let sprice=this.sprice;
  
            let qty=this.qty;
            let mtype=this.mtype;
            let desc=this.desc;
            let discount=this.discount;
            sprice=sprice-discount
        
           if(name=="")
           {
           return  document.getElementById("name").focus();
           }
        
            if(sprice=="")
           {
            return document.getElementById("pprice").focus();
           }
            if(qty=="")
           {
            return document.getElementById("qty").focus();
           }
            if(mtype=="")
           {
            return document.getElementById("mtype").focus();
           }

           
            for (let a=0;a<this.purchaseList.length;a++)
            {
                if(this.purchaseList[a].name==name && 
             
             
                this.purchaseList[a].mtype==mtype &&
                this.btnproduct!="Update"
                
            )
                {
                  
                    return (alert('already'),this.btnproduct="Add Product")
                }
                
                else if(this.purchaseList[a].id==this.id+1 )
                {
                    
                    if(this.purchaseList[a].name==name && 
                    this.purchaseList[a].sprice==sprice && 
                    this.purchaseList[a].desc==desc && 
                 
             
             this.purchaseList[a].qty==qty && 
             this.purchaseList[a].mtype==mtype 
     
         )
             {
               
                 return (alert('Dosent Change'),this.btnproduct="Add Product")
             }
             for (let b=0;b<this.purchaseList.length;b++)
             {     
          
            if(this.purchaseList[b].name==name && 
             this.purchaseList[b].mtype==mtype && b!=a)
             {
                return (alert('Item Already'))
             }

             }
         
             
            
                    this.purchaseList[a].name=name  
             this.purchaseList[a].discount=discount
                this.purchaseList[a].sprice=sprice 
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
                    discount:discount,
                    sprice:sprice,
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
        this.discount=this.purchaseList[id].discount;
          this.pprice=this.purchaseList[id].pprice;
         this.qty=this.purchaseList[id].qty;
         this.mtype=this.purchaseList[id].mtype;
          this.desc=this.purchaseList[id].desc;
          this.btnproduct="Update"
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
            this.pid= this.selectedproduct.id
            this.name=  this.selectedproduct.name
            this.sprice=this.selectedproduct.sprice
       
      
            this.mtype=this.selectedproduct.mtype
           
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
         
        this.showproduct.push(
            {
                id:1,
                name:'Coffee',
                Brand:'Premier',
                Category:'Coffee',
                SubCategory:'Mix',
                mtype:'pack',
                sprice:'1500',
                pprice:'1400'
            }
        )
        this.showproduct.push(
            {
                id:1,
                name:'Juice',
                Brand:'Premier',
                Category:'Juice',
                SubCategory:'Mix',
                mtype:'pack',
                sprice:'1500',
                pprice:'1400'
            }
        )
        this.showproduct.push(
            {
                id:1,
                name:'Orange',
                Brand:'Premier',
                Category:'Orange',
                SubCategory:'Mix',
                mtype:'pack',
                sprice:'1500',
                pprice:'1400'
            }
        )

        
    },
}
</script>

<style lang="scss" scoped>

</style>
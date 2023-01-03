<template>
    <div>
        <div>
      

<div class="row gx-0 d-flex justify-content-center p-5">
    <div class="col  d-flex justify-content-start">
        
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Supplier
</button>

    </div>
    <!-- <div class="col-sm-4 d-flex justify-content-center">
        <div class="row ">
            <div class="col-sm-6">
                <h5>Filter by Name :</h5>
            </div>
            <div class="col-sm-6">
                <select name="" class="form-control" id="">
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
     
  
            </div> -->

</div>

<div class="row gx-0 d-flex justify-content-center mt-5">
<div class="col-sm-10 ">
    <table class="table table-bordered table-hover">
        <thead> 
            <tr>
             
                <th>No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Total Amount</th>
           <th> Action</th>
               
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> 1 </td>
                <td> Ko Aung  </td>
                <td> Yangon </td>
                <td> 09134341344 </td>
                <td> 0 </td>
                <td> <button>Edit</button>
                    <button>View</button>    <button>Delete</button></td>
                 
            

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
        <h5 class="modal-title" id="exampleModalLabel">Add Supplier</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container">
            <div class="row">
                <div class="col _forminput">
                    <label for="">Name</label>
                    <input class="form-control m-1" type="text" placeholder="Enter Supplier Name">
                    <label for="">Address</label>
                    <textarea name="" class="form-control" id="" cols="30" rows="3"></textarea>
           
                </div>
                <div class="col _forminput">
                 
                    <label for="">Phone</label>
                    <input class="form-control m-1" type="text" placeholder="Enter Phone Name">
                    <label for="">Phone 2</label>
                    <input class="form-control m-1" type="text" placeholder="Enter Phone2 Name">
                   




                   
                </div>
                
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Create</button>
      </div>
    </div>
  </div>
</div>

        </div>
    </div>
</template>

<script>

export default {
    data () {
        

        return {
            percentage:'',
            saleprice:'',
            purchaseprice:'',
        }
    },
    mounted () {

    
    },
    methods: {
        setpercentage()
        {
            if(this.saleprice!="")
            {
            let value=parseInt(this.saleprice)-parseInt(this.purchaseprice);
            this.percentage=parseFloat(value/this.purchaseprice*100);
            }
        
        },
        calpercentage() {
            if(this.purchaseprice!="")
            {
                let saleprice=0;
            saleprice= parseInt(this.purchaseprice) +parseInt((this.purchaseprice/100)*this.percentage);
            this.saleprice=saleprice;
            }
 

            


        }
    },
}
</script>

<style lang="scss" scoped>
    ._forminput{
        min-width:350px;
     
    }
</style>
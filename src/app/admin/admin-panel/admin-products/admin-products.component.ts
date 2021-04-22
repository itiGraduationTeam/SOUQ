import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/Shared/Services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  productList:any;
  isOpen=false;
  loading=true;
  constructor(private productServ:ProductService) { }

  ngOnInit(): void {
  this.getAllProduct();
  }
  getAllProduct(){
    this.productServ.getProduct().subscribe(
      data=>{
        this.productList=data;
        this.loading=false;
        console.log("all data: ",this.productList);
        
      },
      err=>{
        console.log("err from admin-products: ",err);
        
      }
    )
  }

  //remove product by name
  removeProduct(proName:any){
    this.productServ.removeProduct(proName).subscribe(
      data=>{
        console.log("result of remove product: ",data);     
      },
      err=>{
        console.log("err from remove product: ",err);     
      }
    )
    console.log("from admin products: ",proName); 
  }

  //toggle flag to open or close add product form
  openAddForm()
  {
    // this.isOpen=!this.isOpen;
    if(this.isOpen)
    {
      console.log("if");
      
      this.isOpen=false;
    }
    else{
      console.log("else");

      this.isOpen=true;

    }
  }
}

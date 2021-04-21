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
  constructor(private productServ:ProductService) { }

  ngOnInit(): void {
  this.getAllProduct();
  }
  getAllProduct(){
    this.productServ.getProduct().subscribe(
      data=>{
        this.productList=data;
        console.log("all data: ",this.productList);
        
      },
      err=>{
        console.log("err from admin-products: ",err);
        
      }
    )
  }
  removeProduct(proId:any)
  {

  }
  openModal()
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

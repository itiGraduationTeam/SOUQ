import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/Shared/Services/authenticate.service';
import { CheckoutOrderService } from 'src/Shared/Services/checkout-order.service';
import { ProductService } from 'src/Shared/Services/product.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  productList: any;
  usersList: any;
   orders:any;
  constructor(
    private orderServe :CheckoutOrderService,
    private productServ: ProductService, private authServ: AuthenticateService) { }

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllUsers();
    this.getAllOrders();
  }

  getAllProduct() {
    this.productServ.getProduct().subscribe(
      data => {
        this.productList = data.length;
        console.log("all data: ", this.productList);

      },
      err => {
        console.log("err from admin-products: ", err);

      }
    )
  }
getAllOrders(){
   
  this.orderServe.getAllOrders().subscribe(
    (data:any)=>{
    let listOrders=data;
    this.orders=listOrders.length;
    console.log("nmber of order admin",this.orders);
    

    
    },
    err=>{
      console.log(err);
      
    }
  )
}
  getAllUsers() {
    this.authServ.getAllUsers().subscribe(
      data => {
        this.usersList = data.length;

        console.log("all users data: ", data);
      },
      err => {
        console.log(err);
      }
    )
  }

}

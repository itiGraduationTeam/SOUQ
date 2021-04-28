import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutOrderService } from 'src/Shared/Services/checkout-order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
ordersList:any;
  totalPrice: any;
  order: any;
  loading=true;
  isEmpty=0;
  constructor(private orderServe:CheckoutOrderService,private router:Router) { }

  ngOnInit(): void {
    this.getOrderById();
   
    
  }

  getOrderById(){
    let userId=localStorage.getItem("userId");
    console.log("userid in check out is ",userId);
    this.totalPrice=localStorage.getItem("totalPrice");
    this.orderServe.getOrdersByUserID(userId).subscribe(
      data=>{
        this.ordersList=data;
        this.ordersList= this.ordersList.filter((item:any)=>item.userId==userId);
        // this.order=this.ordersList[0];
        console.log("orders data: ",this.ordersList[0].products);
        console.log("orders data: ",this.ordersList[0].totalPrice);
        console.log("orders data: ",this.ordersList);
        this.loading=false;
        // this.isEmpty=Object.keys(this.ordersList).length
        // console.log("my order",this.order);
      },
      err=>{
        console.log(err);
        
      }
    )
  }
}

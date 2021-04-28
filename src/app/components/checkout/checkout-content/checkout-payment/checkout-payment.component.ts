import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutOrderService } from 'src/Shared/Services/checkout-order.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
ordersList:any;
order:any;
totalPrice:any;
  constructor(private orderServe:CheckoutOrderService,private router:Router) { }

  ngOnInit(): void {
    this.getOrderById();
  }
  done(){
    this.router.navigate(['/']);
  }
  backToCart(){
    this.router.navigate(['shopping_cart']);
  }
  getOrderById(){
    
    let userId=localStorage.getItem("userId");
    console.log("userid in check out is ",userId);
    this.totalPrice=localStorage.getItem("totalPrice");
   
    this.orderServe.getOrdersByUserID(userId).subscribe(
      data=>{
        this.ordersList=data;
        this.ordersList= this.ordersList.filter((item:any)=>item.userId==userId);
        this.order=this.ordersList[0];
        console.log("orders data: ",this.ordersList);
        console.log("my order",this.order);
      },
      err=>{
        console.log(err);
        
      }
    )
  }

}

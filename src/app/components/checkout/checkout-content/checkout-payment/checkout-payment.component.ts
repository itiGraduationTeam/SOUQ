import { Component, OnInit } from '@angular/core';
import { CheckoutOrderService } from 'src/Shared/Services/checkout-order.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
ordersList:any;
  constructor(private orderServe:CheckoutOrderService) { }

  ngOnInit(): void {
    this.getOrderById();
  }

  getOrderById(){
    let userId=localStorage.getItem("userId");
    this.orderServe.getOrdersByUserID(userId).subscribe(
      data=>{
        this.ordersList=data;
        console.log("orders data: ",data);
        
      },
      err=>{
        console.log(err);
        
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutOrderService } from 'src/Shared/Services/checkout-order.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  ordersList: any;
  loading: boolean=true;
// ordersList:any;
  constructor(private orderServe:CheckoutOrderService,private router:Router) { }

  ngOnInit(): void {
    this.getShippingAddressById();
  }

  getShippingAddressById(){
    let userId=localStorage.getItem("userId");
    console.log("userid in check out is ",userId);
    this.orderServe.getOrdersByUserID(userId).subscribe(
      data=>{
        this.ordersList=data;
        this.ordersList= this.ordersList.filter((item:any)=>item.userId==userId);
        // this.order=this.ordersList[0];
        console.log("address data: ",this.ordersList[0]);
       
        this.loading=false;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

}

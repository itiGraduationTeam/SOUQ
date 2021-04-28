import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/Shared/Services/cart.service';
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
cartItems:any;
error:any="";
temClientInfo:any;
clientInfo:any;
  constructor(private orderServe:CheckoutOrderService,private router:Router,
    private cartSer:CartService) { }

  ngOnInit(): void {
  //  this.getOrderById();
  this.temClientInfo = JSON.parse(localStorage.getItem('clientInfo')+"");
  this.clientInfo = { ...this.temClientInfo };
this.getcarts();
  }
  getcarts() {
    this.cartSer.getAllCarts().subscribe(
      (data) => {
        this.cartItems = data;

        
      },
      (error) => this.error = error
    )
  }
  deletCart(item: any) {
    console.log('item',item);
    this.cartSer.deleteCart(item).subscribe(
      (data) => {
        this.error = ""
      },
      err => this.error = "error"
    )
 

  }
  done(){
 this.cartSer.clearCart().subscribe(
   (data)=>console.log(data)

 );
localStorage.setItem("totalPrice","0");
localStorage.setItem('clientInfo', "");
    alert("your order done ...")
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
        this.order=this.ordersList[this.ordersList.length-1];
        console.log("orders data: ",this.ordersList);
        console.log("my order",this.order);
      },
      err=>{
        console.log(err);
        
      }
    )
  }

}

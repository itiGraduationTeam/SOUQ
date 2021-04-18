import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/Shared/Services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  cartItems: any;
  error: any;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getcarts(); 
  }

  getcarts() {
    this.cartService.getAllCarts().subscribe(
      (cartItems) => {
        this.cartItems = cartItems;
        console.log("array of cart: ",this.cartItems)
      },
      (error) => this.error = error
    )
  }

  deletCart( item:any) {
    console.log("we try to delete")
    this.cartService.deleteCart(item).subscribe(
      (data) => {
      
        console.log("data")
        this.error = ""
      },
      err => this.error = "error"

    )
  this.cartItems=  this.cartItems.filter((ele:any)=>ele.productId._id!=item);

  }
}

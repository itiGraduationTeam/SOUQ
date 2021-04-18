import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/Shared/Services/cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  cartItems: any;
  error: any;
  totalPrice: number = 0;
  constructor(private cartService:CartService,private fb: FormBuilder) { }

  cartForm = this.fb.group({
    qty: [0]

  })
  get qty() {
    return this.cartForm.get('qty');
  }

  changeQty(formControl:any, item:any) {
    this.addToCart(formControl.value, item)
  }
  addToCart(qty:any, item:any) {
    this.cartService.addToCart(item.productId._id, qty).subscribe(
      (data) => {
        //console.log('qty :' + this.qty.value)

        console.log(data)
        this.error = ""
        this.totalPrice += item.productId.price * qty;
        localStorage.setItem('totalPrice', this.totalPrice.toString())
        console.warn(this.totalPrice);

      },
      err => this.error = "error"

    )
  }

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
  ngOnChanges(changes: SimpleChanges) {
    if (changes['carItem']) {
      // this.currentItem = this.carItem;
      // this.qty.setValue(this.currentItem.quantity)
    }
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

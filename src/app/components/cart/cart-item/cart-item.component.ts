import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartService } from 'src/Shared/Services/cart.service';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'src/Shared/Services/local-storage.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  cartItems: any;
  error: any;
  numOfcartItems: any;
  totalPrice: number = 0;
  noCart = false;
  wishList: any = [];

  constructor(private cartService: CartService, private fb: FormBuilder, private localStorage: LocalStorageService) { }

  cartForm = this.fb.group({
    qty: [0]

  })
  get qty() {
    return this.cartForm.get('qty');
  }

  changeQty(formControl: any, item: any) {
    this.addToCart(formControl.value, item)
  }
  addToCart(qty: any, item: any) {
    this.cartService.addToCart(item.productId._id, qty).subscribe(
      (data) => {
        //console.log('qty :' + this.qty.value)
        console.log(data)
        this.error = ""
        this.totalPrice += item.productId.price * qty;
        localStorage.setItem('totalPrice', this.totalPrice.toString())
        console.warn("totalPrice: ", this.totalPrice);

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
        this.numOfcartItems = Object.keys(this.cartItems).length;
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
  deletCart(item: any) {
    console.log("we try to delete")
    this.cartService.deleteCart(item).subscribe(
      (data) => {
        this.error = ""
      },
      err => this.error = "error"
    )
    this.cartItems = this.cartItems.filter((ele: any) => ele.productId._id != item);
    this.numOfcartItems = Object.keys(this.cartItems).length;
    if (this.numOfcartItems === 0) {
      this.noCart = true;
    }
    else {
      this.noCart = false;
    }

  }
  addToWishList(item: any) {
    var temp = this.localStorage.get("wishListItems");
    // var username = this.localStorage.get("user")["username"];

    if (temp) {
      temp.push(item);
      for (var i = 0; i < temp.length; i++)
        this.wishList.push(temp[i]);

      this.localStorage.set("wishListItems", this.wishList);
    } else {
      this.wishList.push(item);
      this.localStorage.set("wishListItems", this.wishList);
    }

  }

}

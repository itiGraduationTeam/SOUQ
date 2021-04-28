import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/Shared/Services/cart.service';
import { LocalStorageService } from 'src/Shared/Services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  numOfcartItems: number = 0;
  error: any;
  totalPrice: any = 0;
  cartItems: any;

  noCart = false;
  wishList: any = [];
  lenght: number = 0;
  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private localStorage: LocalStorageService,
    private router: Router
  ) { }
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
    console.log("item . qte =",item.quantity)
    let disPrice= item.productId.price * item.quantity;
    let incPrice= (item.productId.price * qty)
    console.log("disprice",disPrice);
    console.log("incPrics",incPrice);

    if(this.totalPrice>disPrice)
    this.totalPrice =(this.totalPrice-disPrice)+incPrice;
    else
    this.totalPrice =(disPrice-this.totalPrice)+incPrice;

    console.log("total price qty",this.totalPrice)
    localStorage.setItem('totalPrice', this.totalPrice)
    this.cartService.addToCart(item.productId._id, qty).subscribe(
      (data) => {
        //this.cartItems=data;
     //   console.log('qty  data:' + this.cartItems)
        //console.log(data)
        this.error = ""
      
       // this.getTotalPrice(); 
       
      //  console.warn("totalPrice: ", this.totalPrice);

      },
      err => this.error = "error"

    )

    this.cartService.changeCartLenght(this.lenght+(qty-1)); 
  }
  ngOnInit(): void {
    this.getcarts();
    localStorage.setItem('totalPrice', this.totalPrice.toString())
    this.cartService.getCartLenght().subscribe(   
      value => {
        console.log("value: ",value);
        this.lenght = value
      }
    )
  }
  getcarts() {
    this.cartService.getAllCarts().subscribe(
      (data) => {
        this.cartItems = data;

        this.numOfcartItems = this.cartItems.length;
        this.getTotalPrice();
      },
      (error) => this.error = error
    )
  }


  getTotalPrice() {
    var carts = [];
    this.totalPrice=0;
    carts = this.cartItems;
    for (let i = 0; i < carts.length; i++) {
      this.totalPrice += carts[i].productId.price * carts[i].quantity;
    }
    localStorage.setItem("totalPrice",this.totalPrice);
  }
  ngAfterViewChecked(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['carItem']) {
      //this.currentItem = this.carItem;
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
  // decrease cart item lenght
 
  if(this.lenght>0){
    this.cartService.changeCartLenght(this.lenght-1);
  }
  else{
    this.cartService.changeCartLenght(0);
  }
    this.cartItems = this.cartItems.filter((ele: any) => ele.productId._id != item);
    this.getTotalPrice();
    this.numOfcartItems = Object.keys(this.cartItems).length;

    //check cart lenght;
    if (this.numOfcartItems === 0) {
      this.noCart = true;
      this.totalPrice=0;
      localStorage.setItem("totalPrice","0");
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
  navigate() {
      this.router.navigate(['/checkout/shipping'])
  }
}

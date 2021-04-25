import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService: CartService,
    private localStorage:LocalStorageService,
    private router:Router
    ) { }

  ngOnInit(): void {
     this.getcarts();
    localStorage.setItem('totalPrice', this.totalPrice.toString())
  }
  getcarts() {
    this.cartService.getAllCarts().subscribe(
      (cartItems) => {
        var cartItem=[];
        
          cartItem = cartItems;
      for (let i =0 ;i<cartItem.length;i++){
        this.totalPrice+=cartItem[i].productId.price * cartItem[i].quantity;
      }
      },
      (error) => this.error = error
    )
  }

  ngAfterViewChecked(): void {

   
  }
  navigate(event:any){
    if(event==='checkout')
    {
        this.router.navigate(['/checkout/shipping'])
     
    }
    else if(event==='signin'){
      this.router.navigate(['/login'])
    }
  }
  
}

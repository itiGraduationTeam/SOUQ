import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/Shared/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  numOfcartItems: number = 0;
  error: any;
  totalPrice: any = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    localStorage.setItem('totalPrice', this.totalPrice.toString())
  }

  ngAfterViewChecked(): void {

   
  }

  
}

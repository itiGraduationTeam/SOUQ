import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/Shared/Interfaces/IProduct';

@Component({
  selector: 'app-product-card-design',
  templateUrl: './product-card-design.component.html',
  styleUrls: ['./product-card-design.component.scss']
})
export class ProductCardDesignComponent implements OnInit {
   @Input()product:any;
  //IProduct={
  //   name: "",
  //   image: [],
  //   brand: "",
  //   description: "",
  //   countInStock: 0,
  //   price: 0,
  //   category: "",
  //   subcategory: "",
  //   overview: "",
  //   rating: 0, //default = 0
  //   numReviews: 0, //default = 0
  //   discount: 0
  // };
  constructor() { }

  ngOnInit(): void {
  }

}

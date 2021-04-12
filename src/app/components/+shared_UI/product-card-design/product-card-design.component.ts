import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-design',
  templateUrl: './product-card-design.component.html',
  styleUrls: ['./product-card-design.component.scss']
})
export class ProductCardDesignComponent implements OnInit {
  @Input ()product:any;
  constructor() { }

  ngOnInit(): void {
  }

}

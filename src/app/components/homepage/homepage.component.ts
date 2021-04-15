import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/Shared/Interfaces/IProduct';
import { ProductService } from 'src/Shared/Services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homeProductList: IProduct[] = [];
  constructor(private productServ: ProductService) { }

  ngOnInit(): void {
    this.productServ.getHomeProduct().subscribe(
      data => {
        this.homeProductList = data;
      },
      err => {
        console.log("data not retreived");
      }

    )
  }

}

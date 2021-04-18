import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/Shared/Interfaces/IProduct';
import { ProductService } from 'src/Shared/Services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  loading=true;
  homeProductList: IProduct[] = [];
  constructor(private productServ: ProductService) { }

  ngOnInit(): void {
    this.productServ.getHomeProduct().subscribe(
      data => {
        this.loading=false;
        this.homeProductList = data;
      },
      err => {
        console.log("data not retreived");
      }

    )
  }

}

import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IProduct } from 'src/Shared/Interfaces/IProduct';
import {ProductService} from '../../../../Shared/Services/product.service'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  loading: Boolean = false
  errorMessage = ""
  productID:any;
  constructor(private productServ: ProductService, private router: Router,
     private activatedRoute: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

   }

  ngOnInit(): void {
    this.getActivatedRoute()
    this.getProductById(this.productID)
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.getActivatedRoute()
    this.getProductById(this.productID)
  }
  getActivatedRoute() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') != null) {
        this.productID = params.get('id');
      }

    })
  }
  getProductById(id:any) {
    this.loading = true
    this.productServ.getProductByID(id).subscribe(
      data => {
        this.loading = false
        this.product = data
      },
      err => {
        this.errorMessage = err;
        this.loading = false
      }
    );
  }

}

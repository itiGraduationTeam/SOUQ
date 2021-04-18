import { Component, OnInit,Input } from '@angular/core';
import { IOptions } from 'src/Shared/Interfaces/IOptions';
import { CartService } from 'src/Shared/Services/cart.service';
import { FilterService } from 'src/Shared/Services/filter.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {
  @Input() currentProduct:any;
  error:any;
  constructor(private filterService:FilterService,private cartService:CartService) { }
  option:IOptions[]=[{
    options:[],
    cateid:0,
    name:""
  }];
  optionArray:any[]=[];

  keyFilter:any;
  ngOnInit(): void {
    this.filterService.getAllSubcategoryByName(this.currentProduct.subcategory).subscribe(
      (data)=>{
        // console.log(data);
        this.option=data;
        //  console.log("option");
        //  console.log(data);
       this.optionArray=   this.option[0].options[0];
      //  console.log(  "ditalis", this.optionArray);
        var keys=Object.keys(this.optionArray);
      this.keyFilter =keys;
        // console.log("details key",this.keyFilter);
    
      }
    );
  }

  addToCart() {
    this.cartService.addToCart(this.currentProduct._id,1).subscribe(
      (data) => {
        console.log('_id :'+this.currentProduct._id)

        // console.log(data)
        // this.error = ""
      },
      err => {
        alert("please login first")
        
        // console.warn("error : ",err);
        
      }

    )
  }

}

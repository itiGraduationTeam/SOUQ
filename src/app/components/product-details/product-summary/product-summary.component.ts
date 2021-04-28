import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons';
import { IOptions } from 'src/Shared/Interfaces/IOptions';
import { CartService } from 'src/Shared/Services/cart.service';
import { FilterService } from 'src/Shared/Services/filter.service';
import { LocalStorageService } from 'src/Shared/Services/local-storage.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {
  @Input() currentProduct:any;
  error:any;
  addedItem=false;
  lenght:number=0;
  constructor(
    private filterService:FilterService,
    private cartService:CartService,
    private router:Router,
    private localStorage:LocalStorageService,
    ) { }
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

    //get initial cart lenght
      this.cartService.getCartLenght().subscribe(
        value=>this.lenght=value
      );
  }
  increasePriceValue(price: any) {
    var temp = this.localStorage.get("totalPrice");

    if (temp) {
      temp+=price;
      console.log("temp: ",temp);
      this.localStorage.set("totalPrice",temp);
      
    }
     else {

      this.localStorage.set("totalPrice",price);
    }

}
  addToCart() {
    this.cartService.addToCart(this.currentProduct._id,1).subscribe(
      (data) => {
        console.log('price :'+this.currentProduct.price)
        this.increasePriceValue(this.currentProduct.price);
        this.addedItem=true;
      },
      err => {
       this.router.navigate(['/signUp']);      
      }
    )
    this.cartService.changeCartLenght(this.lenght+1);
  }
}

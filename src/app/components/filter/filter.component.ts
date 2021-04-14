import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IOptions } from 'src/Shared/Interfaces/IOptions';
import { IProduct } from 'src/Shared/Interfaces/IProduct';
import { FilterService } from 'src/Shared/Services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  products: any//IProduct[] = [];
  orginalProduct:any// IProduct[] = [];

  productSize:number=0;
  subcategoryName:any="";
  pages: any;
  nextPage:number=1;
  prevPage:number=0; 
  currentPage:number=0;
  showProductSize: number=0;
  specialProperties:string[]=[];
  option:IOptions[]=[{
    options:[],
    cateid:0,
    name:""
  }];
  optionArray:any[]=[];
  // arrStringCondtion:string=""; 
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private filterService: FilterService) { }
 notFound(){
  if (this.productSize==0)
  this.router.navigate([`/not_found`]);
 }
  getProducts(subcategory:any) {
    this.filterService.getProductBySubcategory(subcategory).subscribe(

      data => {
        this.products = data;
        this.orginalProduct = data;
        this.productSize = this.products.length;
        this.buildpages()
      }
    );

  }
  // filterWithColor(item){
  //   var val1 = item.toString();
    
  //   this.products = this.orginalProduct.filter((item) => item.color>=val1 );
  //   //this.orginalProduct = this.products;
  //   this.productSize = this.products.length;
  //   this.buildpages() 
  // }
  buildpages(){
    this.showProductSize = Math.ceil(this.productSize / 4);
        
       
        this.pages = [
          {
            start:0,
            end:this.showProductSize
          },
          {
            start:this.showProductSize,
            end:this.showProductSize*2
          },
          {
            start:this.showProductSize*2,
            end:this.showProductSize*3
          },
          {
            start:this.showProductSize*3,
            end:this.productSize  
          }
        ];
//        this.disabled();
      
  }
  prevPageFun(){
    this.nextPage=this.currentPage;
    this.prevPage=this.currentPage-1;
     if(this.nextPage>3)
    
    this.nextPage=3;
    
     if(this.prevPage<0)
     this.prevPage=0;
    this.goToNext(this.prevPage);
    this.currentPage=this.prevPage;
    console.log( this.pages[this.currentPage]);
  }
  nextPageFun(){
    this.nextPage=this.currentPage+1;
    this.prevPage=this.currentPage-1;
    
     if(this.nextPage>3)
    
    this.nextPage=3;
    
     if(this.prevPage<0)
     this.prevPage=0;
     this.currentPage=this.nextPage;
    this.goToNext(this.nextPage);
    console.log( this.pages[this.currentPage]);
  }

  goToNext(index:number) {
    
  this.products=this.orginalProduct.slice(this.pages[index].start,this.pages[index].end);
  // this.productSize=this.products.length;
 this.currentPage=index;
  console.log( this.pages[this.currentPage]);

  }
  highToLow() {
    function compare(a: any, b: any) {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    }
    var list = this.products;
    list.sort(compare);
    this.products = list;
    this.orginalProduct = list;

    this.productSize = this.products.length;

  }
  lowToHigh() {
    function compare(a: any, b: any) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    }
    var list = this.products;
    list.sort(compare);
    this.products = list;
    this.orginalProduct = list;
    this.productSize = this.products.length;
  }
  goProduct(input1:any,input2:any) {
    var val1 = parseInt(input1);
    var val2=parseInt(input2)
    this.products = this.orginalProduct.filter((item:IProduct) => item.price >= val1 && item.price<= val2);
    //this.orginalProduct = this.products;
    this.productSize = this.products.length;
    this.notFound();
    this.buildpages()
    
  }
  startFilter(rang:any){
    var val1 = parseFloat(rang);
    
    this.products = this.orginalProduct.filter((item:IProduct) => item.rating>=val1 );
    //this.orginalProduct = this.products;
    this.productSize = this.products.length;
    this.notFound();
    this.buildpages()
  }
 
  goBrand(brand:any){
    var val1 = brand.toString();
    
    this.products = this.orginalProduct.filter((item:IProduct) => item.brand>=val1 );
    //this.orginalProduct = this.products;
    this.productSize = this.products.length;
    this.notFound();
    this.buildpages()
  }
  arrayFilter:any;
  keyFilter:any;
  //a:any[]=[];
  test(key:any,item:any){
//   this.keyFilter[key].push(item);


if(!this.keyFilter[key].includes(item))
  this.keyFilter[key].push(item);
  else{
    const index = this.keyFilter[key].indexOf(item);
    if (index > -1) {
    this.keyFilter[key].splice(index, 1);
    }
    
  }
  console.log(this.keyFilter);
  this.filterWithSpical(this.keyFilter);
}
filterWithSpical(keys:any){
 var arr=Object.keys(keys);
 var arrStringCondtion="";
 for(var i=0;i<arr.length;i++){
   if (this.keyFilter[arr[i]].length>0){
    
         for(var j=0;j<this.keyFilter[arr[i]].length;j++){
          arrStringCondtion+=`item["${arr[i]}"] == "${this.keyFilter[arr[i]][j]}"||`;
         }
         arrStringCondtion=arrStringCondtion.substr(0,arrStringCondtion.length-2);
    arrStringCondtion+="&&";
   }
  
 }
 arrStringCondtion=arrStringCondtion.substr(0,arrStringCondtion.length-2);
 console.log(arrStringCondtion);

 if(arrStringCondtion.length>1){
this.products = this.orginalProduct.filter(
  (item:IProduct) =>eval(arrStringCondtion)
  
  
  );

this.productSize = this.products.length;
this.notFound();
this.buildpages()}
else{
  this.products = this.orginalProduct;
  this.productSize = this.products.length;
  this.notFound();
}

 }
  
  ngOnInit(): void {
    	

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {

      this.subcategoryName = params.get('subcateName');

      this.getProducts(this.subcategoryName);

      this.filterService.getAllSubcategoryByName(this.subcategoryName).subscribe(
        (data)=>{
          console.log(data);
          this.option=data;
           console.log("option");
           console.log(data);
         this.optionArray=   this.option[0].options[0];
         console.log(   this.optionArray);
          var keys=Object.keys(this.optionArray);
        this.keyFilter =keys.reduce((ac,a) => ({...ac,[a]:[]}),{});
          console.log(this.keyFilter);
      
        }
      );

    })
  
  }

}

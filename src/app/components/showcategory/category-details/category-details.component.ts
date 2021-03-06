import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from 'src/Shared/Services/filter.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
@Input() subCateName:any;
productList:any;
  constructor(private filterServe:FilterService) { }
  getlistOfProduct(subName:any){
    this.filterServe.getProductBySubcategory(subName).subscribe(
      data=>{
        this.productList=data;
        this.productList=this.productList.slice(0, 4);
        console.log("productList: ",this.productList);
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  ngOnInit(): void {
    this.getlistOfProduct(this.subCateName)
  }

}

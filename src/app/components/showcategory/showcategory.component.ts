import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FilterService } from 'src/Shared/Services/filter.service';

@Component({
  selector: 'app-showcategory',
  templateUrl: './showcategory.component.html',
  styleUrls: ['./showcategory.component.scss']
})
export class ShowcategoryComponent implements OnInit {
  categoryId: any;
  categoryImg:any;
  subCategoriesNameList: any;
  subcateProductList:any;
  constructor(private filterServe: FilterService, private activatedRoute: ActivatedRoute) { }


  getAllSubCategories(){
    this.filterServe.getAllSubcategoryByCateId(this.categoryId).subscribe(
      data=>{
      this.subCategoriesNameList=data;
      console.warn("subcategories name list: ",this.subCategoriesNameList[0].name);
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  getSubCategoryImg(){
    this.filterServe.getAllCategory().subscribe(
      data=>{
       this.categoryImg=data[this.categoryId].cateImg
      //  console.log("cateImg: ",this.categoryImg);
       
      },
      err=>{
        console.log(err);
        

      }
    )
  }
  //get list of product from subcategory
  getlistOfProduct(subCateName:any){
    this.filterServe.getProductBySubcategory(subCateName).subscribe(
      data=>{
        this.subcateProductList=data;
        console.warn("productList: ",this.subcateProductList);
        

      },
      err=>{
        console.log(err);
        
      }
    )
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.categoryId = params.get('cateID');
    })
    this.getAllSubCategories();
    this.getSubCategoryImg();
    // this.getlistOfProduct(this.subCategoriesNameList.name[0]);


  }
}
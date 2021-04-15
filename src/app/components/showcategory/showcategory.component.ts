import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FilterService } from 'src/Shared/Services/filter.service';

@Component({
  selector: 'app-showcategory',
  templateUrl: './showcategory.component.html',
  styleUrls: ['./showcategory.component.scss']
})
export class ShowcategoryComponent implements OnInit {
  categoryId: any;
  categoryImg:any;
  subCategoriesList: any;
  constructor(private filterServe: FilterService, private router:Router , private activatedRoute: ActivatedRoute) { }


  getAllSubCategories(){
    this.filterServe.getAllSubcategoryByCateId(this.categoryId).subscribe(
      data=>{
      this.subCategoriesList=data;
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
       console.log("cateImg: ",this.categoryImg);
       console.log("cateName: ",data);

       
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
  }
  navigateToFilter(subName:any){
    this.router.navigate(['/filter',subName]);
  }
}
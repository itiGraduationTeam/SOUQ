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
  categoriesNameList: any;
  constructor(private filterServe: FilterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.categoryId = params.get('cateID');
    })
    this.filterServe.getAllSubcategoryByCateId(1).subscribe(
      data=>{
      this.categoriesNameList=data;
      console.warn("subcategories: ",this.categoriesNameList);
      
      },
      err=>{
        console.log(err);
        
      }
    )

  }
}
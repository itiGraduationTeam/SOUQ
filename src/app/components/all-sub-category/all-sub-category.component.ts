import { Component, Input, OnInit } from '@angular/core';
import { AllSubCategoriesService } from 'src/Shared/Services/all-sub-categories.service';
import { FilterService } from 'src/Shared/Services/filter.service';

@Component({
  selector: 'app-all-sub-category',
  templateUrl: './all-sub-category.component.html',
  styleUrls: ['./all-sub-category.component.scss']
})
export class AllSubCategoryComponent implements OnInit {
  @Input() cateID: any;
  allSubCategory: any;
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.filterService.getAllSubcategoryByCateId(this.cateID).subscribe((data) => {
      console.log(data);
      this.allSubCategory = data;


    })
  }
  navigateToProductDetails(subCateName: any) {
    
  }
}

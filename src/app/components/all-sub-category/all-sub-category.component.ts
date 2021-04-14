import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private filterService: FilterService,private router:Router) { }

  ngOnInit(): void {
    this.filterService.getAllSubcategoryByCateId(this.cateID).subscribe((data) => {
      console.log(data);
      this.allSubCategory = data;


    })
  }
  navigateToProductDetails(subCateName: any) {
    this.router.navigate(['/filter', subCateName])
  }
}

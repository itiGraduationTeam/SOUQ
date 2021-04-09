import { Component, Input, OnInit } from '@angular/core';
import { AllSubCategoriesService } from 'src/Shared/Services/all-sub-categories.service';

@Component({
  selector: 'app-all-sub-category',
  templateUrl: './all-sub-category.component.html',
  styleUrls: ['./all-sub-category.component.scss']
})
export class AllSubCategoryComponent implements OnInit {
 @Input() categoryName:any;
  constructor(private subCategoryServe:AllSubCategoriesService) { }

  ngOnInit(): void {
  }

}

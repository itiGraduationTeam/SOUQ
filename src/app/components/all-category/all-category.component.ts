import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/Shared/Services/filter.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.scss']
})
export class AllCategoryComponent implements OnInit {

  allCategory:any;
  categoryName:any;
  
    constructor(private filterService: FilterService ) { }
  
    ngOnInit(): void {
      this.filterService.getAllCategory().subscribe(
        (data)=>{
          console.log(data);
          this.allCategory=data;
         this.categoryName="salma";
         
      
        }
      );
    }

}

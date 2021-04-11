import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.scss']
})
export class AllCategoryComponent implements OnInit {
allCategory=[
  {name:"fashone"},
  {name:"fashone"},
  {name:"fashone"},
  {name:"fashone"}
]
  constructor() { }

  ngOnInit(): void {
  }

}

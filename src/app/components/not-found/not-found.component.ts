import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/Shared/Services/filter.service';
import { ProductService } from 'src/Shared/Services/product.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
productList:any
  constructor(private productServe:ProductService) { }

  ngOnInit(): void {
    
  }

}

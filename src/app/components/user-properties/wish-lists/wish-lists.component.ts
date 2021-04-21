import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/Shared/Services/local-storage.service';

@Component({
  selector: 'app-wish-lists',
  templateUrl: './wish-lists.component.html',
  styleUrls: ['./wish-lists.component.scss'],
})
export class WishListsComponent implements OnInit {
  openModal: boolean = false;
  wishList:any=[];
  loading=true;
  constructor(private localStorage:LocalStorageService) {}

  ngOnInit(): void {
    this.wishList=this.localStorage.get("wishListItems");
    this.loading=false;
    
  }
  

}

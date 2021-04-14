import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-lists',
  templateUrl: './wish-lists.component.html',
  styleUrls: ['./wish-lists.component.scss'],
})
export class WishListsComponent implements OnInit {
  openModal: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  createNewWishList() {
    this.openModal = true;
  }
}

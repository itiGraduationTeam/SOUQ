import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  @Input()
  isVisible = false;
  isOpen = false;
  showSearch = false;
  ngOnInit(): void {}
  menuLisItems = [
    {
      id: 'Orders',
      label: 'My Orders',
      routerLink: '/allcategory',
    },
    {
      id: 'Addresses',
      label: 'My Addresses',
      routerLink: '/Addresses',
    },
    {
      id: 'WishLists',
      label: 'Wish Lists',
      routerLink: '/WishLists',
    },
    {
      id: 'Settings',
      label: 'Account Settings',
      routerLink: '/Settings',
    },
    {
      id: 'Summary',
      label: 'Account Summary',
      routerLink: '/Summary',
    },
  ];

  ngOnChanges(changes: any) {
    this.isVisible = changes.isVisible.currentValue;
  }
  openNav() {
    this.isOpen = !this.isOpen;
    // let body = document.getElementsByTagName('body')[0];
    // body.classList.add('body-landing');
  }
  closeNav() {
    this.isOpen = false;
  }

  itemPress(item: any) {
    this.router.navigate([item.routerLink]);
  }
  navigateToForm(index: any) {
    switch (index) {
      case 1:
        this.router.navigate(['/signUp']);
        break;
      case 2:
        this.router.navigate(['/login']);
        break;
    }
  }
  showHideSearch() {
    this.showSearch = !this.showSearch;
  }
}

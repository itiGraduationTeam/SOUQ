import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input()
  isVisible = false;
  isOpen = false;
  ngOnInit(): void {}
  menuLisItems = [
    {
      label: 'My Orders',
    },
    {
      label: 'My Addresses',
    },
    {
      label: 'Wish Lists',
    },
    {
      label: 'Account Settings',
    },
    {
      label: 'Account Summary',
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
}

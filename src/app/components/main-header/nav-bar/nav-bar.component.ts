import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input()
  isVisible = false;
  removeNav = false;

  navBarItems = [
    {
      label: 'All Categories',
    },
    {
      label: 'SOUQ Fashion',
    },
    {
      label: 'Supermarket',
    },
    {
      label: 'Mobiles & Tablets',
    },
    {
      label: 'TVs',
    },
    {
      label: 'Home & Kitchen',
    },
    {
      label: 'Appliances',
    },
    {
      label: 'Health & Beauty',
    },
    {
      label: 'Moms & Babies',
    },
    {
      label: 'Toys',
    },

    {
      label: 'Sports',
    },

    {
      label: 'Automotive',
    },

    {
      label: 'Office',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    this.isVisible = changes.isVisible.currentValue;
    if (!this.isVisible) {
      this.removeNav = false;
    } else {
      setTimeout(() => {
        this.removeNav = this.isVisible;
      }, 500);
    }
  }
}

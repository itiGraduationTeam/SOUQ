import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
      // id:'AllCategories',
      label: 'All Categories',
      routerLink: '/allcategory',
    },
    {
      // id:"SOUQFashion",
      label: 'SOUQ Fashion',
      routerLink: '/Fashion',
    },
    {
      label: 'Supermarket',
      routerLink: '/Supermarket',
    },
    {
      label: 'Mobiles & Tablets',
      routerLink: '/Mobiles',
    },
    {
      label: 'TVs',
      routerLink: '/TVs',
    },
    {
      label: 'Home & Kitchen',
      routerLink: '/Kitchen',
    },
    {
      label: 'Appliances',
      routerLink: '/Appliances',
    },
    {
      label: 'Health & Beauty',
      routerLink: '/Beauty',
    },
    {
      label: 'Moms & Babies',
      routerLink: '/Babies',
    },
    {
      label: 'Toys',
      routerLink: '/Toys',
    },

    {
      label: 'Sports',
      routerLink: '/Sports',
    },

    {
      label: 'Automotive',
      routerLink: '/Automotive',
    },

    {
      label: 'Office',
      routerLink: '/Office',
    },
  ];
  constructor(private router: Router) {}

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
  navBarItemPress(item: any) {
    alert(item.routerLink);
    this.router.navigate([item.routerLink]);
  }
}

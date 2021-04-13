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
       id:0,
      label: 'All Categories',
      routerLink: '/allcategory',
    },
    {
       id:1,
      label: 'SOUQ Fashion',
      routerLink: '/Fashion',
    },
    {
      id:2,
      label: 'Supermarket',
      routerLink: '/Supermarket',
    },
    {
      id:3,
      label: 'Mobiles & Tablets',
      routerLink: '/Mobiles',
    },
    {
      id:4,
      label: 'TVs',
      routerLink: '/TVs',
    },
    {
      id:5,
      label: 'Home & Kitchen',
      routerLink: '/Kitchen',
    },
    {
      id:6,
      label: 'Appliances',
      routerLink: '/Appliances',
    },
    {
      id:7,
      label: 'Health & Beauty',
      routerLink: '/Beauty',
    },
    {
      id:8,
      label: 'Moms & Babies',
      routerLink: '/Babies',
    },
    {
      id:9,
      label: 'Toys',
      routerLink: '/Toys',
    },

    {
      id:10,
      label: 'Sports',
      routerLink: '/Sports',
    },

    {
      id:11,
      label: 'Automotive',
      routerLink: '/Automotive',
    },

    {
      id:12,
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
    if(item.label==='All Categories')
    {
      this.router.navigate([item.routerLink]);
    }
    else
    {
      this.router.navigate([item.routerLink,item.id]);
    }
  }
}

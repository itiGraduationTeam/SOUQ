import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quick-action-bar',
  templateUrl: './quick-action-bar.component.html',
  styleUrls: ['./quick-action-bar.component.scss'],
})
export class QuickActionBarComponent implements OnInit {
  @Input()
  isVisible = false;
  removeNav = false;
  navRightItem = [
    {
      name: 'Create an Account',
    },
    {
      name: 'Daily Deals',
    },
    {
      name: ' Customer Service',
    },
    {
      name: 'Sell with Us',
    },
    {
      name: 'Track Orders',
    },
  ];

  navLeftItems = [
    {
      name: 'Free Shipping',
      icon: 'fas fa-truck',
    },
    {
      name: 'Free Returns',
      icon: 'fas fa-sync',
    },
    {
      name: ' Cash on Delivery',
      icon: 'fas fa-dollar-sign',
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

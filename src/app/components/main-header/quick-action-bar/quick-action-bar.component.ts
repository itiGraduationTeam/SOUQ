import { Component, OnInit, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quick-action-bar',
  templateUrl: './quick-action-bar.component.html',
  styleUrls: ['./quick-action-bar.component.scss'],
})
export class QuickActionBarComponent implements OnInit {
  @Input()
  isVisible = false;

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
      icon: 'bi bi-archive',
    },
    {
      name: 'Free Returns',
      icon: 'bi bi-archive',
    },
    {
      name: ' Cash on Delivery',
      icon: 'bi bi-archive',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    this.isVisible = changes.isVisible.currentValue;
  }
}

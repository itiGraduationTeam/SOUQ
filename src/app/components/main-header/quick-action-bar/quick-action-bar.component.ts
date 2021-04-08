import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quick-action-bar',
  templateUrl: './quick-action-bar.component.html',
  styleUrls: ['./quick-action-bar.component.scss'],
})
export class QuickActionBarComponent implements OnInit {
  faCoffee = faCoffee;
  visible = false;
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

  constructor() {}
  change() {
    this.visible = !this.visible;
  }
  ngOnInit(): void {}
}

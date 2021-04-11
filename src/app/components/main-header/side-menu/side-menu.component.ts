import { Component, OnInit, Input } from '@angular/core';
import { sideMenuListItems } from '../../../../Shared/sideMenuListItems';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input()
  isOpen = false;

  sideMenuItems = sideMenuListItems;

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: any) {
    this.isOpen = changes.isOpen.currentValue;
  }

  toggleAccordian(event: any, index: number) {
    let element = event.target;
    element.classList.toggle('active');
    if (this.sideMenuItems[index].isActive) {
      this.sideMenuItems[index].isActive = false;
    } else {
      this.sideMenuItems[index].isActive = true;
    }
    var panel = element.nextElementSibling;
    console.log(panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = 100 + '%';
    }
  }
  childClick(items: any, item: any) {
    console.log(items, item);
  }

  closeSlideMenu() {
    this.isOpen = false;
  }
}

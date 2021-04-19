import { Component, Input, OnInit } from '@angular/core';
import {sideMenuAdminList} from '../../../../Shared/sideMenuListItems'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  

  sideMenuItems =sideMenuAdminList;
  constructor() { }

  ngOnInit(): void {
    console.log("items:",this.sideMenuItems);
    
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

 

}

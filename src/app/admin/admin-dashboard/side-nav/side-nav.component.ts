import { Component, Input, OnInit } from '@angular/core';
import {sideMenuAdminList} from '../../../../Shared/sideMenuListItems'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  
  openProductMenu=false;
 sideNavWidth='250px';
  constructor() { }

  ngOnInit(): void {
    
  }
  
  openDropDownProduct(){
    if(this.openProductMenu)
    {
      console.log("if");
      
      this.openProductMenu=false;
    }
    else
    {
      console.log("else");
      
      this.openProductMenu=true;
    }
  }
  
  
 

}

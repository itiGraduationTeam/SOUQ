import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
openProductMenu=false;
openUsers=false;
pageConntainer="250px";

  constructor() { }

  ngOnInit(): void {
  }
  openDropDownProduct(){
    if(this.openProductMenu)
    {
      this.openProductMenu=false;
    }
    else
    {
      this.openProductMenu=true;
    }
  console.log("menu flag:",this.openDropDownProduct);
  
  }
  openDropDownUsers(){
    if(this.openUsers)
    {
      this.openUsers=false;
    }
    else
    {
      this.openUsers=true;
    }
  }
  // ngAfterViewChecked(): void {
   
  // }

}

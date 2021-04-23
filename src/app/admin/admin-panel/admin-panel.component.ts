import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  adminChild = [{ label: 'Dashboard', router: "/" ,isActive:true},
  { label: 'Products', router: "products",isActive:false },
  { label: 'Users', router: "users" ,isActive:false},]
  openProductMenu = false;
  sideNavWidth = '250px';
  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  routerChangedHandler(router: any) {
    this.router.navigate([router], { relativeTo: this.activatedRouter })
  }
}

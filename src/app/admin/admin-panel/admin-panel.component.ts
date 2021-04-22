import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  adminChild = [{ label: 'Dashboard', router: "/" },
  { label: 'Products', router: "products" },
  { label: 'Users', router: "users" },]
  openProductMenu = false;
  sideNavWidth = '250px';
  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  routerChangedHandler(router: any) {
    this.router.navigate([router], { relativeTo: this.activatedRouter })
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/Shared/Services/admin.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input()
  isVisible = false;
  removeNav = false;
  isAdminValidator=false;

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
      id:5,
      label: 'Supermarket',
      routerLink: '/Supermarket',
    },
    {
      id:2,
      label: 'Mobiles & Tablets',
      routerLink: '/Electronics',
    },
    {
      id:2,
      label: 'TVs',
      routerLink: '/Electronics',
    },
    {
      id:2,
      label: 'Electronics',
      routerLink: '/Electronics',
    },
    {
      id:3,
      label: 'Home & Kitchen',
      routerLink: '/Kitchen',
    },
    {
      id:8,
      label: 'Appliances',
      routerLink: '/Appliances',
    },
    {
      id:4,
      label: 'Health & Beauty',
      routerLink: '/Beauty',
    },
    {
      id:6,
      label: 'Moms & Babies',
      routerLink: '/Babies',
    },
    {
      id:6,
      label: 'Toys',
      routerLink: '/Babies',
    },

    {
      id:11,
      label: 'Sports',
      routerLink: '/Sports',
    },

    {
      id:13,
      label: 'Office',
      routerLink: '/Office',
    },
  ];
  constructor(private router: Router, private adminServ:AdminService) {}

  ngOnInit(): void {
    this.checkIsAdmin();
  }

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
  navigateToAdmin(){
    this.router.navigate(['/admin/']);
  }
  checkIsAdmin(){
    this.adminServ.authAdmin().subscribe(
      data=>{
        // this.isAdmin=data['isAdmin'];
        this.isAdminValidator=Object.values(data)[0];
        console.log("admin data: " ,this.isAdminValidator)

      },
      err=>console.log("user is not admin: ", err)   
    )
  }
}

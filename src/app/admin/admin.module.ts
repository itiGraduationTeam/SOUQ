import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { SideNavComponent } from './admin-dashboard/side-nav/side-nav.component';


@NgModule({
  declarations: [AdminLoginComponent, AdminDashboardComponent, UserCrudComponent,
  
  SideNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

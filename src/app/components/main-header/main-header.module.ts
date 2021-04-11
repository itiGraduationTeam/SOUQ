import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MainHeaderRoutingModule } from './main-header-routing.module';
import { QuickActionBarComponent } from './quick-action-bar/quick-action-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    QuickActionBarComponent,
    NavBarComponent,
    HeaderComponent,
    MainHeaderComponent,
    SideMenuComponent,
  ],
  imports: [CommonModule],
  exports: [MainHeaderComponent],
})
export class MainHeaderModule {}

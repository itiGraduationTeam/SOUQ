import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuickActionBarComponent } from './quick-action-bar/quick-action-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '', component: NavBarComponent },
  { path: '', component: QuickActionBarComponent },
  { path: '', component: SideMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainHeaderRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuickActionBarComponent } from './quick-action-bar/quick-action-bar.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '', component: NavBarComponent },
  { path: '', component: QuickActionBarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainHeaderRoutingModule {}

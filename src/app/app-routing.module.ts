import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/+auth/login/login.component';
import { SignupComponent } from './components/+auth/signup/signup.component';
import { ProductDetailsComponent } from './components/+product/product-details/product-details.component';
import { AllCategoryComponent } from './components/all-category/all-category.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PopularComponent } from './components/homepage/popular/popular.component';
import { ShowcategoryComponent } from './components/showcategory/showcategory.component';
const routes: Routes = [
  {
    path: 'main-header',
    loadChildren: () =>
      import(`./components/main-header/main-header.module`).then(
        (m) => m.MainHeaderModule
      ),
  },
  {path:"",component:HomepageComponent}
  ,
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'allcategory', component: AllCategoryComponent
  },
  {path:'t',component:PopularComponent}
  // {
  //   path: 'showcategory/:id', component: ShowcategoryComponent
  // }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

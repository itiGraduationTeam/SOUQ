import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/+product/product-details/product-details.component';
const routes: Routes = [
  {
    path: 'main-header',
    loadChildren: () =>
      import(`./components/main-header/main-header.module`).then(
        (m) => m.MainHeaderModule
      ),
  },
  {
    path: 'product_details', component: ProductDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

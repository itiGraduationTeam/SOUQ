import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderModule } from './components/main-header/main-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllCategoryComponent } from './components/all-category/all-category.component';
import { AllSubCategoryComponent } from './components/all-sub-category/all-sub-category.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, AllCategoryComponent, AllSubCategoryComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainHeaderModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

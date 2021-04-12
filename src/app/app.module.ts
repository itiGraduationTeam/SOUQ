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
import { FilterComponent } from './components/filter/filter.component';
import { ProductDetailsComponent } from './components/+product/product-details/product-details.component';
import { ProductsSpecificationComponent } from './components/+product/product-details/products-specification/products-specification.component';
import { ProductsSliderComponent } from './components/+product/product-details/products-slider/products-slider.component';
import { ProductsSummaryComponent } from './components/+product/product-details/products-summary/products-summary.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/+auth/login/login.component';
import { SignupComponent } from './components/+auth/signup/signup.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/+shared_UI/card/card.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SlideshowComponent } from './components/homepage/slideshow/slideshow.component';
import { ProductCardDesignComponent } from './components/+shared_UI/product-card-design/product-card-design.component';
import { ShowcategoryComponent } from './components/showcategory/showcategory.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { RatingComponent } from './components/+shared_UI/rating/rating.component';
import { PopularComponent } from './components/homepage/popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCategoryComponent,
    AllSubCategoryComponent,
    FooterComponent,
    FilterComponent,
    ProductDetailsComponent,
    ProductsSpecificationComponent,
    ProductsSliderComponent,
    ProductsSummaryComponent,
    LoginComponent,
    SignupComponent,
    CardComponent,
    HomepageComponent,
    SlideshowComponent,
    ProductCardDesignComponent,
    ShowcategoryComponent,

    RatingComponent,
    PopularComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainHeaderModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

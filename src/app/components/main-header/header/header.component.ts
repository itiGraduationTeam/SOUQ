import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { FilterService } from 'src/Shared/Services/filter.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/Shared/Services/cart.service';
import { LocalStorageService } from 'src/Shared/Services/local-storage.service';
import { AuthenticateService } from 'src/Shared/Services/authenticate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private isLoginsub: Subscription = new Subscription;
  isLogin: boolean = false;
  numberOfItemsInCart=0;
  auth=false;
  username:string='';
  SearchForm = this.formBuilder.group({
    search: ['', Validators.required],
  });
  constructor(
    private router: Router,
    private filterServe: FilterService,
    private formBuilder: FormBuilder,
    private cartServe:CartService,
    private authServe:AuthenticateService
    // private localStorage:LocalStorageService
      
    
  ) {}
  @Input()
  isVisible = false;
  isOpen = false;
  showSearch = false;
  categeories: any;

  subCategeories = [
    'menWear',
    'womenWear',
    'kidWear',
    'mobiles',
    'labtops',
    'tv',
    'kitchen',
    'homeDecor',
    'furniture',
    'makeup',
    'skinCare',
    'hairCare',
  ];
  ngOnInit(): void {
    this.isLoginsub = this.authServe.getLoginListner().subscribe(isAuth => {
      this.isLogin = isAuth;
      console.log("islogin: ",this.isLogin);
    },
    err=>console.log(err)
    
    )
    
    this.getCategories();
    this.getNumberOgCarts();
    this.getUserame();   
  }
  ngAfterViewInit(): void {
    this.getNumberOgCarts();
  }
  
  menuLisItems = [
    {
      id: 1,
      label: 'My Orders',
      routerLink: '/user-properties',
    },
    {
      id: 2,
      label: 'My Addresses',
      routerLink: '/user-properties',
    },
    {
      id: 3,
      label: 'Wish Lists',
      routerLink: '/user-properties',
    },
    {
      id: 4,
      label: 'Account Settings',
      routerLink: '/Settings',
    },
    {
      id: 5,
      label: 'Account Summary',
      routerLink: '/Summary',
    },
  ];

  ngOnChanges(changes: any) {
    this.isVisible = changes.isVisible.currentValue;
    // this.getUserame();
  }
  openNav() {
    this.isOpen = !this.isOpen;
    // let body = document.getElementsByTagName('body')[0];
    // body.classList.add('body-landing');
  }
  closeNav() {
    this.isOpen = false;
  }

  itemPress(item: any) {
    this.router.navigate([item.routerLink]);
  }
  navigateToForm(index: any) {
    switch (index) {
      case 1:
        this.router.navigate(['/signUp']);
        break;
      case 2:
        this.router.navigate(['/login']);
        break;
    }
  }
  navigateToCart(){
    this.router.navigate(['/shopping_cart']);
  }
  showHideSearch() {
    this.showSearch = !this.showSearch;
  }
  //get data to filter
  //get all categories
  getCategories() {
    this.filterServe.getAllCategory().subscribe(
      (data) => {
        this.categeories = data;
        console.log('all my categories', this.categeories);
      },
      (err) => {
        console.log('from header: ', err);
      }
    );
  }
  //get subCategories

  search(search: string) {
    console.log(search);
    let filterCategory = this.categeories.filter((item: any, index: any) => {
      return item.name.toLowerCase().match(search.toString().toLowerCase());
    });
    if (filterCategory[0] != null) {
      let cateName =
        filterCategory[0]['name'].charAt(0).toUpperCase() +
        filterCategory[0]['name'].slice(1);
      console.log(' search category for ' + filterCategory[0]['cateid']);
      this.router.navigate([`/${cateName}/${filterCategory[0]['cateid']}`]);
    } else {
      var filterSub = this.subCategeories.filter((item: any, index: any) => {
        return item
          .toLocaleLowerCase()
          .match(search.toString().toLocaleLowerCase());
      });
      if (filterSub[0] != null) {
        console.log('subcate search for ' + filterSub[0]);
        this.router.navigate([`/filter/${filterSub[0]}`]);
      } else {
        console.log('not found');
        this.router.navigate([`/not-found`]);
      }
    }
  }
  // filteraion for search
  onEnterSearch(form: any) {
    //this.search();
    if (form.valid) {
      this.search(form.value.search);
    }
  }
  searchPress(form: any) {
    if (form.valid) {
      this.search(form.value.search);
    }
  }
  getNumberOgCarts(){
    this.cartServe.getAllCarts().subscribe(
      data=>{
        this.numberOfItemsInCart=Object.keys(data).length;
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  getUserame(){
    let id=localStorage.getItem("userId");
    if(id){
      this.authServe.getUserById(id).subscribe(
        data=>{
          this.username=`${data.firstName}-${data.firstName}`
          this.auth=true;
          console.log("user info: ",this.username);

        },
        err=>{
          console.log(err);
          this.auth=false;
          this.username="";   
        }
      )
    }
  }
  ngOnDestroy(): void {
    this.isLoginsub.unsubscribe()
  }
  logout() {
    this.authServe.logOut()
  }    
}

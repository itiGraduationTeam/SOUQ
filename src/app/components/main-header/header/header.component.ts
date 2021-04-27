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
  
  lenghtOfItems:number=0;
  auth = false;
  username: string = '';
  SearchForm = this.formBuilder.group({
    search: ['', Validators.required],
  });
  constructor(
    private router: Router,
    private filterServe: FilterService,
    private formBuilder: FormBuilder,
    private cartServe: CartService,
    private authServe: AuthenticateService
    // private localStorage:LocalStorageService


  ) { }
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
    //check user login or not 
    this.isLoginsub = this.authServe.getLoginListner().subscribe(isAuth => {
      this.isLogin = isAuth;
      console.log("islogin: ", this.isLogin);
    },
      err => console.log(err)
    )
//check cart item lenght;
    this.cartServe.getCartLenght().subscribe(
      value=>{
        console.log("value lenght is: ",value);
        
        this.lenghtOfItems=value
      }
    );
    console.log("inital lenght is: ",this.lenghtOfItems);
    
    this.getCategories();
    // this.getNumberOfCarts();
    this.getUserame();
  }
  ngAfterViewInit(): void {
    this.getNumberOfCarts();
    console.log("listen to cart lenght: ",this.lenghtOfItems);
    
  }

  menuLisItems = [
    {
      id: 1,
      label: 'My Orders',
      routerLink: '/user-properties/orders',
    },
    {
      id: 2,
      label: 'My Addresses',
      routerLink: '/user-properties/shipping-address',
    },
    {
      id: 3,
      label: 'Wish Lists',
      routerLink: '/user-properties/wish-lists',
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
    console.log("item pressed",item.id);
    
    this.router.navigate([item.routerLink,item.id]);
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
  navigateToCart() {
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
  getNumberOfCarts() {
    this.cartServe.getCartLenght().subscribe(
      value => {
        this.lenghtOfItems =value
      }
    )
  }
  getUserame() {
    let id = localStorage.getItem("userId");
    if (id) {
      this.authServe.getUserById(id).subscribe(
        data => {
          this.username = `${data.firstName}-${data.firstName}`
          this.auth = true;
          console.log("user info: ", this.username);

        },
        err => {
          console.log(err);
          this.auth = false;
          this.username = "";
        }
      )
    }
  }
  ngOnDestroy(): void {
    this.isLoginsub.unsubscribe()
  }
  logout() {
    this.auth = false;
    this.username = "";
    this.authServe.logOut()
  }
}

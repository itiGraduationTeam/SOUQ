import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  openProductMenu = false;
  openUsers = false;
  pageConntainer = "250px";

  addProductForm = this.fb.group({

    name: [''],
    image: [''],
    images: this.fb.array([]),

    brand: [''],
    description: [''],
    countInStock: [''],
    price: [''],
    category: [''],
    subcategory: [''],
    overview: [''],
    rating: [''],
    numReviews: [''],
    discount: [''],
    size: [''],
    material: [''],
    color: [''],
    screenSize: [''],
    internalMemory: [''],
    battery: [''],
    operatingSystem: [''],
    memorySize: [''],
    proccessor: [''],
    tvScreenSize: [''],
    noOfUsbPort: [''],
    baseMaterial: [''],
    foundation: [''],
    skinType: [''],
    hairType: [''],
    formulation: [''],

  });


  @Input() parentProductData: any;

  productUpdateForm = this.fb.group({
    name: [''],
    image: [''],
    images: this.fb.array([]),

    brand: [''],
    description: [''],
    countInStock: [''],
    price: [''],
    category: [''],
    subcategory: [''],
    overview: [''],
    rating: [''],
    numReviews: [''],
    discount: [''],
    size: [''],
    material: [''],
    color: [''],
    screenSize: [''],
    internalMemory: [''],
    battery: [''],
    operatingSystem: [''],
    memorySize: [''],
    proccessor: [''],
    tvScreenSize: [''],
    noOfUsbPort: [''],
    baseMaterial: [''],
    foundation: [''],
    skinType: [''],
    hairType: [''],
    formulation: [''],
  })



  get images() {
    return this.addProductForm.get('images') as FormArray;
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productUpdateForm.patchValue({
      productName: this.parentProductData.productName,
      name: this.parentProductData.name,
      image: this.parentProductData.image,
      images: this.parentProductData.images,

      brand: this.parentProductData.brand,
      description: this.parentProductData.description,
      countInStock: this.parentProductData.countInStock,
      price: this.parentProductData.price,
      category: this.parentProductData.category,
      subcategory: this.parentProductData.subcategory,
      overview: this.parentProductData.overview,
      rating: this.parentProductData.rating,
      numReviews: this.parentProductData.numReviews,
      discount: this.parentProductData.discount,
      size: this.parentProductData.size,
      material: this.parentProductData.material,
      color: this.parentProductData.color,
      screenSize: this.parentProductData.screenSize,
      internalMemory: this.parentProductData.internalMemory,
      battery: this.parentProductData.battery,
      operatingSystem: this.parentProductData.operatingSystem,
      memorySize: this.parentProductData.memorySize,
      proccessor: this.parentProductData.proccessor,
      tvScreenSize: this.parentProductData.tvScreenSize,
      noOfUsbPort: this.parentProductData.noOfUsbPort,
      baseMaterial: this.parentProductData.baseMaterial,
      foundation: this.parentProductData.foundation,
      skinType: this.parentProductData.skinType,
      hairType: this.parentProductData.hairType,
      formulation: this.parentProductData.formulation,
    })
  }




  openDropDownProduct() {
    if (this.openProductMenu) {
      this.openProductMenu = false;
    }
    else {
      this.openProductMenu = true;
    }
    console.log("menu flag:", this.openDropDownProduct);

  }
  openDropDownUsers() {
    if (this.openUsers) {
      this.openUsers = false;
    }
    else {
      this.openUsers = true;
    }
  }





  addNewImages() {
    this.images.push(this.fb.control(''))
  }

  removeImages(i: any) {
    this.images.removeAt(i);
  }




  
  addFormContols(controls: any) {

  }

}

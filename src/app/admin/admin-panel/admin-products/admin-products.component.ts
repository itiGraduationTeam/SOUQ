import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterService } from 'src/Shared/Services/filter.service';
import { ProductService } from 'src/Shared/Services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  productList: any;
  isOpen = false;
  loading = true;
  openModal = false;
  selectedOption = "";
  allCategories: any;
  allsubCategories: any;
  selectedProduct: any;
  editForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    discount: ['', Validators.required]
  });
  addProductForm = this.formBuilder.group({
    name: [''],
    price: [''],
    countInStock: [''],
    discount: [''],
    categories: [''],
    subCategory: [''],
    image:[''],
    rating: [''],
    description: [''],
  });

  constructor(private productServ: ProductService,
    private filterServe: FilterService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategories();
  }
  ngOnChanges() {

  }

  getAllProduct() {
    this.productServ.getProduct().subscribe(
      data => {
        this.productList = data;
        this.loading = false;
        // console.log("all data: ",this.productList);

      },
      err => {
        console.log("err from admin-products: ", err);

      }
    )
  }

  //remove product by name
  removeProduct(proName: any) {
    this.productServ.removeProduct(proName).subscribe(
      data => {
        console.log("result of remove product: ", data);
      },
      err => {
        console.log("err from remove product: ", err);
      }
    )
    console.log("from admin products: ", proName);
  }
  //remove product by name
  editProduct() {
    let newData = this.editForm.value;
    console.log("form value: ", newData);
    this.productServ.editProduct(this.selectedProduct._id,
      newData.name, newData.price, newData.discount).subscribe(
        data => {
          console.log("result of edit product: ", data);
        },
        err => {
          console.log("err from edit product: ", err);
        }
      )
  }
  addProduct() {
    let newData = this.addProductForm.value;
    console.log("form value: ", newData);
    this.productServ.addProduct(newData).subscribe(
        data => {
          console.log("result of add product: ", data);
        },
        err => {
          console.log("err from add product: ", err);
        }
      )
  }

  // get categories and subCategories
  getAllCategories() {
    this.filterServe.getAllCategory().subscribe(
      data => {
        this.allCategories = data
        console.log("data: ", this.allCategories);

      },
      err => console.log(err)
    );

  }
  subCateList() {

    if (this.selectedOption != "") {
      let id = parseInt(this.selectedOption)
      console.log("selected option id: ", id);
      this.filterServe.getAllSubcategoryByCateId(id).subscribe(
        data => {
          this.allsubCategories = data;
          console.log("selected option: ", this.allsubCategories);

        },
        err => console.log(err)
      );
    }


  }
  openModalForm(prod: any) {
    this.selectedProduct = prod;
    console.log("selected product: ", this.selectedProduct._id);
    this.openModal = true;
  }
  closeModal() {
    this.openModal = false;
  }
  //toggle flag to open or close add product form
  openAddForm() {
    // this.isOpen=!this.isOpen;
    if (this.isOpen) {
      console.log("if");

      this.isOpen = false;
    }
    else {
      console.log("else");

      this.isOpen = true;

    }
  }
}

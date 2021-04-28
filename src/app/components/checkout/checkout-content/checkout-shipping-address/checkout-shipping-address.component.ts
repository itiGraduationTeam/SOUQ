import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userShippingData } from 'src/Shared/class/user-shipping-data';
import { AuthenticateService } from 'src/Shared/Services/authenticate.service';
import { CheckoutOrderService } from 'src/Shared/Services/checkout-order.service';

@Component({
  selector: 'app-checkout-shipping-address',
  templateUrl: './checkout-shipping-address.component.html',
  styleUrls: ['./checkout-shipping-address.component.scss']
})
export class CheckoutShippingAddressComponent implements OnInit {
  shippingForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobileNumber: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    address: ['', Validators.required],

  });
  clientInfo:any;
  constructor(private formBuilder: FormBuilder,
     private router: Router, 
     private orderServe: CheckoutOrderService) { }

  ngOnInit(): void {
    this.initForm();
  }

  addOrder() {
    let price=localStorage.getItem("totalPrice");

   let obj={clientInfo:this.shippingForm.value,totalPrice:price}
     this.orderServe.createOrder(obj).subscribe();
     this.router.navigate(['/checkout/payment']);
// console.log(this.shippingForm.value);
this.clientInfo =this.shippingForm.value;

localStorage.setItem('clientInfo', JSON.stringify(this.clientInfo));
  }
  initForm() {
  }

}

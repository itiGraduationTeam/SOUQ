import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/Shared/Services/authenticate.service';

@Component({
  selector: 'app-checkout-shipping-address',
  templateUrl: './checkout-shipping-address.component.html',
  styleUrls: ['./checkout-shipping-address.component.scss']
})
export class CheckoutShippingAddressComponent implements OnInit {
  shippingForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    governorate: ['', Validators.required],
    city: ['', Validators.required],
    area: ['', Validators.required],
    street: ['', Validators.required],
    locationType:['', Validators.required],
    note:['']

  });
  constructor(private formBuilder: FormBuilder, private router: Router, private authServ: AuthenticateService,) { }

  ngOnInit(): void {
    this.initForm();
  }

  SaveAddress() {
    let d = this.authServ.SaveAddress(this.shippingForm).subscribe(
      data => {
        console.log("SaveAddress data:", data);
        this.router.navigate(['/payment']);
      },
      err => {
        console.log("SaveAddress err: ", err);
      }
    );
    // console.log("err: ", d);

  }
  initForm() {
  }

}

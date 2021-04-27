import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userShippingData } from 'src/Shared/class/user-shipping-data';
import { AuthenticateService } from 'src/Shared/Services/authenticate.service';

@Component({
  selector: 'app-checkout-shipping-address',
  templateUrl: './checkout-shipping-address.component.html',
  styleUrls: ['./checkout-shipping-address.component.scss']
})
export class CheckoutShippingAddressComponent implements OnInit {

  shippingData =new userShippingData('', '', '', '','','','',''); 
  signUpErr=false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authServ: AuthenticateService,) { }

  ngOnInit(): void {
    this.initForm();
  }

  SaveAddress(userData:userShippingData) {
     this.authServ.SaveAddress(this.shippingData).subscribe(
      data => {
        console.log("SaveAddress data:", data);
        // this.router.navigate(['/payment']);
      },
      err => {
        this.signUpErr=true;
        console.log("SaveAddress err: ", err);
      }
    );
    // console.log("err: ", d);

  }
  initForm() {
  }

}

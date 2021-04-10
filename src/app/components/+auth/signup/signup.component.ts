import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserData } from 'src/Shared/class/user-data';
import { AuthenticateService } from 'src/Shared/Services/authenticate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpData = new UserData('', '', '', '');

  constructor(private formBuilder: FormBuilder,private authSignUpServ:AuthenticateService) { }

  ngOnInit(): void {
    this.initForm();
  }
  signUp(userData:UserData) {
    this.authSignUpServ.signUp(this.signUpData);
    console.log("result:",this.signUpData )
  }
  initForm() {
  }

}

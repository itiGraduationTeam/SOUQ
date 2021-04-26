import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/Shared/Services/admin.service';
import { AuthenticateService } from 'src/Shared/Services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]

  });
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authLoginServ: AuthenticateService,
    private adminServ:AdminService
  ) { }

  ngOnInit(): void {
    this.initForm();
    
  }
  login() {
    this.authLoginServ.logIn(this.loginForm.value)
    console.log(this.loginForm.value)
    // this.adminServ.authAdmin().subscribe(
    //   data=>{
    //     console.log("auth data:",data);
    //   }
    //   ,
    //   err=> console.log("auth err: ",err)
    // )
    this.router.navigate(['/']);

  }
  logOut() {
    alert("you are log out")
    this.authLoginServ.logOut();
  }
  navigateToSignUp() {
    this.router.navigate(['/signUp'])
  }
  initForm() {
  }
}
// https://github.com/sabrien96
//https://www.upwork.com/freelancers/~01d9862d04784ade72
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder,private authLoginServ:AuthenticateService) { }

  ngOnInit(): void {
    this.initForm();
  }
  login() {
    this.authLoginServ.logIn(this.loginForm.value)
    console.log(this.loginForm.value)
  }
  logOut(){
    alert("you are log out")
    this.authLoginServ.logOut();
  }
  initForm() {
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../class/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
private loginUrl=`http://localhost:8000/api/users/authenticate`;
private signUpUrl=`http://localhost:8000/api/users/register`;

user:any;
  constructor(private _http:HttpClient) { }

  signUp(user:any){
   return this._http.post<UserData>(this.signUpUrl,user).subscribe(
     data=>{
       console.warn(data);
       
     },
     err=>{
       console.warn(err);
       
     }
   )
  }
  logIn(user: UserData) {
    this._http.post<UserData>(this.loginUrl,user).subscribe(
      data=>{
        this.user=data
        console.warn(data);
        alert("you are login your token is: "+this.user.token)
        localStorage.setItem('userToken', this.user.token);
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  logOut() {
    console.log("deleted")
    localStorage.removeItem("userToken");
    // this.loginListner.next(false)
  }

  signInCheckout(user: UserData) {
    return this._http.post<UserData>(this.loginUrl, user)
  }
}

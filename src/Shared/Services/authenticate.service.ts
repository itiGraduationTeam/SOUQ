import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserData } from '../class/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
private loginUrl=`http://localhost:8000/api/users/authenticate`;
private signUpUrl=`http://localhost:8000/api/users/register`;

user:any;
  constructor(private _http:HttpClient) { }
  getToken() {
    return localStorage.getItem("userToken")
  }
  signUp(user:any){
   return this._http.post<UserData>(this.signUpUrl,user).subscribe(
     data=>{
       console.warn(data);
       localStorage.setItem("userData",user);
       
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
        alert("you are login your token is: "+this.user.token)
        localStorage.setItem('userToken', this.user.token);
        localStorage.setItem('userData',this.user);
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  getAllUsers(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:`Bearer ${this.getToken()}`
      }),

    };
    return this._http.get<any>(`http://localhost:8000/api/users/`, options).pipe(
      catchError(err => { return throwError(err.message); })
    )}


  logOut() {
    console.log("deleted")
    localStorage.removeItem("userToken");
    // this.loginListner.next(false)
    localStorage.removeItem("userData")
  }

  signInCheckout(user: UserData) {
    return this._http.post<UserData>(this.loginUrl, user)
  }


}

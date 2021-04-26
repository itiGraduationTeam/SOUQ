import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserData } from '../class/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
private loginUrl=`http://localhost:8000/api/users/authenticate`;
private signUpUrl=`http://localhost:8000/api/users/register`;

private loginListner = new Subject<boolean>()
user:any;
  constructor(private _http:HttpClient) { }
  getToken() {
    return localStorage.getItem("userToken")
  }
  signUp(user:any){
   return this._http.post<UserData>(this.signUpUrl,user).pipe(
    catchError(err => { return throwError(err.message); })
  )}

  //  .subscribe(
  //    data=>{
  //      console.log("Register successfully: ",data);
  //    },
  //    err=>{
  //     console.log("Register failed: ",err);
  //   }
  //  )
  
  getLoginListner() {
    return this.loginListner.asObservable()
  }
  logIn(user: any) {
    this._http.post<UserData>(this.loginUrl,user).subscribe(
      data=>{
        this.user=data
        // alert("you are login your token is: "+this.user.token)
        this.loginListner.next(true)
        localStorage.setItem('userToken', this.user.token);
        localStorage.setItem('userId',this.user._id);
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

    getUserById(id:any): Observable<any> {
      return this._http.get<any>(`http://localhost:8000/api/users/${id}`).pipe(
        catchError(err => { return throwError(err.message); })
      )}
  
    removeUser(userID:any) {
      return this._http.delete<UserData>(`http://localhost:8000/api/users/${userID}` ).pipe(
        catchError(err => { return throwError(err.message); })
      )
    }
  logOut() {
    console.log("deleted")
    this.loginListner.next(false)
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    // localStorage.removeItem("wishList")

  }

  signInCheckout(user: UserData) {
    return this._http.post<UserData>(this.loginUrl, user)
  }
}

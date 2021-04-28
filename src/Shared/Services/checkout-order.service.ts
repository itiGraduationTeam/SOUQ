import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckoutOrderService {
_url='';
  constructor(private _http:HttpClient) { }
//get token of user
  getToken() {
    return localStorage.getItem("userToken")
  }

  //get all orders for user by his id
  getOrdersByUserID(userId:any){
    this._url=`http://localhost:8000/api/orders/getOrders/${userId}`;
    return this._http.get(this._url).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }


  //get  all orders
  getAllOrders(){
    this._url=`http://localhost:8000/api/orders/`;
    return this._http.get(this._url).pipe(
      catchError(err=>{return throwError(err.message);})
    )
  }


  //create new order
  createOrder(order:any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:`Bearer ${this.getToken()}`
      }),
    };
    this._url=`http://localhost:8000/api/orders/create-order`;
    return this._http.post(this._url,{...order},options).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  //remove order
  removeOrder(orderID:any){
    this._url=`http://localhost:8000/api/orders/${orderID}`
    return this._http.delete(this._url).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
}

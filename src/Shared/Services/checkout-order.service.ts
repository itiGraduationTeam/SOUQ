import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckoutOrderService {

  constructor(private _http: HttpClient) { }

  getToken() {
    return localStorage.getItem("userToken")
  }

  addOrder(odrerId: string) {

    let _url = "http://localhost:8000/api/orders/create-order"
    return this._http.post<any>(_url, { odrerId: odrerId }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      }
    }).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  deleteOrder(productId: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      }),
      body: { productId: productId }

    };
    let _url = `http://localhost:8000/api/orders/${productId}`
    return this._http.delete<any>(_url, options).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  getAllOrdersUsers(user: any): {
    
    return this._http.get<any>(`http://localhost:8000/api/orders/getOrders/${user}`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`,

      }
    }).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  getAllOrders() {
    let _url = "http://localhost:8000/api/orders/"
    return this._http.get<any>(_url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`,

      }
    }).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

}

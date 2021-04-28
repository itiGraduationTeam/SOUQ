import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  _url = "";
cartLenght=new Subject<number>();
  constructor(private _http: HttpClient) { }
  // to get token
  getToken() {
    return localStorage.getItem("userToken")
  }

  //listen to cart lenght change
  getCartLenght(){
    return this.cartLenght.asObservable();
  }
  changeCartLenght(value:number){
    return this.cartLenght.next(value);
  }

  //add product to cart
  addToCart(productId: string, qty: number) {
    this._url = "http://localhost:8000/api/cart/addcart"
    return this._http.post<any>(this._url, { productId: productId, qty: qty }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      }
    }).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  // delete from cart
  deleteCart(productId:string){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:`Bearer ${this.getToken()}`
      }),
      body:{productId:productId}

    };
    this._url="http://localhost:8000/api/cart/delete-cart"
    return this._http.delete<any>(this._url, options).pipe(
      catchError(err => { return throwError(err.message); })
    )}

 // clear cart
 clearCart(){
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:`Bearer ${this.getToken()}`
    })

  };
  this._url="http://localhost:8000/api/cart/clear"
  return this._http.delete<any>(this._url, options).pipe(
    catchError(err => { return throwError(err.message); })
  )}
    //to get all carts
  getAllCarts() {
    this._url = "http://localhost:8000/api/cart/getcart"
    return this._http.get<any>(this._url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`,

      }
    }).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

}

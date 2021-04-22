import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProduct } from '../Interfaces/IProduct';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }



  getProduct(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`http://localhost:8000/api/products`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
  getProductByID(id: any): Observable<IProduct> {
    return this._http.get<IProduct>(`http://localhost:8000/api/products/${id}`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
  addProduct(product: any): Observable<IProduct> {

    return this._http.post<IProduct>(`http://localhost:8000/api/products`,
      { ...product }
    ).pipe(
      catchError(err => { return throwError(err.message) })
    )
  }
  //function to get by subcategory
  getProductsBySubcategory(subcategory: any): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`http://localhost:8000/api/products/bysubcategory}/${subcategory}`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }



  //remove product by name
  removeProduct(proName: any) {
    let _url = `http://localhost:8000/api/products/${proName}`;
    return this._http.delete<any>(_url).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }
  
  //function to get only all electronic product
  getElectronicProduct(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`http://localhost:8000/api/products/bycategory/electronics`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  //function to get only all home product
  getHomeProduct(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`http://localhost:8000/api/products/bycategory/home`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  //function to get only all fashion product
  getFashionProduct(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`http://localhost:8000/api/products/bycategory/fashion`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }

  //delete product by name

  getToken() {
    return localStorage.getItem("userToken")
  }
  //add review
  addReview(review: any, productId: any): Observable<any> {
    return this._http.post<any>(`http://localhost:8000/api/products/${productId}/reviews`, review, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      }
    }).pipe(
      catchError(err => { return throwError(err); })
    )
  }
}

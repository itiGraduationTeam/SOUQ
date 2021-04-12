import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  _url = "";

  constructor(private _http: HttpClient) { }

  getProductByCtegory(categoryName:any) {
    this._url = "http://localhost:8000/api/products/bycategory/" + categoryName;
    return this._http.get<any>(this._url);
  }
  getAllCategory() {
    this._url = "http://localhost:8000/api/filter/category";
    return this._http.get<any>(this._url);

  }
  getAllSubcategoryByCateId(CateId:any) {
    this._url = "http://localhost:8000/api/filter/subcategory/" + CateId;
    return this._http.get<any>(this._url);
  }
  getProductBySubcategory(SubcategoryName:any) {
    this._url = "http://localhost:8000/api/products/bysubcategory/" + SubcategoryName;
    return this._http.get<any>(this._url);
  }


  getAllSubcategoryByName(cateName:any) {
    this._url = "http://localhost:8000/api/filter/subcategoryarr/" + cateName;
    return this._http.get<any>(this._url);
  }
}

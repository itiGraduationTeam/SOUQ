import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }
  getToken() {
    return localStorage.getItem("userToken")
  }
  authAdmin() {
    return this._http.get("http://localhost:8000/api/admin", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`,
      }
      
    })
    
  }
}

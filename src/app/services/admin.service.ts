import { Observable } from 'rxjs';
import { User } from './../kullanici-yonetimi/user-models/user';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

let API_URL = "http://localhost:8080/admin/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization: 'Bearer ' + this.currentUser.token,
      "Content-Type": "application/json; charset=UTF-8"
    });
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + "all", { headers: this.headers });
  }

  register(user: User): Observable<any> {
    return this.http.post(API_URL + "registration", JSON.stringify(user),
      { headers: { "Content-Type": "application/json; charset=UTF-8" } });
  }
  
}

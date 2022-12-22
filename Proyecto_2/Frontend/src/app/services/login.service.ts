import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  Register(username: string, email: string, password: string){
    const url = "http://localhost:3200/login/register";

    return this.http.post<any>(
      url,
      {
        "usuario": username,
        "email": email,
        "password": password
      },
      { 
        headers: this.headers 
      });
  }

  Login(username: string, password: string){
    const url = "http://localhost:3200/login/login";

    return this.http.post<any>(
      url,
      {
        "usuario": username,
        "password": password
      },
      { 
        headers: this.headers 
      });
  }
}

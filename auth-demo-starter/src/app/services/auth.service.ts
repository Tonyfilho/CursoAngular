import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  constructor(private http: Http, private router: Router) {
  }

  login(credentials) {
   return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
      .map((response) => {
       console.log(response, "nosso response");
       console.log(response.json, "nosso response JSON");
       let res = response.json();
       if (res && res.token) {
          localStorage.setItem('token',res.token);
          return true;
       }
       return false;
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    // let jwtHelper = new JwtHelper();
    // let token = localStorage.getItem('token');
    // if (!token) {
    //     return false;
    // }
    // let expirationDate = jwtHelper.getTokenExpirationDate(token);
    // let isExpired = jwtHelper.isTokenExpired(token);
    // console.log("expirationDate ", expirationDate);
    // console.log("isExpired ", isExpired);
    // return !isExpired;
    return tokenNotExpired();
  }




}//end class


import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
// import { TokenApiModel } from '../models/token-api-model';
import { isPlatformBrowser } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ReturnStatement } from '@angular/compiler';
import { error } from 'console';
import { User } from '../models/user-model';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})



export class AuthService {

  private baseUrl: string = "http://localhost:5267/"
  private userPayload: any;
  constructor(private http: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: Object, private jwtHelper: JwtHelperService) {
    // this.userPayload = this.getRefreshToken(); //maybe get decoded token

    // if (isPlatformBrowser(this.platformId)) {
    //   this.userPayload = this.decodedToken(); // This will only execute in the browser environment
    // }
  }

  register(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  }

  // Method to retrieve the current user's ID from the JWT token
  getCurrentUserId(): number {
    const token = localStorage.getItem('token');

    if (token) {
      // Decode the token to extract user information
      const decodedToken = this.jwtHelper.decodeToken(token);

      // Check if the decoded token contains the user ID
      if (decodedToken && decodedToken.UserId) {
        return decodedToken.User; // Assuming the user ID is stored in 'userId' field
      }
    }

    return 0
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['login'])
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }
  storeRefreshToken(tokenValue: string) {
    localStorage.setItem('refreshToken', tokenValue)
  }

  getToken() {
    return localStorage.getItem('token')
  }
  getRefreshToken() {
    return localStorage.getItem('refreshToken')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  // decodedToken() {
  //   const jwtHelper = new JwtHelperService();
  //   const token = this.getToken()!;
  //   console.log(jwtHelper.decodeToken(token))
  //   return jwtHelper.decodeToken(token)
  // }

  // getfullNameFromToken() {
  //   if (this.userPayload)
  //     return this.userPayload.name;
  // }

  // getRoleFromToken() {
  //   if (this.userPayload)
  //     return this.userPayload.role;
  // }


  // renewToken(tokenApi: ModelsComponent) {
  //   return this.http.post<any>(`${this.baseUrl}refresh`, tokenApi)
  // }

}



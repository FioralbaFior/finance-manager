import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:5267/Users";
  userInfo: any;

  constructor(private http: HttpClient) { }


  getCurrentUserId(token: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/current?token=${token}`);
  }

  getCurrentUserBalance(balance: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/current?balance=${balance}`)
  }

  // fetchUserInfo(userId: string) {
  //   // Make a request to fetch additional user information using userId
  //   this.http.get<any>(`http://localhost:5267/Users/${userId}`).subscribe(
  //     (userInfo) => {
  //       this.userInfo = userInfo;
  //       // Do something with the fetched user information
  //     },
  //     (error) => {
  //       console.error('Error fetching user information:', error);
  //     }
  //   );
  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUser(): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/current`)
  }

  // getUserId(): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/current`);
  // }

  // getUserById(id: number): Observable<User> {
  //   return this.http.get<User>(`${this.baseUrl}/${id}`);
  // }
}

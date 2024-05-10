import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apiservice',
  templateUrl: './apiservice.component.html',
  styleUrl: './apiservice.component.css'
})
export class ApiserviceComponent {

  private baseUrl: string = "http://localhost:5267/";
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }

}

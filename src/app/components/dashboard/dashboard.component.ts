import { Component } from '@angular/core';
import { ServicesComponent } from '../../services/services.component';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiserviceComponent } from '../../apiservice/apiservice.component';

 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  public users:any = [];
  public role!:string;

  public fullName : string = "";
  constructor(private api : ApiserviceComponent, private auth: ServicesComponent,  private router: Router) { }

  ngOnInit() {
    this.api.getUsers()
    .subscribe(res=>{
    this.users = res;
    });

    
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
  
  logout(){
    this.auth.signOut();
  }
}

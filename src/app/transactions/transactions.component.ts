import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { ApiserviceComponent } from '../apiservice/apiservice.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
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

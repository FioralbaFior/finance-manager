import { Component, OnInit } from '@angular/core';
// import { ServicesComponent } from '../../services/services.component';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user-model';
// import { ApiserviceComponent } from '../../apiservice/apiservice.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  public users: any = [];
  public role!: string;
  balance: number = 0;
  circleDasharray: string = '';
  username: string = ''
  name: string = ''
  surname: string = ''
  email: string = ''
  userId: string = '';

  constructor(
    private api: UserService,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getCurrentUserId();
    this.setCircleDasharray();
    this.api.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  getCurrentUserId() {

    var token = localStorage.getItem("token") ?? '';
    this.api.getCurrentUserId(token).subscribe({
      next: (response: any) => {
        console.log(response);

        this.username = response.username
        this.userId = response.UserId;
        console.log('User ID:', this.userId);
        // Now that you have the user ID, you can make additional requests
        // to fetch other user information using this ID
      },
      error: (error: any) => {
        console.error('Error fetching current user ID:', error);
      }
    });
  }

  getCurrentUserBalance() {
    var token = localStorage.getItem("token") ?? '';
    this.api.getCurrentUserBalance(token).subscribe({
      next: (response: any) => {
        console.log(response);

        this.balance = response.balance
        this.userId = response.UserId;
        console.log('User ID:', this.userId);
        // Now that you have the user ID, you can make additional requests
        // to fetch other user information using this ID
      },
      error: (error: any) => {
        console.error('Error fetching current user ID:', error);
      }
    })
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  logout() {
    this.auth.signOut();
  }

  private setCircleDasharray() {
    const max = 100; // Balance is assumed to be out of 100%
    const circleCircumference = 2 * Math.PI * 15.9155;
    const balanceProgress = (this.balance / max) * circleCircumference;
    const remainingProgress = circleCircumference - balanceProgress;

    this.circleDasharray = `${balanceProgress.toFixed(
      0
    )} ${remainingProgress.toFixed(0)}`;
  }
}

import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../../services/services.component';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiserviceComponent } from '../../apiservice/apiservice.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  public users: any = [];
  public role!: string;
  balance: number = 123435;
  circleDasharray: string = '';

  public fullName: string = '';
  constructor(
    private api: ApiserviceComponent,
    private auth: ServicesComponent,
    private router: Router
  ) {}

  ngOnInit() {
    this.setCircleDasharray();
    this.api.getUsers().subscribe((res) => {
      this.users = res;
    });
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

// src/app/components/enter-balance/enter-balance.component.ts
import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BalanceService } from '../../services/balance-service';
import { UserService } from '../../services/user-service';
import { response } from 'express';

@Component({
  selector: 'app-enter-balance',
  templateUrl: './enter-balance.component.html',
  styleUrls: ['./enter-balance.component.css']
})
export class EnterBalanceComponent {
  public users: any = [];
  public balance: number = 0;
  private newBalance: number = 0;

  constructor(private router: Router, private balanceService: BalanceService, private api: UserService) { }

  @Output() balanceSubmit: EventEmitter<number> = new EventEmitter<number>();


  // ngOnInit() {
  //   // this.getCurrentUserId();
  //   // this.setCircleDasharray();
  //   // this.api.getUsers().subscribe((res) => {
  //   //   this.users = res;
  //   // });
  // }


  onSubmit(form: NgForm) {
    var token = localStorage.getItem("token") ?? '';
    this.api.getCurrentUserId(token).subscribe({
      next: (response: any) => {
        console.log(response);
        console.log(response.balance)
        this.balance = response.balance

        if (form.valid) {
          this.balance += form.value.balance;
          // this.balanceService.addToBalance(token, form.value.balance)
          console.log(this.balance)
          // this.newBalance = this.balance;
          this.balanceService.updateBalance(token, this.balance).subscribe(response => {
            console.log('Balance updated:', this.balance);
          });
          //this.balanceSubmit.emit(balance);
          //  this.updateBalance(token); // Set the balance in the service

          alert("Worked")
          form.reset();
          //this.router.navigate(['dashboard']); // Navigate to the dashboard
        }


      },
      error: (error: any) => {
        console.error('Error fetching current user ID:', error);
      }
    });





    // getCurrentUserBalance() {
    //   var token = localStorage.getItem("token") ?? '';
    //   this.api.getCurrentUserBalance(token).subscribe({
    //     next: (response: any) => {
    //       console.log(response);

    //       this.balance = response.balance
    //       this.userId = response.userId;
    //       console.log('User ID:', this.userId);
    //       // Now that you have the user ID, you can make additional requests
    //       // to fetch other user information using this ID
    //     },
    //     error: (error: any) => {
    //       console.error('Error fetching current user ID:', error);
    //     }
    //   })
    // }
  }

  // updateBalance(token: string) {
  //   this.balanceService.updateBalance(token, this.newBalance).subscribe(response => {
  //     console.log('Balance updated:', this.newBalance);
  //   });
  // }


}

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
  //private newBalance: number = 0;

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
    const token = localStorage.getItem("token") ?? '';

    if (form.valid) {

      // Fetch the current balance first
      this.api.getCurrentUserId(token).subscribe({
        next: (response: any) => {
          console.log("Current User Response:", response);

          // Assuming the response has a balance property
          this.balance = response.balance + form.value.balance;
          console.log("Updated Balance to Send:", this.balance);

          // Call the balance service to update the balance
          this.balanceService.updateBalance(token, this.balance).subscribe({
            next: (updateResponse: any) => {
              console.log("Update Response:", updateResponse);
              alert("Balance updated successfully");
              this.balanceSubmit.emit(this.balance);
              form.reset();
              this.router.navigate(['dashboard']);
            },
            error: (error: any) => {
              console.error('Error updating balance:', error);
              alert("Failed to update balance");
            }
          });
        },
        error: (error: any) => {
          console.error('Error fetching current user balance:', error);
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
}

import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction-model';
import TransactionService from '../../services/transaction-service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user-service';
import { DashboardComponent } from '../dashboard/dashboard.component';
//import { response } from 'express';
import { User } from '../../models/user-model';

@Component({
  selector: 'app-manage-transactions',
  templateUrl: './manage-transactions.component.html',
  styleUrls: ['./manage-transactions.component.css']
})
export class ManageTransactionsComponent {
  public users: any = [];
  username = ""
  transaction: Transaction = {
    Amount: 0,
    Category: '',
    Date: new Date(),
    UserId: 0,
    TransactionId: 0
  };

  constructor(private transactionService: TransactionService,
    private userService: UserService) { }

  ngOnInit() {
    this.getCurrentUserId();
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  getCurrentUserId() {

    var token = localStorage.getItem("token") ?? '';
    this.userService.getCurrentUserId(token).subscribe({
      next: (response: any) => {
        console.log(response);

        this.username = response.username


        // Now that you have the user ID, you can make additional requests
        // to fetch other user information using this ID
      },
      error: (error: any) => {
        console.error('Error fetching current user ID:', error);
      }
    });
  }

  // ngOnInit() {
  //   this.setCurrentUserId();
  // }

  // setCurrentUserId() {
  //   const token = localStorage.getItem('token') ?? '';
  //   console.log('Token:', token); // Log the token to verify its presence
  //   this.userService.getCurrentUserId(token).subscribe({
  //     next: (response: any) => {
  //       this.transaction.UserId = response.UserId;
  //       console.log('User ID set in transaction:', this.transaction.UserId);
  //       return this.transaction.UserId
  //     },
  //     error: (error: any) => {
  //       console.error('Error fetching current user ID:', error);
  //     }
  //   });

  // }

  onSubmit(): void {
    // Convert the date string to a Date object
    this.transaction.Date = new Date(this.transaction.Date.toString());


    this.transactionService.addTransaction(this.transaction).subscribe({
      next: (response) => {
        console.log('Transaction added:', response);
        alert("Transaction added")
        // Handle successful transaction addition (e.g., display a message or redirect)

      },
      error: (error) => {
        console.error('Error adding transaction:', error);
        // Handle error (e.g., display an error message)
      }
    });
  }
}

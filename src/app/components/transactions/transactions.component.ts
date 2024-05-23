import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Transaction } from '../../models/transaction-model';
import TransactionService from '../../services/transaction-service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  public transactions: Transaction[] = [];
  public category!: string;
  totalIncome: number = 0;
  totalSpent: number = 0;

  public fullName: string = "";
  constructor(private auth: AuthService, private router: Router, private transactionService: TransactionService) { }

  ngOnInit(): void {
    // Calculate total income and total spent
    this.transactions.forEach(transaction => {
      if (transaction.Amount > 0) {
        this.totalIncome += transaction.Amount;
      } else {
        this.totalSpent += Math.abs(transaction.Amount);
      }
    });
  }

  getCurrentTransactions() {
    var token = localStorage.getItem("token") ?? '';
    this.transactionService.getCurrentUserTransactions(token).subscribe({
      next: (response: any) => {
        console.log(response);

        this.transactions.push(response)
        console.log(this.transactions)
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
    this.router.navigate(['login'])
  }

  logout() {
    this.auth.signOut();
  }

  addTransaction() {
    this.router.navigate(['managetransactions'])
  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Transaction } from '../../models/transaction-model';


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
  constructor(private auth: AuthService, private router: Router) { }

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

  signOut() {
    localStorage.clear();
    this.router.navigate(['login'])
  }

  logout() {
    this.auth.signOut();
  }

  addTransaction() {

  }

}
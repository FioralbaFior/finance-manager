import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionsComponent } from '../components/transactions/transactions.component';
import { Transaction } from '../models/transaction-model';

@Injectable({
  providedIn: 'root'
})
export default class TransactionService {
  private baseUrl = 'http://localhost:5267/'; // Base URL for your API

  constructor(private http: HttpClient) { }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.baseUrl}addTransaction`, transaction);
  }

  getCurrentUserId(token: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}current?token=${token}`);
  }

  getCurrentUserTransactions(token: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}getTransactions?token=${token}`);
  }
}

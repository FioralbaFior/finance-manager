// src/app/shared/balance.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BudgetItem } from '../models/budget-model';
import { HttpClient } from "@angular/common/http";
import { EnterBalanceComponent } from '../components/enter-balance/enter-balance.component';


@Injectable({
    providedIn: 'root'
})
export class BalanceService {

    private baseUrl = "http://localhost:5267";

    constructor(private http: HttpClient) { }

    // private balanceSubject = new BehaviorSubject<number>(0);
    // balance$ = this.balanceSubject.asObservable();

    // setBalance(balance: number) {
    //     this.balanceSubject.next(balance);
    // }

    updateBalance(token: string, balance: number): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/updateBalance?token=${token}`, { balance });
    }

    // addToBalance(token: string, balance: number): Observable<any> {
    //     const url = `${this.baseUrl}/addBalance`;
    //     return this.http.post<any>(url, { balance }, {
    //         params: { token }
    //     });
    // }
}

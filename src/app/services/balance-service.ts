// src/app/shared/balance.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BalanceService {
    private balanceSubject = new BehaviorSubject<number>(0);
    balance$ = this.balanceSubject.asObservable();

    setBalance(balance: number) {
        this.balanceSubject.next(balance);
    }
}

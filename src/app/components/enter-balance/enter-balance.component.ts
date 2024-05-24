// src/app/components/enter-balance/enter-balance.component.ts
import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BalanceService } from '../../services/balance-service';

@Component({
  selector: 'app-enter-balance',
  templateUrl: './enter-balance.component.html',
  styleUrls: ['./enter-balance.component.css']
})
export class EnterBalanceComponent {
  constructor(private router: Router, private balanceService: BalanceService) { }

  @Output() balanceSubmit: EventEmitter<number> = new EventEmitter<number>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      const balance = form.value.balance;
      this.balanceSubmit.emit(balance);
      this.balanceService.setBalance(balance); // Set the balance in the service
      form.reset();
      this.router.navigate(['dashboard']); // Navigate to the dashboard
    }
  }
}

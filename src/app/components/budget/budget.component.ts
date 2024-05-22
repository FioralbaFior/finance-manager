// // src/app/budget/budget.component.ts
// import { Component, OnInit } from '@angular/core';
// import { BudgetService } from '../services/budget.service';
// import { Budget } from '../models/budget.model';

// @Component({
//   selector: 'app-budget',
//   templateUrl: './budget.component.html',
//   styleUrls: ['./budget.component.css']
// })
// export class BudgetComponent implements OnInit {
//   budgets: Budget[] = [];
//   selectedBudget?: Budget;

//   constructor(private budgetService: BudgetService) { }

//   ngOnInit(): void {
//     this.budgetService.getBudgets().subscribe((budgets: Budget[]) => {
//       this.budgets = budgets;
//     });
//   }

//   selectBudget(budget: Budget): void {
//     this.selectedBudget = budget;
//   }
// }

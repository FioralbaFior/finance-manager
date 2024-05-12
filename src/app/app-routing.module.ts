import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { register } from 'module';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BalanceSheetComponent } from './components/balance-sheet/balance-sheet.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: '', component: BalanceSheetComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionsComponent}
  // { path: 'profile', component: Yoi}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

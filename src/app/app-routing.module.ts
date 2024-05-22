import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ManageTransactionsComponent } from './components/manage-transactions/manage-transactions.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { TransactionsComponent } from './transactions/transactions.component';
// import { ManagetransactionsComponent } from './managetransactions/managetransactions.component';
// import { BudgetplansComponent } from './budgetplans/budgetplans.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'managetransactions', component: ManageTransactionsComponent },
  { path: 'profile', component: ProfileComponent }



  // { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

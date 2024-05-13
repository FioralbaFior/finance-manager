import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
// import { HelpersComponent } from './helpers/helpers.component';
import { ServicesComponent } from './services/services.component';
// import { ModelsComponent } from './models/models.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuardsComponent } from './guards/guards.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { ApiserviceComponent } from './apiservice/apiservice.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BalanceSheetComponent } from './components/balance-sheet/balance-sheet.component';
import { BudgetplansComponent } from './budgetplans/budgetplans.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { ManagetransactionsComponent } from './managetransactions/managetransactions.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    // HelpersComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    GuardsComponent,
    DashboardComponent,
    // InterceptorsComponent,
    ApiserviceComponent,
    TransactionsComponent,
    NavbarComponent,
    SidebarComponent,
    BalanceSheetComponent,
    BudgetplansComponent,
    AddtransactionComponent,
    ManagetransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration(), ServicesComponent, ApiserviceComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

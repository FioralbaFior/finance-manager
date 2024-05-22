import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ManageTransactionsComponent } from './components/manage-transactions/manage-transactions.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FinanceReportComponent } from './components/finance-report/finance-report.component';
 


// import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    TransactionsComponent,
    ManageTransactionsComponent,
    SidebarComponent,
    HeaderComponent,
    ProfileComponent,
    FinanceReportComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      }
    }),
  ],
  providers: [AuthService, UserService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function jwtOptionsFactory() {
  return {
    // Configure your JWT options here if needed
  };
}

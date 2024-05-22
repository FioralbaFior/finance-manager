import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'finance-manager';

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn()
  };

}

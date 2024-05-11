import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'finance-manager';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('AppComponent initialized');
    // const localData = localStorage.getItem('token');
    // if (!localData) {
    //   this.router.navigate(['/login']); // Navigate to login
    // }
  }
}

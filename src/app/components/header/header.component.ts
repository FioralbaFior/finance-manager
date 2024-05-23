import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public users: any = [];
  public role!: string;
  username: string = ''
  name: string = ''
  surname: string = ''
  email: string = ''
  userId: string = '';

  constructor(
    private api: UserService,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getCurrentUserId();
    this.api.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  getCurrentUserId() {

    var token = localStorage.getItem("token") ?? '';
    this.api.getCurrentUserId(token).subscribe({
      next: (response: any) => {
        console.log(response);

        this.name = response.name
        this.username = response.username
        this.userId = response.userId;
        console.log('User ID:', this.userId);
        // Now that you have the user ID, you can make additional requests
        // to fetch other user information using this ID
      },
      error: (error: any) => {
        console.error('Error fetching current user ID:', error);
      }
    });
  }

  logout() {
    this.auth.signOut();
  }


}

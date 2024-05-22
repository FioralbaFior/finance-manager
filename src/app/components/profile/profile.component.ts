import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { User } from '../../models/user-model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: User | undefined;
  public users: any = [];
  public role!: string;
  username: string = ''
  name: string = ''
  surname: string = ''
  email: string = ''
  userId: string = '';

  constructor(
    private api: UserService,
    private auth: AuthService
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
        this.surname = response.surname
        this.username = response.username
        this.email = response.email
        this.userId = response.userId
        //this.userId = response.UserId;
        //console.log('User ID:', this.userId);
        // Now that you have the user ID, you can make additional requests
        // to fetch other user information using this ID
      },
      error: (error: any) => {
        console.error('Error fetching current user ID:', error);
      }
    });
  }
}

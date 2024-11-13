import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    username: string = '';
  password: string = '';
  email: string = '';
  errorMessage: string = '';
 
  constructor(private userService: UserService, private router: Router) {}
 
  onSubmit() {
    if (this.username && this.password && this.email) {
      this.userService.register(this.username, this.password);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'All fields are required';
    }
  }

}

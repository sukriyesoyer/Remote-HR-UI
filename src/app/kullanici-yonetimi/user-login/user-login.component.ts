import { UserService } from './../../services/user.service';
import { User } from './../user-models/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.currentUserValue) {
      this.router.navigate(['/birthday-list']);
      return;
    }
  }

  login() {
    this.userService.login(this.user).subscribe(data => {
      this.refreshPage();
      this.router.navigate(['/birthday-list']);
    }, err => {
      this.errorMessage = "Kullanıcı adı veya parola hatalı!";
    });
  }

  refreshPage(): void {
    window.location.reload();
  }

}

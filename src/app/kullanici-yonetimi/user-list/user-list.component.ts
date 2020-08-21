import { AdminService } from './../../services/admin.service';
import { Role } from './../user-models/role';
import { UserService } from './../../services/user.service';
import { User } from './../user-models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User = new User();
  errorMessage: string;
  modalAdd: boolean;
  userList: Array<User>;

  constructor(private userService: UserService, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  showModalDialogAdd() {
    this.newUser();
    this.modalAdd = true;
  }

  findAllUsers() {
    this.adminService.findAllUsers().subscribe(data => {
      this.userList = data;
    });
  }

  register() {
    this.user.role = Role.USER;
    this.adminService.register(this.user).subscribe(data => {
      this.refreshPage();
      this.router.navigate(['/user-list']);
    }, err => {
      this.errorMessage = "Kullanıcı adı kullanılmaktadır!";
    });
  }

  refreshPage(): void {
    window.location.reload();
  }

  newUser(): void {
    this.user = new User();
  }
}

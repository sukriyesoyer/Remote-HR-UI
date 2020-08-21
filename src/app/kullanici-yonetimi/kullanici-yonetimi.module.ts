import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageUnathorizedComponent } from './page-unathorized/page-unathorized.component';

@NgModule({
  declarations: [UserLoginComponent, UserListComponent, PageNotFoundComponent, PageUnathorizedComponent, UserListComponent],
  imports: [
    CommonModule,
    FormsModule,
    PasswordModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    TableModule
  ]
})
export class KullaniciYonetimiModule {

}

import { UserListComponent } from './kullanici-yonetimi/user-list/user-list.component';
import { Role } from './kullanici-yonetimi/user-models/role';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './kullanici-yonetimi/page-not-found/page-not-found.component';
import { PageUnathorizedComponent } from './kullanici-yonetimi/page-unathorized/page-unathorized.component';
import { UserLoginComponent } from './kullanici-yonetimi/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { BirthdayCalendarComponent } from './dogum-gunu/birthday-calendar/birthday-calendar.component';
import { ToplantiOdasiCreateComponent } from './toplanti-odasi/toplanti-odasi-create/toplanti-odasi-create.component';
import { ToplantiOdasiListComponent } from './toplanti-odasi/toplanti-odasi-list/toplanti-odasi-list.component';
import { BirthdayListComponent } from './dogum-gunu/birthday-list/birthday-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: '401', component: PageUnathorizedComponent },
  { path: '404', component: PageNotFoundComponent },
  {
    path: 'meeting',
    loadChildren: './toplanti-odasi/toplanti-odasi.module#ToplantiOdasiModule',
    canActivate: [AuthGuard],
    data: { roles: [Role.USER, Role.ADMIN] }
  },
  {
    path: 'meeting-create',
    component: ToplantiOdasiCreateComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.USER, Role.ADMIN] }
  },
  {
    path: 'meeting-list',
    component: ToplantiOdasiListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.USER, Role.ADMIN] }
  },
  {
    path: 'birthday-list',
    component: BirthdayListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.USER, Role.ADMIN] }
  },
  {
    path: 'birthday-calendar',
    component: BirthdayCalendarComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.USER, Role.ADMIN] }
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}

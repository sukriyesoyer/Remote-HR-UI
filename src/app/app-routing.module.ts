import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayCalendarComponent } from './dogum-gunu/birthday-calendar/birthday-calendar.component';
import { ToplantiOdasiCreateComponent } from './toplanti-odasi/toplanti-odasi-create/toplanti-odasi-create.component';
import { ToplantiOdasiListComponent } from './toplanti-odasi/toplanti-odasi-list/toplanti-odasi-list.component';
import { BirthdayListComponent } from './dogum-gunu/birthday-list/birthday-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/meeting', pathMatch: 'full' },
  { path: 'meeting', loadChildren: './toplanti-odasi/toplanti-odasi.module#ToplantiOdasiModule' },
  { path: 'meeting-create', component: ToplantiOdasiCreateComponent },
  { path: 'meeting-list', component: ToplantiOdasiListComponent },
  { path: 'birthday-list', component: BirthdayListComponent },
  { path: 'birthday-calendar', component: BirthdayCalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

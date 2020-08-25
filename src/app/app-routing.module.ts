import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayCalendarComponent } from './dogum-gunu/birthday-calendar/birthday-calendar.component';
import { ToplantiOdasiCreateComponent } from './toplanti-odasi/toplanti-odasi-create/toplanti-odasi-create.component';
import { ToplantiOdasiListComponent } from './toplanti-odasi/toplanti-odasi-list/toplanti-odasi-list.component';
import { BirthdayListComponent } from './dogum-gunu/birthday-list/birthday-list.component';
import { AnnouncementAddComponent} from './announcement/announcement-add/announcement-add.component';
import { AnnouncementListComponent} from './announcement/announcement-list/announcement-list.component';
import { ReservationAddComponent} from './reservation/reservation-add/reservation-add.component';
import { ReservationListComponent} from './reservation/reservation-list/reservation-list.component';


const routes: Routes = [
  // { path: '', redirectTo: '/meeting', pathMatch: 'full' },
  { path: 'meeting', loadChildren: './toplanti-odasi/toplanti-odasi.module#ToplantiOdasiModule' },
  { path: 'meeting-create', component: ToplantiOdasiCreateComponent },
  { path: 'meeting-list', component: ToplantiOdasiListComponent },
  { path: 'birthday-list', component: BirthdayListComponent },
  { path: 'birthday-calendar', component: BirthdayCalendarComponent },

  { path: 'announcement-add', component: AnnouncementAddComponent },
  { path: 'announcement-list', component: AnnouncementListComponent },
  { path: 'reservation-add', component: ReservationAddComponent },
  { path: 'reservation-list', component: ReservationListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
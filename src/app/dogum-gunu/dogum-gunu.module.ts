import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BirthdayListComponent } from './birthday-list/birthday-list.component';
import { BirthdayCalendarComponent } from './birthday-calendar/birthday-calendar.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [BirthdayListComponent, BirthdayCalendarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    FormsModule,
    DialogModule,
    CalendarModule,
    InputNumberModule,
    InputTextModule,
    FullCalendarModule
  ],
  exports: [BirthdayListComponent]
})
export class DogumGunuModule { }

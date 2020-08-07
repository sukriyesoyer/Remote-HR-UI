import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BirthdayListComponent } from './birthday-list/birthday-list.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [BirthdayListComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    FormsModule,
    DialogModule,
    CalendarModule,
    InputNumberModule,
    InputTextModule
  ],
  exports: [BirthdayListComponent]
})
export class DogumGunuModule { }

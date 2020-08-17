import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementAddComponent } from './announcement-add/announcement-add.component';
import { AnnouncementUpdateComponent } from './announcement-update/announcement-update.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';


import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';

import { ListService } from './announcement-list/listservice';



@NgModule({
  declarations: [
    AppComponent,
    AnnouncementAddComponent,
    AnnouncementUpdateComponent,
    AnnouncementDetailComponent,
    AnnouncementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    InputTextModule,
    MenuModule,
    TableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

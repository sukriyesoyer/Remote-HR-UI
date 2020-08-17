import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add-add.component';
import { UpdateComponent } from './update/update-update.component';
import { ListComponent } from './list/list-list.component';
import{DetailComponent} from './detail/detail-detail.component'

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';

import { ListService } from './list/listservice';



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    DetailComponent,
    ListComponent
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

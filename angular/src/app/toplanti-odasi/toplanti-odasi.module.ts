import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToplantiOdasiListComponent } from './toplanti-odasi-list/toplanti-odasi-list.component';
import { ToplantiOdasiUpdateComponent } from './toplanti-odasi-update/toplanti-odasi-update.component';
import { ToplantiOdasiCreateComponent } from './toplanti-odasi-create/toplanti-odasi-create.component';



@NgModule({
  declarations: [ToplantiOdasiListComponent, ToplantiOdasiUpdateComponent, ToplantiOdasiCreateComponent],
  imports: [
    CommonModule
  ]
})
export class ToplantiOdasiModule { }

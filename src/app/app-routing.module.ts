import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToplantiOdasiCreateComponent } from './toplanti-odasi/toplanti-odasi-create/toplanti-odasi-create.component';
import { ToplantiOdasiListComponent } from './toplanti-odasi/toplanti-odasi-list/toplanti-odasi-list.component';
import { ToplantiOdasiUpdateComponent } from './toplanti-odasi/toplanti-odasi-update/toplanti-odasi-update.component';
import { BirthdayListComponent } from './dogum-gunu/birthday-list/birthday-list.component';
const routes: Routes = [
  {path:'',redirectTo: '/Meeting',pathMatch:'full'},
  { path: 'meeting' , loadChildren: './toplanti-odasi/toplanti-odasi.module#ToplantiOdasiModule'},
  { path: 'meeting-create', component:ToplantiOdasiCreateComponent} ,
  { path: 'meeting-list', component:ToplantiOdasiListComponent} ,
  { path: 'meeting-update', component:ToplantiOdasiUpdateComponent} ,
  { path: 'birthday-list', component:BirthdayListComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

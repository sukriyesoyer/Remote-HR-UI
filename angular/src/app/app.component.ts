import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Doğum Günü',
        icon: 'pi pi-th-large pi-pencil',
        items: [
          {
            label: 'Liste Görünümü',
            icon: 'pi pi-list pi-align-left',
            routerLink:'/birthday-list'
          },
          {
            label: 'Takvim Görünümü',
            icon: 'pi pi-calendar pi-align-right',
            routerLink:'/birthday-calendar'
          },
        ]
      },
      {
        label: 'Toplantı Odası',
        icon: 'pi pi-th-large pi-pencil', 
        items: [
          {
            label: 'Toplantı Ekle',
            icon: 'pi pi-plus pi-align-left',
            routerLink:'/meeting-create'
          },
          {
            label: 'Toplantı Listele',
            icon: 'pi pi-list pi-align-right',
            routerLink:'/meeting-list'
          },
        ]
      },
      {
        label: 'Çıkış',
        icon: 'pi pi-fw pi-power-off'
      }
    ]
  }
}

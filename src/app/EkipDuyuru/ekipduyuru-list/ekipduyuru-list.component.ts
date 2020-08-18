import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EkipDuyuru } from './../ekipduyuru/ekipduyuru';
import { EkipduyuruService } from './../ekipduyuru.service';
import { AlertifyService } from './../alertify-service.service';

@Component({
  selector: 'app-ekipduyuru-list',
  templateUrl: './ekipduyuru-list.component.html',
  styleUrls: ['./ekipduyuru-list.component.css']
})
export class EkipduyuruListComponent implements OnInit {
  ekipduyuru: Observable<EkipDuyuru[]>;
  constructor(
    private ekipduyuruService: EkipduyuruService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.ekipduyuru = this.ekipduyuruService.getekipduyuruList();
  }

  deleteEkipDuyuru(id: number) {
    this.ekipduyuruService.deleteEkipDuyuru(id).subscribe(
      (data) => {
        // this.alertifyService.error('Duyuru başarıyla silindi.');
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  updateEkipDuyuru(id: number) {
    this.router.navigate(['/ekipduyuru-update', id]);
  }


}

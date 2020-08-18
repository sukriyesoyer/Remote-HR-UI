import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EkipDuyuru } from './../ekipduyuru/ekipduyuru';
import { AlertifyService } from './../alertify-service.service';
import { EkipduyuruService } from './../ekipduyuru.service';


@Component({
  selector: 'app-ekipduyuru-update',
  templateUrl: './ekipduyuru-update.component.html',
  styleUrls: ['./ekipduyuru-update.component.css']
})
export class EkipduyuruUpdateComponent implements OnInit {

  id: number;
  ekipduyuru: EkipDuyuru;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertifyService: AlertifyService,
    private ekipduyuruService: EkipduyuruService
  ) {}

  ngOnInit(): void {
    this.ekipduyuru = new EkipDuyuru();
    this.id = this.route.snapshot.params['id'];
    this.ekipduyuruService.getEkipDuyuru(this.id).subscribe(
      (data) => {
        console.log('başarılı');
        this.ekipduyuru = data;
      },
      (error) => console.log(error)
    );
  }

  updateEkipDuyuru() {
    this.ekipduyuruService.updateEkipDuyuru(this.id, this.ekipduyuru).subscribe(
      (data) => {
        // this.alertifyService.warning(
        //   this.ekipduyuru.ekip+ ' başarıyla güncellendi.'
        // );
      },
      (error) => console.log(error)
    );

  }

  onSubmit() {
    this.updateEkipDuyuru();
  }

}

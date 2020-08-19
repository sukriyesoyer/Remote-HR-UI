import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EkipDuyuru } from '../ekipduyuru-model/ekipduyuru';
//import { EkipduyuruService } from '../ekipduyuru.service';
//import { AlertifyService } from '../alertify-service.service';

@Component({
  selector: 'app-create-ekipduyuru',
  templateUrl: './create-ekipduyuru.component.html',
  styleUrls: ['./create-ekipduyuru.component.css']
})
export class CreateEkipDuyuruComponent implements OnInit {
  ekipduyuru: EkipDuyuru = new EkipDuyuru();
  submitted = false;

  constructor(
  //  private ekipduyuruService: EkipduyuruService,
  //  private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {}



  newProduct(): void {
    this.submitted = false;
    this.ekipduyuru = new EkipDuyuru();
  }



  save() {
    //this.ekipduyuruService.createEkipDuyuru(this.ekipduyuru).subscribe(
    //  (data) => {
        // this.alertifyService.success(this.ekipduyuru.ekip + ' başarıyla eklendi.');
      //},
     // (error) => console.log(error)
   // );
   
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }




}




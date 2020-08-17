import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToplantiOdasi } from '../toplantiodasi-model/toplantiodasi'

@Component({
  selector: 'app-toplanti-odasi-create',
  templateUrl: './toplanti-odasi-create.component.html',
  styleUrls: ['./toplanti-odasi-create.component.css']
})
export class ToplantiOdasiCreateComponent implements OnInit {
  toplantiodasi: ToplantiOdasi = new ToplantiOdasi();
  modalAdd: boolean;
  calendarLocateTr: any;
  constructor(
    //private toplantiodasiService: ToplantiodasiService,
    //private alertifyService: AlertifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadCalendarData();
  }



  newProduct(): void {
    this.toplantiodasi = new ToplantiOdasi();
  }

  reloadCalendarData() {
    this.calendarLocateTr = {
      firstDayOfWeek: 1,
      dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
      dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
      dayNamesMin: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
      monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
      monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
      today: 'Bugün',
      clear: 'Temizle'
    }
  }


  save() {
    //    this.toplantiodasiService.createToplantiOdasi(this.toplantiodasi).subscribe(
    //    (data) => {
    // this.alertifyService.success(this.toplantiodasi.salon + ' başarıyla eklendi.');
    //  },
    //  (error) => console.log(error)
    // );

  }
  onSubmitSave() {
    this.save();
  }

  showBasicDialog() {
    this.modalAdd = true;
  }
  

}

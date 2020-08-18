import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToplantiOdasi } from '../toplantiodasi-model/toplantiodasi'

@Component({
  selector: 'app-toplanti-odasi-list',
  templateUrl: './toplanti-odasi-list.component.html',
  styleUrls: ['./toplanti-odasi-list.component.css']
})
export class ToplantiOdasiListComponent implements OnInit {
  toplantiodasi: Observable<ToplantiOdasi[]>;
  modalAdd: boolean;
  constructor(
  //  private toplantiodasiService: ToplantiodasiService,
  //  private alertifyService: AlertifyService,
    private router: Router
  ) {}
    
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    //this.toplantiodasi = this.toplantiodasiService.gettoplantiodasiList();
  }

  deleteToplantiOdasi(id: number) {
  //  this.toplantiodasiService.deleteToplantiOdasi(id).subscribe(
   //   (data) => {
        // this.alertifyService.error('Toplantı başarıyla silindi.');
    //    this.reloadData();
     // },
     // (error) => console.log(error)
   // );
  }

  updateToplantiOdasi(id: number) {
    this.router.navigate(['/toplantiodasi-update', id]);
  }
  showBasicDialog() {
    this.modalAdd = true;
  }


}
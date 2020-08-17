import { Component, OnInit } from '@angular/core';
import { ListService } from './listservice';
import { List } from './list';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {

    lists: List[];

    constructor(private listService: ListService) { }

    ngOnInit() {
        this.listService.getCarsSmall().then(lists => this.lists = lists);
    }

}

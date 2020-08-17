import { Component, OnInit } from '@angular/core';
import { ListService } from './listservice';
import { List } from './list';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.css']
})
export class ListComponent implements OnInit {

    lists: List[];

    constructor(private listService: ListService) { }

    ngOnInit() {
        this.listService.getCarsSmall().then(lists => this.lists = lists);
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { List } from './list';

@Injectable()
export class ListService {

    constructor(private http: HttpClient) { }

    getCarsSmall() {
        return this.http.get<any>('assets/cars-small.json')
        .toPromise()
        .then(res => <List[]>res.data)
        .then(data => { return data; });
    }
}
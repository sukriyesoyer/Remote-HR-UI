import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient ) {}

  getAnnouncement(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getbyid/${id}`);
  }

  createAnnouncement(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, employee);
  }

  updateAnnouncement(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAnnouncement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletebyid/${id}`, { responseType: 'text' });
  }

  getAnnouncementList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getlist`);
  }
}

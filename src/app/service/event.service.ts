import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Observable<Event> {
    return this.http.get<Event>
  }
}

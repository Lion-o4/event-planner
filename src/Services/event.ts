import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Event {
  private apiURL =
    'https://api.sheety.co/6e481d7da69c69ce2a7542f417217dc7/eventData/sheet1';

  private eventCache: any[] | null = null;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    if (this.eventCache) {
      return of(this.eventCache);
    }
    return this.http.get<any>(this.apiURL).pipe(
      tap((response) => {
        this.eventCache = response;
      }),
      tap((response) => response)
    );
  }
}

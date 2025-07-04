import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Event {
  private apiURL =
    'https://docs.google.com/spreadsheets/d/1XhOMexS9rPTpVbU1ClFv0do8tfL2V1n2fj6AB5vrabw/gviz/tq?tqx=out:json';

  private eventCache: any[] | null = null;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    const url =
      'https://docs.google.com/spreadsheets/d/1XhOMexS9rPTpVbU1ClFv0do8tfL2V1n2fj6AB5vrabw/gviz/tq?tqx=out:json';

    return this.http.get(url, { responseType: 'text' }).pipe(
      map((res: string) => {
        const raw = JSON.parse(res.substring(47).slice(0, -2));
        const table = raw.table;
        const headers = table.cols.map((col: any) =>
          col.label.toLowerCase().replace(/\s+/g, '_')
        );

        const rows = table.rows.map((row: any) => {
          const obj: any = {};
          row.c.forEach((cell: any, i: number) => {
            obj[headers[i]] = cell ? cell.v : '';
          });
          return obj;
        });

        return rows;
      })
    );
  }
}

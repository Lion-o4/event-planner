import { Component } from '@angular/core';
import { EventCard } from '../../reusable components/event-card/event-card';
import { Newevent } from '../../reusable components/newevent/newevent';
import { CommonModule, NgIf, TitleCasePipe } from '@angular/common';
import { ListView } from '../../reusable components/list-view/list-view';
import { Event } from '../../../Services/event';
import { finalize } from 'rxjs/operators';
import { Loader } from '../../reusable components/loader/loader';
@Component({
  selector: 'app-home-page',
  imports: [EventCard, Newevent, TitleCasePipe, ListView, Loader, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  labelArr: string[] = [];
  newEventArr: any;
  eventFilterSelected: string = 'All';
  layoutSelected: string = 'Grid';
  allEventArr: any;
  featuredEventsArr: any;
  today: Date = new Date();
  loader: boolean = false;

  ngOnInit(): void {
    this.fetchEventsData();
  }
  constructor(private eventService: Event) {}

  fetchEventsData() {
    this.loader = true;

    this.eventService
      .getEvents()
      .pipe(finalize(() => (this.loader = false)))
      .subscribe((data: any) => {
        this.allEventArr = data;

        this.allEventArr.forEach((item: { label: string; datetime: any }) => {
          this.labelArr.push(item.label);

          // ✅ Only parse date if it's a string
          const rawDate = item.datetime;

          if (typeof rawDate === 'string' && rawDate.startsWith('Date(')) {
            // ✅ Handles "Date(2025,6,24)" from Google Sheet
            const match = rawDate.match(/Date\((\d+),(\d+),(\d+)\)/);
            if (match) {
              const [_, year, month, day] = match.map(Number);
              item.datetime = new Date(year, month, day);
            } else {
              item.datetime = new Date('2100-01-01'); // fallback
            }
          } else if (typeof rawDate === 'string' && rawDate.includes('/')) {
            // ✅ Fallback if manually entered as "24/07/2025"
            const [day, month, year] = rawDate.split('/').map(Number);
            item.datetime = new Date(year, month - 1, day);
          } else {
            item.datetime = new Date('2100-01-01'); // fallback if invalid or missing
          }
        });

        this.allEventArr.sort(
          (a: { datetime: Date }, b: { datetime: Date }) =>
            (a.datetime as Date).getTime() - (b.datetime as Date).getTime()
        );

        this.featuredEventsArr = this.allEventArr.filter(
          (item: { isfeatured: string }) => item.isfeatured === 'yes'
        );

        this.labelArr = [...new Set(this.labelArr)];
        this.newEventArr = this.allEventArr;
      });
  }

  eventTypeArr(eventType: string): void {
    this.eventFilterSelected = eventType;

    this.newEventArr = [];

    if (eventType === 'All') {
      this.newEventArr = this.allEventArr;
    } else {
      this.allEventArr.forEach((item: { label: string }) => {
        if (item.label === eventType) {
          this.newEventArr.push(item);
        }
      });
    }
  }
  layoutcall(layoutType: string) {
    this.layoutSelected = layoutType;
  }
}

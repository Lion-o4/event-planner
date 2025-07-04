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
        this.allEventArr = data.sheet1;
        this.allEventArr.forEach((item: { label: string; dateTime: any }) => {
          this.labelArr.push(item.label);
          const [day, month, year] = item.dateTime.split('/').map(Number);
          item.dateTime = new Date(year, month - 1, day);
        });

        this.allEventArr.sort(
          (a: { dateTime: Date }, b: { dateTime: Date }) =>
            (a.dateTime as Date).getTime() - (b.dateTime as Date).getTime()
        );

        this.featuredEventsArr = this.allEventArr.filter(
          (item: { isFeatured: string }) => item.isFeatured === 'yes'
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

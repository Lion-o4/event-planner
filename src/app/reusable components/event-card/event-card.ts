import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  imports: [TitleCasePipe, DatePipe],
  templateUrl: './event-card.html',
  styleUrl: './event-card.scss',
})
export class EventCard {
  @Input() eventDetail = {
    id: 1,
    eventName: 'hi',
    dateTime: 'djdndj',
    imageLink: 'public/pands.jpeg',
    time: '12pm-3pm',
  };
}

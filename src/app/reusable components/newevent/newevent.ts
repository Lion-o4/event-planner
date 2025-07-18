import { DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-newevent',
  imports: [UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './newevent.html',
  styleUrl: './newevent.scss',
})
export class Newevent {
  @Input() newdetails = {
    id: 1,
    label: 'workshop',
    eventname: 'hi',
    datetime: 'djdndj',
    imagelink: 'pands.jpeg',
    place: 'dogra hall',
    time: '12pm-3pm',
  };
}

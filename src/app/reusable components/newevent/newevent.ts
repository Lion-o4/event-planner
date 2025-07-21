import {
  CommonModule,
  DatePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-newevent',
  imports: [UpperCasePipe, TitleCasePipe, DatePipe, CommonModule],
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
    departments: [
      'AM1',
      'BB1',
      'CE1',
      'CH1',
      'CH7',
      'CS1',
      'CS5',
      'CY1',
      'MS1',
      'PH1',
    ],
  };
}

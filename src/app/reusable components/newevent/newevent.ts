import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-newevent',
  imports: [UpperCasePipe],
  templateUrl: './newevent.html',
  styleUrl: './newevent.scss',
})
export class Newevent {
  @Input() newdetails = {
    id: 1,
    label: 'workshop',
    eventName: 'hi',
    dateTime: 'djdndj',
    imageLink: 'pands.jpeg',
  };
}

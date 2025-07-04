import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-list-view',
  imports: [DatePipe],
  templateUrl: './list-view.html',
  styleUrl: './list-view.scss',
})
export class ListView {
  @Input() newDetails = {
    id: 1,
    label: 'workshop',
    eventname: 'hi',
    datetime: '24/05/2025',
    time: '12 pm-3 pm',
    place: 'Dogra',
    imageLink: 'pands.jpeg',
    emoji: '🤓',
  };
}

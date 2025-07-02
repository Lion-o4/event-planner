import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-list-view',
  imports: [],
  templateUrl: './list-view.html',
  styleUrl: './list-view.scss',
})
export class ListView {
  @Input() newDetails = {
    id: 1,
    label: 'workshop',
    eventName: 'hi',
    date: 'djdndj',
    time: '0:00 AM - 2:00 PM',
    place: 'Dogra',
    imageLink: 'pands.jpeg',
    emoji: '🤓',
  };
}

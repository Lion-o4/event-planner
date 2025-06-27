import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.html',
  styleUrl: './event-card.scss'
})
export class EventCard {
@Input() eventDetail={id:1,eventName:"hi",dateTime:"djdndj",imageLink:"public/pands.jpeg"};
}

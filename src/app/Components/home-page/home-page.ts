import { Component } from '@angular/core';
import { EventCard } from '../../reusable components/event-card/event-card';
import { Newevent } from '../../reusable components/newevent/newevent';
@Component({
  selector: 'app-home-page',
  imports: [EventCard, Newevent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  sampleArr = [
    { id: 1, key: 'hi' },
    { id: 1, key: 'hi' },
    { id: 1, key: 'hi' },
    { id: 1, key: 'hi' },
    { id: 1, key: 'hi' },
  ];
  featuredEventsArr = [
    {
      id: 1,
      imageLink: 'pands.jpeg',
      dateTime: '28 July 2025 at 10:00 AM',
      eventName: 'Dance Morning',
    },
    {
      id: 2,
      imageLink: 'pandsDance.jpeg',
      dateTime: '1 August 2025 at 11:00 PM',
      eventName: 'Drams Natak',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
    },
  ];
  newEventArr = [
    {
      id: 1,
      imageLink: 'pands.jpeg',
      label: 'workshop',
      dateTime: '28 July 2025 at 10:00 AM',
      eventName: 'Dance Morning',
    },
    {
      id: 2,
      imageLink: 'pandsDance.jpeg',
      label: 'Standup',
      dateTime: '1 August 2025 at 11:00 PM',
      eventName: 'Drams Natak',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'poetry',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
    },
    {
      id: 1,
      imageLink: 'pands.jpeg',
      label: 'workshop',
      dateTime: '28 July 2025 at 10:00 AM',
      eventName: 'Dance Morning',
    },
    {
      id: 2,
      imageLink: 'pandsDance.jpeg',
      label: 'Standup',
      dateTime: '1 August 2025 at 11:00 PM',
      eventName: 'Drams Natak',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'poetry',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
    },
    
  ];
}

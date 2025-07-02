import { Component } from '@angular/core';
import { EventCard } from '../../reusable components/event-card/event-card';
import { Newevent } from '../../reusable components/newevent/newevent';
import { TitleCasePipe } from '@angular/common';
import { ListView } from '../../reusable components/list-view/list-view';
@Component({
  selector: 'app-home-page',
  imports: [EventCard, Newevent, TitleCasePipe, ListView],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  labelArr: string[] = [];
  newEventArr: any;
  eventFilterSelected: string = 'All';
  layoutSelected: string = 'Grid';

  ngOnInit(): void {
    this.allEventArr.forEach((item) => {
      this.labelArr.push(item.label);
    });
    this.labelArr = [...new Set(this.labelArr)];
    this.newEventArr = this.allEventArr;
  }

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
  allEventArr = [
    {
      id: 1,
      imageLink: 'pands.jpeg',
      label: 'Workshop',
      dateTime: '28 July 2025 at 10:00 AM',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
      eventName: 'Dance Morning',
      emoji: '🥰',
    },
    {
      id: 2,
      imageLink: 'pandsDance.jpeg',
      label: 'Standup',
      dateTime: '1 August 2025 at 11:00 PM',
      eventName: 'Drams Natak',
      date: 'addfgghj',
      place: 'hello',
      time: '3456789',
      emoji: '😆',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'Poetry',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
      emoji: '❤️',
    },
    {
      id: 1,
      imageLink: 'pands.jpeg',
      label: 'Workshop',
      dateTime: '28 July 2025 at 10:00 AM',
      eventName: 'Dance Morning',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
    },
    {
      id: 2,
      imageLink: 'pandsDance.jpeg',
      label: 'Standup',
      dateTime: '1 August 2025 at 11:00 PM',
      eventName: 'Drams Natak',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'Poetry',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'Garba Night',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'Exhibition',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'Race',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'a1',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'Ra',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
    },

    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'Rampyaaari',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
    },
    {
      id: 3,
      imageLink: 'pandsYoga.jpeg',
      label: 'Racesdgfhfdghd',
      dateTime: '03 August 2025 at 11:00 AM',
      eventName: 'Music Mahol',
      date: 'addfgghj',
      place: 'shjsb',
      time: '3456789',
    },
  ];

  eventTypeArr(eventType: string): void {
    this.eventFilterSelected = eventType;

    this.newEventArr = [];

    if (eventType === 'All') {
      this.newEventArr = this.allEventArr;
    } else {
      this.allEventArr.forEach((item) => {
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

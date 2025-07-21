import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss',
})
export class Schedule {
  public activeTab: 'schedule' | 'parents' | 'groups' = 'groups';

  setActiveTab(tab: 'schedule' | 'parents' | 'groups') {
    this.activeTab = tab;
  }

  // Data for Student Groups
  groupA = [
    { code: 'AM1', name: 'B.Tech. in Engineering and Computational Mechanics' },
    { code: 'BB1', name: 'B.Tech. in Biochemical Engg. & Biotechnology' },
    { code: 'CE1', name: 'B.Tech. in Civil Engineering' },
    { code: 'CH1', name: 'B.Tech. in Chemical Engineering' },
    { code: 'CH7', name: 'B.Tech. & M.Tech. in Chemical Engineering' },
    { code: 'CS1', name: 'B.Tech. in Computer Science & Engineering' },
    {
      code: 'CS5',
      name: 'B.Tech. & M.Tech. in Computer Science & Engineering',
    },
    { code: 'CY1', name: 'Bachelor of Science in Chemistry' },
    { code: 'MS1', name: 'B.Tech. in Materials Engineering' },
    { code: 'PH1', name: 'B.Tech. in Engineering Physics' },
  ];

  groupB = [
    { code: 'DD1', name: 'Bachelor in Design (B.Des.)' },
    { code: 'DD2', name: 'B.Tech. in Design' },
    { code: 'EE1', name: 'B.Tech. in Electrical Engineering' },
    {
      code: 'EE3',
      name: 'B.Tech. in Electrical Engineering (Power & Automation)',
    },
    { code: 'ES1', name: 'B.Tech. in Energy Engineering' },
    { code: 'ME1', name: 'B.Tech. in Mechanical Engineering' },
    { code: 'ME2', name: 'B.Tech. in Production & Industrial Engineering' },
    { code: 'MT1', name: 'B.Tech. in Mathematics & Computing' },
    { code: 'MT6', name: 'B.Tech. & M.Tech. in Mathematics & Computing' },
    { code: 'TT1', name: 'B.Tech. in Textile and Fibre Engineering' },
  ];

  // Data for Parents' Orientation
  parentsGroupA = [
    {
      departments: 'Applied Mechanics + Chemical Engineering',
      venue: 'LH 108',
    },
    { departments: 'Biochemical Engg. + Civil Engineering', venue: 'LH 325' },
    { departments: 'Computer Science Engineering', venue: 'LH 111' },
    { departments: 'Chemistry + Materials Sci. + Physics', venue: 'LH 114' },
  ];

  parentsGroupB = [
    { departments: 'Textile and Fibre Engineering', venue: 'LH 408' },
    { departments: 'Design + Energy Science', venue: 'LH 410' },
    { departments: 'Mathematics', venue: 'Seminar Hall' },
    { departments: 'Electrical Engineering (EE1)', venue: 'LH 416' },
    { departments: 'Electrical Engineering (EE3)', venue: 'LH 418' },
    { departments: 'Mechanical Engineering (ME1)', venue: 'LH 526' },
    { departments: 'Production & Industrial Engg. (ME2)', venue: 'LH 527' },
  ];

  // Data for Student Schedule...
  // Data for Student Schedule
  studentSchedule = [
    {
      day: 'Day 1',
      date: 'Tuesday, July 22, 2025',
      events: [
        {
          time: '9:00 AM - 10:30 AM',
          group: 'A',
          activity: 'Welcome Session',
          venue: 'Dogra Hall',
        },
        {
          time: '11:30 AM - 1:00 PM',
          group: 'B',
          activity: 'Welcome Session',
          venue: 'Dogra Hall',
        },
        {
          time: '2:30 PM - 4:00 PM',
          group: 'A',
          activity: 'Welcome by Department',
          venue: 'LH 308, LH 310',
        },
        {
          time: '2:30 PM - 4:00 PM',
          group: 'B',
          activity: 'Welcome by Department',
          venue: 'Various LH rooms',
        },
        {
          time: '4:15 PM - 5:30 PM',
          group: 'A',
          activity: 'Meeting with Dean (Student Welfare)',
          venue: 'Dogra Hall',
        },
        {
          time: '4:15 PM - 5:30 PM',
          group: 'B',
          activity: 'Session with Dean (Diversity & Inclusion)',
          venue: 'LH 325',
        },
        {
          time: '5:45 PM - 7:45 PM',
          group: 'A',
          activity: 'Campus Tour (CT)',
          venue: 'LHC Entrance',
        },
        {
          time: '5:45 PM - 7:00 PM',
          group: 'B',
          activity: 'Meeting with Dean (Student Welfare)',
          venue: 'Dogra Hall',
        },
      ],
    },
    {
      day: 'Day 2',
      date: 'Wednesday, July 23, 2025',
      events: [
        {
          time: '8:00 AM - 9:45 AM',
          group: 'A & B',
          activity: 'Computer Literacy Test',
          venue: 'Various LH rooms',
        },
        {
          time: '10:00 AM - 12:00 PM',
          group: 'A & B',
          activity: 'Language Proficiency Test (LPT)',
          venue: 'LH 502',
        },
        {
          time: '10:30 AM - 12:30 PM',
          group: 'A & B',
          activity: 'Introduction to Academics',
          venue: 'Various LH rooms',
        },
        {
          time: '3:00 PM - 4:00 PM',
          group: 'A & B',
          activity: 'Session with Security and Delhi Police',
          venue: 'Dogra Hall',
        },
        {
          time: '5:45 PM - 7:45 PM',
          group: 'B',
          activity: 'Campus Tour (CT)',
          venue: 'LHC Entrance',
        },
      ],
    },
    {
      day: 'Day 3',
      date: 'Thursday, July 24, 2025',
      events: [
        {
          time: '9:00 AM - 1:15 PM',
          group: 'A & B',
          activity: 'Registration, LPT, Intro to Acads',
          venue: 'Various LH rooms',
        },
        {
          time: '4:00 PM - 5:00 PM',
          group: 'A & B',
          activity: 'Interaction with COL1000 Instructor',
          venue: 'To be announced',
        },
      ],
    },
  ];
}

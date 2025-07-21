import { Component } from '@angular/core';
import { EventCard } from '../../reusable components/event-card/event-card';
import { Newevent } from '../../reusable components/newevent/newevent';
import { CommonModule, NgIf, TitleCasePipe } from '@angular/common';
import { ListView } from '../../reusable components/list-view/list-view';
import { Event } from '../../../Services/event';
import { finalize } from 'rxjs/operators';
import { Loader } from '../../reusable components/loader/loader';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-home-page',
  imports: [
    EventCard,
    Newevent,
    TitleCasePipe,
    ListView,
    Loader,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  labelArr: string[] = [];
  newEventArr: any;
  eventFilterSelected: string = 'All';
  layoutSelected: string = 'Grid';
  allEventArr: any;
  featuredEventsArr: any;
  today: Date = new Date();
  loader: boolean = false;
  paginatedEvents: any = [];
  canBeLoaded = false;

  // --- Pagination State ---
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPages: number = 0;

  // This array holds the events currently displayed on the screen
  filteredEvents: any = [];

  // Bound to the search input field
  public searchTerm: string = '';

  ngOnInit(): void {
    window.scroll(0, 0);

    this.fetchEventsData();
  }
  constructor(private eventService: Event) {}

  // This function is called whenever the user types in the search box
  filterEvents(): void {
    const term = this.searchTerm.trim().toUpperCase();

    if (!term) {
      this.filteredEvents = [...this.newEventArr];
      this.eventTypeArr(this.eventFilterSelected);
    } else {
      this.filteredEvents = this.newEventArr.filter(
        (event: { departments: any[] }) =>
          event.departments.some((dept: string) =>
            dept.toUpperCase().startsWith(term)
          )
      );

      this.newEventArr = [...this.filteredEvents];
    }

    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    // HOW TOTAL PAGES ARE CALCULATED:
    // The total number of pages is calculated based on the CURRENT number of items
    // in the filteredEvents array.
    // Math.ceil() rounds up to ensure we have a page for leftover items.
    // Example 1 (Initial Load): 13 events / 12 per page = 1.08 -> Math.ceil -> 2 pages.
    // Example 2 (Search for 'CS'): 10 events / 12 per page = 0.83 -> Math.ceil -> 1 page.

    this.totalPages = Math.ceil(this.newEventArr.length / this.itemsPerPage);

    // Now, we slice the filteredEvents array to get just the items for the current page.
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedEvents = this.newEventArr.slice(startIndex, endIndex);
    this.canBeLoaded = true;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;

      this.updatePagination();
    }
  }

  // Helper to create an array of numbers for page links
  getPageNumbers(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  // Clears the search term and resets the event list
  clearSearch(): void {
    this.searchTerm = '';
    this.filterEvents();
  }

  fetchEventsData() {
    this.loader = true;

    this.eventService
      .getEvents()
      .pipe(finalize(() => (this.loader = false)))
      .subscribe((data: any) => {
        this.allEventArr = data;

        this.allEventArr.forEach(
          (item: { label: string; datetime: any; departments: any }) => {
            item.departments = item.departments
              .split(',')
              .map((dep: string) => dep.trim());
            this.labelArr.push(item.label);

            // ✅ Only parse date if it's a string
            const rawDate = item.datetime;

            if (typeof rawDate === 'string' && rawDate.startsWith('Date(')) {
              // ✅ Handles "Date(2025,6,24)" from Google Sheet
              const match = rawDate.match(/Date\((\d+),(\d+),(\d+)\)/);
              if (match) {
                const [_, year, month, day] = match.map(Number);
                item.datetime = new Date(year, month, day);
              } else {
                item.datetime = new Date('2100-01-01'); // fallback
              }
            } else if (typeof rawDate === 'string' && rawDate.includes('/')) {
              // ✅ Fallback if manually entered as "24/07/2025"
              const [day, month, year] = rawDate.split('/').map(Number);
              item.datetime = new Date(year, month - 1, day);
            } else {
              item.datetime = new Date('2100-01-01'); // fallback if invalid or missing
            }
          }
        );

        // this.allEventArr.sort(
        //   (a: { datetime: Date }, b: { datetime: Date }) =>
        //     (a.datetime as Date).getTime() - (b.datetime as Date).getTime()
        // );

        const now = new Date();
        const today = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        );

        this.allEventArr = this.allEventArr.filter((event: any) => {
          // 1. Event date is before today? Remove.
          const eventDate = new Date(
            event.datetime.getFullYear(),
            event.datetime.getMonth(),
            event.datetime.getDate()
          );
          if (eventDate < today) {
            return false;
          }

          // 2. If event date is today, check end time.
          if (eventDate.getTime() === today.getTime() && event.endtime) {
            // Parse end time
            // Assume event.endtime is "HH:mm" (24h), else adjust parsing
            const [h, m] = event.endtime.split(':').map(Number);
            const eventEnd = new Date(event.datetime);
            eventEnd.setHours(h, m, 0, 0);

            if (eventEnd < now) {
              return false;
            }
          }
          return true;
        });

        this.allEventArr.sort(
          (
            a: { datetime: Date; starttime: string },
            b: { datetime: Date; starttime: string }
          ) => {
            const dateComparison = a.datetime.getTime() - b.datetime.getTime();
            if (dateComparison !== 0) return dateComparison;
            return a.starttime.localeCompare(b.starttime);
          }
        );

        this.featuredEventsArr = this.allEventArr.filter(
          (item: { isfeatured: string }) => item.isfeatured === 'yes'
        );

        this.labelArr = [...new Set(this.labelArr)];
        this.newEventArr = this.allEventArr;
        this.filterEvents();
        this.updatePagination();
      });
  }

  eventTypeArr(eventType: string): void {
    this.eventFilterSelected = eventType;

    this.newEventArr = [];

    if (eventType === 'All') {
      this.newEventArr = this.allEventArr;
    } else {
      this.allEventArr.forEach((item: { label: string }) => {
        if (item.label === eventType) {
          this.newEventArr.push(item);
        }
      });
    }
    this.updatePagination();
  }
  layoutcall(layoutType: string) {
    this.layoutSelected = layoutType;
  }
}

export interface IEvent {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  venue: string;
  eventType: string;
  departments: string[];
}

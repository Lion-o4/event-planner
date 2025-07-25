import { Routes } from '@angular/router';
import { HomePage } from './Components/home-page/home-page';
import { About } from './Components/about/about';
import { Contact } from './Components/contact/contact';
import { Schedule } from './Components/schedule/schedule';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'about-me', component: About },
  { path: 'Bucket-List', component: Contact },
  { path: 'schedule', component: Schedule },
];

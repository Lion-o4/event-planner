import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  constructor(private router: Router) {}

  GoToAboutPage() {
    this.router.navigate(['/about-me']);
  }

  GoToHomePage() {
    this.router.navigate(['home']);
  }

  GoToContactPage() {
    this.router.navigate(['Bucket-List']);
  }
  GoToSchedulePage() {
    this.router.navigate(['Schedule']);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(private router: Router) {}

  GoToAboutPage(): void {
    this.router.navigate(['/about-me']);
  }

  GoToHomePage(): void {
    this.router.navigate(['home']);
  }

  GoToContactPage(): void {
    this.router.navigate(['Bucket-List']);
  }
}

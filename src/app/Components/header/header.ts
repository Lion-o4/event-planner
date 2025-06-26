import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  constructor(private router:Router){
    console.log("Page Loaded");
    
  }

  GoToAboutPage(){
    this.router.navigate(['/about-me']);
    
    
  }

  GoToHomePage(){
    this.router.navigate(['home']);
  }

  GoToContactPage(){
    this.router.navigate(['contact']);
  }

}

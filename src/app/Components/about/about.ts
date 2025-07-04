import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  fullText: string = `Hi! I'm Gauri Dhakad, Hope so this website help you'.

  
  Welcome to my journey!`;
  typedText: string = '';
  index: number = 0;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.index < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.index);

      this.index++;
      setTimeout(() => this.typeWriter(), 40);
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  fullText: string = `Hi, I’m from Mandsaur (M.P.). I created this website as part of my summer learning to help students easily stay updated on campus events.
Instead of relying on scattered sources and missed emails, this platform offers a clean, organized view of everything you need to know.`;
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

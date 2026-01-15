import 'zone.js';

import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
}

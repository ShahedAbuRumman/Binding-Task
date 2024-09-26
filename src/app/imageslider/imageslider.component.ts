
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImageSliderComponent {
  
  images = [
    '../assets/img1.jpg',
    '../assets/img2.webp',
    '../assets/img3.png'
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

 
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  
  setCurrentImage(index: number) {
    this.currentIndex = index;
  }
}


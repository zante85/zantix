import { Component, Inject } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselService } from './carouselservice';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {
  images: Carousel[];
  elementspage: any[][];
  currentImages: String[];
  popupTitle: String;
  paginations: Number[];
  currentPage: number;
  constructor(private legoservice: CarouselService) {
    this.currentPage = 1;
  }

 
}
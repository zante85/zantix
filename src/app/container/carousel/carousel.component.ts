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

  constructor(private carouselService: CarouselService) {
    this.carouselService.getImages().subscribe((images: Array<Carousel>) => {
      this.images = images;
  });
  }

 
}
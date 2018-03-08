import { Component, Inject } from '@angular/core';
import { LegoService } from './legoservice';
import { Lego } from './lego';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenericElement } from './genericelement';

@Component({
  selector: 'app-lego',
  templateUrl: './lego.component.html',
  styleUrls: ['./lego.component.css']
})

export class LegoComponent {
  legos: Lego[];
  currentImages: String[];
  popupTitle: String;
  paginations: Number[];
  currentPage: number;
  constructor(private legoservice: LegoService) {
    this.currentPage = 1;
    this.legoservice.getLegos().subscribe((legos: Array<Lego>) => {
      console.log(legos);
      this.legos = legos;
      this.paginations = new Array<Number>();
      let z = 1;
      // Paginazione 5 elementi per pagina
      for (var _i = 0; _i < this.legos[0].elements.length; _i++) {
        if (_i % 5 == 0) {
          this.paginations[z - 1] = z;
          z++;
        }
      }
    });

  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }

  }

  nextPage() {
    if (this.currentPage < this.paginations.length) {
      this.currentPage += 1;
    }
  }

  openModal(element: GenericElement) {
    console.log(element.images);
    this.currentImages = element.images;
    this.popupTitle = element.title;
  }

  changeContainer(name: string) {
    console.log(name);
  }
}
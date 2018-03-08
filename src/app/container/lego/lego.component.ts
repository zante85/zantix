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
  elementspage: any[][];
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
      let x = 0;
      this.elementspage = []; 
      // Paginazione 5 elementi per pagina
      for (var _i = 0; _i < this.legos[0].elements.length; _i++) {
        if(this.elementspage[z - 1]==undefined){
          this.elementspage[z - 1] = [];
        }
        this.elementspage[z - 1][x] = this.legos[0].elements[_i];
        x++;
        if (_i!=0 && _i % 5 == 0) {
          this.paginations[z - 1] = z;
          z++;
          x = 0;
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
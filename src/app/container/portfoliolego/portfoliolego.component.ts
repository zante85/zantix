import { Component, Inject } from '@angular/core';
import { Lego } from '../lego/lego';
import { GenericElement } from '../lego/genericelement';
import { PortfolioLegoService } from './portofoliolegoservice';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfoliolego.component.html',
  styleUrls: ['./portfoliolego.component.css']
})

export class PortfolioLegoComponent {
  legos: Lego[];
  elementspage: any[][];
  currentImages: String[];
  popupTitle: String;
  paginations: Number[];
  currentPage: number;
  closeResult = '';

  constructor(private legoservice: PortfolioLegoService, private modalService: NgbModal) {
    this.currentPage = 1;
    this.legoservice.getLegos().subscribe((legos: Array<Lego>) => {
      console.log(legos);
      this.legos = legos;
      this.paginations = new Array<Number>();
      let z = 1;
      let x = 0;
      this.elementspage = []; 
      // Paginazione 5 elementi per pagina
      console.log(this.legos[0].elements.length);
      for (var _i = 0; _i < this.legos[0].elements.length; _i++) {
        if(this.elementspage[z - 1]==undefined){
          this.elementspage[z - 1] = [];
        }
        this.elementspage[z - 1][x] = this.legos[0].elements[_i];
        x++;
        if ( (_i+1) % 5 == 0 || _i==this.legos[0].elements.length-1) {
          console.log(_i);
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

  openGallery(content, element: GenericElement) {
    console.log(element.title);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  changeContainer(name: string) {
    console.log(name);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
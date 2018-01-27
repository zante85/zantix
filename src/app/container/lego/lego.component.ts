import { Component, Inject } from '@angular/core';
import { LegoService } from './legoservice';
import { Lego } from './lego';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lego',
  templateUrl: './lego.component.html',
  styleUrls: ['./lego.component.css']
})

export class LegoComponent {
  legos: Lego[];
  paginations: Number[];
  constructor(private legoservice: LegoService) {

    this.legoservice.getLegos().subscribe((legos: Array<Lego>) => {
      console.log(legos);
      this.legos = legos;
      this.paginations = new Array<Number>();
      let z = 1;
      // Paginazione 5 elementi per pagina
      for (var _i = 0; _i < this.legos[0].elements.length; _i++) {
        if (_i % 5 == 0) {
          this.paginations[_i] = z;
          z++;
        }
      }
    });

  }

  changeContainer(name: string) {
    console.log(name);
  }
}
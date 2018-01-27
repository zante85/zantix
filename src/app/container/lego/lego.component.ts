import {Component, Inject} from '@angular/core';
import { LegoService } from './legoservice';
import { Lego } from './lego';

@Component({
  selector: 'app-lego',
  templateUrl: './lego.component.html',
  styleUrls: ['./lego.component.css']
})

export class LegoComponent {
  legos: Lego[];
  constructor(private legoservice: LegoService){

      this.legoservice.getLegos().subscribe((legos: Array<Lego>) => {
          console.log(legos);
          this.legos = legos;
      });

  }

  changeContainer(name:string){
    console.log(name);
  }
}
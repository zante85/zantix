import {Component, Inject} from '@angular/core';
import { LegoService } from '../lego/legoservice';
import { Lego } from '../lego/lego';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
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
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {

  page: string;

  constructor(){

      this.page='lego';

  }

  @Input()
  set setPage(page: string) {
    this.page = (page && page.trim());
  }
  
}

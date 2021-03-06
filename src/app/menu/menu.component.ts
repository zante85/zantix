import {Component, Inject} from '@angular/core';
import { Menu } from './menu';
import { MenuService } from './menuservice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  title = 'zante-brick';
  menus: Menu[];
  constructor(private menuservice: MenuService){

      this.menuservice.getMenu().subscribe((menus: Array<Menu>) => {
          console.log(menus);
          this.menus = menus;
      });

  }

  scrollToElement(nomeElemento): void {
    const element = document.querySelector(nomeElemento)
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  changeContainer(name:string){
    console.log(name);

  }
}

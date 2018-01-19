import {Component, Inject} from '@angular/core';
import { Menu } from './menu';
import { MenuService } from './menuservice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  title = 'zantix';
  menus: Menu[];
  constructor(private menuservice: MenuService){

      this.menuservice.getMenu().subscribe((menus: Array<Menu>) => {
          console.log(menus);
          this.menus = menus;
      });

  }
}

import { Component } from '@angular/core';
import { Menu } from './menu/menu';
import { MenuService } from './menu/menuservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zantix';
  menus: Menu[];
  constructor(private menuservice: MenuService){

      this.menuservice.getMenu().subscribe((menus: Array<Menu>) => {
          console.log(menus);
          this.menus = menus;
      });

  }
  
}



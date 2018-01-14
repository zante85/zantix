import { Component } from '@angular/core';
import { Menu } from './models/menu';
import { MenuService } from './services/menuservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zantix';
  menus: Menu[] = [];
  menu: Menu;
  ngOnInit() {
        this.menu = new Menu();
        this.menu.id="10";
        this.menu.name="prova";
        this.menu.link="/";
        this.menu.icon = "colore.jpg";
        this.menus[0]=this.menu;
  }
  
}



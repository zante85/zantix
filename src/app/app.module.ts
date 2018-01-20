import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';


import { MenuService } from './menu/menuservice';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { ContainerModule } from './container/container.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ContainerModule
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

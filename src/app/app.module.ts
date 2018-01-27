import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_CONFIG, AppConfig } from './config/app.config';

import { MenuService } from './menu/menuservice';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerModule } from './container/container.module';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error-404.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ContainerModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { APP_CONFIG, AppConfig } from './config/app.config';

import { MenuService } from './menu/menuservice';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerModule } from './container/container.module';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error-404.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Constants } from './config/constants';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    Error404Component,
    MatProgressSpinner
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ContainerModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    MenuService,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

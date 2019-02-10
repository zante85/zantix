import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerRoutingModule } from './container-routing.module';


import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContainerComponent } from './container.component';
import { LegoComponent } from './lego/lego.component';
import { LegoService } from './lego/legoservice';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PortfolioLegoService } from './portfoliolego/portofoliolegoservice';
import { PortfolioLegoComponent } from './portfoliolego/portfoliolego.component';

@NgModule({
  declarations: [
    GalleryComponent,
    ContactsComponent,
    ContainerComponent,
    LegoComponent,
    PortfolioLegoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContainerRoutingModule,
    NgbModule
  ],
  providers: [
    LegoService,
    PortfolioLegoService
  ],
  exports: [
    GalleryComponent,
    ContactsComponent,
    LegoComponent
  ]
})

export class ContainerModule {
}

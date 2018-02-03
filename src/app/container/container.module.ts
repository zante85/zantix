import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerRoutingModule } from './container-routing.module';


import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container.component';
import { LegoComponent } from './lego/lego.component';
import { LegoService } from './lego/legoservice';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TeamComponent } from './bike/team/team.component';
import { BikeService } from './bike/bikeservice';

@NgModule({
  declarations: [
    GalleryComponent,
    ContactsComponent,
    HomeComponent,
    ContainerComponent,
    LegoComponent,
    TeamComponent
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
    BikeService
  ],
  exports: [
    GalleryComponent,
    ContactsComponent,
    HomeComponent,
    LegoComponent,
    TeamComponent
  ]
})

export class ContainerModule {
}

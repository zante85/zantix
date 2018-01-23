import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerRoutingModule } from './container-routing.module';


import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [
    GalleryComponent,
    ContactsComponent,
    HomeComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContainerRoutingModule
  ],
  exports: [
    GalleryComponent,
    ContactsComponent,
    HomeComponent
  ]
})

export class ContainerModule {
}

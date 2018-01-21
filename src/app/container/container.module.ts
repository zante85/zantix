import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }      from '@angular/http';



import {GalleryComponent} from './gallery/gallery.component';
import {ContactsComponent} from './contacts/contacts.component';

@NgModule({
  declarations: [
    GalleryComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  exports: [
    GalleryComponent,
    ContactsComponent
  ]
})

export class ContainerModule {
}

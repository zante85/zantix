import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContainerRoutingModule } from './container-routing.module';


import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [
    GalleryComponent,
    ContactsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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

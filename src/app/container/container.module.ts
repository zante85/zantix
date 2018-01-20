import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';

import {GalleryComponent} from './gallery/gallery.component';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  exports: [
    GalleryComponent
  ]
})

export class ContainerModule {
}

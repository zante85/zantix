import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactsComponent} from './contacts/contacts.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContainerComponent} from './container.component';
import { HomeComponent } from './home/home.component';

const containerRoutes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'lego', component: GalleryComponent},
      {path: 'bike', component: GalleryComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(containerRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ContainerRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactsComponent} from './contacts/contacts.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContainerComponent} from './container.component';
import { LegoComponent } from './lego/lego.component';

const containerRoutes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {path: 'contacts', component: ContactsComponent},
      {path: 'lego', component: LegoComponent},
      {path: 'bike', component: GalleryComponent}
      //{path: 'race', component: RaceComponent},
      //{path: 'events', component: EventsComponent}
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

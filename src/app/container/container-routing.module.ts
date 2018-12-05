import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactsComponent} from './contacts/contacts.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContainerComponent} from './container.component';
import { HomeComponent } from './home/home.component';
import { LegoComponent } from './lego/lego.component';
import { TeamComponent } from './bike/team/team.component';

const containerRoutes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'lego', component: LegoComponent},
      {path: 'bike', component: GalleryComponent},
      {path: 'team', component: TeamComponent}
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

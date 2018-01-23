import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppConfig} from './config/app.config';
import {Error404Component} from './error404/error-404.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: ContainerComponent},
  {path: AppConfig.routes.zantix, loadChildren: 'app/container/container.module#ContainerModule'},
  {path: AppConfig.routes.error404, component: Error404Component},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

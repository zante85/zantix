import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Menu } from './menu';




@Injectable()
export class MenuService{

  constructor(public http:Http) {
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  } 

  getMenu(): Observable<Menu[]> {
    return this.http.get("json-moc/menu.json")
      .map(response => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  
}

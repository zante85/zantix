import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Lego } from './lego';




@Injectable()
export class LegoService{

  constructor(public http:Http) {
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  } 

  getLegos(): Observable<Lego[]> {
    return this.http.get("json-moc/lego.json")
      .map(response => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  
}

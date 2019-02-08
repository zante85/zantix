import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { Lego } from '../lego/lego';




@Injectable()
export class PortfolioLegoService{

  constructor(public http:Http) {
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  } 

  getLegos(): Observable<Lego[]> {
    return this.http.get("json-moc/lego.json").pipe(
      map(response => {
        return response.json();
      }),
      catchError(error => this.handleError(error)));
  }
  
}

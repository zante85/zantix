import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { Bike } from './bike';
import { Observable } from 'rxjs';




@Injectable()
export class BikeService{

  constructor(public http:Http) {
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  } 

  getBikes(): Observable<Bike[]> {
    return this.http.get("json-moc/bike.json").pipe(
      map(response => {
        return response.json();
      }),
      catchError(error => this.handleError(error)));
  }
  
}

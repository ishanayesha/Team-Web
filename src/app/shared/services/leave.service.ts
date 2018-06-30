import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';
import { Leave } from '../models/Leave';

@Injectable()
export class LeaveService {

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  //API end points
  private getAllLeaveUrl: string = "http://localhost:4200/assets/urls/leaveSheet.json";

  getAllLeave(): Observable<Leave[]> {
    return this.http.get<Leave[]>(this.getAllLeaveUrl)
      .pipe(
      tap(data => console.log("fetched all leave details")),
      catchError(this.errorHandler.handleError('getAllLeave', []))
      );
  }

}

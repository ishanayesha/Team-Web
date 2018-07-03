import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';
import { Issue } from '../models/Issue';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  //API end points
  private getImportantDatesUrl: string = "http://localhost:4200/assets/urls/getImportantDates.json"
  private getEnvironmentDetailsUrl: string = "http://localhost:4200/assets/urls/environmentDetails.json";

  getImportantDates(): Observable<any[]> {
    return this.http.get<any[]>(this.getImportantDatesUrl)
      .pipe(
      tap(data => console.log("fetched important dates")),
      catchError(this.errorHandler.handleError('getImportantDates', []))
      );
  }

  getEnvironmentDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.getEnvironmentDetailsUrl)
      .pipe(
      tap(data => console.log("fetched environment details")),
      catchError(this.errorHandler.handleError('getEnvironmentDetails', []))
      );
  }
}

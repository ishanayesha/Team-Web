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
  private getCurrentSprintUrl: string = "http://localhost:4200/assets/urls/currentSprint.json"
  private getEnvironmentDetailsUrl: string = "http://localhost:4200/assets/urls/environmentDetails.json";
  private getSprintSummaryUrl: string = "http://localhost:4200/assets/urls/sprintSummary.json";  

  getCurrentSprint(): Observable<any[]> {
    return this.http.get<any[]>(this.getCurrentSprintUrl)
      .pipe(
      tap(data => console.log("fetched current sprint data")),
      catchError(this.errorHandler.handleError('getCurrentSprint', []))
      );
  }

  getEnvironmentDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.getEnvironmentDetailsUrl)
      .pipe(
      tap(data => console.log("fetched environment details")),
      catchError(this.errorHandler.handleError('getEnvironmentDetails', []))
      );
  }

  getSprintSummary(): Observable<any[]> {
    return this.http.get<any[]>(this.getSprintSummaryUrl)
      .pipe(
      tap(data => console.log("fetched sprint summary")),
      catchError(this.errorHandler.handleError('getSprintSummary', []))
      );
  }
}

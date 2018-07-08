import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';
import { Issue } from '../models/Issue';

@Injectable()
export class IssueService {

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  //API end points
  private getAllIssuesUrl: string = "http://localhost:4200/assets/urls/allIssues.json";
  private getMyIssuesUrl: string = "http://localhost:4200/assets/urls/myIssues.json";
  private getOngoingIssuesUrl: string = "http://localhost:4200/assets/urls/ongoingIssues.json";

  getAllIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.getAllIssuesUrl)
      .pipe(
      tap(data => console.log("fetched all Issue details")),
      catchError(this.errorHandler.handleError('getAllIssues', []))
      );
  }

  getMyIssues(userId: number): Observable<Issue[]> {

    const url = `${this.getMyIssuesUrl}/${userId}`;
    return this.http.get<Issue[]>(this.getMyIssuesUrl)
      .pipe(
      tap(data => console.log(`fetched My Issues details userid=${userId}`)),
      catchError(this.errorHandler.handleError('getMyIssues', []))
      );
  }

  getOngoingIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.getOngoingIssuesUrl)
      .pipe(
      tap(data => console.log("fetched ongoing issues")),
      catchError(this.errorHandler.handleError('getOngoingIssues', []))
      );
  }
}

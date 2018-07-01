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

  getAllIssues(): Observable<any[]> {
    return this.http.get<any[]>(this.getAllIssuesUrl)
      .pipe(
      tap(data => console.log("fetched all Issue details")),
      catchError(this.errorHandler.handleError('getAllIssues', []))
      );
  }

}

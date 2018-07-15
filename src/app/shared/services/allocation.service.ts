import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';
import { Issue } from '../models/Issue';

@Injectable()
export class AllocationService {

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  //API end points
  private getAllAllocationsUrl: string = "http://localhost:4200/assets/urls/allAllocations.json";
  private getMyAllocationsUrl: string = "http://localhost:4200/assets/urls/myAllocations.json";

  getAllAllocations(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.getAllAllocationsUrl)
      .pipe(
      tap(data => console.log("fetched all Allocations details")),
      catchError(this.errorHandler.handleError('getAllIAllocations', []))
      );
  }

  getMyAllocations(userId: number): Observable<Issue[]> {

    const url = `${this.getMyAllocationsUrl}/${userId}`;
    return this.http.get<Issue[]>(this.getMyAllocationsUrl)
      .pipe(
      tap(data => console.log(`fetched My Allocations details userid=${userId}`)),
      catchError(this.errorHandler.handleError('getMyAllocations', []))
      );
  }
}

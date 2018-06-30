import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';
import { Issue } from '../models/Issue';

@Injectable()
export class IssueService {

  constructor() { }

}

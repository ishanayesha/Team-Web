import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/User';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    //API end points
    private getAllUsersUrl = "http://localhost:4200/assets/urls/user.json";
    private getMyProfileUrl="";
    private createNewUserUrl="";
    private updateMyProfileUrl="";
    private deleteUserUrl="";

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.getAllUsersUrl)
            .pipe(
            tap(data => console.log("fetched team members")),
            catchError(this.handleError('getAllMembers', []))
            );
    }

    getMyProfile(id: number) {
        return this.http.get(this.getMyProfileUrl + id);
    }

    createNewUser(user: User) {
        return this.http.post(this.createNewUserUrl, user);
    }
        
    updateMyProfile(user: User) {
        return this.http.put(`this.updateMyProfile + ${user.id}`, user);
    }

    deleteUser(id: number) {
        return this.http.delete(this.deleteUserUrl + id);
    }
    
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed:`, error.message);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    // private log(message: string) {
    //     this.messageService.add('HeroService: ' + message);
    // }
}

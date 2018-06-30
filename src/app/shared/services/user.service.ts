import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';
import { User } from '../models/User';

@Injectable()
export class UserService {

    constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

    //API end points
    private getAllUsersUrl: string = "http://localhost:4200/assets/urls/user.json";
    private getMyProfileUrl: string = "http://localhost:4200/assets/urls/myProfile.json";
    private createNewUserUrl: string = "";
    private updateMyProfileUrl: string = "";
    private deleteUserUrl: string = "";

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.getAllUsersUrl)
            .pipe(
            tap(data => console.log("fetched team members")),
            catchError(this.errorHandler.handleError('getAllMembers', []))
            );
    }

    getMyProfile(id: number): Observable<User> {

        const url = `${this.getMyProfileUrl}/${id}`;
        return this.http.get<User>(this.getMyProfileUrl).pipe(
            tap(_ => console.log(`fetched myProfile id=${id}`)),
            catchError(this.errorHandler.handleError<User>(`getMyProfile id=${id}`))
        );
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

    /** Log a HeroService message with the MessageService */
    // private log(message: string) {
    //     this.messageService.add('HeroService: ' + message);
    // }
}

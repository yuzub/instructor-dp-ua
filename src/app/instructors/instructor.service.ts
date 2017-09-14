import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IInstructor } from "./instructor";

@Injectable()
export class InstructorService {
    private _instructorUrl = './api/instructors/instructors.json';

    constructor(private _http: HttpClient) { }

    getInstructors(): Observable<IInstructor[]> {
        return this._http.get<IInstructor[]>(this._instructorUrl)
        // .do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
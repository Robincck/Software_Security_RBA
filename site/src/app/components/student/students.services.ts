import {Injectable} from '@angular/core';

import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Student} from "./student";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class StudentService {
    private requestArray: String[] = [
        'http://localhost:1336/api/students/', // Get all students [0]

    ];

    constructor(private http: AuthHttp) {
    }

    getStudents(): Promise<Student[]> {

        const request = `${this.requestArray[0]}`;

        return this.http
            .get(request)
            .toPromise()
            .then(response => {
                return response.json() as Student[];
            })
            .catch();
    }

}

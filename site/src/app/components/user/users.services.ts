/**
 * Created by Robin on 4-12-2017.
 */
import {Injectable} from '@angular/core';

import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {User} from "./user";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class UserService {
    private requestArray: String[] = [
        'http://localhost:1336/api/logins/', // Get all users [0]

    ];

    constructor(private http: AuthHttp) {
    }

    getUsers(): Promise<User[]> {

        const request = `${this.requestArray[0]}`;

        return this.http
            .get(request)
            .toPromise()
            .then(response => {
                return response.json() as User[];
            })
            .catch();
    }

}

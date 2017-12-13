/**
 * Created by Robin on 4-12-2017.
 */
import {Injectable} from '@angular/core';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

import {TOKEN_NAME} from '../Authentication/auth.constant';

@Injectable()
export class LoginService {
    jwtHelper: JwtHelper = new JwtHelper();
    accessToken: string;
    isManager: boolean;

    constructor() {
    }

    login(accessToken: string) {
        const decodedToken = this.jwtHelper.decodeToken(accessToken);

        this.isManager = decodedToken.authorities.some(el => el === 'Manager');
        this.accessToken = accessToken;

        localStorage.setItem(TOKEN_NAME, accessToken);
    }

    logout() {
        this.accessToken = null;
        this.isManager = false;
        localStorage.removeItem(TOKEN_NAME);
    }

    isManagerUser(): boolean {
        if (tokenNotExpired(TOKEN_NAME, localStorage.getItem(TOKEN_NAME))) {

            const decodedToken = this.jwtHelper.decodeToken(localStorage.getItem(TOKEN_NAME));

            this.isManager = decodedToken.authorities.some(el => el === 'Manager');
        }

        return this.isManager;

    }

    isUser(): boolean {
        return this.accessToken && !this.isManager;
    }
}

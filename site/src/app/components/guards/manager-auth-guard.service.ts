/**
 * Created by Robin on 4-12-2017.
 */
import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {LoginService} from '../login/login.service';

@Injectable()
export class ManagerAuthGuard implements CanActivate {


    constructor(private router: Router, private loginService: LoginService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAdmin = this.loginService.isManagerUser();
        if (isAdmin) {
            return true;
        } else {
            this.router.navigate(['student']);
            return false;
        }
    }
}

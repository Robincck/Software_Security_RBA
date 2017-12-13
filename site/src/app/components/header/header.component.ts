import {Component, Input} from '@angular/core';
import {LoginService} from "../login/login.service";

@Component({
    selector: 'headerComponent',
    templateUrl: './header.html',
    styleUrls: [
        '../../css/styles.css'
    ],
})

export class HeaderComponent {
    @Input() page: string;

    constructor(private loginService: LoginService) {
    }

    logout() {
        this.loginService.logout();
    }

}

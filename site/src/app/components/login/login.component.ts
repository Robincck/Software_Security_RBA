import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from "../login/login.service";
import {AuthenticationService} from "../Authentication/authentication.service";
import {tokenNotExpired} from "angular2-jwt";
import {TOKEN_NAME} from "../Authentication/auth.constant";

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: [
        '../../css/styles.css'
    ],
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';


    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private authenticationService: AuthenticationService,
                private loginService: LoginService) {
    }

    ngOnInit(): void {
        if (tokenNotExpired(TOKEN_NAME, this.loginService.accessToken)) {
            this.router.navigate(['**']);
        } else {
            this.router.navigate(['login']);
        }
    }

    login(): void {
        this.loading = true;

        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                result => {
                    this.loading = false;

                    if (result) {
                        this.loginService.login(result);
                        this.navigateAfterSuccess();
                    } else {
                        this.error = 'Gebruikersnaam of wachtwoord is fout.';
                    }
                },
                error => {
                    this.error = 'Gebruikersnaam of wachtwoord is fout.';
                    this.loading = false;
                }
            );
    }

    private navigateAfterSuccess() {
            this.router.navigate(['/student']);
    }
}

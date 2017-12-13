import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {StudentModule} from './components/student/student.module';
import {LoginModule} from './components/login/login.module';
import {UserModule} from './components/user/user.module';


import {HeaderModule} from "./components/header/header.module";
import {AuthConfig, AuthHttp} from "angular2-jwt";
import {TOKEN_NAME} from "./components/Authentication/auth.constant";
import {AuthenticationService} from "./components/Authentication/authentication.service";
import {LoginService} from "./components/login/login.service";
import {AuthGuard} from "./components/guards/auth-guard.service";
import {ManagerAuthGuard} from "./components/guards/manager-auth-guard.service";

export function authHttpServiceFactory(http: Http) {
    return new AuthHttp(new AuthConfig({
        headerPrefix: 'Bearer',
        tokenName: TOKEN_NAME,
        globalHeaders: [{'Content-Type': 'application/json'}],
        noJwtError: false,
        noTokenScheme: true,
        tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
    }), http);
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgbModule.forRoot(),
        StudentModule,
        LoginModule,
        UserModule,
        AppRoutingModule,
        RouterModule,
        AppRoutingModule,
        HeaderModule
    ],
    declarations: [AppComponent],
    providers: [
        {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
        AuthenticationService,
        LoginService,
        AuthGuard,
        ManagerAuthGuard,
    ],
    bootstrap: [AppComponent],
})

export class AppModule {
}

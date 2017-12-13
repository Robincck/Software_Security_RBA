/**
 * Created by Robin on 4-12-2017.
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "../../app-routing.module";
import {HeaderModule} from "../header/header.module";
import {UserComponent} from "./user.component";
import {UserService} from "./users.services";

@NgModule({
    imports: [
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        CommonModule,
        HeaderModule
    ],
    declarations: [UserComponent],
    providers: [UserService],
    exports: [UserComponent]
})

export class UserModule {
}
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StudentComponent} from './student.component';
import {AppRoutingModule} from "../../app-routing.module";
import {HeaderModule} from "../header/header.module";
import {StudentService} from "./students.services";

@NgModule({
    imports: [
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        CommonModule,
        HeaderModule
    ],
    declarations: [StudentComponent],
    providers: [StudentService],
    exports: [StudentComponent]
})

export class StudentModule {
}
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "../../app-routing.module";
import {HeaderComponent} from "./header.component";

@NgModule({
    imports: [
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        CommonModule
    ],
    declarations: [HeaderComponent],
    providers: [],
    exports: [HeaderComponent]
})

export class HeaderModule {
}

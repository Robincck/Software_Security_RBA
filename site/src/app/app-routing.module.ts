import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {StudentComponent} from './components/student/student.component';
import {UserComponent} from './components/user/user.component';
import {ManagerAuthGuard} from "./components/guards/manager-auth-guard.service";
import {AuthGuard} from "./components/guards/auth-guard.service";


const appRoutes: Routes = [
    {path: 'student', component: StudentComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent, canActivate: [ManagerAuthGuard, AuthGuard]},
    {path: '**', redirectTo: 'student'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}

/**
 * Created by Robin on 4-12-2017.
 */
import {Component,OnInit} from '@angular/core';
import {UserService} from './users.services';
import {User} from './user';
import {LoginService} from "../login/login.service";

@Component({
    selector: 'userManagement',
    templateUrl: './userManagement.html',
    styleUrls: [
        '../../css/styles.css'
    ],
})

export class UserComponent implements OnInit {
    page = "users";
    users: User[];

    constructor(private userService: UserService, private loginService: LoginService) {

    }


    getUsers(): Promise<User[]> {
        return this.userService
            .getUsers()
            .then(users => this.users = users);
    }

    ngOnInit(): void {
        this.getUsers();
        console.log(this.loginService.isManagerUser());

    }
}
import {Component,OnInit} from '@angular/core';
import {StudentService} from './students.services';
import {Student} from './student';
import {LoginService} from "../login/login.service";

@Component({
    selector: 'studentManagement',
    templateUrl: './studentManagement.html',
    styleUrls: [
        '../../css/styles.css'
    ],
})

export class StudentComponent implements OnInit {
    page = "students";
    students: Student[];

    constructor(private studentService: StudentService, private loginService: LoginService) {

    }


    getStudents(): Promise<Student[]> {
        return this.studentService
            .getStudents()
            .then(students => this.students = students);
    }

    ngOnInit(): void {
        this.getStudents();
        console.log(this.loginService.isManagerUser());
    }
}
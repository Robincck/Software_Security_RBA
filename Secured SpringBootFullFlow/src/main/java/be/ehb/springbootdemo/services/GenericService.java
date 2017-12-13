package be.ehb.springbootdemo.services;

import be.ehb.springbootdemo.models.Login;
import be.ehb.springbootdemo.models.Student;

import java.util.List;

/**
 * Created by Robin on 22-11-2017.
 */
public interface GenericService {
    Login findLoginByUsername(String username);

    List<Student> findAllStudents();

    List<Login> findAllLogins();
}

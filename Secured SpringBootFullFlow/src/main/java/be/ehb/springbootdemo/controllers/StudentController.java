package be.ehb.springbootdemo.controllers;

import be.ehb.springbootdemo.models.Student;
import be.ehb.springbootdemo.repositories.StudentRepository;
import be.ehb.springbootdemo.services.GenericService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("/api")
public class StudentController {
    @Autowired
    private GenericService userService;

    @RequestMapping(value ="/students")
    @PreAuthorize("hasAuthority('Consultant') or hasAuthority('HR') or hasAuthority('Manager')")
    public List<Student> getStudents(){
        return userService.findAllStudents();
    }

}

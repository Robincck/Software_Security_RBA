package be.ehb.springbootdemo.controllers;

import be.ehb.springbootdemo.models.Login;
import be.ehb.springbootdemo.models.Student;
import be.ehb.springbootdemo.repositories.LoginRepository;
import be.ehb.springbootdemo.repositories.StudentRepository;
import be.ehb.springbootdemo.services.GenericService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

/**
 * Created by Robin on 21-11-2017.
 */
@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private GenericService loginService;

    @RequestMapping(value ="/logins")
    @PreAuthorize("hasAuthority('Manager')")
    public List<Login> getLogins(){
        return loginService.findAllLogins();
    }

}
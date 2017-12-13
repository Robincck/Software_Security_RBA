package be.ehb.springbootdemo.services.implementations;

import be.ehb.springbootdemo.models.Login;
import be.ehb.springbootdemo.models.Student;
import be.ehb.springbootdemo.repositories.LoginRepository;
import be.ehb.springbootdemo.repositories.StudentRepository;
import be.ehb.springbootdemo.services.GenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Robin on 22-11-2017.
 */
@Service
public class GenericServiceImpl implements GenericService {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public Login findLoginByUsername(String username) {
        return loginRepository.findByUsername(username);
    }

    @Override
    public List<Student> findAllStudents() {
        return (List<Student>)studentRepository.findAll();
    }

    @Override
    public List<Login> findAllLogins() {
        return (List<Login>)loginRepository.findAll();
    }
}

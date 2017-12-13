package be.ehb.springbootdemo.repositories;

import be.ehb.springbootdemo.models.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StudentRepository extends CrudRepository<Student, Long> {

    //@Query("select s from Student s where s.age <= ?")
    List<Student> findByAgeLessThanEqual (long age);
}

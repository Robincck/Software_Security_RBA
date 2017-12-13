package be.ehb.springbootdemo.repositories;

import be.ehb.springbootdemo.models.Login;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Robin on 21-11-2017.
 */
public interface LoginRepository extends CrudRepository<Login, Long> {

    Login findByUsername (String username);

    Login findByUsernameAndPassword (String username, String password);
}

package be.ehb.springbootdemo.repositories;

import be.ehb.springbootdemo.models.Role;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Robin on 21-11-2017.
 */
public interface RoleRepository extends CrudRepository<Role, Long> {

}
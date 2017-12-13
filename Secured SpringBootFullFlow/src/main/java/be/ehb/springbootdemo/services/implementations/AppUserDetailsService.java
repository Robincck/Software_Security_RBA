package be.ehb.springbootdemo.services.implementations;

import be.ehb.springbootdemo.models.Login;
import be.ehb.springbootdemo.repositories.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Robin on 22-11-2017.
 */
@Component
public class AppUserDetailsService implements UserDetailsService {
    @Autowired
    private LoginRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Login user = userRepository.findByUsername(s);

        if(user == null) {
            throw new UsernameNotFoundException(String.format("De gebruiker %s bestaat niet.", s));
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().getName()));


        UserDetails userDetails = new org.springframework.security.core.userdetails.
                User(user.getUsername(), user.getPassword(), authorities);

        return userDetails;
    }
}
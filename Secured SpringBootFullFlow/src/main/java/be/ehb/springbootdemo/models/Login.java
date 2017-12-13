package be.ehb.springbootdemo.models;

import javax.persistence.*;

/**
 * Created by Robin on 21-11-2017.
 */
@Table(name = "login")
@Entity
public class Login {

    @Id
    @GeneratedValue
    @Column(name="id")
    private long id;

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    @OneToOne(fetch = FetchType.EAGER, cascade =  CascadeType.ALL)
    private Role role;

    public Login()
    {
        super();
    }

    public Login(String username, String password, Role role)
    {
        super();
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public Login(long id, String username, String password, Role role)
    {
        super();
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public long getId()
    {
        return id;
    }
    public void setId(long id)
    {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "Login{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role.getName() + '\'' +
                '}';
    }
}

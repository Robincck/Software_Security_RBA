package be.ehb.springbootdemo.models;

import javax.persistence.*;

/**
 * Created by Robin on 21-11-2017.
 */
@Table(name = "role")
@Entity
public class Role {

    @Id
    @GeneratedValue
    @Column(name="id")
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="enabled")
    private boolean enabled;


    public Role()
    {
        super();
    }

    public Role(long id, String name, boolean enabled)
    {
        super();
        this.id = id;
        this.name=name;
        this.enabled=enabled;
    }

    public Role(String name)
    {
        super();

        this.name=name;
        this.enabled=true;
    }

    public long getId()
    {
        return id;
    }
    public void setId(long id)
    {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
package com.jjw.springbootbackend.model;

import javax.persistence.*;

//mark it's a table(from jpa)
@Entity
//provide table name
@Table(name = "employees")
public class Employee {

    //    primary key of the table in MySQL (or class in this springboot)
    @Id

    //    auto generate ids
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    //column names for the fields
//    @Column(name = "first_name")
    private String firstName;
//    @Column(name = "last_name")
    private String lastName;
//    @Column(name = "email_address")
    private String emailAddress;

    //    empty constructor
    public Employee() {
    }

    //    parameterized constructor
    public Employee(String firstName, String lastName, String emailAddress) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }

    //    getter and setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
}

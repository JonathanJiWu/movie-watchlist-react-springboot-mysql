package com.jjw.springbootbackend.model;

import javax.persistence.*;

//mark it's a table(from jpa)
@Entity
//provide table name
@Table(name = "movies")
public class movie {

    //    primary key of the table in MySQL (or class in this springboot)
    @Id

    //    auto generate ids
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    //column names for the fields
    private String movie_name;
    private int movie_year;
    private String notes;

    //    empty constructor
    public movie() {
    }

    //    parameterized constructor
    public movie(String movie_name, int movie_year, String notes) {
        this.movie_name = movie_name;
        this.movie_year = movie_year;
        this.notes = notes;
    }

    //    getter and setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getmovie_name() {
        return movie_name;
    }

    public void setmovie_name(String movie_name) {
        this.movie_name = movie_name;
    }

    public int getmovie_year() {
        return movie_year;
    }

    public void setmovie_year(int movie_year) {
        this.movie_year = movie_year;
    }



    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}

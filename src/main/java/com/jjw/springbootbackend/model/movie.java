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

    private String movieName;
    private int movieYear;
    private String notes;

    //    empty constructor
    public movie() {
    }

    //    parameterized constructor

    public movie(String movieName, int movieYear, String notes) {
        this.movieName = movieName;
        this.movieYear = movieYear;
        this.notes = notes;
    }

    //    getter and setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public int getMovieYear() {
        return movieYear;
    }

    public void setMovieYear(int movieYear) {
        this.movieYear = movieYear;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}

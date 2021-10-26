package com.jjw.springbootbackend.controller;

import com.jjw.springbootbackend.model.movie;
import com.jjw.springbootbackend.repository.movieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins ="http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class movieController {

    @Autowired
    private movieRepository movieRepository;

//    get all movies
    @GetMapping("/top-5-movies")
    public List<movie> getAllMovies() {
        return movieRepository.findAll();
    }

//    create new movie item/API
    @PostMapping("/add-movie")
    public movie createMovie(@RequestBody movie movie) {
        return movieRepository.save(movie);
    }
//    https://github.com/sonu208012/eclipse_projects/blob/master/src/main/java/com/example/react/controller/StudentController.java

}

package com.jjw.springbootbackend.controller;

import com.jjw.springbootbackend.model.movie;
import com.jjw.springbootbackend.repository.movieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins ="http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class movieController {

    @Autowired
    private movieRepository movieRepository;

//    get all movies
    @GetMapping("/top5Movies")
    public List<movie> getAllmovies() {
        return movieRepository.findAll();
    }

//    create new movie items API
    @PostMapping("/addmovie")
    public movie createMovie(@RequestBody movie movie) {
        return movieRepository.save(movie);
    }

}

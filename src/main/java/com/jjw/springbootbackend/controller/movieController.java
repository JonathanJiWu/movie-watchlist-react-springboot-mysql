package com.jjw.springbootbackend.controller;

import com.jjw.springbootbackend.exception.ResourceNotFoundException;
import com.jjw.springbootbackend.model.movie;
import com.jjw.springbootbackend.repository.movieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

//    search/get movie by id so update can use it
    @GetMapping("/movies/{id}")
    public ResponseEntity<movie> getMovieById(@PathVariable long id){
        movie m = movieRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Movie not found"));
        return ResponseEntity.ok(m);
    }
    //    update exist movie
    @PutMapping("/movies/{id}")
    public ResponseEntity<movie> updateMovie(@PathVariable long id, @RequestBody movie movie){
        movie m = movieRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Movie not found"));
        m.setmovie_name(movie.getmovie_name());
        m.setmovie_year(movie.getmovie_year());
        m.setNotes(movie.getNotes());
        movie updatedMovie = movieRepository.save(m);
        return ResponseEntity.ok(updatedMovie);
    }

//    delete!
    @DeleteMapping("/movies/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMovie(@PathVariable Long id){
        movie m = movieRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Movie not found"));

        movieRepository.delete(m);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }




}

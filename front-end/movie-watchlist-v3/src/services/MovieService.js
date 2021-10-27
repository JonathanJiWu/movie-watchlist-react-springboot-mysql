import axios from "axios";

const MOVIE_API_URL = "http://localhost:8080/api";

class MovieService {
  getMovie() {
    return axios.get(MOVIE_API_URL + "/top-5-movies");
  }
  addMovie(inputPlayload) {
    return axios.post(MOVIE_API_URL + "/add-movie", inputPlayload);
  }
  getMovieById(movieId) {
    return axios.get(MOVIE_API_URL + "/movies/" + movieId);
  }
  updateMovie(movie, movieId){
    return axios.put(MOVIE_API_URL + "/movies/"+ movieId, movie);
  }
  deleteMovie(id){
    return axios.delete(MOVIE_API_URL+"/movies/"+id)
  }
}

export default new MovieService();

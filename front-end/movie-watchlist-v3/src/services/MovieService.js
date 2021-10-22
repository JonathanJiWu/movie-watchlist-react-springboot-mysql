import axios from "axios";

const MOVIE_API_URL = 'http://localhost:8080/api/v1/movies'

class MovieService {

    getMovie(){
        return axios.get(MOVIE_API_URL)

    }
}

export default new MovieService();
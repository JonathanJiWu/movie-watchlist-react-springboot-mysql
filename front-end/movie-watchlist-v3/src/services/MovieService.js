import axios from "axios";

const MOVIE_API_URL = 'http://localhost:8080/api'

class MovieService {

    getMovie(){
        return axios.get(MOVIE_API_URL+'/top-5-movies')
    }
    addMovie(inputPlayload){
        return axios.post(MOVIE_API_URL+'/add-movie', inputPlayload)
    }
    // getStudentById(id){
    //     return axios.get(STUDENT_API_BASE_URL+"/student/"+id);
    // }

    // updateStudent(student,id){
    //     return axios.put(STUDENT_API_BASE_URL+"/student/"+id,student);
    // }

    // deleteStudent(id){
    //     return axios.delete(STUDENT_API_BASE_URL+"/student/"+id);
    // }
}

export default new MovieService();
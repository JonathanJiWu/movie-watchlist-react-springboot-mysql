import React, { useState } from "react";
import MovieService from "../services/MovieService";

function ListMovieComp() {
  const [movieArr, setMovieArr] = useState([]);

  componentDidMount(){
      MovieService.getMovie().then((res) =>{
          this.setState({movieArr: res.data})
      })
  }


  
  return (
    <div>
      <h2 className="text-center">Movie List </h2>
      <div className="row">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">Movie Name</th>
              <th className="text-center">Movie Year</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {movieArr.map((movieArr) => (
              <tr key={movieArr.id}>
                <td>{movieArr.name}</td>
                <td>{movieArr.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListMovieComp;

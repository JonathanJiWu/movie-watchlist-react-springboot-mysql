import React, { useState, useEffect } from "react";
import MovieService from "../services/MovieService";

function ListMovieComp() {
  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    MovieService.getMovie().then((res) => {
      setMovieArr(res.data);
    });
  }, []);
  return (
    <div>
      <h2 className="text-center">Your WatchList </h2>
      <div className="row">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">Movie Name</th>
              <th className="text-center">Movie Year</th>
              <th className="text-center">Note</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {movieArr.map((movieArr) => (
              <tr key={movieArr.id}>
                <td>{movieArr.movieName}</td>
                <td>{movieArr.movieYear}</td>
                <td>{movieArr.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListMovieComp;

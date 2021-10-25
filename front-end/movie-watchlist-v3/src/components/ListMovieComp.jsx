import React, { useState, useEffect } from "react";
import MovieService from "../services/MovieService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

function ListMovieComp() {
  const [movieArr, setMovieArr] = useState([]);

  console.log(movieArr)


  useEffect(() => {
    MovieService.getMovie().then((res) => {
      setMovieArr(res.data);
    });
  }, []);
  return (
    <Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Movie Name</TableCell>
            <TableCell align="right">Movie Year</TableCell>
            <TableCell align="right">Note</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieArr.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.movie_name}
              </TableCell>
              <TableCell align="right">{row.movie_year}</TableCell>
              <TableCell align="right">{row.notes}</TableCell>
              <TableCell align="right">Add/Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}

export default ListMovieComp;

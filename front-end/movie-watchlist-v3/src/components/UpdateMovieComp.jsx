import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import MovieService from "../services/MovieService";

function UpdateMovieComp() {
  const { id } = useParams();
  // this is the movie id=> use this to find title, year and notes
  const [movieTitleToUpdate, setMovieTitleToUpdate] = useState("");
  const [movieYearToUpdate, setMovieYearToUpdate] = useState("");
  const [movieNoteToUpdate, setMovieNoteToUpdate] = useState("");
  const [movie, setMovie] = useState([]);
  let history = useHistory();

  // trace back the title, year and note JSON from DB
  useEffect(() => {
    MovieService.getMovieById(id).then((res) => {
      console.log(res.data);
      setMovie(res.data);
    });
  }, []);

  const handleSubmitEvents = (e) => {
    console.log("submit fired");
    //   stop refresh
    e.preventDefault();
    // TODO: why is this not working? use routelink jump for now
    // history.push("/top5Movies")
    // turn all the inputs into a JSON object
    let movieInputInfoSlice = {
      movie_name: movieTitleToUpdate,
      movie_year: movieYearToUpdate,
      notes: movieNoteToUpdate,
    };
    console.log(movieInputInfoSlice);

    MovieService.updateMovie(movieInputInfoSlice, id)
      .then((res) => {
        history.push("/top5Movies/");
      })
      .catch((err) => {
        alert("SOMETHING WENT WRONG!!!");
      });
  };

  const cancelAction = () => {
    history.push("/top5Movies");
  };

  return (
    <Container container justify="center">
      <Box sx={{ m: 2, bgcolor: "background.paper" }}></Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
        fullwidth="ture"
        onSubmit={handleSubmitEvents}
      >
        <Box sx={{ width: "90%", maxWidth: 1500, m:5}}>
          <Typography variant="h2" gutterBottom component="div">
            {movie.movie_name}
            <Box sx={{ m: 3, bgcolor: "background.paper" }}></Box>
            {movie.movie_year}
            <Box sx={{ m: 3, bgcolor: "background.paper" }}></Box>
            {movie.notes}
          </Typography>
        </Box>
        <TextField
          required
          id="standard-required"
          label="Movie Title Required"
          onChange={(e) => setMovieTitleToUpdate(e.target.value)}
          variant="standard"
        />

        {/* TODO DONE only takes in INT ! DONE*/}
        <TextField
          onChange={(e) => setMovieYearToUpdate(e.target.value)}
          id="standard-number"
          label="Year"
          type="number"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Notes"
          variant="standard"
          onChange={(e) => setMovieNoteToUpdate(e.target.value)}
        />
        <Box sx={{ m: 3, bgcolor: "background.paper" }}></Box>
        <Box sx={{ "& > button": { m: 4 } }}>
          {/* add routing after submit and update */}
          <Button
            endIcon={<SendIcon />}
            loadingPosition="end"
            variant="contained"
            type="submit"
            // component={Link}
            // to={"/top5Movies"}
          >
            UPDATA
          </Button>
          <Box sx={{ m: 3, bgcolor: "background.paper" }}></Box>
          <Button
            color="secondary"
            loadingPosition="start"
            endIcon={<SaveIcon />}
            variant="contained"
            type="submit"
            // component={Link}
            // to={"/top5Movies"}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={() => cancelAction()}
            endIcon={<ClearIcon />}
          >
            CANCEL
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default UpdateMovieComp;

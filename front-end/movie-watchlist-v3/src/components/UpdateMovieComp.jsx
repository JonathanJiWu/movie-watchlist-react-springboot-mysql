import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import MovieService from "../services/MovieService";
import { useHistory } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import { Link, useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

function UpdateMovieComp() {
  const { id } = useParams();
  // this is the movie id=> use this to find title, year and notes

  const { movieTitleToUpdate, setMovieTitleToUpdate } = useState([]);
  const [movieYearToUpdate, setMovieYearToUpdate] = useState("");
  const [movieNoteToUpdate, setMovieNoteToUpdate] = useState("");
  const [movie, setMoive] = useState([]);
  // trace back the title, year and note JSON from DB

  useEffect(() => {
    MovieService.getMovieById(id).then((res) => {
      console.log(res.data);
      setMoive(res.data);
    });
  }, []);

  console.log(movieTitleToUpdate);
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
        // onSubmit={handleSubmitEvents}
      >
        <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h2" gutterBottom component="div">
        {movie.movie_name}
      </Typography>
      </Box>

        {/* TODO DONE only takes in INT ! DONE*/}
        <TextField
          // onChange={(e) => setMovieYearMadeInput(e.target.value)}
          id="standard-number"
          label="Year"
          type="number"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Notes"
          variant="standard"
          // onChange={(e) => setMovieNotesInput(e.target.value)}
        />
        <Box sx={{ m: 3, bgcolor: "background.paper" }}></Box>
        <Box sx={{ "& > button": { m: 3 } }}>
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
          {/* <Box sx={{ m: 3, bgcolor: "background.paper" }}></Box> */}
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
        </Box>
      </Box>
    </Container>
  );
}

export default UpdateMovieComp;

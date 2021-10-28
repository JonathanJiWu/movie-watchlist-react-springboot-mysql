import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import MovieService from "../services/MovieService";
// import DatePicker from "@mui/lab/DatePicker";

// https://github.com/sonu208012/react-frontend/blob/main/src/components/AddStudent.jsx

function AddMovieComp() {
  const [movieTitleInput, setmovieTitleInput] = useState("");
  const [movieYearMadeInput, setMovieYearMadeInput] = useState("");
  const [movieNotesInput, setMovieNotesInput] = useState("");
  const [titleInputError, setTitleInputError] = useState(false);
  let history = useHistory();

  const handleSubmitEvents = (e) => {
    //   stop refresh
    e.preventDefault();
    // reset input error
    setTitleInputError(false);
    // switch error if title is empty
    if (movieTitleInput === "") {
      setTitleInputError(true);
    }
    // title can't be empty, do we have a value of title?
    if (movieTitleInput) {
      // TODO: why is this not working? use routelink jump for now
      // history.push("/top5Movies")
      // turn all the inputs into a JSON object
      let movieInputInfoSlice = {
        movie_name: movieTitleInput,
        movie_year: movieYearMadeInput,
        notes: movieNotesInput,
      };

      MovieService.addMovie(movieInputInfoSlice)
        .then((res) => {
          history.push("/top5Movies");
        })
        .catch((err) => {
          alert("SOMETHING WENT WRONG!!!");
        });
    }
  };

  const cancelAction=()=>{
    history.push("/top5Movies");

  }

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
        <TextField
          required
          id="standard-required"
          label="Movie Title Required"
          onChange={(e) => setmovieTitleInput(e.target.value)}
          variant="standard"
          error={titleInputError}
        />
        {/* TODO DONE only takes in INT ! DONE*/}
        <TextField
          onChange={(e) => setMovieYearMadeInput(e.target.value)}
          id="standard-number"
          label="Year"
          type="number"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Notes"
          variant="standard"
          onChange={(e) => setMovieNotesInput(e.target.value)}
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
          <Button
            onClick={() => cancelAction()}
            variant="outlined"
            endIcon={<ClearIcon />}
          >
            CANCEL
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default AddMovieComp;

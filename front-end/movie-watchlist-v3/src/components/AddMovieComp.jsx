import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import MovieService from "../services/MovieService";
import { useHistory } from "react-router-dom";

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
      // turn all the inputs into a JSON object 
      let movieInputInfoSlice = {
        movie_name: movieTitleInput,
        movie_year: movieYearMadeInput,
        notes: movieNotesInput,
      };
      console.log(movieInputInfoSlice);

      

      MovieService.addMovie(movieInputInfoSlice).then(res =>{
        history.push('/add-movie');  
    }).catch(err=>{
        alert("SOMETHING WENT WRONG!!!");
    });
    }
  };

  return (
    <Container container justify="center">
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
          // className={classes.field}
          //   take the submit
          onChange={(e) => setmovieTitleInput(e.target.value)}
          id="outlined-basic"
          label="Movie"
          placeholder="Arrival"
          variant="outlined"
          fullwidth="ture"
          error={titleInputError}
        />
        {/* TODO: only takes in INT */}
        <TextField
          onChange={(e) => setMovieYearMadeInput(e.target.value)}
          id="outlined-textarea"
          label="Year"
          placeholder="2016"
          // inputProps={{ inputMode: 'numeric', pattern: '[0-9999]*' }}
        />
        <TextField
          onChange={(e) => setMovieNotesInput(e.target.value)}
          id="outlined-textarea"
          label="Notes"
          placeholder="Mind-blowing!!!"
          multiline
          fullwidth="ture"
          rows="2"
        />
        <Button
          // onClick={(e) => setMovie}
          type="submit"
          variant="contained"
          // endIcon={<KeyboardArrowRightIcon/>}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default AddMovieComp;

// import { makeStyles } from "@mui/styles";
// * an attempt to style the text fields
// const useStyles = makeStyles({
//   field: {
//     marginTop: 50,
//     marginBottom: 20,
//     display: "block",
//   },
// });

// function Create(){
//     const classes = useStyles()
// }

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import MovieService from "../services/MovieService";
import { useHistory } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
// https://github.com/sonu208012/react-frontend/blob/main/src/components/UpdateStudent.jsx
function UpdateMovieComp() {
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
  
        MovieService.addMovie(movieInputInfoSlice)
          .then((res) => {
            history.push("/add-movie");
          })
          .catch((err) => {
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
          {/* https://mui.com/components/date-picker/ add localdataprovider to use
          <DatePicker
            views={["year"]}
            label="Year only"
  
            renderInput={(params) => <TextField {...params} helperText={null} />}
          /> */}
  
          <TextField
            onChange={(e) => setMovieNotesInput(e.target.value)}
            id="outlined-textarea"
            label="Notes"
            placeholder="Mind-blowing!!!"
            multiline
            fullwidth="ture"
            rows="2"
          />
          <Box sx={{ "& > button": { m: 1 } }}>
            <Button
              // onClick={handleClick}
              // loading={loading}
              loadingIndicator="Loading..."
              variant="outlined"
            >
              Fetch data
            </Button>
            {/* add routing after submit and update */}
            <Button
              // onClick={handleClick}
              endIcon={<SendIcon />}
              // loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              UPDATA
            </Button>
            <Button
              color="secondary"
              // onClick={handleClick}
              // loading={loading}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
              type="submit"
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }


export default UpdateMovieComp

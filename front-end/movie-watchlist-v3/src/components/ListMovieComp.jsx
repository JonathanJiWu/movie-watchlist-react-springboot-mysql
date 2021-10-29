import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
// holds info of the pervious page
import { useHistory } from "react-router-dom";
import MovieService from "../services/MovieService";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ListMovieComp() {
  const [movieArr, setMovieArr] = useState([]);
  let history = useHistory();

  // jump to update movie router using the id as key and keep that info to fill in the defaults in the new page
  const updateMovieFromList = (id) => {
    history.push(`/updatemovie/${id}`);
  };

  const deleteMovieFromList = (id) => {
    // talk to API to delete the movieinfo slice with this id
    MovieService.deleteMovie(id).then((res) => {
      // after the response, reset the state with the new database
      // filer the deleted movieinfo slice out
      setMovieArr(movieArr.filter((newMovieState) => newMovieState.id !== id));
      // TODO==done why is this not working? two functions triggering by one, only the function in the front will fire
      // it's because that delete needs a argument to be passed
      handleClose();
    });
  };

  useEffect(() => {
    MovieService.getMovie().then((res) => {
      setMovieArr(res.data);
    });
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <Box sx={{ p: 1, bgcolor: 'background.paper' }}>p: 1</Box>

    <Container>
      <Box sx={{ m: 2, bgcolor: "background.paper" }}></Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Movie Name</TableCell>
              <TableCell align="right">Year</TableCell>
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
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => {
                      updateMovieFromList(row.id);
                    }}
                  >
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    // pass through the row.id
                    onClick={() => {
                      handleClickOpen();
                    }}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                  {/* deleteMovieFromList(row.id); */}
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle>
                      {"Are you sure you want to delele selected movie?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description">
                        You won't be able to recover the information.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>No</Button>
                      <Button
                        onClick={() => {
                          deleteMovieFromList(row.id);
                        }}
                      >
                        Yes, delete
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ListMovieComp;

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListMovieComp from "./components/ListMovieComp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import AddMovieComp from "./components/AddMovieComp";
import UpdateMovieComp from "./components/UpdateMovieComp";
import MyWatchList from "./components/MyWatchList";
import About from "./components/About";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <div>
              <Switch>
                <Route path="/" exact component = {ListMovieComp}></Route>
                <Route path="/top5Movies" component = {ListMovieComp}></Route>
                <Route path="/addmovie" component = {AddMovieComp}></Route>
                <Route path="/updatemovie/:id" component = {UpdateMovieComp}></Route>
                <Route path="/mywatchlist" component = {MyWatchList}></Route>
                <Route path="/about" component = {About}></Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;

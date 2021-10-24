import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListMovieComp from "./components/ListMovieComp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

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
                <Route path="/" component = {ListMovieComp}></Route>
                <Route path="/movies" component = {ListMovieComp}></Route>
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

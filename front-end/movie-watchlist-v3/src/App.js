import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListMovieComp from "./components/ListMovieComp";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <div>
          <ListMovieComp />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

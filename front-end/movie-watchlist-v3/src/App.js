import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListMovieComp from "./components/ListMovieComp";

function App() {
  return (
    <div>
      <Header/>
      <div className="">
        <ListMovieComp />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

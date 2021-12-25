import React from "react";
import { Movie } from "./Movies";
import Footer from "./layout/Footer/Footer";
import Navigation from "./layout/Navigation/Navigation";
import imdbDatas from "../ibdm-movies.json";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div id="App" className="container">
        <Navigation />
        <h2>Movies API</h2>
        <Movie data={imdbDatas} />
        <Footer />
      </div>
    );
  }
}

export default App;

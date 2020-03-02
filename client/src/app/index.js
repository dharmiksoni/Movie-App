import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "../components";
import {MoviesList, MoviesInsert, MoviesUpdate, MoviesHome} from '../pages';
import MoviesDetail from '../containers/movieDetail';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={MoviesHome} />
        <Route path="/movies/list" component={MoviesList}/>
        <Route path="/movies/create" component={MoviesInsert}/>
        <Route path="/movies/update/:id" component={MoviesUpdate} />
        <Route path="/movies/details" component={MoviesDetail} /> 
      </Switch>
    </Router>
  );
}

export default App;

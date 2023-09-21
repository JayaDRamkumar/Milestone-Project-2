
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppNavbar from './components/Navbar'
import Home from "./components/Home"
import NewMovieForm from "./components/newMovie"
import MovieDetails from "./components/MoviesDetails"



function App() {
  return (
    <BrowserRouter>

     
        <AppNavbar />
       
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Home} />
            <Route exact path="/movies/new" component={NewMovieForm} />
            <Route exact path="/movies/:id" component={MovieDetails} />
          </Switch>
       
    </BrowserRouter>

  );
}

export default App;

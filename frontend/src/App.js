
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppNavbar from './components/Navbar'
import Home from "./components/Home"
import NewMovieForm from "./components/newMovie"
import MovieDetails from "./components/MoviesDetails"
import EditMovie from './components/edit';



function App() {
  return (
    <BrowserRouter>

     
        <AppNavbar />
       
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Home} />
            <Route exact path="/addmovie" component={NewMovieForm} />
            <Route exact path="/movies/:id" component={MovieDetails} />
            <Route exact path="/movies/:id/edit" component={EditMovie}/>
          </Switch>
       
    </BrowserRouter>

  );
}

export default App;

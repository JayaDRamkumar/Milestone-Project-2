import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppNavbar from './components/Navbar'
import Home from "./components/Home"
import MovieDetails from "./components/movie"
import NewMovieForm from "./components/newMovie"



function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
        <Switch>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/:_id" component={MovieDetails} />
          <Route exact path="/movies/new" component={NewMovieForm} />
          
          
        </Switch>
  </BrowserRouter>
   
   
    // <div className="App">
    //   <AppNavbar />
    //   <div className="container">
    //     <Home/>
    //   </div>
    // </div>
  );
}

export default App;

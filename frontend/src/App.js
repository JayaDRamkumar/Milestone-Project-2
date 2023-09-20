

import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './components/Home';
import MovieDetails from './components/MoviesDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppNavbar />
        <div className="container">
          <Switch>
          
            <Route exact path="" component={Home} />
            <Route path="/movies/:id" component={MovieDetails} />
            
            
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

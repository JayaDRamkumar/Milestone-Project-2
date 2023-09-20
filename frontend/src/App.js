import React from 'react'
import {Route, BrowserRouter, Switch} from "react-router-dom";
import AppNavbar from './components/Navbar'
import Home from "./components/Home"
// import movie from "./components/movie"
// import AddReview from "./components/addReview"

function App() {
  return (
    <BrowserRouter>
   <Switch>
     <AppNavbar/>
//           
            <Route exact path="/" component={Home} />
//         
//        </Switch>
    
      <div className="container">
        <Home/>
      </div>
   
  
    </BrowserRouter>
   
  
  );
}

export default App;

// function App() {
//   return (
   
//       <BrowserRouter>
//         <Navigation />
//         <Switch>
//           <Route exact path="/movies" component={Home} />
//           {/* <Route exact path="/sign-up" component={SignUpForm} />
//           <Route exact path="/login" component={LoginForm} />
//           <Route exact path="/places" component={PlaceIndex} />
//           <Route exact path="/places/new" component={NewPlaceForm} />
//           <Route exact path="/places/:placeId" component={PlaceDetails} />
//           <Route exact path="/places/:placeId/edit" component={EditPlaceForm} />
//           <Route path="/" component={Error404} /> */}
//         </Switch>
//       </BrowserRouter>
   
//   );
// }
// export default App;
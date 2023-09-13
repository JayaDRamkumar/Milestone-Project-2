import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;

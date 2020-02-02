import React from 'react';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = props => {
  return (
    <Router>
      <div>
        <Link to="/">Home |</Link>
        <Link to="/about">About |</Link>
        <Link to="/contact">Contact |</Link>
        <Link to="/profile/taitai">Tai Tai |</Link>
        <Link to="/profile/nang">Nang</Link>
      </div>
      <Route exact path="/">
        <h1>Home Page</h1>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/profile/:name">
        <Profile />
      </Route>
    </Router>
  );
}

export default App;
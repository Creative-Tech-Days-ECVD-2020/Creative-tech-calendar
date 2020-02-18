import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '../components/Navbar';
import Events from './Events';
import Calendar from './Calendar';
import Login from './Login';

const App = () => (
  <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/events" component={Events} />
        <Route path="/calendar" component={Calendar} />
      </Switch>
    </Router>
  </div>
);

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Navbar from '../components/navbar';
import Header from '../components/header';
import Home from './home';
import AuthenticationVerification from './authentication-verification';
import Authentication from './authentication';
import SignRecord from './sign-record';
import CreativeTechWeek from './creative-tech-week';
import AnswerQuestion from './answer-question';

const App = () => (
  <div className="App">
    <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/authentication-verification" component={AuthenticationVerification} />
          <Route path="/authentication" component={Authentication} />
          <Route path="/creative-tech-week" component={CreativeTechWeek} />
          <Route path="/sign-record" component={SignRecord} />
          <Route path="/answer-question" component={AnswerQuestion} />
        </Switch>
    </Router>
  </div>
);

export default App;

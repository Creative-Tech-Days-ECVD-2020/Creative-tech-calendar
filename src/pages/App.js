import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './home';
import HomeConnect from './homeConnect';  
import AuthenticationVerification from './authentication-verification';
import Authentication from './authentication';
import SignRecord from './sign-record';
import CreativeTechWeek from './creative-tech-week';
import AnswerQuestion from './answer-question';
import Question from './question';
import Welcome from './welcome';


const App = () => (
  <div className="App">
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home-connect" exact component={HomeConnect} />
          <Route path="/authentication-verification" component={AuthenticationVerification} />
          <Route path="/authentication" component={Authentication} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/creative-tech-week" component={CreativeTechWeek} />
          <Route path="/sign-record" component={SignRecord} />
          <Route path="/answer-question" component={AnswerQuestion} />
          <Route path="/question" component={Question} />
        </Switch>
    </Router>
  </div>
);

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Services from './pages/Services'
import Account from './pages/Account';
import SignUp from './pages/SignUp';
import LongIn from './pages/LogIn';
import FormService from './pages/FormService';
import { ACCOUNT_URL, EVENT_URL, FORM_SERVICE_URL, HOME_URL, LOG_IN_URL, SERVICES_URL, SIGN_UP_URL } from "./utils/urls";
import './styles/index.css';
import Event from "./pages/Event";

function App() {
  return (
    <div>
      <Router>
          <Navbar/>
          <Switch>
            <Route path={HOME_URL} exact component={Home}/>
            <Route path={SERVICES_URL} exact component={Services}/>
            <Route path={ACCOUNT_URL} exact component={Account}/>
            <Route path={SIGN_UP_URL} exact component={SignUp}/>
            <Route path={LOG_IN_URL} exact component={LongIn}/>
            <Route path={`${EVENT_URL}/:name`} exact component={Event}/>
            <Route path={FORM_SERVICE_URL} exact component={FormService}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

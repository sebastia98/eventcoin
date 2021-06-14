import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home'
import {Services} from './pages/Services'
import {Footer} from './components/footer'
import Account from './pages/Account';
import SignUp from './pages/SignUp';
import LongIn from './pages/LogIn';
import FormService from './pages/FormService';
import { ACCOUNT_URL, SERVICE_URL, FORM_SERVICE_URL, HOME_URL, LOG_IN_URL, SERVICES_URL, SIGN_UP_URL } from "./utils/urls";
import './styles/index.css';
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <div className="page">
      <Router>
          <Navbar/>
          <Switch>
            <Route path={HOME_URL} exact component={Home}/>
            <Route path={SERVICES_URL} exact component={Services}/>
            <Route path={ACCOUNT_URL} exact component={Account}/>
            <Route path={SIGN_UP_URL} exact component={SignUp}/>
            <Route path={LOG_IN_URL} exact component={LongIn}/>
            <Route path={`${SERVICE_URL}/:name`} exact component={ServicePage}/>
            <Route path={FORM_SERVICE_URL} exact component={FormService}/>
          </Switch>
      </Router>
      <div className = "footer">
        <Footer/>
      </div>

    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Navbar} from './components/Navbar';
import {Home} from './pages/Home'
import {Footer} from './components/Footer'
import Account from './pages/Account';
import {SignUp} from './pages/SignUp';
import LongIn from './pages/LogIn';
import {ServiceForm} from './pages/ServiceForm';
import { ACCOUNT_URL, SERVICE_URL, FORM_SERVICE_URL, HOME_URL, LOG_IN_URL, SERVICES_URL, SIGN_UP_URL } from "./utils/urls";
import './styles/index.css';
import {ServicePage} from "./pages/ServicePage";

function App() {
  return (
    <div className="page">
      <Router>
          <Navbar/>
          <Switch>
            <Route path={HOME_URL} exact component={Home}/>
            <Route path={ACCOUNT_URL} exact component={Account}/>
            <Route path={SIGN_UP_URL} exact component={SignUp}/>
            <Route path={LOG_IN_URL} exact component={LongIn}/>
            <Route path={`${SERVICE_URL}/:serviceId`} exact component={ServicePage}/>
            <Route path={FORM_SERVICE_URL} exact component={ServiceForm}/>
          </Switch>
      </Router>
      <div className = "footer">
        <Footer/>
      </div>

    </div>
  );
}

export default App;

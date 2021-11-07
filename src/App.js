import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Navbar} from './components/Navbar';
import {Home} from './pages/Home'
import {Footer} from './components/Footer'
import {Account} from './pages/Account';
import {SignUp} from './pages/SignUp';
import LongIn from './pages/LogIn';
import {ServiceForm} from './pages/ServiceForm';
import {EventPage} from './pages/EventPage';
import { ACCOUNT_URL, SERVICE_URL, FORM_SERVICE_URL, HOME_URL, LOG_IN_URL, SIGN_UP_URL, EVENT_URL } from "./utils/urls";
import './styles/index.css';
import {ServicePage} from "./pages/ServicePage";
import { AuthContextProvider } from "./contexts/authContext";

function App() {

  return (
      <AuthContextProvider>
      <Router>
          <Navbar/>
          <Switch>
            <Route path={HOME_URL} exact component={Home}/>
            <Route path={ACCOUNT_URL} exact component={Account}/>
            <Route path={SIGN_UP_URL} exact component={SignUp}/>
            <Route path={LOG_IN_URL} exact component={LongIn}/>
            <Route path={`${SERVICE_URL}/:serviceId`} exact component={ServicePage}/>
            <Route path={FORM_SERVICE_URL} exact component={ServiceForm}/>
            <Route path={EVENT_URL} exact component={EventPage}/>
          </Switch>
      </Router>
      <div className = "footer">
        <Footer/>
      </div>
      </AuthContextProvider>
  );
}

export default App;

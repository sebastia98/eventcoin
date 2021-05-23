import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Services from './pages/Services'
import Account from './pages/Account';
import { HOME_URL } from "./utils/urls";
import './styles/index.css';

function App() {
  return (
    <div>
      <Router>
          <Navbar/>
          <Switch>
            <Route path={HOME_URL} exact component={Home}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/account" exact component={Account}/>
          </Switch>
      </Router>
    
    </div>
  );
}

export default App;

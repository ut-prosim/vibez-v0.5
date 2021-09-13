//  SERVER/CLIENT/SRC/App.js  //

import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

// import SomePage from '../src/pages/SomePage'
import HomePage from '../src/pages/HomePage'


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/auth/register' component={SignupPage} />
          <Route exact path='/auth/login' component={LoginPage} />
          <Route exact path='/auth' component={HomePage} />
          {/* <Route exact path='/auth/test' component={SomePage} /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;

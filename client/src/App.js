import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';




function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/signup' component={SignupPage} />
          <Route exact path='/' component={LoginPage} />
        {/* <Route exact path='/home' component={Home} /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;

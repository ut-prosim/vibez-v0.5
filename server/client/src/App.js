import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import SpotifyLoginPage from './pages/SpotifyLoginPage'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/auth/register' component={SignupPage} />
          <Route exact path='/auth/login' component={LoginPage} />
          <Route exact path='/auth/spotify' component={SpotifyLoginPage} />
        {/* <Route exact path='/home' component={Home} /> */}
        </Switch>
    </BrowserRouter>
  );
}

export default App;

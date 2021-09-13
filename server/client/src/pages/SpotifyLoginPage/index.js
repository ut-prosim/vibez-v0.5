//  SERVER/CLIENT/SRC/PAGES/SPOTIFYLOGINPAGE/index.js  //

import React from "react";
import SpotifyLoginForm from "./SpotifyLoginForm";
import logo from '../../images/logo.png'

const SpotifyLoginPage = () => {
return (
    <div className="login-ctr"> 
        <img className="logo" src={logo} alt="website logo"/>
        <SpotifyLoginForm />
    </div>
    )
}

export default SpotifyLoginPage;
//  SERVER/CLIENT/SRC/PAGES/LOGINPAGE/index.js  //

import React from "react";
import LoginForm from "./LoginForm";
import logo from '../../images/logo.png'

const LoginPage = () => {
return (
    <div className="login-ctr"> 
        <img className="logo" src={logo} alt="website logo"/>
        <LoginForm />
    </div>
    )
}

export default LoginPage;
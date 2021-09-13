//  SERVER/CLIENT/SRC/PAGES/SIGNUPPAGE/index.js  //

import React from "react";
import SignupForm from "./SignupForm";
import logo from '../../images/logo.png'

const SignupPage = () => {
return (
    <div className="signup-ctr"> 
        <img className="logo" src={logo} alt="website logo"/>

        <SignupForm />
        </div>
    )
}

export default SignupPage;
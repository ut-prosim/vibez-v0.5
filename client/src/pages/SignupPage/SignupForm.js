import React from "react";
import "./styles.css";



const SignupForm = () => {
    return (
        <div className="signup-form-ctr">
             <input 
                className="input-fields"
                type="name"
                value="NAME"
                />
            <input 
                className="input-fields"
                type="email"
                value="EMAIL"
                />
            <input 
                className="input-fields"
                type="password"
                value="PASSWORD"
                />
            <button className="signup-button">SIGN IN</button>
            <p>Already have an account? Sign in</p>
        </div>
    )
}

export default SignupForm
